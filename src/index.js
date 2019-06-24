import _ from 'lodash'; //用来引入lodash
import './index.css';
import Icon from './icon.png';
import Data from './data.xml';

let component = () => {
  let element = document.createElement("div");

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 添加图片到我们已经在的div中
  let myIcon = new Image();
  myIcon.src =Icon;

  element.appendChild(myIcon);

  console.log(Data);


  return element;
};

document.body.appendChild(component());
