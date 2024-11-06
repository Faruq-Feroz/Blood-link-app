import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

import Header from './Components/Header';
import AppointmentForm from './Components/AppointmentForm';
import BloodSearch from "./Components/BloodSearch";
import UrgentBloodNeeded from './Components/UrgentBloodNeeds';

import Footer from './Components/Footer';

// Main App Component
function App() {
  return (
    <>
    <Header/>
      <AppointmentForm />
      <BloodSearch />
      <UrgentBloodNeeded />
      <Footer />
    </>
  );
}

export default App;
