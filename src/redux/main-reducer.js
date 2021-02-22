const SET_COLORS = "SET_COLORS"
const CREATE_COLOR = "CREATE_COLOR"
const REMOVE_COLOR = "REMOVE_COLOR"
const SET_EDIT_COLOR = "SET_EDIT_COLOR"

const initialState = {
    colors: [
        {id: 1, firstColor: "#e66465", secondColor: "#9198e5"},
        {id: 2, firstColor: "#565696", secondColor: "#00d4ff"},
    ],
    firstColor: "",
    secondColor: "",
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return { ...state, colors: action.colors }
        case CREATE_COLOR:
            return {
                ...state,
                colors: [ ...state.colors, action.payload ]
            }
        case REMOVE_COLOR:
            return {
                ...state,
                colors: [...state.colors.filter((color) => color.id !== action.id)],
            };
        case SET_EDIT_COLOR:
            return { ...state, firstColor: action.firstColor, secondColor: action.secondColor }
        default:
            return state
    }
}

export const setColors = (colors) => ( { type: SET_COLORS, colors } )
export const createColor = (id, firstColor, secondColor) => ( { type: CREATE_COLOR, payload: { id, firstColor, secondColor } } )
export const removeColor = (id) => ( { type: REMOVE_COLOR, id } )
export const setEditColor = (id) => ( { type: SET_EDIT_COLOR, id } )
