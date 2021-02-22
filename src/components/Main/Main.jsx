import { Typography } from "@material-ui/core";
import { Color } from "./Color/Color";
import useStyle from "./MainStyle";

export const Main = (props) => {
  const style = useStyle();

  return (
    <div className={style.row}>
      {props.colors.length 
      ? (
        props.colors.map((color) => {
          return (
            <Color
              removeColor={props.removeColor}
              firstColor={color.firstColor}
              secondColor={color.secondColor}
              id={color.id}
              key={color.id}
            />
          );
        })
      ) 
      : (
        <div>
          <Typography variant = "h5" className = {style.title} >You dont have any gradients</Typography>
        </div>
      )}
    </div>
  );
};
