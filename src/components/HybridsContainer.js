// this will be our container = data + methods

import React, { Component } from 'react';
import { connect } from 'redux'

import { fetchHybrids } from '../actions/hybridsActions'

class HybridsContainer extends Component {
    render() {
        return (
            <div>
               Hybrids Container
            </div>
        );
    }
}

export default connect(null, { fetchHybrids })(HybridsContainer);