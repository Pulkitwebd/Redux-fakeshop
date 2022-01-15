import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import ProductDetails from "./component/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />}></Route>
          <Route exact path="/product/:productId" element={<ProductDetails />}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
