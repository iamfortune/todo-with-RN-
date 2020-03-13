import { CHECKBOX, RADIO, SELECT_MULTIPLE, FILE } from '../constants'

export default nodeRefs => {
  const data = {}

  nodeRefs.forEach(nodeRef => {
    switch (nodeRef.type) {
    case CHECKBOX:
      if (nodeRef.checked) data[nodeRef.name] = nodeRef.value
      break
    case RADIO:
      if (nodeRef.checked) data[nodeRef.name] = nodeRef.value
      break
    case SELECT_MULTIPLE:
      data[nodeRef.name] = [].filter
        .call(nodeRef.options, option => option.selected)
        .map(option => option.value)
      break
    case FILE:
      data[nodeRef.name] = nodeRef.files
      break
    default:
      data[nodeRef.name] = nodeRef.value
      break
    }
  })

  return data
}
