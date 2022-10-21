const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
//content.style.cssText = 'color: red';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('paragraf');
para.textContent = "Hey I'm red!";
para.style.cssText = 'color: red';

container.appendChild(para);

const h_three = document.createElement('h3');
h_three.classList.add('h_three');
h_three.textContent = "I'm a blue h3!";
h_three.style.cssText = 'color: blue';

container.appendChild(h_three);

const division = document.createElement('div');
division.classList.add('division');
division.textContent = 'asdfasdf';
division.border = '1px solid black';
division.background.color = 'pink';

container.appendChild(division);