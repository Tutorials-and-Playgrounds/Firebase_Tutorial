import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MessageSection from "./MessageSection/MessageSection";
import MyReservationsApp from "./MyReservationsApp/MyReservationsApp";

function App() {
	return (
		<BrowserRouter>
			{/* <MessageSection /> */}
			<MyReservationsApp />
		</BrowserRouter>
	);
}

export default App;
