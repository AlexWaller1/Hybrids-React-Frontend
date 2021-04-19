// create an action that is going to fetch the hybrids from api

export const fetchHybrids = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/hybrids')
        .then(resp => resp.json())
        .then(hybrids => dispatch({ type: 'FETCH_HYBRIDS', payload: hybrids}))
    }
}

export const addHybrid = hybrid => {
    return dispatch => {
        fetch('http://localhost:3000/hybrids', {
        method: 'POST',
        body: JSON.stringify(hybrid),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(resp => resp.json())
        .then(hybrid => dispatch({ type: 'ADD_HYBRID', payload: hybrid}))

    }
    
}