import { useState, useRef } from 'react'

import nodeBuilder from '../services/nodeBuilder'

const useForm = () => {
  const nodeRefs = useRef([])

  const [submitted, setSubmitted] = useState(false)

  const setNodeRef = nodeRef => nodeRefs.current.push(nodeRef)

  const getNodeRefs = () =>
    nodeRefs.current.filter(
      (element, index, array) =>
        array.indexOf(element) === index && element !== null
    )

  const getNodeRefsData = () => nodeBuilder(getNodeRefs())

  const getSubmitted = () => submitted

  const resetFormState = () => {
    const refs = getNodeRefs()
    for (const ref in refs) {
      refs[ref].value = null
    }
  }

  return {
    setNodeRef,
    getNodeRefs,
    getNodeRefsData,
    setSubmitted,
    getSubmitted,
    resetFormState
  }
}

export default useForm
