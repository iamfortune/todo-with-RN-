import React from 'react'
import PropTypes from 'prop-types'

import GSt from 'resources/styles/components'

const CheckIcon = ({ className }) =>
  <GSt.CheckIcon viewBox="0 0 20 20" className={className}>
    <path d="M5.9,8.1,4.5,9.5,9,14,19,4,17.6,2.6,9,11.2,5.9,8.1ZM18,10a8,8,0,1,1-8-8,7.8,7.8,0,0,1,2.2.3L13.8.7A12.17,12.17,0,0,0,10,0,10,10,0,1,0,20,10Z" />
  </GSt.CheckIcon>

CheckIcon.propTypes = {
  className: PropTypes.string
}

export default CheckIcon
