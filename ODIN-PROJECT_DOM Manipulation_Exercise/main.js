const container = document.querySelector('#container');

const content = document.createElement('div');
const para = document.createElement('p');
const headerTxt = document.createElement('h3');

const bDiv = document.createElement('div');
const childDivHeader = document.createElement('h1');
const childDivPara = document.createElement('p');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

para.textContent = "Hey! I'm red!";
para.style.cssText = "color: red";

headerTxt.textContent = "I'm a blue h3!"
headerTxt.style.cssText = "color: blue";

bDiv.style.cssText = "border-color: black; background-color: pink"
childDivHeader.textContent = "I'm in a Div"
childDivPara.textContent = "ME TOO!"
bDiv.append(childDivHeader, childDivPara);

container.append(content,para,headerTxt,bDiv);