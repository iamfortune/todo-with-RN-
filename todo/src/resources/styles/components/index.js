import Styled, { css } from 'styled-components'

let styles

const Container = Styled.div`
  width: 80%;
  padding: 20px;
  margin: auto;
`

const FormWrapper = Styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
`

const Field = Styled.div`
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    input {
      width: 100%;
      height: 40px;
      padding: 0 10px;
      border: 1px solid #e8e8e8;
      border-radius: 3px;
      &.v-error { border-color: #e07d7d; }
      &.v-error ~ span { color: #e07d7d; }
    }
    span {
      padding: 5px 0 0 0;
      display: block;
      font-size: 13px;
    }
    button {
      padding: 7px 15px;
      background-color: #f3f3f3;
      color: rgba(55,55,58,1);
      transition: opacity 0.2s ease;
      &:hover { opacity: 0.8; }
    }
  }
  &:last-child div { margin-bottom: 0; }
`

styles = css`
  width: 15px;
  path {
    fill: rgba(55, 55, 58, 1);
    transition: all 0.2s ease;
  }
  &:hover path { opacity: 0.8; }
  &.active path { fill: rgba(55, 189, 49, 1) }
`

const CheckIcon = Styled.svg`
  ${styles}
  &.completed { path { fill: #ace07d } }
`

const UpdateIcon = Styled.svg`
  ${styles}
`

const DeleteIcon = Styled.svg`
  ${styles}
`

const St = {
  Container,
  FormWrapper,
  Field,
  CheckIcon,
  UpdateIcon,
  DeleteIcon
}

export default St
