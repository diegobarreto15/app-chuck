import React from 'react';
import './App.css';




import Card from './components/Card'

function App() {
  return (
    <div className="app">
      <div className='container'>
        <div className='row'>
          <Card nombre='Mauricio Varela'  rol="Alumno de ÁNIMA" fotoURL='https://i.imgur.com/uLnDawB.png'></Card>
          <Card nombre='Diegardo Barreto' rol="Alumno de ÁNIMA" fotoURL='https://i.imgur.com/WfRb7Ts.png'></Card>
          <Card nombre='Emmanuel Alvarez' rol="Alumno de ÁNIMA" fotoURL='https://i.imgur.com/ya4qqz4.png'></Card>
  
        </div>
      </div>
    </div>
  );
}

export default App;
