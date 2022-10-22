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
division.classList.add('content');
division.style.border = '1px solid black';
division.style.backgroundColor = 'pink';
division.style.width = '300px';

container.appendChild(division);

const h_one_div = document.createElement('h1');
h_one_div.classList.add('h_one_div');
h_one_div.textContent = "I'm in a div";

division.appendChild(h_one_div);

const para_in_div = document.createElement('p');
para_in_div.classList.add('para_in_div');
para_in_div.textContent = 'ME TOO';

division.appendChild(para_in_div);