import { connect } from "react-redux"
import { Main } from "./Main"

const MainContainer = (props) => {
    return (
        <Main { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        colors: state.main.colors
    }
}

export default connect (mapStateToProps)(MainContainer)