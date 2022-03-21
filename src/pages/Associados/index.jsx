import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import FormModalAssociados from "../../components/FormModalAssociados";
import Blocker from "../../components/Blocker";
import { useState } from "react";
import Header from "../../components/Header";
import { BsInfoSquare } from "react-icons/bs";
import ButtonAdd from "../../components/ButtonAdd";
import Busca from "../../components/Busca";
import { AiOutlineMenu } from "react-icons/ai";
import {useAssociados} from '../../providers/Associados'
import ModalInfoUser from "../../components/ModalInfoUser";


const Associados = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInfos, setShowInfos] = useState(false)
  const {associados, infosUser, infoUser} = useAssociados()

  const [busca, setBusca] = useState("") // Armazena dados da busca
  const [arrayBusca, setArrayBusca] = useState ([])
  const [status, setStatus] = useState ("")

  let array = associados
  

  // Exibe o Formulario de cadastro associado
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setArrayBusca(associados.filter((associado)=>associado.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase().trim())))
    setBusca("")
  }


  const changeStatus = (e) =>{
    setStatus(e.target.value)
    let status = e.target.value
    status === 'Status...' || status === 'todos' ? setArrayBusca(associados) : 
    setArrayBusca(associados.filter((associado)=>associado.status === status))

  }

  arrayBusca.length > 1 ? array = arrayBusca : status ? array = arrayBusca : array = associados
  
  const handleShowInfos = () => setShowInfos(!showInfos)

  const handleInfoUser = (id) => {
    infosUser(id)
  }

  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Container>
        <MotionDiv>
          {/* <h2>Cadastrar Associados</h2> */}
          {showForm && <Blocker><FormModalAssociados handleClick={handleClick}/></Blocker>}
         
          <Busca handleClick={handleClick} // Componente de busca
                  setBusca={setBusca}
                  busca={busca}
                  setStatus={setStatus}
                  status={status}
                  changeStatus={changeStatus}
                  onSubmit={onSubmit}
                  label='Associado'
                />
         
          {showInfos && <ModalInfoUser infos={infoUser} handleClick={handleShowInfos}/>}
          <DivLista
            title1="Nome"
            title2="Status"
            title3="Débitos"
            title4="Ações"
          >
            {associados.map((itens) => (
              <Lista key={itens.id}
                info1={<span>{itens.name}</span>}
                info2={<div></div>}
                info3={"Devedor"}
                info4={<ButtonAdd icon={BsInfoSquare} onClick={() => {
                  handleShowInfos()
                  handleInfoUser(itens._id)
                }}></ButtonAdd>}
              />
            ))}

            
          </DivLista>
        </MotionDiv>
      </Container>
    </>
  );
};

export default Associados;
