React Events Crash Course

React's Event System

React makes use of basic HTML events by wrapping them in something called SyntheticEvent s.
This wrapper allows React to make sure events are handled the same way across all browsers (a.k.a. standardization). Some browsers treat events differently, and by wrapping these events into a consistent API, React makes our lives easier. It's important to keep in mind that they are the exact same events, just implemented in a consistent way! That means these events also have methods like preventDefault(), stopPropagation(), and so on.

How to add event handlers

Consider the following component:

class Tickler extends React.Component {

  tickle = () => {
    console.log('Tee hee!')
  }

  render() {
    return (
      Tickle me!
    )
  }
} 

We have a tickle() method, but no way to trigger it! This is a perfect time to add an event handler so that we can see the message 'Tee Hee!' in our console. We attach event handlers to an element in React much like basic HTML:

"button onClick={this.tickle}>Tickle me! button"

In fact, this is exactly how we would do this with basic HTML/JS. The only difference being onClick in React vs. onclick in basic HTML.

The handler name is always comprised of on, and the event name itself (i.e. click). These are joined together and camel-cased. As you know, the value of the events are callbacks(either a reference to a function or an inline function). As a reminder, we pass the function object itself and do not invoke the function. We are telling React's event system: "Hey! Use this thing later if the event associated with it is triggered."

Now, when we click the button, we see a message in our console. Awesome! Going back to the complete example, let's take a quick look at the method. You will notice our method is an arrow function. You will commonly see React component methods defined with arrow functions. This is because we often want to access the 'this' keyword within the methods themselves.

Moving Forward

The information above is the bare minimum you need to get started with events in React. As we move forward, we will dive deeper into events and explore how the interact with our React applications on a larger scale.

There are a lot of event handlers we can add to an element, for example onKeyUp, onMouseDown, onFocus, onSubmit, and many more. Check out the complete list of supported events to see what else you can play around with! If you have time, the React event documentation linked below is an excellent resource for mastering the SyntheticEvent wrapper.