import React from 'react'
import classNames from 'classnames'
import './input-box.scss'

export const InputBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  var cls = classNames({
    'form-control': true,
    'is-invalid': touched[field.name] && errors[field.name]
  })

  var clsig = classNames({
    'input-group':true,
    'floating-label':props.floatingLabel,
    'prefix-text':props.prefix
  })

  if (props.prefix) {
    return (
      <div className={clsig}>
        <div className="input-group-prepend">
          <span className="input-group-text">{props.prefix}</span>
        </div>
        <TextBox field={field} props={props} touched={touched} errors={errors} cls={cls} />
        <FloatingLabel props={props} />
      </div>
    )
  }
  else {
    return (
      <div className={clsig} >
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

const FloatingLabel = ({props}) => {
  const style = { left: props.floatingLeft}
  return(
    props.floatingLabel ? <label style={style} htmlFor={props.name}>{props.placeholder}</label> : null
  )
}