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
                <input type='text' value={this.state.name} onChange={handleChange}/>
            </form>
        );
    }
}

export default HybridsForm;