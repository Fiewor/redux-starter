import { createSlice } from "@reduxjs/toolkit"

let lastId = 0

const projectSlice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        projectsAdded: (projects, action) => {
            projects.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})
export const { projectsAdded } = projectSlice.actions
export default projectSlice.reducer