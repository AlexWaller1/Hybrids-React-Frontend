// make sure to place nav links in the <div>
// component is a piece of the UI
// components built separately to make complex interfaces simpler and better organized
// App.js is the root component, parent of the other components
// There is essentially a tree of components
// state is data we want displayed when the component is rendered
// render resposible for describing what UI should look like
// virtual DOM vs. Real DOM
// No longer have to manipulate the DOM
// So no more querySelectors or eventListeners
// just have to change state of react components
// React is a library for building user interfaces
// React is V in MVC
// JSX - JavaScript Syntax Extension
// There are hook components and class components
// hook components use functions
// the html looking language rendered by components is JSX
// props are basically attributes
// Components can have "state" which is an object that determines how
// a component renders and behaves

// an arrow function is a compact alternative to a traditional function
// but is limited and can't be used in all situations
// Arrow function does binding autmoatically and does not require 'this'
// Arrow function has an implied (built-in) 'return' where 'return must be
// explicitly expressed in a regular function
// an arrow function is 'anonymous' which means it can't be called back
// or used again. Only used when you need to use a function one time
// In regular functions the 'this' keyword represents the object that
// called the function, which could be the window, the document, a button, or whatever
// With arrow functions the 'this' keyword always represents the object that
// defined the arrow function.

// in react, we can declare a variable and then use inside JSX by wrapping
// it in curly braces / const dachshund = 'Bodhi' const hello = <h1>Hello, {dachshund}</h1>
// in the reactDom.render(hello) function we can call the hello variable.
// You can put any valid JavaScript expression inside the curly braces in JSX.
// For example, 2 + 2, hybrid.name, or formatName(hybrid) are all valid JS expressions

/* 
function formatName(user){
    return user.firstName + '' + user.lastName;
}
    const user = {
        firstName: 'Harper',
        lastName: 'Perez,
    };

    const element = (
        <h1>
        Hello, {formatName(user)}!
        </h1>
    );

*/

/* 

function greetHybrid(hybrid) {
 return hybrid.firstName 
}

function hybridSpecies(hybrid) {
  return hybrid.species
}

const hybrid = {
firstName: 'Jay',
species: 'Ram Hybrid'
}

const greeting = (
  <h1>
    Hello, {greetHybrid(hybrid)}. You are a {hybridSpecies(hybrid)}.
  </h1>
)

ReactDOM.render(greeting, document.getElementById('root'));

This will return "Hell, Jay. You are a Ram Hybrid."

*/

/* 

Rendering Elements

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

const element describes what you want to see on the screen:

const element = <h1>Hello, world</h1>;

Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
React DOM takes care of updating the DOM to match the React elements.

Note: One might confuse elements with a more widely known concept of "components". We will introduce
components in the next section. Elements are what components are "made of", and we 
encourage you to read this section before jumping ahead.

Rendering an Element into the DOM

Let's say there is <div> somewhere in your HTML file:

<div id="root"></div>

We call this a "root" DOM node because everything inside it will be managed by
react DOM.

Applications built with just React usually have a single root DOM node. If you are 
integrating React into an existing app, you may have as many isolated root DOM nodes as you
like.

To render a React element into a root DOM node, pass both to ReactDOM.render():

const element = <h1>Hello, world<h1>;
ReactDOM.render(element, document.getElementById('root'));

It displays "Hello, world" on the page.

Updating the Rendered Element

React elements are immutable. Once you create an element, you can't change it's children
or attributes. An element is like a single in a movie: it represents the UI at a certain point 
in time.

With our knowledge so far, the only way to update the UI is to create a new element,
and pass it to ReactDOM.render()

Consider this ticking clock example:

function tick() {
    const element = (
        <div>
         <h1>Hello, world!</h1>
         <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

set Interval(tick, 1000);

It calls ReactDOM.render() every second from a setInterval() callback.

Note:
In practice, most React apps only call ReactDOM.render() once. In the next sections
we will learn how such code gets encapsulated into stateful components.

We recommend that you don't skip topics because they build on each other.

React Only Updates What's Necessary

React DOM compares the elements and its children to the previous one, and only applies
the DOM updates necessary to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, only the
text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather
than how to change it over time eliminates a whole class of bugs.



*/

/* 

Components and Props

Components let you split the UI into independent, reusable pieces, and think about 
each piece in isolation. This page provides an introduction to the idea of components.

Functions and Class Components

The simplest way to define a component is to write a JavaScript function:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

This function is a valid react component because it accepts a "props" (which stands for properties)
object argument with data and returns a React element. We call such components "function 
components" because they are literally JavaScript functions.

You can also use an ES6 class to define a component:

class Welcome extends React.Component {
    render() {
        return <h1> Hello, {this.props.name}</h1>;
    }
}

The above two components are equivalent from React's point of view.

Function and Class components both have some additional features that we
will discuss in the next sections.

Rendering a component

Previously, we only encountered React elements that represent DOM tags:

const element = <div />

However, elements can also represent user-defined components:

*/