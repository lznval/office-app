import './styles/index.scss';

import {Link, Route, Routes} from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/home";

function App() {
    return (
        // <>
        //     <h1>Office plan</h1>
        //     <Plan />
        // </>
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/auth">Auth</Link>
                    </li>

                </ul>
            </nav>
            <Routes>
                <Route path="Auth" element={<Auth />}/>
                <Route index element={<Home />}/>

            </Routes>

        </>
    )
}

export default App;
