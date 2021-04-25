React Presentation Components

What makes a component "presentational"?

The answer to this question, as you may have guessed, is that a presentational component is a component whose primary responsibility is to rendr some piece of what the user sees. Their job, in other word, is to look good!

There is, however, a bit more thinking that we need to do here. Very often when we speak of classes or categories of things in the world of programming, the types or classes that we are discussing are actually formalized in the libraries or languages themselves. Think, for example of when we declare a React Component. We write class SomeComponent extends Component.
Either way, we are creating an actual instance of Component.

But here's the rub. Whe we say that some component is "presentational" we definitely do not mean that the component is a formal type or class defined by the React library. There is no such thing as type PresentationalComponent in the React library. Rather, what we are dealing with here is simply a useful convention, or, better yet, a programming pattern that coders who have used React have found themselves following over and over again as they compose their component-based React UIs.

So what defines the presentational component pattern? Here's a list of defining features:

Presentational components are primarily concerned with how things look

If they are class components, they probably only a render method. If functional, they just return some JSX

They do not know how to alter the data that they render

They rarely have any internally changeable state properties

They are best written as stateless functional components

Okay, so there's our pattern description. Now let's jump into some code and see how presentation components actually look in practice

Surpise, you've already written presentational components!

Yep, this is true. Think about it. A presentational component is simply a component that doesn't know anything about how to get the data it displays. If they are mainly responsible for presentation, then you've been writing them from the beginning. A simple HelloWorld component, for example, is almost ccertainly presentational. Let's see if that's right - we'll even give our component the ability to take a a prop:

class HelloWorld extends Component {
  render() {
    return div className="hello-world">Hello {this.props.message || 'World' }/div>;
  }
} 

So does this fit our pattern? Absolutely, it does. Here is a component that does nothing but render a piece of our UI; that has no notion of how to fetch or reload the message data that it takes in as a prop; that has no interchangeable state; and that only contains a render method. So, I think we can safely say it fits the pattern well.

Great, but when would we need such a simple component?

Good question! Our HelloWorld example is obviously not a very real world example, but consider this: let's say we are working on a massive web application, and we'd like to standardize as well as place some limit on the characteristics of the text inputs used throughout the application's forms.

In this case, we could certainly establish a style guide that dictates that all uses of input> use a specific set of css classes, defined in our stylesheets. But his leaves our app open to a lot of human error. We would have to consistently follow convention over time. And while we could certainly add props to our inputs by doing something like this -- input className='field' {...props} -- we've left the types of props that can be provided to our inputs wide open.

With React, we can do much better! Consider the TextField component:

const defaultLimit = 100

class TextField extends Component {
  render() {
    return (
      input
        className="field field-light"
        onChange={this.props.onChange}
        maxLength={this.props.limit || defaultLimit}
      />
    );
  }
} 

First off, notice that here again, what we have is a component that fits the presentational pattern. It's a simple wrapper around an input>. But look how powerful it is! This simple wrapper establishes the CSS classes we will use in one place for every single input used throughout the app. Think of how easy it would be to change if later decided we wanted a different look! But that's not all we've accomplished here. The component also establishes a straightforward API for all our text fields consisting of an onChange callback -- because in most cases our input>s are going to need to perform some action when the users type -- and a limit for the amount of characters that a user can enter in the field. So although our presentational component is simple, it can still have a degree of interactivity through the addition of callbacks.

Now, of course, we can argue about whether wrapping the input> field in this way is a good idea. After all, input>s are nice simple implementations in their own right. However, providing a component-based interface to text inputs as we have in the field above can be a great win for simplicity in our app. It specifically defines what we mean by a text input. It defines it in a way that arguably covers the majority of use-cases we can imagine for a simple text input; and it provides this definition in one place that can be found and updated easily in te future. Win, win, win. Are we beginning to see the power of presentational components? Good.

Now imagine that it's not just the TextField that our team has executed in this way, but say we've also defined a Header /> and Footer />, as well as other more unique and customized modules that are still primarily presentational. Imagine further that we've composed the majority of our UI out of these simple presentational components -- all of them almost entirely stateless, all of them designed to do one thing and one thing well: they just redeive props from their parent components and render! That's it. They are simple and beautiful and because they aren't doing much, because they are mostly stateless, they have better chance of remaining blissfully bug free.

This is the power and importance of presentational components. They are simple and they just work. So, therefore, we should strive to use them as much as possible.

The "Stateless Functional" Component & "Pure" Functions

What if I told you we can actually make our presentational components even simpler? Well, we can, and here's why: Remember how one of the principles in our checklist for the presentational component pattern was that the component (probably) does not have state? Well, if in fact we can create a component that has no state, that means that our component doesn't even really need to be JavaScript object of type Component at all. It can just be a simple function -- one that takes an input and returns a (portion of) the UI.

So what's this look like? Here's our TextField component rendered as a so-called "functional stateless" components (a a feature available in React since v0.14):

const defaultLimit = 100

const TextField = (props) =>
input
 className="field field-light"
 onChange={props.onChange}
 limit={props.limit || defaultLimit}
 />;

 Now isn't that just beautiful? It really is. It's just so concise. We've discarded all that ugly boilerplate. But it's not only concision that makes this beautiful. By transforming our component into a stateless function, we have made our TextField component an extremely stable and predictable part of our application.

 The predictability comes from the fact -- and here we can see the influence of the principles of functional programming on React -- that this function will always return the same UI output if given the sam props. There are no state variables here that could be set to different values at different times that might lead the function to return something that we didn't predict. What we have here, then, is what in functional terms is called "pure" or "referentially transparent" function. Our UI has become just a bit more predictable. And, as web developers who've worked on the front-end, we know what a boon is, don't we? (to review pure functions at greater length, see this lesson on the theme.)

 Addendum on Presentational Components Components

 React is an ever evolving framework. Thinking of components as presentational is only one design pattern available and newer features in React all for alternative designs.

 We continue to include this content because it is important as someone new to React that you play around and become more familiar with the different ways you can use components. You will be better equipped to understand the newer features of React by first practicing some patterns that, while no longer emphasized, are closer to object-oriented patterns we've seen previously. Once finished with the materials in this course, we encourage you to visit reactjs.org and read up on the newest ways in which we can structure components.