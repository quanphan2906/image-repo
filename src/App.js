import { useState } from "react";

import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";

import { ThemeProvider, createTheme } from "@material-ui/core";

import { storage, database } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, query, orderBy, limit } from "firebase/firestore";

const theme = createTheme({
	typography: {
		fontFamily:
			"'Courier New', Courier, monospace",
	}
})


function App() {

	const uploadImageToFirebase = async (e) => {
		e.preventDefault();

		const images = e.target.files;

		if (images == null) return;

		for (const image of images) {

			try {

				const imageRef = ref(storage, `/images/${image.name}`);
				await uploadBytes(imageRef, image);
		
				const imageUrl = await getDownloadURL(imageRef);

				addDoc( collection(database, "/images") , {
					imageUrl,
				  	created: Date.now(),
			  	});

			} catch (e) {

				console.error("Error adding document: ", e);
			}
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<NavBar
				uploadImageToFirebase={uploadImageToFirebase}
			/>
			<main>
				<ImageList />
			</main>
		</ThemeProvider>
	);
}

export default App;
