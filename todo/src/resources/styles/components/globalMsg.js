import Styled from 'styled-components'

const GlobalMsg = Styled.div`
  transform: translate(0px, 100px); 
  opacity: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 3px 3px 0 0;
  &.error { 
    border-color: #e07d7d; 
    p { color: #e07d7d; }
  }
  &.success { 
    border-color: #ace07d; 
    p { color: #ace07d; }
  }
`

const St = {
  GlobalMsg
}

export default St
