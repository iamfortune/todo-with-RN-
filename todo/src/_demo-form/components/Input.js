import React, { useContext } from 'react'

import FormContext from '../contexts/form'

// eslint-disable-next-line react/prop-types
const Input = ({ validator, value, ...rest }) => {
  const formContext = useContext(FormContext)

  return (
    <input
      {...rest}
      data-validator={validator}
      defaultValue={value}
      onChange={formContext.listenChange}
      ref={node => formContext.setNodeRef(node)}
    />
  )
}

export default Input
