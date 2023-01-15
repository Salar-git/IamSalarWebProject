import Home from "./pages/home";
import NotFound from "./pages/404";
import {BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom';
function App() {
    return (<>
        <div className='container mt-3'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    </>)
}

export default App
