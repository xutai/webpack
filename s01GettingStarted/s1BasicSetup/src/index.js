function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // https://lodash.com/docs/4.17.15#join
  // _.join(array, [separator=','])
  // Converts all elements in array into a string separated by separator.
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');




  return element;
}

document.body.appendChild(component());
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// Node.appendChild()
//  adds a node to the end of the list of children of a specified parent node.
