import * as actions from './actionTypes'

// in redux, reducers HAVE to be pure
let lastId = 0

export default function reducer(state = [], action) {
    switch(action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                // payload should only contain minimum info needed to update the system.
                // that's why in this case, we're not passing the id and resolved (they're been computed here in the reducer) cause this is where the business logic is implemented
                {
                    id: ++lastId, // everytime we add a bug, we're going to implement lastID first then put it as the value of the id property
                    description: action.payload.decscription,
                    resolved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)

        case actions.BUG_RESOLVED:
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true}
                )

        default:
            return state
    }
}