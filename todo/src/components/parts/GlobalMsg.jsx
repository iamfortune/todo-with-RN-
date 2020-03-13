import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { TimelineMax, Power4 } from 'gsap'

import { runGlobalMsg } from '@redux/actions'

import St from 'resources/styles/components/globalMsg'

const GlobalMsg = ({ message, className }) => {
  const dispatch = useDispatch()

  const containerRef = useRef()

  useEffect(() => {
    const { current: container } = containerRef

    new TimelineMax()
      .to(container, 0.5, { y: 0, alpha: 1, ease: Power4.easeOut }, 0)
      .to(container, 1.5, { y: 100, alpha: 0, ease: Power4.easeOut }, 2)

    const timeoutId = setTimeout(() => { dispatch(runGlobalMsg()) }, 2500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <St.GlobalMsg className={className} ref={containerRef}>
      <p>{message}</p>
    </St.GlobalMsg>
  )
}

GlobalMsg.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default GlobalMsg