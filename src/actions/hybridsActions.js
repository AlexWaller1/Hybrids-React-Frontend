// create an action that is going to fetch the grads from api

export const fetchHybrid = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/hybrids')
    }
}