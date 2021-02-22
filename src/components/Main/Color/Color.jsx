import { IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { NavLink } from "react-router-dom";
import useStyle from "../MainStyle";

export const Color = (props) => {
  const style = useStyle();

  const removeColor = () => {
    props.removeColor(props.id);
  };

  return (
    <div
      style={{
        background: `linear-gradient(to right, ${props.firstColor}, ${props.secondColor})`,
        minHeight: "70px",
        marginTop: "25px",
        maxWidth: "500px",
        minWidth: "350px",
      }}
    >
      <div className={style.subRow}>
        <Typography className={style.item}>{props.firstColor}</Typography>
        <Typography className={style.item}>{props.secondColor}</Typography>
      </div>
      <div className={style.subRow}>
        <NavLink to = {`/edit/${props.id}`}>
            <IconButton className={style.item}>
            <EditIcon color="primary"/>
            </IconButton>
        </NavLink>
        <IconButton className={style.item} onClick={removeColor}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
};
