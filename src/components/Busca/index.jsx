import ButtonAdd from "../ButtonAdd";
import { Container, DivBusca, FormOptions } from "./style";
import InputDefault from "../InputDefault";
import {FaSearch} from 'react-icons/fa' 


const Busca = ({ icon, ...rest }) => {

  // armazena o que foi digitado pelo usuario
  const handleChange = (e) => {
   
    rest.setBusca(e.target.value)
    
  }

  return (
    <Container>
      <DivBusca>
        <form onSubmit={rest.onSubmit}>
          <section>
            <InputDefault label={rest.label}  
                    value={rest.busca}
                    onChange={handleChange}
                    radius="5px 0 0 5px;"
                    />
                <ButtonAdd
                  icon={FaSearch}
                  background='var(--color-secondary)'
                  heigth="40px"
                  radius="0 5px 5px 0;"
                  
                ></ButtonAdd>
          </section>
          
          <FormOptions>
                <select value={rest.status} onChange={rest.changeStatus}>
                  <option value="Todos">Todos</option>
                  {rest.ger === 1 ?
                  <option value="Pendente">Pendente</option>:
                  <option value="Ativo">Ativo</option>}

                  {rest.ger === 1 ?
                  <option value="Pago">Pago</option>:
                  <option value="Inativo">Inativo</option>}
                </select>
          {icon && 
                <ButtonAdd
                  icon={icon}
                  onClick={rest.handleClick}
                  background='var(--color-secondary)'
                  heigth="30px"
                  radius="5px"
                  type='button'
                ></ButtonAdd>}
          </FormOptions>      
       </form>
      </DivBusca>
    </Container>
  );
};
export default Busca;


  
  
