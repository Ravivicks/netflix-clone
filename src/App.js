
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';



function App() {
  return (
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />}/>
      </Routes>
  );
}

export default App;
