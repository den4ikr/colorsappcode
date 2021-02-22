const SET_COLORS = "SET_COLORS"
const CREATE_TODO = "CREATE_TODO"

const initialState = {
    colors: [
        {id: 1, firstColor: "#e66465", secondColor: "#9198e5"},
        {id: 1, firstColor: "#565696", secondColor: "#00d4ff"},
    ]
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return { ...state, colors: action.colors }
        case CREATE_TODO:
            return {
                ...state,
                colors: [ ...state.colors, action.payload ]
            }
        default:
            return state
    }
}

export const setColors = (colors) => ( { type: SET_COLORS, colors } )
export const createColor = (id, firstColor, secondColor) => ( { type: CREATE_TODO, payload: { id, firstColor, secondColor } } )
