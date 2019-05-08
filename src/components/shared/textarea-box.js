import React from 'react'
import classNames from 'classnames'

export const TextAreaBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  var cls = classNames({
    'form-control': true,
    'is-invalid': touched[field.name] && errors[field.name]
  })
    return (
      <div className="input-group">
        <TextArea field={field} props={props} touched={touched} errors={errors} cls={cls} />
      </div>
    )
};

const TextArea = ({ field, props, touched, errors, cls }) =>
  <textarea className={cls}
    invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
    {...field} {...props}
  />
