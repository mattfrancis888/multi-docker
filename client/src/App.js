import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

// const axiosConfig = axios.create({
//     baseURL: "http://localhost:5000/",
// });

const App = () => {
    const [categories, setCategories] = useState(null);
    useEffect(async () => {
        const values = await axios.get("/api/category");
        setCategories(values.data);
    }, []);

    console.log(categories);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React!
                </a>
                <a>{categories}</a>
            </header>
        </div>
    );
};

export default App;
