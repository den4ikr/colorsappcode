import { AppBar, Typography } from "@material-ui/core"
import useStyle from "./HeaderStyle"
import { NavLink } from "react-router-dom"

export const Header = () => {
    const styles = useStyle ()

    return (
        <AppBar position = "static" className = {styles.appBar}  >
            <Typography variant = "h6" >
                <NavLink to = "/" className = {styles.title} >
                    Gradient App
                </NavLink>
                <NavLink to = "/new" className = {styles.title} >
                    Create Gradient
                </NavLink>
            </Typography>
        </AppBar>
    )
}