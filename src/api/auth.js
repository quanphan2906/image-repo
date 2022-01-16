import { signInWithPopup, GoogleAuthProvider, 
		onAuthStateChanged, signOut as signOutFromFirebase } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { database, auth } from "./setup";

const provider =  new GoogleAuthProvider();

const subscribeAuth = (handleUserInfo) => {

	try {

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			handleUserInfo(user);
		})

		return unsubscribe;
		
	} catch(error) {

		console.error(error);
	}
}

const signInWithGoogle = async () => {

	try {

		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		const { uid, displayName, email, photoURL } = result.user;
		const userDetails = { uid, displayName, email, photoURL };

		_addUserInfo(userDetails);

	} catch(error) {

		console.error(error);
	}
}

const _addUserInfo = async ({ uid, displayName, email, photoURL }) => {

	await setDoc( doc(database, "/users", uid) , {
		userName: displayName,
		email,
		photoURL
	});
}

const signOut = async () => {
	await signOutFromFirebase(auth);
}

export { signInWithGoogle, subscribeAuth, signOut };