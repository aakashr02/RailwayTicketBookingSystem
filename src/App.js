import './App.css';
import './styles.css'
import Navbar from './components/Navbar-Footer/Navbar';
import Booking from './components/Home';
import Services from './components/Services';
import Footer from './components/Navbar-Footer/Footer';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchTrains from './components/SearchTrains';
import BookTickets from './components/BookTicket';
import Login from './components/Login';
import Register from './components/LoginRegister/Register';
import TrainSearch from './components/TrainSearch/TrainSearch';
import TrainRouteDetails from './components/TrainRouteDetails/TrainRouteDetails';
import Welcome from './components/Welcome';
import BookingHistory from './components/BookingHistory';
import PassengerDetails from './components/PassengerDetails';
import ViewTicket from './components/ViewTicket';
import NavbarUser from './components/Navbar-Footer/NavbarUser';
import NavbarAdmin from './components/Navbar-Footer/NavbarAdmin';
import { useEffect, useState } from 'react';
import AdminLogin from './components/AdminLogin/AdminLogin';
import StationManagement from './components/AdminLogin/StationManagement';
import TrainManagement from './components/AdminLogin/TrainManagement';
import ScheduleTrain from './components/AdminLogin/ScheduleTrain';
// (<div class="Navbar"><Navbar /></div>)
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('guest');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('role') || 'guest';
    setIsLoggedIn(loggedIn);
    setRole(userRole);
    displayNav();
  }, []);
  
  function displayNav() {
    if (isLoggedIn) {
      if (role === 'user') {
        return (<div className="Navbar"><NavbarUser /></div>);
      } else if (role === 'admin') {
        return (<div className="Navbar"><NavbarAdmin /></div>);
      }
    }
    else{
        return (<div className="Navbar"><Navbar /></div>);
    }
  }
  return (
    <Router>
      <div class="App">
        {displayNav()}
        <Routes>
          <Route path='/' element={(
            <>
              <Booking />
              <hr />
              <Services />
            </>
          )} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/search' element={<SearchTrains />} />
          <Route path='/book-ticket' element={<BookTickets />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/train-search' element={<TrainSearch />} />
          <Route path='/train-route-details' element={<TrainRouteDetails />} />
          <Route path="/bookingHistory" element={<BookingHistory />} />
          <Route path="/passengerDetails" element={<PassengerDetails />} />
          <Route path="/viewTicket" element={<ViewTicket />} />
          {/* <Route path='/user-home' element={<UserHome />} /> */}
          <Route path='/welcome-user' element={<Welcome />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/add-station' element={<StationManagement />} />
          <Route path='/train-management' element={<TrainManagement />} />
          <Route path='/schedule' element={<ScheduleTrain />} />
        </Routes>
        <hr />
        <div class="Footer"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
