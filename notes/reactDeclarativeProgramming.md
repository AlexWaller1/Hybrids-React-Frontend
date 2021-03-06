React Declarative Programming

Painting a house

You many have heard the expressions imperative and declarative proramming before. Let's quickly give a 'documentation' style description of each, and follow it up with some real world examples. In wrapping up, we will relate it to React's implementation of the Virtual DOM.

Imperative Programming: - Explicitly describes the actions a program should take - Decribes how a progam should go about doing those actions - example - removing the last element from an array: - access the element at index arr.length - 1 from this array and erase it from memory - resize the array to have 1 less element at the end - return to me this array

Declarative Programming: - Describes what a program should accomplish (or what the end result should be) - Leaves the determination of how to get to the end result up to the program - example - removing the last element from an array: - I have this array: 1, 2, 3] - I want an array like that but without the tail element - Make it so, computer.

Now, let's fram this in a more 'real world' content. Imagine for a second that we're hiring someone to paint our house:

In an imperative world, we'd tell them to open the can of paint, dip their brush in it, and then move the brush  in stroking fashon along the wall. We'd tell the painter exactly what to do.

In a declarative world, we would tell the painter "I want a house with a big ol' cartoon house horrendously smeared across the side of it.. Oh! And I've had a tough week so make my day while doing it...", and she'd get it done! Why? Because the painter knows what to do! We don't need to tell here how to apply paint or how to get in and out of costume.

This is similar to how we prgoram with React. Let's imagine we have a 'find a hog by weight'
component that allows us to filter an array of existing hogs (by weight!). This component can accept a weight to filter by, and displays the matching hog profile pictures in the browser. 

In our code below (which is a special format that React uses), we don't descrie how to update the browser(i.e. "remove that div>, add this li>, etc."). Instead, we provide React with a template of what the component should look like once it is finished being prepared, i.e.:

div id="my-hog-world" className="dank-styling">
  { filteredHogsArray.map(hog => " img src=${hog.img}>") }
  !-- ^ e.g. show all my hogs in list elements! -->
/div> 

In the example above, we are saying: 'When rendered, there should be a div> element with img> elements for every item in our filteredHogsArray.'

This is us interacting in a declarative programming manner with React! We neither told it what to explicitly add/delete from the DOM when we wanted something changed, nor di we tell it how to about changing the DOM when we wanted something changed, nor did we tell it how to go about changing the DOM. This is perfectly acceptable for React! As we explore more going forward, we will see how this code acts as a template and React does the rest.

Doesn't a declarative world sound nice? It does to me! We can trust the computer to do what its supposed to in an efficient manner. More and more of the how to do something can be abstracted away from us. Perhaps one day, we won't need to think about how to get anything we want. Instead, computers will make all of our decisions for us!

The bee's knees 

So, why is this so great? Declarative programming allows us to focus on what our React application should look like - as opposed to being concerned with manually updating DOM, adding and removing classes, and so on. That stuff is all done for us in React: we just tell React what the end result should be. It'll do the heavy lifting for us.

It's not all sunshine and rainbows though - sometimes the underlying mechanisms for transforming our declarative code into actual instructions can suffer from inefficiencies. Fixing this is pretty hard, but luckily, React has done a tremendous job at ensuring that doing something like this is very rarely (or rather, never) necessary.