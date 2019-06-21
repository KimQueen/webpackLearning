import _ from 'lodash'; //用来引入lodash
import './index.css';

let component = () => {
  let element = document.createElement("div");

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  return element;
};

document.body.appendChild(component());
