import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import Lista from "../../components/Listas";
import Header from "../../components/Header";
import { useSolicitacoes } from "../../providers/Solicitacoes";
import { AiOutlineMenu } from "react-icons/ai";
import Main from "../../components/Main";
import Blocker from "../../components/Blocker";
import FormModalAssociados from "../../components/FormModalAssociados";
import Busca from "../../components/Busca";
import DivLista from "../../components/DivLista";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdPersonAdd } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import ButtonAdd from "../../components/ButtonAdd";
import ModalInfoSolicitacoes from "../../components/ModalInfoSolicitacoes";

const Solicitacoes = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInfos, setShowInfos] = useState(false);
  const { solicitacoes, infosSolicitacoes, infoSolicitacoes} = useSolicitacoes();


  const [busca, setBusca] = useState(""); // Armazena dados da busca
  const [arrayBusca, setArrayBusca] = useState([]);
  const [status, setStatus] = useState("");
 
  let array = solicitacoes;

   // Exibe o Formulario de cadastro associado
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const onSubmitBsk = (e) => {
    e.preventDefault();
    const filter = solicitacoes.filter((solic) =>
      solic.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase().trim())
    );
    setArrayBusca(filter);
    setBusca("");
    filter.length < 1 && toast.error("Não encontrei nenhuma referência!");
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
    let status = e.target.value;
    status === "Status..." || status === "Todos"
      ? setArrayBusca(solicitacoes)
      : setArrayBusca(
          solicitacoes.filter((solic) => solic.status === status)
        );
  };

  arrayBusca.length > 0
    ? (array = arrayBusca)
    : status
    ? (array = arrayBusca)
    : (array = solicitacoes);

  const handleShowInfos = () => setShowInfos(!showInfos);

  const handleInfoSolicitacoes = (id) => {
    infosSolicitacoes(id);
  };

  console.log(array);
  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Main colunm>
        <Container>
          <MotionDiv>
            {showForm && (
              <Blocker>
                <FormModalAssociados handleClick={handleClick} />
              </Blocker>
            )}

            <Busca
              handleClick={handleClick} // Componente de busca
              setBusca={setBusca}
              busca={busca}
              setStatus={setStatus}
              status={status}
              changeStatus={changeStatus}
              onSubmit={onSubmitBsk}
              label="Associado"
              icon={MdPersonAdd}
            />

            {showInfos && (
              <ModalInfoSolicitacoes 
              setShowInfos={setShowInfos}
              infos={infoSolicitacoes} 
              handleClick={handleShowInfos} />
            )}
            <DivLista
              title1="Nome"
              title2="Data"
              title3="Status"
              title4="Ações"
            >
              {array.map((itens) => (
                <Lista
                  info1={<span>{itens.name}</span>}
                  info2={<span>{itens.createdAt.slice(0,10).split('-').reverse().join('/')}</span>}
                  info3={
                    itens.status === "Pendente" ? (
                      <div className="inativo"></div>
                    ) : (
                      <div className="ativo"></div>
                    )
                  }
                  info4={
                    <div>
                      <ButtonAdd
                        color="#000"
                        icon={BsInfoSquare}
                        onClick={() => {
                        handleShowInfos();
                        handleInfoSolicitacoes(itens._id)
                        }}
                      ></ButtonAdd>
                    </div>
                  }
                />
              ))}
            </DivLista>
          </MotionDiv>
        </Container>
      </Main>
    </>
  );
};

export default Solicitacoes;
