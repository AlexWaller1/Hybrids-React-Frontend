import React from 'react';
import { connect } from 'react-redux'

const HybridsList = ({ hybrids }) => {
    return (
        <div>
            {hybrids.map(hybrid => <ul><li key={hybrid.id}>{hybrid.name} - {hybrid.species} - {hybrid.image}</li></ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { hybrids: state.hybrids }
}

export default connect(mapStateToProps)(HybridsList);