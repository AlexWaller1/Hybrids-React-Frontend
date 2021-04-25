Types of Components

Problem Statement

So far in this course, we've dealt with React's class components. These class components have all the features we've been learning about - class components have state, lifecycle methods and can contain their own custom class methods. Class components are fully featured, but there are times when we really don't need all these features. Some components don't need state. Many components don't need to use lifecycle methods. For these cases, there are better options. In this lesson, we will be looking at some of the alternatives to class components. These alternatives can offer a more simplified way to write components, while also providing some boosts to performance!

Class Components

We've covered the features of class components thoroughly through the previous lessons. To be clear, you can write all of your components as class components.Even with a complex app with many components, this will work just fine.

If you're not sure how a complex component will become while creating it, just start with a class component. At a minimum, a class component looks like this:

import React, { Component } from 'react'

class App extends Component {
  render() {
    return div> /div>
  }
}

export default App 

Pure Components

A pure component is nearly identical to a regular component. The only difference is that a pure component does not have access to the shouldComponentUpdate method, instead performing an automatic, shallow comparison of old and new props and state. To write them, you just need to import and use PureComponent istead of Component:

import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return div> /div>
  }
}

export default App 

The concept of a pure component is similar to a pure function. If a component is repeatedly given the same initial values (props and state), it should behave the same way each time. So, if props and state aren't changing, there is no need to update the component.

If you don't need to fine tune how a class component updates, considered converting most or all of your regular components into pure components.

Functional Components

Although React is clever when it comes to rendering class components, every class component, when rendered, goes through a series of checks related to its lifecycle. If we do not need to use state or lifecycle methods, we can avoid these checks by writing a functional component.

A functional component requires much less than a class component:

import React from 'react'

const App = props => {
  return (
    div>{props.greeting}/div>
  )
}

export default App 

A functional component returns JSX, instead of using a render method. It doesn't extend Component, so it hasn't inherited what is needed to store state. Functional components can still receive props, but notice above that they have to explicitly be written as the argument for the function.

Functional components can be fairly complex if we want. We can write helper functions and variables in the same file and use them within the functional component. Generally, though, functional components are very hand for simple. lightweight components. Often, when we want a component to just display content and not worry about any heavy logic, functional components are a great option.

import React from 'react'

const App = props => div>{props.greeting}/div>

export default App 

Combined with object destructuring, we can extract out the greeting value from props, and do this:

const App = ({ greeting }) => div>{ greeting }/div>

This simplicity makes it fast and easy to build reusable components. If you've got a bunch of styled buttons on a React app, for instance, you can write a reusable Button component that has a consistent style but receives props that define its text and click event function:

import React from 'react'

const Button = ({ handleClick, text })=> button style="myButton" onClick={ handleClick }>{ text }/button>

export default Button 

Functional components update based on prop changes or if their parent component re-renders.

Container vs Presentation Components

So we have both class based and functional components, but you may have also heard talk of container and presentation components. These are not different types of components, but instead, are a way of thinking on how to organize a React app.

Presentational Components are only concerned with displaying content. They typically don't deal with state, or have a lot of added logic within them. They receive props and display content. The Button component from the functional component section above is a great example of this.

Imagine for a moment were designing a navigation bar, full with links and drop down menus, a search form and a brand logo. In React, we can compartmentalize - each piece can be a component (NavLinks, Menu, Search, etc...) and since they all go together, we can create a parent component, that acts as container for everything.

import React, { Component } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import DropMenu from './DropMenu'
import Search from './Search'

class NavigationContainer extends Component {

  state = {
    query: "",
    username: ""
  }

  render() {
    // <>...</> is a a React fragment - it does not render anything to the DOM, but can wrap multiple JSX elements
    return (
      <>
        Logo />
        NavLinks />
        DropMenu username={ this.state.username }/>
        Search query= {this.state.query } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
      </>
    )
  }

  handleSubmit = event => { ... }
  handleChange = event => { ... }
} 

Using this sort of set up, none of the imported components need to have their own state, nor do they need to have any functions defined. Container components, like NavigationContainer, deal with managing and class methods.

Keeping all the more complex logic in one place makes it easier to follow the flow of information. It also keeps many compoents simpler and free of clutter.

Container components, having to deal with state, are usually class components. Presentational components are most often functional components as they don't need to contain custom methods, relying mainly on props.

Conclusion

There are no hard and fast rules about presentational vs. container components. This dichotmoy is simply a common pattern for organizing your app. Presentational components can be switched to class components if needed.

The main take away here is the difference between class and functional components. Class components are versatile and fully featured compoents. They can be anything we want them to be. Functional components exchange the class components's bels and whistles for simplicity and a small performance boost.