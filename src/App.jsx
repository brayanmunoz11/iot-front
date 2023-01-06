import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from 'react-bootstrap/Card';
import { useFetchData } from './components/fetch';

function App() {

  const BASE_URL = 'https://iot-nyfu.onrender.com/publicar';
  const { data, loading, error } = useFetchData(BASE_URL);
  if (loading) return "Loading ...";
	if (error) return `Error ${error}`;
  
  return (
    <div className="App">
      <h3>Monitoreo</h3>
      <Card style={{ width: '18rem' }}>
        <center>
          <Card.Img style={{ width: '4rem' }} variant="top" src="src/assets/temperatura-logo.png" />
        </center>
        <Card.Body>
          <Card.Title>Temperatura</Card.Title>
          <Card.Text>
            La temperarura actual es: 
            <h3>{data? data.temperatura : "loading ......"}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <center>
          <Card.Img style={{ width: '4rem' }} variant="top" src="src/assets/humedad-logo.png" />
        </center>
        <Card.Body>
          <Card.Title>Humedad</Card.Title>
          <Card.Text>
            La humedad actual es:
            <h3>{data? data.humedad : "loading ......"}</h3> 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
