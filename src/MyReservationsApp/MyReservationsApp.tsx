import { Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import { LoginScreen } from "./components/LoginScreen";

export const MyReservationsApp = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginScreen />} />
			<Route path="/create-account" element={<CreateAccount />} />
		</Routes>
	);
};

export default MyReservationsApp;
