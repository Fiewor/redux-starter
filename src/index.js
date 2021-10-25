// import store from './store/store'
import configureStore from './store/configureStore'
// import { bugAdded, bugResolved } from './actionCreator'
import * as actions from './store/projects'

const store = configureStore()
// // subscribing to the store - this function gets called anytime the state of the store gets changed. done in UI layer
store.subscribe(() => { // UI components should subscribe to the store so they get notified when state of store changes
    console.log("Store changed!", store.getState())
})
// // subscribe method returns a method for unsubscribing from the store
// // if current UI component is not going to be visible, unsubscribe from store

// // to change the state of a store, you have to dispatch an action
// // sending every action through the same entry point (what does this mean?)
store.dispatch(actions.bugAdded({ description: "Bug 1" })) // this code has been simplified thanks to the actionCreator
store.dispatch(actions.bugAdded({ description: "Bug 2" }))
store.dispatch(actions.bugAdded({ description: "Bug 3" }))
store.dispatch(actions.bugResolved({ id: 1 }))

store.dispatch(actions.projectsAdded({ name: "Project 1" }))

// unsubscribe() // we won't get notified the second time the store changes (below) because we're unsubscribing here

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
// console.log(store.getState())

// import store from './customStore'
// import * as actions from './actionCreator'

// store.sunscribe(()=>{
//     console.log("Store changed!");
// })

// store.dispatch(actions.bugAdded('Bug 1'))
// store.dispatch(actions.bugAdded('Bug 2'))
// store.dispatch(actions.bugResolved(1))
// store.state = 1
// console.log(store.state);