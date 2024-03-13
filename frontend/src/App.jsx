import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PaymentSucess from './PaymentSucess';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/paymentsucess" element={<PaymentSucess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
