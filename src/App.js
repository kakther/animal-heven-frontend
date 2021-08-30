import React, {Component} from 'react'
import axios from 'axios'

//Component
import AddForm from './components/AddForm.js'
class App extends Component {
  state = {
    name: "",
    description: "",
    img: "",
    gender: "",
    age: "",
    animals: []
  }


  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  addAnimal = (animal) => {
    axios
    .post('https://animal-heven-backend.herokuapp.com/animals/', animal)
    .then((response) => {
      this.getAnimals()
      this.setState({
        name: "",
        description: "",
        img: "",
        gender: "",
        age: ""
      })
    })
  }


  getAnimals = () => {
    axios
    .get('https://animal-heven-backend.herokuapp.com/animals')
    .then((response) => {
      this.setState({
        animals: response.data
      })
    })
    .catch((error) => console.error(error))
  }



  componentDidMount = (event) => {
    axios
    .get('https://animal-heven-backend.herokuapp.com/animals/')
    .then(response => {
      this.setState({   
        animals: response.data

      })
    })
  }



  render() {
    return (
      <div>
          <AddForm />
      </div>
    )
  }
}


export default App;