// import { createStore } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './bugs' // reducer is not wrapped in braces because it is the default export

// const store = createStore(
//     reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({ trace: true }) // returns a store enhancer function that knows how to talk to redux devtools with tracing enabled
// )

// export default store <- instead of exporting the store, we want to export a function for creating the store
// export default function configureStore() {
export default function() {
    // const store = createStore(reducer, devToolsEnhancer({ trace: true })) <- the default way using redux-devtools-enhancer
    // return store
    return configureStore({ reducer }) // <- using redux toolkit
    // automatically sets up the store to talk to redux dev tools. also allows to dispatch async actions
}