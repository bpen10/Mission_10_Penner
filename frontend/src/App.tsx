// src/App.tsx
import React from 'react';
import Header from './components/Header';
import BowlersList from './components/BowlersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlersList />
    </div>
  );
}

export default App;
