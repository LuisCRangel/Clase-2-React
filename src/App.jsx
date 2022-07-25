import './App.css'
import Card from './components/Card'


function App() {

  const person = {
    name: 'Luis Rangel',
    age: 30,
    favoriteMovie: 'Spiderman',
    FavoriteMusic: 'Variada'
  }
  const hobbies ={
    title: 'Hobbies',
    list:['Videojuegos', 'Programar', 'Viajar', 'Jugar Futbol']
  }
  const myFood = {
    title: 'Mi Comida Favorita',
    list:['Carne Asada', 'Pizza', 'Sopas', 'Pastas']
  }
  const stack = {
    title: 'My Stack Tech',
    list:['HTML', 'CSS', 'Javascript', 'React']
  }

  return (

    <div className="App">
      <ul className='list list1'>
        <h2>Datos</h2>
        <li className='list__item'><b>Nombre: </b> {person.name} </li>
        <li className='list__item'><b>Edad: </b> {person.age} </li>
        <li className='list__item'><b>Pelicula Favorita: </b> {person.favoriteMovie} </li>
        <li className='list__item'><b>Musica favorita: </b> {person.FavoriteMusic}</li>
      </ul>
      <Card objInfo= {hobbies}/>
      <Card objInfo= {myFood}/>
      <Card objInfo= {stack}/>

      </div>

      )
}

export default App