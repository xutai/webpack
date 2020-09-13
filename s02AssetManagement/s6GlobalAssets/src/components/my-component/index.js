
import _ from 'lodash'
import './style.css'
import Halper from './halper.jpg'
import Data from './data.xml'


function component() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['hi', 'tyler'], ' ')
    element.classList.add('hello')
    // Web technology for developers - Web APIs - Element - Element.classList

    // Add the image to our existing div
    console.log("Halper:", Halper) 
    // Halper: 8de783bb57d4335099e78517f24cbe82.jpg
    const newHalper = new Image()
    // Web technology for developers - Web APIs - HTMLImageElement - Image()
    // newHalper1: <img src=​"8de783bb57d4335099e78517f24cbe82.jpg">​
    // but it should be: newHalper1: <img>​
    newHalper.src = Halper
    console.log("newHalper2:", newHalper)
    // newHalper2: <img src=​"8de783bb57d4335099e78517f24cbe82.jpg">​
    element.appendChild(newHalper)

    console.log("Data:", Data)

    return element
}



document.body.appendChild(component())