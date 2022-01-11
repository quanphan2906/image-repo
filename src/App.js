import { useState } from "react";

import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";
import UploadModal from "./components/UploadModal";

import { ThemeProvider, createTheme } from "@material-ui/core";

import { storage, database } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 

const theme = createTheme({
	typography: {
		fontFamily:
			"'Courier New', Courier, monospace",
	}
})


function App() {

	const [isModalDisplay, setModalDisplay] = useState(false);
	const toggleModalDisplay = (bool) => {
		setModalDisplay(bool);
	}

	const [image, setImage] = useState('');
	const handleImageUpload = (e) => {
		let _image = e.target.files[0];
		setImage(_image);
	}

	const uploadImageToFirebase = async (e) => {
		e.preventDefault();
		if (image == null) return;
		
		const imageRef = ref(storage, `/images/${image.name}`);
		await uploadBytes(imageRef, image);
		alert("Upload success");
		const imageUrl = await getDownloadURL(imageRef);

		try {
			const docRef = await addDoc(collection(database, "/images"), {
			  	imageUrl
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<NavBar toggleModalDisplay = {toggleModalDisplay} />
			<main>
				<ImageList />
				<UploadModal isModalDisplay={isModalDisplay} 
							 toggleModalDisplay={toggleModalDisplay}
							 handleImageUpload={handleImageUpload}
							 uploadImageToFirebase={uploadImageToFirebase}/>
			</main>
		</ThemeProvider>
	);
}

export default App;
