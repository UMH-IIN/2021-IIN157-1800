import logo from './logo.svg';
import './App.css';
import Alumno from './Componentes/Alumno';

function App() { 
 
  const alumnos = [
    {
      nombre:"Oscar Antonio Perez Lopez",
      identidad:"0908200012345",
      nacimiento:"25-may-2000",
      notas : [90,85,73]
    },
    {
      nombre:"Maria Fernanda Juarez",
      identidad:"0801200112345",
      nacimiento:"12-feb-2001",
      notas : [100,76,93]
    },
    {
      nombre:"Carlos Herminio Aguirre",
      identidad:"0908200012345",
      nacimiento:"25-may-200",
      notas : [81,82,93]
    }
  ]

  return (
    <div className="App">
       <h2>Fichas de alumnos:</h2>
       <Alumno personalInfo={alumnos[0]} /> 
       <Alumno personalInfo={alumnos[1]} /> 
       <Alumno personalInfo={alumnos[2]} /> 
    </div>
  );
}

export default App;
