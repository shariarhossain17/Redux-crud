import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './Features/AddBook';
import EditBook from './Features/EditBook';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-book' element={<AddBook/>}></Route>
        <Route path='/edit-book' element={<EditBook/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
