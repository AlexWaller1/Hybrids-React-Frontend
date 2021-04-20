import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addHybrid } from '../actions/hybridsActions'

class HybridsForm extends Component {

    state = {
        name: '',
        species: '',
        personality: '',
        biography: '',
        image: ''

    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addHybrid(this.state)
        // ask about this
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <label>Hybrid Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                < br />
                <label>Species Type:</label>
                <input type='text' value={this.state.species} onChange={this.handleChange} name="species"/>
                < br />
                <label>Hybrid Personality:</label>
                <input type='text' value={this.state.personality} onChange={this.handleChange} name="personality"/>
                < br />
                <label>Hybrid Biography:</label>
                <input type='text' value={this.state.biography} onChange={this.handleChange} name="biography"/>
                < br />
                <label>Hybrid Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
                < br />
                <input type='submit' value="Create Hybrid" />
                < br />
            </form>
        );
    }
}

export default connect(null, { addHybrid })(HybridsForm);

// in react, we can declare a variable and then use inside JSX by wrapping
// it in curly braces / const dachshund = 'Bodhi' const hello = <h1>Hello, {dachshund}</h1>
// in the reactDom.render(hello) function we can call the hello variable.
// You can put any valid JavaScript expression inside the curly braces in JSX.
// For example, 2 + 2, hybrid.name, or formatName(hybrid) are all valid JS expressions

/* 
function formatName(user){
    return user.firstName + '' + user.lastName;
}
    const user = {
        firstName: 'Harper',
        lastName: 'Perez,
    };

    const element = (
        <h1>
        Hello, {formatName(user)}!
        </h1>
    );

*/