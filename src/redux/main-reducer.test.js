import { MainReducer } from "./main-reducer";
import { createColor, removeColor, editColor } from "./main-reducer";


const state = {
    colors: [
        {id: 1, firstColor: "#e66465", secondColor: "#9198e5"},
        {id: 2, firstColor: "#565696", secondColor: "#00d4ff"},
    ],
}

test('new color should be added', () => {
    let action = createColor (0, "#fff", "#000")
    let newState = MainReducer (state, action)
    //expectation
    expect (newState.colors.length).toBe (3)
    expect (newState.colors[2].firstColor).toBe ('#fff')
    expect (newState.colors[2].secondColor).toBe ('#000')
});  

test ('color should be removed', () => {
    let action = removeColor (2)
    let newState = MainReducer (state, action)

    expect (newState.colors.length).toBe (1)
})

test ('color should be edited', () => {
    let action = editColor (1, "#333", "#afa")
    let newState = MainReducer (state, action)

    expect (newState.colors[0].firstColor).toBe ("#333")
    expect (newState.colors[0].secondColor).toBe ("#afa")
})