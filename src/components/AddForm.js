import React, { Component}from 'react'
export default class AddForm extends Component {
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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAnimal(this.state);
        this.setState({
            name: "",
            description: "",
            img: "",
            gender: "",
            age: ""
        })
    }



    render() {
        return (
            <div>
                <h1>Add New Animal</h1>

                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" id="name" value={this.state.name}
                    onChange={this.handleChange}
                    /> 
                    <br />

                    <lable htmlFor="description">Description</lable>
                    <input 
                    type="text" id="description" value={this.state.description}
                    onChange={this.handleChange}
                    />
                    <br />

                    <lable htmlFor="img">Image</lable>
                    <input
                    type="text" id="img" value={this.state.img}
                    onChange={this.handleChange}
                    />
                    <br />

                    <lable htmlFor="gender">Gender</lable>
                    <input 
                    type="text" id="gender" value={this.state.gender}
                    onChange={this.handleChange}
                    />
                    <br />

                    <lable htmlFor="age">Age</lable>
                    <input 
                    type="text" id="age" value={this.state.age}
                    onChange={this.handleChange}
                    />
                    <br />
                    <input type="submit" value="Add New Animal" />
                </form>
            </div>
        )
    }

}


