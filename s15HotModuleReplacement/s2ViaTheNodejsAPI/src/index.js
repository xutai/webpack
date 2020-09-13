import _ from 'lodash';
import printMe from './print.js'

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Cliek me and check the console!'
    btn.onclick = printMe
    
    element.appendChild(btn)
    
    return element;

}

document.body.appendChild(component());

if ( module.hot ) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}



