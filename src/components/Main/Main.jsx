import { IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Color } from "./Color/Color";
import useStyle from "./MainStyle";

export const Main = (props) => {
  const style = useStyle();

  return (
    <div className={style.row}>
      {props.colors.length &&
        props.colors.map((color) => {
          return (
            <Color removeColor = {props.removeColor} firstColor = {color.firstColor} secondColor = {color.secondColor} id = {color.id} key = {color.id} />
          );
        })}
    </div>
  );
};
