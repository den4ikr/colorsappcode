const SET_COLORS = "SET_COLORS"
const CREATE_COLOR = "CREATE_COLOR"
const REMOVE_COLOR = "REMOVE_COLOR"
const EDIT_COLOR = "EDIT_COLOR"

const initialState = {
    colors: [
        {id: 1, firstColor: "#e66465", secondColor: "#9198e5"},
        {id: 2, firstColor: "#565696", secondColor: "#00d4ff"},
    ],
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return { ...state, colors: action.colors }
        case CREATE_COLOR:
            let newColor = {
                id: action.id,
                firstColor: action.firstColor,
                secondColor: action.secondColor,
            } 
            return {
                ...state,
                colors: [ ...state.colors, newColor ]
            }
        case REMOVE_COLOR:
            return {
                ...state,
                colors: [...state.colors.filter((color) => color.id !== action.id)],
            };
        case EDIT_COLOR:
            return Object.assign({}, state, {
                colors: state.colors.map(color => {
                  if (color.id !== action.id) {
                    return color
                  }
        
                  return Object.assign({}, color, {
                    firstColor: action.firstColor,
                    secondColor: action.secondColor,
                  })
                })
              })
        default:
            return state
    }
}

export const setColors = (colors) => ( { type: SET_COLORS, colors } )
export const createColor = (id, firstColor, secondColor) => ( { type: CREATE_COLOR,  id, firstColor, secondColor  } )
export const removeColor = (id) => ( { type: REMOVE_COLOR, id } )
export const editColor = (id, firstColor, secondColor) => ( { type: EDIT_COLOR, id, firstColor, secondColor } )
