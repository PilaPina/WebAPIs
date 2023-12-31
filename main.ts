

// --  CAROUSEL API  --//
                    /* creating constants for the slidecontainer and buttons
                    The as HTMLElement syntax (it's a type assertion)
                    tells Typescript to treat the result of the document.querySelector('.carousel-slide')
                    as a HTML element object. (we know for sure this will be an object and not null)
                    This is necessary because the querySelector method has a return type of ' Element | null '
                    */
// These get elements from the DOM
const slideContainer = document.querySelector('.carousel-slide') as HTMLElement;
const prevBtn = document.querySelector('#prevBtn') as HTMLElement;
const nextBtn = document.querySelector('#nextBtn') as HTMLElement;

// Set the inital slide index. 
let currentIndex = 0;       // 0 is the first image in the carousel
                            // console.log(currentIndex);  //checking if it works
const slideWidth = 430;

//Then we need a function so the carousel works as a carousel . See comment below. 
// We do that by showing one image at a time and we add transitions in the CSS
function showSlide(index: number) {
    const translateX = -index * slideWidth;  
    slideContainer.style.transform = `translateX(${translateX}px)`;
}
        /*  This comment is for the function above. 
        Calculate the translateX value based on the index. 
        Index tells us how much to move the slide container horizontally
        The transform property moves the images to the left or right
        The value '* 400' needs to fit the image width */ 

//Now we need an eventListener for buttons. See comment below. 
    prevBtn.addEventListener('click', () => {       // the syntax () => is used to define an arrow function. In addEventListener method it is a callback function. 
        currentIndex = (currentIndex - 1 + slideContainer.children.length) % slideContainer.children.length;
        showSlide(currentIndex);
    })
        /*  Comment for code above:
        currentIndex: This is a variable that keeps track of the currently displayed image's index.
        '-': This is the subtraction operator. It subtracts 1 from currentIndex and moves the previous image.
        '+': This is the addition operator. It adds slideContainer.children.length to the result of the subtraction. This is to wrap around the last image.
        '%': This is the modulo operator. It calculates the remainder when dividing the result of the addition by slideContainer.children.length. 
        The modulo ensures that the resulting index remains within the valid range of indices for the image in the carousle. 
        This wraps the first image to the last image. */
        
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideContainer.children.length;
        showSlide(currentIndex); 
    })
        // the the results
    showSlide(currentIndex);



// --  SPEECH WEB API - the synthesizer portion --//  

let speakButton = document.getElementById('speak-this');    // this is the button element
const readText = document.querySelector('.read-this');      //this collects the text from HTML element and stores it in the readText variable
                            // I wanted to add a stop and start function to my button
let isSpeaking = false;     // initially there is no speaking so the variable 'isSpeaking' is false

// When button is clicked it will check if speech synthesis is in progress
speakButton!.addEventListener('click', () => {
    if (isSpeaking) {
                // If speech synthesis is in progress, stop it
        speechSynthesis.cancel();
        isSpeaking = false;
                // Change the button text to start again
        speakButton!.textContent = 'Start again';
    } else {
                // If speech synthesis is not in progress, start it
        const utterance = new SpeechSynthesisUtterance(readText!.textContent!);
    
// These are properties setting we want for the speech synthesizer: voice, speed, pitch etc
    utterance.lang = 'en-GB';
    utterance.voice = speechSynthesis.getVoices()[0];
    utterance.volume = 1.0;
    utterance.rate = 1.2;
    utterance.pitch = 1.0;

    speechSynthesis.speak(utterance);  // Calling the method to start speech using the configurations above it

    isSpeaking = true;
    // If the button is speaking the button will display the stop reading text
    speakButton!.textContent = 'Stop reading';
};
});


// -- CANVAS API -- //
// Get a reference to the canvas element . Had to specify the HTMLCanvasElement so I wouldn't get a null error
const canvas = document.getElementById('draw-canvas') as HTMLCanvasElement | null;

// Make sure the browser supports the canvas API and the canvas is not null (if)  - kept getting null errors with the OG web API code
if (canvas && canvas.getContext) {
    // Get the 2D rendering context for the canvas
    const ctx = canvas.getContext('2d');

    // Use the context to draw a rectangle
    if (ctx) {
        ctx.fillStyle = 'rgb(168, 97, 98)'; // Set the fill color 
        ctx.fillRect(30, 30, 150, 50); // Draw a rectangle with the chosen fill color

        // Draw a circle
        ctx.beginPath();
        ctx.arc(210, 100, 30, 8, 14 * Math.PI, false);  // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
            // ' * Math.PI, false '   Math.Pi is a JS property for ratio of the circumference of a circle to its diameter. 
            //   False represents that this circle is drawn in a clockwise direction. 
        ctx.fillStyle = 'rgb(115, 215, 215)';
        ctx.fill();
    }
}







