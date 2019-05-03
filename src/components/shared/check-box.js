import React from 'react'
import classNames from 'classnames'

export const CheckBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  var cls = classNames({
    'form-check-input':true,
    'is-invalid': touched[field.name] && errors[field.name]
  })

  return (
    <div className="form-check">
      <Check field={field} props={props} touched={touched} errors={errors} cls={cls} />
      <label className="form-check-label" htmlFor={prompt.name}>
          {props.label}
      </label>
    </div>
  )
};

const Check = ({ field, props, touched, errors, cls }) =>
  <input className={cls}
    invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
    {...field} {...props}
  />
