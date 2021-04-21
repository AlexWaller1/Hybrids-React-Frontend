/* 

Dynamic React Components

Overview

We'll take the next step with React components and examine how they can be used as dynamic
templates.

Objectives

1. Understand how React components can be dynamic templates
2. Create dynamic React components and show the HTML they create

Introduction

As the building blocks of React applications, components are dynamic, in that they can
describe a template of HTML and fill in variable data. This lesson builds a real example
of a blogging application to illustrate dynamic components.

We will use the following components: - BlogContent - contains the content of the blog post
 - Comment - contains one user's comment - BlogPost - the 'top level' React component, which
 is responsible for rendering both BlogContent and Comment

 Making Components Dynamic

 Time to put the dynamic aspect of components to use! Let's start with the BlogContent
 component. The following snippet shows how we can describe variables in our components'
 render() methods:

 class BlogContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.articleText}
      </div>  
    )
  }
} 

You should see something new in the above code. Inside of render()'s return block, we have
this funky syntax: {this.props.articleText}.

This line is telling React to place the value that this.props.articleText represents within
the <div>. Ok, so where does this.props.articleText come from?

Passing Information

React allows us to pass units of information from a parent component down to child
component. We call these props, which we will dig more into in a later lesson. Let's see 
how we can pass information from BlogPost down to its child BlogContent:

class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <BlogContent articleText={"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."}/>
      </div>
    )
  }
} 

In the above, we see the BlogPost component, and inside of it, we refer to the BlogContent
component. We also create a prop for BlogContent called articleText that we assign a value
of "Dear Reader: Bjarne Stroustrup has the perfect lecture oration." This value is 
accessible from within the BlogContent component as this.props.articleText! To create props,
we write them the same way as writing attributes for an HTML tag, But remember, this is JSX
and not HTML!

One more thing about props: they can be any data type! In our example, we pass a string as
a prop. But we can pass number, boolean, object, function, etc., as a prop!

Expanding our Application

We still need a Comment component that we can use for each comment in a BlogPost. The
Comment component would look something like:

class Comment extends React.Component {
  render() {
    return (
      <div>
        {this.props.commentText}
      </div>
    )
  }
} 

This component, when used, will display content that is passed down to it, allowing us to
pass different content to multiple Comment components. Let's add them in. Of course, with
components being re-usable, we can make as many as we want.

class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <BlogContent articleText={"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."}/>
        <Comment />
        <Comment />
        <Comment />
      </div>
    )
  }
} 

... and just as before, we can pass content data down to them:

class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <BlogContent articleText={"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."}/>
        <Comment commentText={"I agree with this statement. - Angela Merkel"}/>
        <Comment commentText={"A universal truth. - Noam Chomsky"}/>
        <Comment commentText={"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"}/>
      </div>
    )
  }
} 

There is quite a bit going on here. Most notably, we are passing information from a parent
component to many child components. Specifically, we are doing this by creating a prop called
commentText to pass to each Comment component, which is then accessible in each instance of
Comment as this.props.commentText. Let's expand the HTML that would ultimately render:

<div>
x
  <div>
    Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
  </div>

  <div>
    I agree with this statement. - Angela Merkel
  </div>

  <div>
    A universal truth. - Noam Chomsky
  </div>

  <div>
    Truth is singular. Its ‘versions’ are mistruths - Sonmi-451
  </div>

</div> 

Summary

While HTML elements are basic building blocks of a website, (for example, a <div>), a
React application usually consists of several React components combined together. Unlike
simple elements, React components are smarter and bigger. They allow you to do much more
and incorporate logic into how content displays.

React components: - are modular, reusable, and enable a 'templating' like functionality - 
help us organize our user interface's logic and presentation - enable us to think about
each piece in isolation, enabling us to apply structure to complex programs.

Looking Forward

In this lesson, we introduced some fundamentals of a React component. Going forward we
will expand on what we can do with components, how they fit into the larger React 
landscape, and what built-in functionality they come with.

*/