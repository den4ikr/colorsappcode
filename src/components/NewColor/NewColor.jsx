import React from "react";
import { Formik, Form, Field } from "formik";
import useStyle from "./NewColorStyle";
import Button from '@material-ui/core/Button';

function validateColor(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (value.length < 3 || value.length > 6) {
    error = "Hex code should be from 3 to 6 characters";
  } else if (value.length > 4 && value.length < 6) {
    error = "Hex code should be from 3 to 6 characters";
  }
  return error;
}

export const NewColor = (props) => {
  const style = useStyle();

  return (
    <div>
      <Formik
        initialValues={{
          firstColor: "",
          secondColor: "",
        }}
        onSubmit={(values) => {
          props.createColor (Date.now (), values.firstColor, values.secondColor)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
                <Field
                className = {style.input}
                placeholder = "Enter first color"
                name="firstColor"
                validate={validateColor}
                pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                />
                {errors.firstColor && touched.firstColor && (
                <div className={style.error}>{errors.firstColor}</div>
                )}
            </div>
            <div>
                <Field
                className = {style.input}
                placeholder = "Enter second color"
                name="secondColor"
                validate={validateColor}
                pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                />
                {errors.secondColor && touched.secondColor && (
                <div className={style.error}>{errors.secondColor}</div>
                )}
            </div>
            <Button className = {style.btn} color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
