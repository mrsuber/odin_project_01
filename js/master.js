// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


const content2= document.createElement('p');
content2.classList.add('content2');
content2.textContent='Hey I’m red!';


const content3= document.createElement('h3');
content3.classList.add('content3');
content3.textContent="I’m a blue h3!";


const content4_child1= document.createElement('h1');
content4_child1.classList.add('content4_child');
content4_child1.textContent="I’m in a div";


const content4_child2= document.createElement('p');
content4_child2.classList.add('content4_child2');
content4_child2.textContent="ME TOO!";

const content4= document.createElement('div');
content4.classList.add('content4');
content4.appendChild(content4_child1);
content4.appendChild(content4_child2);
content4.style.cssText = "background-color: pink;border: 2px solid black;" // ok in a string



container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
container.appendChild(content4);




// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World second Button");


// the JavaScript file
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World third button");
});
btn2.addEventListener('click', function (e) {
  console.log(e);
});
btn2.addEventListener('click', function (e) {
  console.log(e.target);
});

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const body = document.querySelector('body')
const hr = document.createElement('hr')
const javascriptSliderForImages = document.createElement('div')
const sliderTitle = document.createElement('h1')

javascriptSliderForImages.classList.add('slider')
sliderTitle.innerText = 'working on slider reusable code'

body.appendChild(hr)
body.appendChild(javascriptSliderForImages)
javascriptSliderForImages.appendChild(sliderTitle)
