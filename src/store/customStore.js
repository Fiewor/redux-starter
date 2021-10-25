//  simple technique for implementing a private property in javascript

function createStore(reducer){
    let state
    let listeners = [] //  an array beacause we can have multiple UI components subscribing to the store

    function subscribe(listener) {
        // listener() we don't do this, because when a UI component subscribes to the store, the function passed to subscribe doesn't get called immediately. it's called when the state of the store has changed
        listeners.push(listener)
    }

    function dispatch(action){
        // call the reducer to get the new state
        state = reducer(state, action)

        for(let i = 0; i < listeners.length; i++) {
            listeners[i]( )
        }
        // for (listener in listeners){
        //     listener()
        // }
    }

    function getState(){ // this function is referred to as a getter because with it, we can get the value of the variable
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}

export default createStore(reducer)