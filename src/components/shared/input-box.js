import React from 'react'
import classNames from 'classnames'

export const InputBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  var cls = classNames({
    'form-control': true,
    'is-invalid': touched[field.name] && errors[field.name]
  })

  if (props.prefix) {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">{props.prefix}</span>
        </div>
        <TextBox field={field} props={props} touched={touched} errors={errors} cls={cls} />
      </div>
    )
  }
  else {
    return (
      <div className="input-group">
        <TextBox field={field} props={props} touched={touched} errors={errors} cls={cls} />
        <FloatingLabel props={props} />
      </div>
    )
  }
};

const TextBox = ({ field, props, touched, errors, cls }) =>
  <input className={cls}
    invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
    {...field} {...props}
  />

const FloatingLabel = ({props}) => 
  props.FloatingLabel ? <label htmlFor={props.htmlFor}>{props.Label}</label> : null
