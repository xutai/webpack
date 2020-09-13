
import _ from 'lodash'
import './style.css'


function component() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['hi', 'tyler'], ' ')
    element.classList.add('hello')
    // Web technology for developers - Web APIs - Element - Element.classList

    return element
}


document.body.appendChild(component())