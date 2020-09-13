// import _ from 'lodash';
import(/* webpackPrefetch: true */ 'LoginModal')

//function component() {
// function getComponent() {
async function getComponent() {
  // var element = document.createElement('div');

  // Loash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  //var element = document.createElement('div')
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // return element;
  // }).catch(error => 'An error occured while loading the component')

  var element = document.createElement('div')
  const { default: _ } = await import(/* webpackChunkName: "lodash */ 'lodash')
  element.innerHTML = _.join(['Hello', 'webpack', ' '])

  return element
}
//document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component)
})