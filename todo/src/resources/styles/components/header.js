import Styled from 'styled-components'

const Header = Styled.header`
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
  nav ul {
    display: flex;
    justify-content: center;
    li {
      &:first-child a { border-radius: 3px 0 0 3px; }
      button,
      &:last-child a { border-radius: 0 3px 3px 0; }
      a { display: block; }
      button,
      a {
        padding: 7px 15px;
        background-color: #f3f3f3; 
        color: rgba(55, 55, 58, 1);
        transition: background-color 0.2s ease;
      }
      a.active,
      a:hover,
      button:hover { background-color: #ececec; }
    }
  }
`

const St = {
  Header
}

export default St
