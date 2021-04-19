/* 

What are props?

Props allow us to pass values into our components. These values can be anything: strings, 
objects(including arrays and functions), and so on. They give us the opportunity to make 
our components more dynamic, and a lot more reusable.

For example, say we have a <MovieCard /> component. A movie has a title, a poster image,
and many other attributes. Let's examine what this <MovieCard /> component would look 
like  with hardcoded data vs. dynamic prop data:

Hardcoded:

class MovieCard extends React.Component {
    render() {
        lots of inefficient hardcoding
    }
}

Passing in Props

Mad Max: Fury Road is a ridiculously good movie, but what if we want to render a movie
card for another movie? Do we just write another component? No, that would be silly!
Instead, we write our components so that they make use of props, which are passed from
their parents.

To pass props to a component, you add them as attributes when you render them:

const movieTitle = "Mad Max"
<MovieCard title = {movieTitle} />

The


*/