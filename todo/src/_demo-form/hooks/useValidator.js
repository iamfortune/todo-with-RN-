import validator from '../services/validator'

const useValidator = (getNodeRefs, getSubmitted, setValidator, errorClass) => {
  const validate = () => validator(getNodeRefs(), errorClass)

  const listenChange = () => {
    if (!getSubmitted()) return
    setValidator({ ...validate(), submitted: getSubmitted() })
  }

  return { listenChange, validate }
}

export default useValidator
