// components let you split the UI into independent, reusable pieces, 
// and think about each piece in isolation
/* Components modularize both functionality and presentation in our code.
In order to understand how powerful this consider just how intricate web
applications can become. The difficulty in logically arranging, architecting
, and programming these web applications increases with their size.
Components are like little packages: they help us keep everything organized
and predictable while abstracting the boiler plate code. Each component 
contains a snippet of code that describes what it should render to
the DOM 
*/

/*
Enough of a description -- let's see some examples! While the possibilities
of what we can do with components are endless, the first thing we need to understand
about them is the ways in which they act as code templates. Let's start simply and
build up from there using the following as an example:

React Application Idea

Let's imagine we want a blog article describing the fact (note: not opinion) of why
Bjarne Stroustrup has the perfect lecture oration.

Naturally, we want our blog article to display comments made by readers that agree with 
our statement. In summary, we want an application that displays an opinion an opinion
and responses to that opinion (like a 'comments' section).

We will flesh out this example by following two steps:

1. write the components
2. use the components

Step 1 -- write the components

First, let's make a component to showcase an opinion:

class Article extends React.Component {
    render() {
      return (
          <div>
           Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
          </div>
      )
    }
}

Note: You're probably used to just seeing class Article extends Component. Just know 
that 'class Article extends React.Component' is an alternate syntax. Either way,
it's doing the same exact thing.

Take a moment to read that code line by line: - a new class, 'Article', is declared-
the class extends React's component class(which provides us with built in methods and
    attributes) - a 'render()' method is defined, and what it should return is
    explicitly provided (in render(), we tell React "Hey, when you want to put this 
    component on the DOM, here is what it should become!")

    When React creates this element and adds it to the DOM, the resulting HTML will look
    just as you would expect:

    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>

    Ok, that takes care of our Article part of our application. Now let's make a 
    component to display a single user's comment:

    class Comment extends React.Component {
        render() {
            return (
                <div>
                 Naturally, I agree with this article.
                </div>
            )
        }
    }

    Take the time to read that component line by line. Here is the HTML that this would
    create when added to the DOM:

    <div>Naturally, I agree with this article.</div>

    In both our examples, React is taking JavaScript code, interpreting that special
    HTML/JavaScript syntax within the 'renders()'s 'return() statement, and spitting out
    plain old HTML that browsers will know how to represent to the user.

    Once we have our components in hand, it's time to actually use them.

    Step 2 -- use the components

    Now that we have these components written, all we need to do is make sure some other
    component is making use of them in it's 'render' method. Every React application has
    some top level component(s). Very often, this top level component is simply called 
    'App'. Let's assume just that for our example:

    class App extends React.Component {
        render() {
            return(
                <div>
                 <Article />
                 <Comment />
                </div>
            )
        }
    }

    Hold on there...Whoa Nelly...please stop! What is going on in that 'return' block?!
    That is an abomination! It is neither real HTML nor real JavaScript! Instead, it is
    some vulgar mashup of the two, an unholy merger!

    If this is your first time seeing JSX, which is React's syntax brainchild, your mind
    is likely to read both HTML and JavaScript at the same time and short circuiting.

    We will dive deeper into JSX (which is actually quite wonderful) later.

    What we are seeing in this App component's 'render()' method is a straightforward
    description of what we want: "Hey App component! When you render, I want you to also
    be responsible for making both the 'Article' and the 'Comment' component!" Of course,
    because computers still listen to us (for now) it will do just that! Here is what the
    resulting HTML will look like:

    <div>
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
      <div>Naturally, I agree with this article.</div>
    </div>

    This unpacks logically. The App component(being our top level component) wraps around
    both 'Article' and 'Comment', and we already know what they look like when they are
    turned into HTML.

    As you may expect, The 'App' component as both the 'Comment' and 'Article' component's
    parent component. Inversely, we refer to 'Comment' and 'Article' as children
    components of App.

    Summary

    We just introduced simplified, bare bones, React components. They are used to house
    modularized front end code. In our example, which is often the case, they contain
    information on how a portion of our application should be turned into HTML.

    Going forward, we will continue with this example and show how components can be re-used
    and how they can be written as dynamic templates, where their content is 
    interchangeable.
 */  