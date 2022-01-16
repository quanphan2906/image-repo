import { storage, database } from "./setup";
import { collection, onSnapshot, orderBy, query, 
        where, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const getImages = (owner, handleResponse) => {

    const q = query(collection(database, "/images"), 
                    orderBy("created", "desc"), 
                    where("owner", "==", owner));
                    
    const unsubscribe = onSnapshot( q, snapshot =>  {

        const _imagesUrl = [];
        snapshot.forEach((doc) => {

            const data = doc.data();
            _imagesUrl.push(data.imageURL);
        });

        handleResponse(_imagesUrl);
    } )

    return unsubscribe;
}


const uploadImage = async (e, owner) => {
    e.preventDefault();

    const images = e.target.files;

    if (images == null) return;

    for (const image of images) {

        try {

            const imageRef = ref(storage, `/images/${image.name}`);
            await uploadBytes(imageRef, image);
    
            const imageURL = await getDownloadURL(imageRef);

            await addDoc( collection(database, "/images") , {
                created: serverTimestamp(),
                imageURL,
                owner
            });

        } catch (e) {

            console.error("Error adding document: ", e);
        }
    }
}

export { getImages, uploadImage };