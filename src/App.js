import { Form } from './components/FormModal/style';
import Header from './components/Header';
import Input  from './components/Input';
import { GlobalStyle } from './style/global';

function App() {
  return (
      <>
        <GlobalStyle />
        <Header/>
        <Form>
         <Input/>

        </Form>
      </>
  );
}

export default App;
