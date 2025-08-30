1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
i. getElementById(id):
   a. Selects a single element by its unique ID.
   b. Returns a single DOM element.
   c.Fast, because IDs are unique, so the browser can quickly find the element.
ii. getElementsByClassName(className)
   a.Selects all elements with the specified class name.
   b. Returns a live HTMLCollection (not an array), which updates automatically if the DOM changes.
   c. Typically faster than querySelectorAll for large documents, but slower than
iii. querySelector(selector)
   a. Selects the first element that matches a CSS selector.
   b. Returns a single DOM element (or null if no element is found).
   c. Slightly slower than getElementById and getElementsByClassName because it uses the more powerful CSS selector syntax.
iv. querySelectorAll(selector)
   a. Selects all elements that match the given CSS selector.
   b.Returns a static NodeList (not live). This means it won't update automatically if the DOM changes.
   c. Slightly slower than getElementsByClassName for large sets of elements, but offers more flexibility with complex selectors.
   
  2. How do you create and insert a new element into the DOM?
     Steps:
         1.Create the new element using document.createElement().
         2.Add content or attributes to the element .
         3.Insert the element into the DOM using methods like appendChild()
         example:
          const newDiv = document.createElement('div');
          newDiv.innerHTML=` `
          parentElement.appendChild(newDiv);
3.What is Event Bubbling and how does it work?
Ans: Event Bubbling is a concept in JavaScript and DOM (Document Object Model) event handling. It describes the way events propagate (or "bubble") from the target element to the root of the DOM tree.
How Event Bubbling Works:
         1.Event occurs on the target element: When an event is triggered on a specific DOM element, it doesn't just stay on that element.
         2.Bubbles up through the DOM hierarchy: The event bubbles up from the target element to its parent elements, eventually reaching the root of the document.
         3.All ancestors receive the event: Each ancestor element has a chance to handle the event unless explicitly stopped.

 4.What is Event Delegation in JavaScript? Why is it useful?
 Ans:Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of individual listeners to each child element. The event listener takes advantage of event bubbling to handle events for child elements, allowing for more efficient and manageable code.
 How Event Delegation Works:
      1.Attach a single listener to a parent element.
      2.The listener listens for events on any child element.
      3.When an event occurs on a child element, the event bubbles up to the parent, and the parent’s event listener handles it.
      4.You can then filter the event target to determine which child element triggered the event, and respond accordingly.

 5.What is the difference between preventDefault() and stopPropagation() methods?
 Ans: 
     1. preventDefault()
         a.What it does: Stops the default action of the event.
         b.Example: If you click on a link (<a>), it will normally take you to a new page. preventDefault() can stop that from happening.
         c.When to use: When you want to prevent something that the browser is trying to do by default.
     2.  stopPropagation()
         a.What it does: Stops the event from bubbling up to parent elements.
         b.Example: If you have an event on a child element and an event on its parent, stopPropagation() will prevent the parent from getting the event.
         c.When to use: When you want to stop an event from affecting other parts of the page.   
   
