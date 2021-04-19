// this will be our container = data + methods

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchHybrids } from '../actions/hybridsActions'
import HybridsForm from './HybridsForm'

class HybridsContainer extends Component {

    componentDidMount() {
         this.props.fetchHybrids()
    }
    
    render() {
        return (
            <div>
               Hybrids Container
               <HybridsForm />
            </div>
        );
    }
}

export default connect(null, { fetchHybrids })(HybridsContainer);