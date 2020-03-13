import Styled from 'styled-components'

const TodoContainer = Styled.section`
  width: 800px;
  margin: auto;
  padding: 20px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  border-radius: 3px;
  h1 {
    text-align: center;
    padding: 20px;
    font-size: 28px;
  }
`

const TodoListContainer = Styled.div`
  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      flex-flow:  wrap;
      border-bottom: 1px solid #e8e8e8;
      padding: 10px 5px;
      &:last-child { border: none; }
      form,
      p {
        display: flex;
        flex: 10;
      }
      form div { width: 100%; }
      span {
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
        flex: 2;
        button { margin: 0 10px; }
      }
    }
  }
`

const St = {
  TodoContainer,
  TodoListContainer
}

export default St
