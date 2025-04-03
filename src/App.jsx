import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from '../contador' 
import * as React from 'react';

// Componentes de MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function App() {

  // Función por parte de MUI para agregar los datos a la tabla
  function createData(nombre, apellido, edad) {
    return { nombre, apellido, edad};
  }

  // Arreglo con los datos de las personas
  const personas = [
    { nombre: "Angel", apellido: "Ruiz", edad: 22 },
    { nombre: "Ariel", apellido: "Sotomayor", edad: 21 },
    { nombre: "David", apellido: "Santana", edad: 21 },
    { nombre: "Antonio", apellido: "Medina", edad: 21 },
    { nombre: "Javier", apellido: "Granados", edad: 21 },
    { nombre: "Danna", apellido: "Butchart", edad: 22 }
  ];

  // Transformar los datos en un formato para la tabla
  const rows = personas.map(persona => createData(persona.nombre, persona.apellido, persona.edad));

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Contador/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* Tabla generada a partir de MUI */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Edad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.apellido}</TableCell>
                  <TableCell>{row.edad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
