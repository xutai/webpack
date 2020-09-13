
import Print from './print'
import _ from 'lodash'


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration)
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
        })
    })
}


console.log('1')

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['hi', 'idiot'], ' ');
    element.onclick = Print.bind(null, 'fuck this!');

    return element;
}


document.body.appendChild(component())


