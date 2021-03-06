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

const element = <Welcome name="Sara" />;

When React sees an element representing a user-defined component, it passes JSX attributes
and children to this component as a single object. We call this object "props."

For example, this code renders "Hello, Sara" on the page:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);

Let's recap what happens in this example:

1. We call ReactDOM.render() with the <Welcome name="Bodhi" /> element.

2. React calls the Welcome component with {name: 'Bodhi'} as the props.

Our Welcome component returns a <h1>Hello, Bodhi</h1> element as the result.

React DOM efficiently updates the DOM to match <h1>Hello, Bodhi</h1>.

Note: Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. For example, <div />
represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to
be in scope.

To learn more about the reasoning behind this convention, please read JSX in Depth.

Composing Components

Components can refer to other components in their output. This us use the sam component 
abstraction for any level of detail. A button, a form, a dialog, a screen: in React
apps, all those are commonly expressed as components.

For example, we can create an App component that render Welcome many times:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App(){
    return (
        <div>
          <Welcome name="Bodhi" />
          <Welcome name="Beezer" />
          <Welcome name="Chipper" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root")
);

Typically, new react apps have a single App component at the very top. However, if you 
integrate React into an existing app, you might start bottom-up with a small component
like Button and gradually work your way to the top of the view hierarchy.

Extracting Components

Don't be afraid to split components into smaller components.
For example, consider this Comment component:

function Comment(props) {
    return (
        <div className="Comment">
         <div className="UserInfo">
          <img className="Avatar"
            src={propsauthor.avatarUrl}
            alt={props.author.name}
            />
          <div className="Comment-text".
             {props.text}
          </div>
          <div className="Comment-date">
            {formatDate(props.date)}
          </div>
        </div>
    );
}

It accepts author (an object), text (a string), and date (a date) as props, and describes a 
comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard
to resue individual parts of it. Let's extract a few components from it.

First, we will extract Avatar:

function Avatar(props) {
    return (
        <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    );
}

The Avatar doesn't need to know that it is being rendered inside a Comment. This is why we
have given its prop a more generic name: user ranther than author.

We recommend naming props from the component's own point of view rather than the context in 
which it is being used.

We can now simplify Comment a tiny bit.

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

Next, we will extract a UserInfo component that renders an Avatar next to the user's
name:

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
}

This lets us simplify Comment even further:

function Comment(props) {
    return(
        <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
           {formatDate(props.date)}
        </div>
        <div>
    );
}

Extracting components might seem like grunt work at first, but having a palette of
reusable components pays off in larger apps. A good rule of thumb is that if a part
of your UI is used several times (Button, Panel, Avatar), or is complex enough on its
own(App, FeedStory, Comment), it is a good candidate to be extracted to a separate 
component.

Props are Read-Only

Whether you declare a component as a function of a class, it must never modify its 
own props. Consider this sum function.

function sum(a, b) {
    return a + b;
}

Such functions are called "pure" because they do not attempt to change their inputs,
and always return the same result for inputs.

In contrast, this function is impure because it changes its own input

function withdraw(account, amount) {
    account.total -= amount;

    React is pretty flexible but it has a single strict rule:

    All React components must act like pure functions with respect to their props.

    Of course, application UIs are dynamic and change over time. In the next section,
    we will introduce a new concept of "state." State allows React components to change 
    their output over time in response to user actions, network responses, and anything 
    else, without violating this rule.
}

State and Lifecycle

This page introduces the concept of state and lifecycle in a React component. 

Consider the ticking clock example from one of the previous sections. In Rendering Elements,
we have only learned one way to update the UI. We call ReactDOM.render() to change the
rendered output:

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

In this section, we will learn how to make the Clock component truly reusable
and encapsulated. It will set up its own timer and update itself every second.

We can start by encapsulating how the clock looks:

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

However, it misses a crucial requirement: the fact that the Clock sets up a timer
and updates the UI every second should be an implementation detail of the Clock.

Ideally we want to write this once and have the Clock update itself:

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

To implement this, we need to add "state" to the Clock component.

State is similar to props. but it is private and fully controlled
by the component.

Converting a Function to a Class

You can convert a function component like Clock to a class in five steps

1. Create an ES6 class, with the same name, that entends React.Component

2. Add a single empty method to it called render()

3. Move the body of the function into the render() method.

4. Replace props with this.props in the render() body.

5. Delete the remaining empty function declaration.

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

Clock is now defined as a class rather than a function.

The render method will be called each time an update happens, but as long as we
render <Clock /> into the same DOM node, only a single instance of the Clock class
will be used. This lets us user additional features such as local state and 
lifecycle methods.

Adding Local State to a Class

We will move the date from props to state in three steps:

1. Replace this.props.date with this.state.date in the render() method:

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

2. Add a class constructor that assigns the initial this.state:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

Note how we pass props to the base constructor:

constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  Class components should always call the base constructor with props.

  3. Remove the date prop from the <Clock /> element:

  ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

We will later add the timer code back to the component itself.

The result looks like this:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

Next, we'll make the Clock set up its own timer and update itself every second.

Adding Lifecycle Methods to a Class

In applications with many components, it's very important to free up resources taken
by the components when they are destroyed.

We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
This is called 'mounting' in React.

We also want to clear that timer whenever the DOM produced by the clock is removed.
This is called "unmounting" in React.

We can declare special methods on the class to run some code when a component
mounts and unmounts:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

These methods are called "lifecycle methods".

The componentDidMount() method runs after the component output has been rendered to the
DOM. This is a good place to set up a timer:

componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

*/