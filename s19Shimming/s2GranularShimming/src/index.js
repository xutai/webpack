
function component() {
    const element = document.createElement('div')

    element.innerHTML = join(['Hello', 'webpack'], ' ')

    // Assume we are in the context of `window`
    this.alert('Hmm, this probably isn\'t a great idea...')

    return element;
}

document.body.appendChild(component())