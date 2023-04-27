import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Table from './components/Table'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cards } from './components/Cards'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/Table" element={<Table />} />
            <Route path="/Cards" element={<Cards />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
