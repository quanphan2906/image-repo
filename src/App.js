import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import AuthProvider from "./context/AuthProvider";

function App() {

	return (
		<div>
			<AuthProvider>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={ <ImageList /> } />
						<Route path="/login" element={ <Auth /> } />
					</Routes>
				</main>
			</AuthProvider>
		</div>
	);
}

export default App;
