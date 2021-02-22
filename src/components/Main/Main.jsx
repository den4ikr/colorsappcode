import { IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import useStyle from "./MainStyle"

export const Main = (props) => {
  const style = useStyle ()

  return (
    <div className = {style.row} >
      {props.colors.map((color) => {
        return (
          <div
            style={{
              background: `linear-gradient(to right, ${color.firstColor}, ${color.secondColor})`,
              minHeight: "70px",
              marginTop: "25px",
              maxWidth: "500px",
              minWidth: "350px",
            }}
          >
            <div className = {style.subRow} >
                <Typography className = {style.item} >{color.firstColor}</Typography>
                <Typography className = {style.item} >{color.secondColor}</Typography>
            </div>
            <div className = {style.subRow} >
                <IconButton className = {style.item} >
                    <EditIcon color = "primary" />
                </IconButton>
                <IconButton className = {style.item} >
                    <DeleteIcon color = "secondary" />
                </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};
