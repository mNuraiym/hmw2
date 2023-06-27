import './App.css';
import {Route, Routes} from "react-router-dom";
import Post from "./pages/post/Post";
import Delete from "./pages/delete/Delete";
import Edit from "./pages/edit/Edit";
import Get from "./pages/get/Get";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Post/>}/>
                <Route path='delete' element={<Delete/>}/>
                <Route path='edit' element={<Edit/>}/>
                <Route path='get' element={<Get/>}/>
            </Routes>
        </div>
    );
}

export default App;

