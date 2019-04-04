import React from 'react'
import { ErrorMessage } from 'formik'

export const InputBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
      <div className="input-group">
          <input className="form-control"
            invalid={!!(touched[field.name] && errors[field.name]) ? "true":"false"}
            {...field} {...props}
          />
          <ErrorMessage name={field.name}>{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
      </div>
  );