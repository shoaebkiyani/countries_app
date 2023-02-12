import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import CountriesList from "./components/pages/CountriesList";
import CountryDetails from "./components/pages/CountryDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<CountriesList />}></Route>
          <Route path="/name/:name" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
