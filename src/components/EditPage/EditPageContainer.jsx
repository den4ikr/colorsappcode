import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { EditPage }from "./EditPage"
import { editColor } from "../../redux/main-reducer"

const EditPageContainer = (props) => {
    return (
        <EditPage { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        colors: state.main.colors,
    }
}

const withUrlDataContainerCompoents = withRouter (EditPageContainer)
export default connect (mapStateToProps, {editColor})(withUrlDataContainerCompoents)