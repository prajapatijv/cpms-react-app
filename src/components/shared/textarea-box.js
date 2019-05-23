import React from 'react'
import classNames from 'classnames'
import './textarea-box.scss'

export const TextAreaBox = ({
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
    'floating-label':props.floatinglabel,
    'prefix-text':props.prefix
  })

    return (
      <div className={clsig}>
        <TextArea field={field} props={props} touched={touched} errors={errors} cls={cls} />
        <FloatingLabel props={props} />
      </div>
    )
};

const TextArea = ({ field, props, touched, errors, cls }) =>
  <textarea className={cls}
    invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
    {...field} {...props}
  />

const FloatingLabel = ({props}) => {
  const style = { left: props.floatingLeft}
  return(
    props.floatinglabel ? <label style={style} htmlFor={props.name}>{props.placeholder}</label> : null
  )
}