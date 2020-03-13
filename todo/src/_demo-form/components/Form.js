import React from 'react'

import FormContext from '../contexts/form'
import useForm from '../hooks/useForm'
import useValidator from '../hooks/useValidator'

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit, setValidator = () => { }, errorClass, ...rest }) => {
  const {
    setNodeRef,
    getNodeRefs,
    getNodeRefsData,
    setSubmitted,
    getSubmitted,
    resetFormState
  } = useForm()

  const { listenChange, validate } = useValidator(
    getNodeRefs,
    getSubmitted,
    setValidator,
    errorClass
  )

  const listenSubmit = e => {
    const submitted = true
    setSubmitted(submitted)
    const validator = validate()
    setValidator({ ...validator, submitted })
    return onSubmit(e, getNodeRefsData(), validator, resetFormState)
  }

  return (
    <FormContext.Provider value={{ setNodeRef, listenChange }}>
      <form {...rest} onSubmit={listenSubmit} />
    </FormContext.Provider>
  )
}

export default Form
