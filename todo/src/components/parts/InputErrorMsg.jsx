import React from 'react'
import PropTypes from 'prop-types'

const InputErrorMsg = ({ errors, name }) =>
  <>
    {errors &&
      errors[name] &&
      <span>{errors[name][0]}</span>}
  </>

InputErrorMsg.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string
}

export default InputErrorMsg
