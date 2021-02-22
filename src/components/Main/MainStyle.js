import {makeStyles} from "@material-ui/core/styles";

export default makeStyles ( () => ({
    row: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
    },
    item: {
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    subRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}) )