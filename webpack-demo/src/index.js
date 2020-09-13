// import a function
import bar from './bar';

// import a file
import  './echo.js';

bar();

import 'lodash';
function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    return element;
}
document.body.appendChild(component());
