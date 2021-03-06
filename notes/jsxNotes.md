/* 

What is JSX?

Simply put, JSX allows us to write HTML-like code in our JavaScript files. JSX is a syntax
extension of JavaScript that creates a very special and extremely productive marriage
between HTML and JS.

With JSX, we can write React components in an efficient and expressive manner. Ultimately,
JSX looks a lot like the end result we see in the browser (i.e. HTML), and is much faster
to write, especially when incorporating a lof JavaScript and dynamic content.

Imperative vs Declarative Programming

JSX uses what is sometimes referred to as a declarative style of programming, whereas most
of the JavaScript code we've written so far would be considered imperative. This may be the 
first time you're encountering these terms, but that is okay. To write imperative code is
to write code that describes how something is done in detail. To write declarative code is to
write what you would like to do.

To further explain, imagine you walk into a local restaurant with the intention of ordering
a sandwich.

- To declaratively would be to say something like this: "I would like one toasted ham and
cheese sandwich." Rather than worry about the details, you are just saying what you want
and letting the restaurant and letting the restaurant staff handle the details.

- To order imperatively would mean saying something like this instead: "I would like you
to take three slices of ham, two slices of cheese and a jar of mayonaisse from the 
refigerator and place them together on a clean counter. Please also find two slices if bread,
etc., etc., etc."

In general (and to the relief of restaurant staff everywhere), we prefer the declarative 
approach when speaking unless we are specifically instructing someone else. Most of the
JavaScript we've written is considered imperative because our code is made of explicit steps.
In plain JavaScript, to render a div element on the page we might end up writing something
like:

let div = document.createElement('div')
div.textContent = "hello world"
document.body.appendChild(div) 

Three distinct steps are used here. In JSX, however, we just need to write what we want, and
allow React to figure things out behind the scenes:

<div>hello world</div>

React sees this and understands it to be JSX, not HTML. While the exact details of how it
creates the DOM element differ from traditional DOM manipulation, the end result is the
same: a div element added to the page with the text 'hello world' inside.

What JSX Looks Like

React components return JSX within their render() methods:

class Tweet extends Component {

  currentTime = () => new Date().toString()

  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
            <p>We are writing this tweet in JSX. Holy moly!</p>
            <p>{ Math.floor(Math.random()*100)} retweets </p>
            <p>{ this.currentTime() }</p>
        </div>
      </div>
    );
  }
} 

Whoa, isn't this interesting? It's HTML, but in our JS... with JS inside the HTML! Looking
at this code, there are some important things to point out:

JSX is not a String

The JSX in the example is wrapped in quotes. Think of it as another type in JavaScript. We
are not interpolating HTML Strings like we do with standard JavaScript DOM manipulation.

JSX is the return value of the render() method

Every component you use needs a render() method that returns some valid JSX. Although our
example displays six lines of JSX, this is done for readability only. The entire return
statement is wrapped in parentheses so it is considered on 'chunk' of JSX code, with one
top level element.

return (
  <div  className="tweet">
    ...
  </div>
) 

JSX Can Include JavaSCRIPT

While writing our pseudo-HTML in JSX, we can also write vanilla JavaScript in-line. We do
this by wrapping the JavaScript in curly vbraces

<p>{ Math.floor(Math.random()*100) } retweets</p>
<p>{ this.currentTime() }</p> 

In the example, we call the Math.floor() and Math.random() methods directly, which will
return a random number when the component is rendered.

We also called a custom function, currentTime(), which returns the String value of the
current date and time. In our example, because currentTime() is another method within the
Tweet class, we must prepend currentTime() with this:

<p>{ this.currentTime() }</p> 

Note on Arrow Functions: Syntax is important here! Since we're using an arrow function for
currentTime(),

currentTime = () => new Date().toString()

...we are implicitly binding the method to the Tweet class. Getting acquainted with using
arrow functions now will save headaches later.

As we get into props in React, we sometimes need to call functions like currentTime() in a
class different from its origin. When this happens, without the arrow function, we often
have to explicitly bind methods to the class they are originally from, causing us to write
code like this:

this.currentTime().bind(this)

Without the .bind(this), the first 'this' will refer to whatever object it is in when called,
which can be a different component.

JSX Cannot Include All JavaScript Statements

JSX is an extension of JavaScript, wrapping a lot of underlying function calls in
syntactically appealing style. This is why JSX code is considered declarative. When we're
writing in JSX, it is equivalent to saying "Make an h1 element with this content inside" and
letting React work on the element creation and function calls. Because we follow the proper
syntax, React knows that when we write:

<h1 id="header">Hello!</h1>

React must convert this JSX into regular, imperative JavaScript when it renders the
component:

React.createElement("h1", {id: "header"}, "Hello!")

Which is then committed to the actual DOM as an h1 DOM node. We never need to see this -
all we write is the JSX, <h1 id="header"&gt;Hello!&lt;/h1> .

Due to this, as well as JSX's specific syntax, we aren't able to include just any 
JavaScript statement. For instance, the following will not work in JSX:

<h1 id="header">{if (true) {
  "Hello"
} else {
  "Goodbye"
}}</h1> 

However, the ternary alternative does work:

<h1 id="header">{ true ? "Hello" : "Goodbye" }</h1> 

There is an easy work around though - you can call class methods in JSX, and within these
methods, you can include whatever valid JavaScript you'd like.

A Component Must Return One JSX Element

In all the lesson examples we've seen so far, each component is returning a div that
contains content or child elements. However, we can actually use any HTML element we 
can actually use any HTML element we would normally use to contain content. The following
are all valid components:

class PlainDiv extends Component {
  render() {
    return <div>I am one line, so I do not need the parentheses</div>
  }
}

class Photo extends Component {
  render() {
    return (
        <figure>
          <img className="image" src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" />
          <figcaption>Whoa</figcaption>
        </figure>
    )
  }
}

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        <tr>
          <th>312213</th>
          <th>Tim Berners-Lee</th>  
        </tr>
      </table>
    )
  }
}

class ParentComponent extends Component {
  render() {
    return (
      <main>
        <PlainDiv />
        <Photo />
        <Table />
      </main>
    )
  }
} 

Each of these is a valid component, but all of these components have one returned JSX
element that contains everything else. Without an element that wraps the returned JSX
in a component, we will get an error. There some exceptions to this, such as React
frgments, but most often, we will be using the HTML-like JSX elements.

Avoiding Keywords

One thing to note about JSX is that, since we're still writing JavaScript code, we need
to avoid using keywords in our code. You might have noticed it already: we're setting HTML
classes using the className attribute (or prop, in React terms), instead of class. This is
because class is a reserved keyword in JavaScript! The same thing is true for the for label,
which is another keyword in JS. If you want to use the HTML for attribute, you'd use htmlFor
instead.

Conclusion

In the early forms of React, instead of JSX, components returned JavaScript that was much
less reader friendly. To create a React element, we would write things like this:

React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
); 

While JSX introduces some new rules we must follow, the benefit is that we can write code
that is sematic and declarative. Writing this:

<h1 className='greeting'>Hello, world!</h1>

is just much more pleasant. When we're building complex applications, where components can
be children of other components, JSX provides a critical boost to readability.

Ultimately, all the JSX code we write will get compiled down to standard JavaScript and turn
into things like React.createElement .

Every lab from now on already has the JSX transforming stuff to set up for you. You just
need to run npm install and npm start to execute the JSX --> React run-able JavaScript 
process.

*/