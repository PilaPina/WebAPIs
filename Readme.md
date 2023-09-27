Typescript In The Browser - Web APIs

1. Web Carousel API
  It creates a basic image carousel with previous and next navigation buttons. It uses JavaScript to control the visibility of slides within the container by changing the transform property to achieve the sliding effect.
2. Web Speech API (Text-to-Speech)
 It will synthesize a voice, e.g. read outloud a selected text, when a button is pushed. The code effectively toggles between starting and stopping speech synthesis when you click the button and updates the button's text accordingly to inform the user about the action to be taken.
3. Canvas API
 Provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing. 
I've used it for drawing a circle and a rectangle. 

Found the Speech Web API and the Canvas API here https://developer.mozilla.org/en-US/docs/Web/API, and the carousel idea from the guideline examples.  

<br>
<br>
<br>
<br>
<br>

WHAT IS A WEB API?

TypeScript/JavaScript can be seen as the raw ingredients. They provide the basic building blocks - variables, functions, loops, conditionals, etc. - that you can use to create a wide variety of programs. Just like with cooking, you can combine these ingredients in countless ways to create different dishes (or in this case, applications).

APIs, on the other hand, can be thought of as the pre-prepared food items. They provide pre-defined functionality that you can use to achieve specific tasks, like interacting with a database, making HTTP requests, or manipulating the DOM. These are like your mixed spices or seasoned meat - they’re ready to use, and while you can use them in different ways, they provide a specific flavor (functionality) to your dish (application).

So, just like in cooking, building an application involves a mix of using raw ingredients (writing your own code) and pre-prepared items (leveraging APIs), to create a final dish (the finished application) that’s to your taste. It’s all about finding the right balance and combination that works for what you’re trying to achieve. Happy cooking (coding)! 😊



- API stands for Application Programming Interface.
- A Web API is an application programming interface for the Web.
- A Browser API can extend the functionality of a web browser.
- A Server API can extend the functionality of a web server.

- a Web API is like a menu for computer programs. It helps different programs talk to each other and share information. You can use it to get data or perform actions without having to do all the work yourself. It's like asking a waiter for your favorite dish instead of cooking it from scratch.

- They are a list of rules and info that a website or an app provides to others. These rules explain what data and services are available and how to ask for them. 
Web APIs enable different software systems, often running on different platforms and written in different programming languages, to communicate and exchange data. This promotes interoperability and allows developers to leverage existing services and data in their own applications.

- Web APIs are used in various scenarios, including fetching data from social media platforms (e.g., Twitter API, Facebook Graph API), accessing weather data (e.g., OpenWeatherMap API), integrating with payment gateways (e.g., PayPal API), and many more.

- Third party APIs are not built into your browser.  To use these APIs, you will have to download the code from the Web.
F.ex:  YouTube API - Allows you to display videos on a web site. 