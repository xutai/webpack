

function component() {
    const element = document.createElement('div')

   
    /*  v1
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    */

    // v2
   element.innerHTML = join(['Hello', 'webpack'], ' ')


    return element;
}

document.body.appendChild(component())


