import { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";



            //<Footer />
function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div className="max-w-5xl mx-auto p-6">
            <Header />
            { !isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}

            <Footer />

        </div>

    );

}

export default App;