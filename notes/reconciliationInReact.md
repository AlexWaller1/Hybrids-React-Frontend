Reconciliation in React

It Is Not a Virtual DOM

Earlier in the history of React, the term "Virtual DOM" was used to explain how React was able to perform better than the traditional DOM.

The term 'Virtual DOM' fails to really explain what is happening and may lead to a misunderstanding of what is happening behind the scenes when React renders.

In this lesson, we're going to briefly review how React handles updates to the screen. This process is known as Reconciliation.

Updating the DOM

By now, you should already know what the DOM is: a programmatic representation of the document we see in the browser. In JavaScript applications, DOM elements can be added and changed with code. It's possible to build highly complex websites with hundreds or thousands of DOM elements using plain JavaScript. Maybe more importantly, through the DOM, JavaScript allws us to build highly interactive webpages that update dynaimically without refreshing. This can come with some challenges, though.

When the DOM updates, the browser recalculates CSS, lays out the DOM treee and 'repaints' the display. This typically happens so fast you barely notice. However, on a highly interactive website, or on a website where the JavaScript is updating the DOM excessivley, the process of recalculating and repainting the display can result in noticeably poor performance.

Any time you want your website or app to update without refreshing, you'll need to update the DOM; there is no avoiding it. However, React has some neat tricks for being smart about these updates.

Reconciliation, Briefly

In React, we know that we write components that JSX elements. These JSX elements represent DOM elements, and when rendered, become those elements on a webpage.

During the initial render, React also uses these elements to build a 'tree' that represents what the DOM currently looks like, referred to as the current tree. When updates are made that would cause a re-render in React, a second tree, the workInProgress tree is created, representing what the DOM will look like. When all updates are processed, the workInProgress tree is used to update the DOM and the current tree is updated to reflect the new updates.

This is a key part of React's performance optimization - React uses these trees as an intermediate step between updates within components (like a change of state) and updates to the DOM. This helps in two ways:

Grouped Updates

Updates can be grouped together. By waiting until all updates are processed before committing the workInProgress tree to the DOM, excessive repaints are avoided.

Say, for instance, you have an app with many components, each colored a shade of blue, and a button, that when pressed, turns all those components to red. When that button is pressed, React will put together a tree containing all the components along with their updated properties, THEN commit all the changes to the DOM at once. This requires one repaint. Without this design, we could end up with code that updates the DOM for each individual part of the app, one repaint for each part.

Diffing Changes

In addition to grouping updates to the DOM, React can apply a diffing algorithm to quickly see what specific pieces of DOM need to be updated and how. This reduces the number of DOM changes that need to be made and lets React be particular in its updates, improving performance.

In plain JavaScript some DOM changes are better than others in terms of performance. For example, say you want to add something inside a ul in your DOM. Using innerHTML will work:

ul.innerHTML += 'li> A final list item /li>'

But this rebuilds the entire DOM inside div. On the other hand, using appendChild would not cause a rebuild:

let li = document.createElement('li')
li.textContent = 'A final list item'
ul.appendChild(li) 

React's diffing algorithm is designed to identify changes between what the current DOM looks like and what it will look like (the current and workInProgress trees). Based on the changes it identifies, different DOM updates will be performed to avoid rebuilding unnecessarily.

Conclusion

There are some misconceptions floating around regarding the DOM being slow, often related to how frameworks like React can improve performance. While DOM manipulation itself ins't slow, repainting what is displayed in the browser can be.

React can be very smart about handling DOM updates, which improves performance. Primarily, it does this in two ways: grouping DOM updates to prevent excessive repaints and being selective about what specifically needs to update and how.