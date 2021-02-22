import { connect } from "react-redux"
import { Main } from "./Main"
import { removeColor } from "../../redux/main-reducer"

const MainContainer = (props) => {
    return (
        <Main { ...props } date-testid = "main" />
    )
}

let mapStateToProps = (state) => {
    return {
        colors: state.main.colors
    }
}

export default connect (mapStateToProps, {removeColor})(MainContainer)