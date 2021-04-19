import React, { Component } from 'react';

class HybridsForm extends Component {

    state = {
        name: '',
        species: '',
        personality: '',
        biography: '',
        image: ''

    }
    render() {
        return (
            <form>
                <label>Hybrid Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>

                <label>Species Type:</label>
                <input type='text' value={this.state.species} onChange={this.handleChange} name="species"/>

                <label>Hybrid Personality:</label>
                <input type='text' value={this.state.personality} onChange={this.handleChange} name="personality"/>

                <label>Hybrid Biography:</label>
                <input type='text' value={this.state.biography} onChange={this.handleChange} name="biography"/>

                <label>Hybrid Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
            </form>
        );
    }
}

export default HybridsForm;