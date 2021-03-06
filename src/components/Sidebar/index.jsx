import {
  Container,
  SlickBar,
  Item,
  Text
} from "./style";
import { useHistory } from "react-router-dom";

import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { useUsuarios } from "../../providers/Usuarios";

const Sidebar = ({ click, setClick }) => {
  const history = useHistory();

  const {logout} = useUsuarios()

  const Logout = () => {
    logout()
    history.push('/loginAdm')
  }

  return (
    <>
      <Container>
        <SlickBar clicked={click}>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/dashboardAdm");
            }}
            activeClassName="active"
          >
            <AiOutlineHome size={40} />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/associados");
            }}
            activeClassName="active"
          >
            <RiGroupLine size={40}/>
            <Text clicked={click}>Associados</Text>
          </Item>
          <Item
            onClick={() => {
              history.push("/gerenciamento");
            }}
            activeClassName="active"
          >
            <MdAttachMoney size={40} />
            <Text clicked={click}>Gerenciar Pagamentos</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/solicitacoesAdm");
            }}
            activeClassName="active"
          >
            <BiPhoneCall size={40} />
            <Text clicked={click}>Solicitações</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/cadastros");
            }}
            activeClassName="active"
          >
            <CgPerformance size={40} />
            <Text clicked={click}>Medidores</Text>
          </Item>
          <Item
            onClick={() => Logout()}
            activeClassName="active"
          >
            <AiOutlinePoweroff size={40} />
            <Text clicked={click}>Sair</Text>
          </Item>
        </SlickBar>
      </Container>
    </>
  );
};

export default Sidebar;
