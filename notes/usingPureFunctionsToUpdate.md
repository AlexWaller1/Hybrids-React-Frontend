Using Pure Functions to Update Application State

What is reducer in react?

A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. Redux relies heavily on reducer functions that take the previous state and an action to execute the next state.

You may notice a problem. While we can call the changeState reducer to increase the count from zero to one, if we call change state again we keep returning a count of one. In other words, we are not persisting this change of state. We'll tackle how this works in an upcoming section.

Reducers are Pure Functions

function reducer(state, action){      
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    case 'DECREASE_COUNT':
      return {count: state.count - 1}
    default:
      return state;
  }
} 

An important thing to note about reducers is that they are pure functions. let's remember the characteristics of pure functions:

Pure functions are only determined by their input values

Pure functions have no side effects. By this we mean pure functions do not have any effect of the function. They only return a value.

Note: The reason we like pure functions so much is because if a function has no effect outside of the object, and if the function always returns the same value given a specific input, this means that our functions become really predictable. In additionm the lack of side effects means that the functions are also contained, and can be used safely without affecting the rest of your application

Let's take these two characteristics of pure functions in turn, and ensure that we are adhering to them here.

Ok, so the first characteristics of pure functions means that given the same input of the function, I will always receive the same output from that function. That seems to hold, given a specific state object kike { count: 2 } and an action object like { type: 'DECREASE_COUNT'} will I always get back the same value? Yes. Given those two arguments, the output will always be {count: 1}

As for the 'no side effects' characteristic, there's something pretty subtle going on in our reducer. The object returned is not the same object that is passed as an argument to the function, but rather a new object that is constructed each time our reducer is called. Do you see why? Take a close look at the line that says return {count: state.count + 1}. This line is constructing a new JavaScript object and setting its count attribute to equal the previous state's count plus one. So we adhere to the constraints of a pure function by not changing any value that is defined outside of the function.

Summary

1 We hold our application's state in one plain old JavaScript object, and we update that state by passing both an action and the old state to our reducer. Our reducer returns to us our new state.

2 So to change our state we (1) create an action (an action is just a plain object with a type key); and (2) and pass the action as an argument when we call the reducer (which is just a function with a switch/case statement). This produces a new state.

3 Our reducer is a pure function which means that given the same arguments of state and action, it will always produce the same new state. Also it means that our reducer never updates the previous state, but rather creates a new state object.

