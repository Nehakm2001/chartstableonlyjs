import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Charts from './charts/Charts';
import './App.css';
import SimpleDataGrid from './tables/DataGrid';
import Navbar from './Navbar';
import { Home } from './Home';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/datagrid" element={<SimpleDataGrid />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
