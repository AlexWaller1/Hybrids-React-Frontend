/* 

React components have two sets of properties: props and state. Props are given to the 
component by its parent. You can think of props as an external influence that the component
has no control over, whereas a component's state is internal to the component. A component's
state can change in conjunction to the props changing or when the user interacts with the
component.

The React framework was designed to enable developers to create complex and highly reactive 
UIs. This eables the components to quickly adapt to changes from user interactions or
updates in the app. In order to enable this, React components go through what we call a 
component lifecycle. This is broadly divided into three parts: creation, updating, and
deletion.

This means that every single thing you see in applications written in React is actually a
React component and/or a part of one! For example, if you open a new chat window in a 
website written in React, a ChatWindow component is created. As you are interacting with it
and sneding messages to your friends - that's the updating part. And when you finally close
the window, the React component gets deleted.

It seems all pretty straightforward from the user's perspective, however, as you'll soon 
find out, there's a lot of stuff going on behind the scenes.

Lifecycle Hooks and Rendering

In order to enable this quick reacting and updating, as a developer, you get access to 
built in events in the React component lifecycle called lifecycle hooks, or lifecycle
methods. These are opportunities for you to change how the component reacts (or doesn't
react) to various changes in your app.

These methods are called lifecycle methods, because they are called at different times in
the component's lifecycle - just before it's created, after it's created, and when it's 
about to be deleted.

The only required method for a React component to be valid is the render() method which
describes what the HTML for the component looks like. There are a whole host of optional 
methods you can use if you need more control over how the component responds to change.
The optional methods will be called if you include definitions for them in a component.
Otherwise, React will follow its default behavior.

Pre-mounting

It is important to remember that components, at their core, are just JS classes. This means
that even before mounting has begun, the class's constructor function is called.

While the constructor is not related to mounting to the DOM, it is the first function
called upon the initialization of a component; this makes it useful for creating an
initial state for a component.

Mounting

When the component is initially created, it gets mounted onto the DOM. It sounds more
complicated thant it is: the component figures out its initial state and renders its 
initial JSX onto the page. At the mounting stage, there are two lifecycle hooks 
available to us: static getDerivedStateFromProps, and componentDidMount.

After the constructor is called, static getDerivedStateFromProps will get called just
before render. This method gives us access to any props and state, and can modify and 
return state before a component is rendered. This method gets called every time a component
renders, including the initial render and all subsequent re-renders of content. It is 
uncommon that we use this hook, though - even the React documentation mentions that it 
exists for rare cases. We want to prioritize rendering - adding logic that runs before
every render can have an impact on a component's performance. It is more common that we
want the component to render first so a user sees something on the page as soon as possible.
Once rendered, we can update state, handle complex logic, etc...

In addition, it may seem useful to have access to both props and state and to compare them
before rendering, but if you find yourself in need of this, its possible there is a better
pattern. If you're comparing props from a parent to the state of a child, you can often avoid
this by just putting the state in the parent component and handle the comparison logic in the
parent.

Since the introduction of React 16, static getDerivedStateFromProps is the only hook that
fires before render() during mounting. Any code in this lifecycle method is extra code to
run before JSX is rendered to the DOM.

After the constructor and static getDerivedStateFromProps, render() is invoked, most often
returning JSX so that React can insert it into the DOM.

The componentDidMount method will get called just after the render method. You would use this
method to set up any long-running processes or asynchronous processes such as fetching and
updating data. It is better to render and display something to your user even if all of your
data isn't ready yet. Once it is ready, React can just re-render and use the API content.

Updating

Whenever a component's sate or props are changed, it gets re-rendered on the page. That's
the beauty of React components - they're quick to react to changes. A re-render could be 
triggered when a user interacts with the component, or if the new data (props or state) is
passed in.

For example, going back to the chat window example, whenever you press "send" on a message
, the ChatWindow component gets re-rendered as it needs to display an extra message. 
Whenever a re-render is triggered, there is a whole host of lifecycle hook that get called.
You can choose to use any of these to decide how your React component should respond to 
changes.

The static getDerivedStateFromProps() is invoked before anything else when updating a
component, and again, is available for rare situations where you may need to calculate 
state changes prior to an update

The shouldComponentUpdate method is invoked just before the component is about to 
re-render. At this stage, you can compare the old and new props and state and prevent
unnecessary re-renders: if the changes in state and/or props don't actually alter the 
cmponent that's being shown to the user, there is no point "repainting" it as it is an
unnecessary performance drain.

After the first two hooks, render is called, returning the JSX for React. React uses this
JSX to figure out what to display on the page.

Just before updating, getSnapshotBeforeUpdate is invoked. The getSnapshotBeforeUpdate method
returns a 'snapshot' that can be used in the final update lifecycle method, componentDidUpdate
. This snapshot allows us to capture things like scroll position. This sort of value can
possibly change in the samll amount of time before componentDidUpdate is invoked.

The componentDidUpdate method is called just after the component is rendered and updated.
It is possible in componentDidUpdate to take some actions without triggering a re-render of 
the component, such as focusing on a specific form input.

You will have access to the previous props and state as well as the current ones, and you
can use this method to update any third party libraries if they happen to need an update due
to the re-render

Unmounting

At the unmounting stage, the component gets deleted and cleared out of the page. The only
lifecycle hook at this stage is componentWillUnmount, which is called just before the
component gets deleted. This is used to clear out any stuff set up in componentDidMount.

For example, if you had a component that displays the weather data in your home town, you
might have set it up to re-fetch the updated weather information every 10 seconds in 
componentDidMount. When the component gets deleted, you wouldn't want to continue doing
this data-fetching, so you'd have to get rid of what was et up in componentWillUnmount.

Summary

Imagine a big old oak tree. The tree could be a parent component, each of its branches a 
child component of the tree, each of its leaves a child component of the branch and so on.
Each of the leaves go through a very obvious lifecycle of being created, changing based on
state (changing colour based on the season, withering if there's not enough nutrition being
passed down from the parent branch, changing into a leaf with a hole bitten out if if a
caterpillar munches on it), and finally falling down when it's autumn.

So as it seems, if you need a lifecycle hook, there's sure to be one for your every need!

Mounting lifecycle methods

Called once on initial render:

Method: constructor - The constructor is a method used to initialize an object's state
in a class. It automatically called during the creation of an object in a class. The
concept of a constructor is the same in React. The constructor in a React component is
called before the component is mounted

The constructor is a method that's automatically called during the creation of an object
from a class. It can handle your initial setup stuff like defaulting some properties of
the object, or sanity checking the arguments that were passed in. Simply put, the
constructor aids in constructing things

The constructor for a React component is called before it is mounted. When implementing the
constructor for a React.Component subclass, you should call super(props) before any other
statement.

super() - will call the constructor of its parent class. This is required when you need 
to access some variables from the parent class. In React, when you call super with props,
React will make props available across the component through this.props

Why super is used in react?

When creating Class Components in React, we often call super in the constructor of the
Component and also pass in props to it. It's because if we want to use this in the 
constructor, we need to pass it to super.

static getDerivedStateFromprops?

The reason getDerivedStateFromProps is static is to discourage any side-effects during the
render phase. For example, updating or using props on on the instance. This isn't safe 
anymore with the upcoming async rendering. It is called when a component is created and
each time it receives a new props.

getDerivedStateFromProps?

getDerivedStateFromProps is invoked right before calling the render method, both on the
initial mount and on subsequent updates. It should return to update the state, or null to
update nothing. This method exists for rare use cases were the state depends on changes in
props over time.

props?

"Props" is a special keyword in React, which stands for properties and is being used for
passing data from one component to another. But the important part here is that data with
props are being passed in a uni-directional flow. (one way from parent to child)

Props are arguments passed into React components. Props are passed to components via
HTML attributes

state?

The State of a component is an object is an object that holds some information that may
change over the lifetime of the component.
*/