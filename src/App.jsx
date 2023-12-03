import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './components/DetailPage';

const App = () => {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='detailPage' element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
