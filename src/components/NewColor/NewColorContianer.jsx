import { connect } from "react-redux"
import { NewColor } from "./NewColor"
import { createColor } from "../../redux/main-reducer"

const NewColorContianer = (props) => {
    return (
        <NewColor { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect (mapStateToProps, {createColor}) (NewColorContianer)