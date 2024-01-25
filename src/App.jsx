import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import BrowsePage from './Pages/BrowsePage';
import LoginPage from './Pages/LoginPage';
import MeetTheDevPage from './Pages/MeetTheDevPage';
import UserPage from './Pages/UserPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detailPage' element={<DetailPage />} />
        <Route path='/browse' element={<BrowsePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/meetthedevelopers' element={<MeetTheDevPage />} />
        <Route path='/userPage' element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
