/* 

What is Redux used for?

Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool React, you can use it with any JavaScript framework or library.

Benefits of moving to Redux

Single Source of Truth

As our React applications become larger, our state becomes more spread out between
different components. At a certain point, the component tree becomes a web of props
and state that can obscure our view of how components are handling and sharing data
with each other.

There are ways to get around this, like storing all of our state in one high level
container component, but this can ultimately increase the complexity of your props.

Redux offers a different solution. It encourages storing all of the necessary data in our 
application in a JavaScript object separate from our components. It looks like this:

state = {
  user: {
    name: 'bob',
    hometown: 'philly'
  },
  interests: [
    {
      name: 'pokemon',
      type: 'game'
    },
    {
      name: 'game of thrones',
      type:'tv show'
    }
  ]
} 

Similar to component state, all our data is held in an object. The difference here is that,
since Redux state is separate from the component tree, we can grab any part of this data
for any component that needs it, just by connecting the component!

Accessing Our State

To make this state available for components to connect to, we provide access by wrapping
the component tree, similar to Router. This gives us access to Redux functions that allow
us to grab state and map it to the props being given to a component. Components can then
read these props like normal, as though they were receiving them from a parent component.

Consequently, complex interaction between components is made easier. Take for example sibling
components (rendered side by side in a parent) and cousinn components (the children of sibling
data components). If siblings are both displaying or manipulating the same bit of shared data,
without Redux, that data needs to be stored in their parent component's state. If cousins are 
sharing data, the data needs to be stored in the grandparent component, the closest shared
'ancestor' component.

In Redux all these interactions are structured the same way. Every component we allow can get
and update state data regardless of the position of components in a tree.

Updating Our State.

So we hold all of our data in one place and with some configuration, we can read it as props
in regular React components. When we want to update that data, we must send an action, which
is a set of strict instructions we create that Redux will use for how to update it.

action = {
  type: 'ADD_INTEREST',
  newInterest: {
    name: 'hockey',
    type: 'sport'
  }
} 

Here, we can imagine that after a user fills out a form and clicks submit, we will create 
an action that tells Redux how to incorporate the update into the state. Any time we 
update the state in Redux, we must create an action first. This action is just plain old
JavaScript object. 

These actions are also made available to components. Any component we connect will be able
to modify the state using an action we've defined. Following a specific design pattern that
we'll explore through upcoming lessons, we can use thse actions to maintain and update our
Redux state. These state changes trigger React's component lifecycle, and thus, the cycle
of data is made.

Summing Up

Redux places all of our data in one place -- the state. This state is just plain JavaScript
object. In fact, all the pieces of Redux are plain old JavaScript. It is the pattern, the
way the information flows that makes Redux awesome.

To change our application state, we need to create an action that holds information for how
to update that state. The action, combined with the previous state, produces an updated state.


*/