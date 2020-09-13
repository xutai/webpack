import _ from 'lodash';
// import printMe from './print.js'

function component() {
    var element = document.createElement('div');


    // Lodash, now imported by this script


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //  element.onclick = printMe.bind(null, 'Hello webpack again!;')
    // mdn - js - js reference - built-in obj - fn - Function-prototype.bind()
            
    
    return element;

}

document.body.appendChild(component());



