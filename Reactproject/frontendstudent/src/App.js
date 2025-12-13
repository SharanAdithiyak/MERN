import './App.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentList/>} />
      <Route path="/add" element={<AddStudent/>} />
      <Route path="/edit/:id" element={<EditStudent />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
