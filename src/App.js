import styled from 'styled-components';
import marked from 'marked';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
   // listen for when page is loaded, or if the site uses React, when all the components are loaded
  console.log(chrome);
  }, []);
  return (
    <AppWrapper>
      <header>
        <h5>Hello from React App</h5>
      </header>
    </AppWrapper>
  );
}
const AppWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  bottom: 0;
  background: #fff;
  border-right: 1px solid #eee;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
`
export default App;
