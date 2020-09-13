
async function getComponent() {

  var element = document.createElement('div')
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
  element.innerHTML = _.join(['Hello', 'webpack', ' '])

  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})


/* v1

import _ from 'lodash'

function component() {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

document.body.appendChild(component())

*/



/* v2

import _ from 'lodash'

function getComponent() {
  return import(\/* webpackChunkName: "lodash" *\/ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  }).catch(error => 'An error occured while loading the component')
}

getComponent().then(component => {
  document.body.appendChild(component)
})

*/



/* v3

async function getComponent() {
  const element = document.createElement('div')
  const { default: _ } = await import(\/* webpackChunkName: "lodash" *\/ 'lodash')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})


*/



