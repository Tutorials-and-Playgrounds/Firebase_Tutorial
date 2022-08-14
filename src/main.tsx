import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBPkFSNhRESZGqiIxMGM_oXkyxijkwenLE",
	authDomain: "fir-tutorial01-f01db.firebaseapp.com",
	projectId: "fir-tutorial01-f01db",
	storageBucket: "fir-tutorial01-f01db.appspot.com",
	messagingSenderId: "151513738866",
	appId: "1:151513738866:web:e4173dede3fecf69509ceb",
	measurementId: "G-NLQ1L784VY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
