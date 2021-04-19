import React, { Component } from 'react';

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
    
    render() {
        return (
            <form>
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
            </form>
        );
    }
}

export default HybridsForm;