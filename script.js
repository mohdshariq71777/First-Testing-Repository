import './otherModule.js'
//Polyfilling
import 'core-js/stable'
//Polyfilling async functions
import 'regenerator-runtime/runtime'
// import './node_modules/lodash-es/cloneDeep.js'
import cloneDeep from './node_modules/lodash-es/cloneDeep.js'
console.log('Parent Module')

const state = {
    cart: [
        { pro: 'pizza', quantity: 1 },
        { pro: 'burger', quantity: 2 },
    ],
    user: { loggedIn: true }
}
const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone.user.loggedIn)
console.log(stateClone.user.loggedIn)

if (module.hot) {
    module.hot.accept()
}
console.log(state.cart.find(el => el.quantity >= 2))
console.log('modified')
console.log('Welcome to the application')