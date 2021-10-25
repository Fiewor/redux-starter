// a slice of the store - move code from everywhere to here (?)
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit" // returns a function that is really an action creator
let lastId = 0
// creating action creators using redux toolkit
// const bugUpdated = createAction("bugUpdated")
// console.log(bugUpdated({ id: 1 }))

// one redux toolkit function to rule them all
// createSlice internally calls createAction and createReducer
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // actions => action handlers
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.decscription,
                resolved: false
            })
        },

        bugResolved: (bugs, action) => {
            const index = (bugs.findIndex(bug => bug.id === action.payload.id))
            bugs[index].resolved = true
        }
    }
})

// console.log(slice);

// Action creators
// export const bugAdded = createAction("bugAdded")
// export const bugResolved = createAction("bugResolved")
// export const bugRemoved = createAction("bugRemoved")

// bugAdded.type (or bugAdded.toString()) both return the type of the action creator function

// Action types <- this is no longer needed when using this redux toolkit method
// const BUG_ADDED = "bugAdded"
// const BUG_RESOLVED = "bugResolved"
// const BUG_REMOVED = "bugRemoved"

// creating action creators manually
// Action Creators
// export const bugAdded = description => {
//     return {
//         type: BUG_ADDED,
//         payload: {
//             description
//         }
//     }
// }

// export const bugResolved = id => ({
//     type: BUG_RESOLVED,
//     payload: {
//         id
//     }
// })

// Reducer
// using the redux toolkit createReducer function to create a reducer
// export default createReducer([], { // parameters - intital state and object that maps actions to functions that handle those actions
//     // key: value
//     // actions: functions (just like event => event handler)
//     [bugAdded.type]: (bugs, action) => {
//         bugs.push({
//             id: ++lastId,
//             description: action.payload.decscription,
//             resolved: false
//         })
//     },
//     // bugResolved: (bugs, action) => {
//     [bugResolved.type]: (bugs, action) => {
//         const index = (bugs.findIndex(bug => bug.id === action.payload.id))
//         bugs[index].resolved = true
//     }
// })

// manually creating a reducer
// export default function reducer(state = [], action) {
//     switch(action.type) {
//         // case BUG_ADDED: <- replaced this since we're now using the redux toolkit version
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.decscription,
//                     resolved: false
//                 }
//             ]
//         // case BUG_REMOVED:
//         case bugRemoved.type:
//             return state.filter(bug => bug.id !== action.payload.id)
            
//             // case BUG_RESOLVED:
//         case bugResolved.type:
//             return state.map(bug => 
//                 bug.id !== action.payload.id ? bug : {...bug, resolved: true}
//                 )

//         default:
//             return state
//     }
// }
export const {bugAdded, bugResolved} = slice.actions
export default slice.reducer