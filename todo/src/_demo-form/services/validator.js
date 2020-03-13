import validation from 'validator'

import ruleBuilder from './ruleBuilder'
import { CHECKBOX, RADIO, SELECT_MULTIPLE, FILE } from '../constants'

import en from '../locales/en.json'

let errors = {}
let eClass = ''

const monitor = (valid, nodeRef, rule, value = '') => {
  if (valid) {
    if (!errors[nodeRef.name]) nodeRef.classList.remove(eClass)
    return
  }

  const errorMsg = en[rule]
    .replace(':attribute', nodeRef.name)
    .replace(':value', value)

  Array.isArray(errors[nodeRef.name]) ?
    errors[nodeRef.name].push(errorMsg) :
    errors[nodeRef.name] = [errorMsg]

  return nodeRef.classList.add(eClass)
}

const validator = (nodeRefs, errorClass = 'v-error') => {
  errors = {}
  eClass = errorClass

  nodeRefs.forEach(nodeRef => {
    const data = nodeRef.getAttribute('data-validator')
    let node
    let found

    if (!data) return

    const rules = ruleBuilder(data)
    rules.forEach(rule => {
      const root = Object.keys(rule)[0]
      switch (root) {
      case 'required':
        node = null
        switch (nodeRef.type) {
        case CHECKBOX:
          node = nodeRef.checked
          break
        case RADIO:
          node = nodeRef.checked
          break
        case SELECT_MULTIPLE:
          node = [].filter
            .call(nodeRef.options, option => option.selected)
            .map(option => option.value).length
          break
        case FILE:
          node = nodeRef.files.length
          break
        default:
          node = nodeRef.value
          break
        }
        monitor(node, nodeRef, root)
        break
      case 'isEmail':
        monitor(validation.isEmail(nodeRef.value), nodeRef, root)
        break
      case 'equals':
        monitor(
          validation.equals(nodeRef.value, rule[root][0]),
          nodeRef,
          root,
          rule[root][0]
        )
        break
      case 'equalTo':
        found = nodeRefs.find(nodeRef => nodeRef.name === rule[root][0])
        monitor(
          validation.equals(nodeRef.value, found.value),
          nodeRef,
          root,
          rule[root][0]
        )
        break
      case 'boolean':
        monitor(validation.isBoolean(nodeRef.value), nodeRef, root)
        break
      default:
        break
      }
    })
  })

  const valid = !Object.keys(errors).length

  return { valid, errors }
}

export default validator
