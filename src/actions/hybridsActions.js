// create an action that is going to fetch the grads from api

export const fetchHybrids = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/hybrids')
        .then(resp => resp.json())
        .then(hybrids => dispatch({ type: 'FETCH_HYBRIDS', payload: hybrids}))
    }
}