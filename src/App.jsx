
import './App.css'
import { ListaAnimales } from './Componentes/ListaAnimales'
import {Frutas} from './Componentes/Frutas'
import {Dias} from './Componentes/DiasDeLaSemana'

function App() {
  const animales = [ {nombre:"gato", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg"},
  {nombre:"perro", imagen:"https://www.bellfor.info/image/catalog/Blog/Blog-Pictures/Zungenhund.jpg"},
  {nombre:"hamster", imagen:"https://misanimales.com/wp-content/uploads/2021/01/acaros-hamster-768x657.jpg"}
  ]

  const frutas = ["manzana", "pera", "fresa"]

  const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  return (
   <>
    <h1>Lista de Animales</h1>
    {animales.map(function(animal){
      return (
        <ListaAnimales nombre={animal.nombre} imagen={animal.imagen} />
      )
    })}

    <h2>Lista de Frutas</h2>
    <ul>
      {
        frutas.map(function(fruta){
          return <Frutas nombre = {fruta} />
        })
      }
    </ul>

    <h2>Lista de Dias de la Semana</h2>
    <ul>
      {
        dias.map(function(dia){
          return <Dias nombre = {dia} />
        })
      }
    </ul>
   </>
  )
}

export default App
