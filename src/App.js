import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Template from "./components/template";
import { request } from "./services/requester";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const currentData = await request();

            setData(currentData);
        }

        try {
            getData();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Template data={data} path={'/'} />} />
                <Route path="/t-shirts" element={<Template data={data} path={'/t-shirts'} />} />
                <Route path="/hoodies" element={<Template data={data} path={'/hoodies'} />} />
            </Routes>
        </>
    );
}

export default App;