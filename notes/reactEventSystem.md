React Event System

What's the event system in React?

React has its own event system with special event handlers called SyntheticEvent. The reason for having a specific event system instead of using native events is cross-browser compatibility. Some browsers threat events differently, and by wrapping these events into a consistent API, React makes our lives a lot easier. It's important to keep in mind that they are the exact same events, just implemented in a consistent way! That means these events also have methods that you can call like preventDefault(), stopPropagation(), and so on.

How to add event event handlers

Consider the following component:

a name="tickler-example"> a ```js class Tickler extends React.Component {

tickle = () => { console.log('Tee hee!'); }

render() { return ( button Tickle me! button> ); } } ```

We have a tickle() function, but no way to trigger it! This is a perfect time to add an event handler so that we can see the message in our console. We attach event handlers to an element much like how we'd add a prop. The handler name is always comprised of on, and the event name itself - for example click. These are joined together and camel-cased, so if we wanted to add a click handler, we'd call the prop onClick. This prop takes a function as a value - it can either be a reference to a method on the class (like our tickle() method), or an inline function. Most of the time, we'll use a function reference. It looks like this:

button onClick={this.tickle}>Tickle me! button

As you can see, we're passign a s function reference, and not executing the tickle function. Now, when we click the button, we see a message in our console. Awesome! Going back to the complete example, lets take a quick look at the other code living there. You will notice our tickle() method is an arrow function. You will commonly see React component methods defined with arrow functions. This is because we often want to access the 'this' keyword within the methods themselves. By using an arrow function, we avoid creating a new scope with a different value of 'this'. Note that this is not required in the above example (since we're not accessing the component's 'this'). Realistically, most methods in a React component class will use 'this' in one way or another, so it's a good idea to get in the habit of writing your methods as arrow functions.

There are a lot of event handlers we can add to an element, for example onKeyUp,
onMouseDown, onFocus, onSubmit, and many more. Check out the complete list of supported events to see what else you can play around with!