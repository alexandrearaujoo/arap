import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import { useAssociados } from "../../providers/Associados";

import Header from "../../components/Header";
import Main from "../../components/Main";
import { Container, ContainerForm } from "./style";
import ModalSolicitacaoNovoAssociado from "../../components/ModalSolicitacaoNovoAssociado";
import Blocker from "../../components/Blocker";

const LoginAssociado = ({ setAuth }) => {
  const [showModalNovoAssociado, setShowModalNovoAssociado] = useState(false);

  const history = useHistory();
  const { loginAssociado, tokenUser, infosUser } = useAssociados();

  const formSchema = yup.object().shape({
    cpf: yup
      .string()
      .min(5, "No minimo 14 caracteres")
      .required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    loginAssociado(data);
    setAuth(true);
  };

  useEffect(() => {
    if (tokenUser !== "") {
      history.push(`/dashboardAssociado`);
    }
  }, [tokenUser]);

  return (
    <>
      <Header text="Voltar" link="/" />
      <Main>
        <Container>
          {showModalNovoAssociado && (
            <Blocker>
              <ModalSolicitacaoNovoAssociado
                setShowModalNovoAssociado={setShowModalNovoAssociado}
              />
            </Blocker>
          )}
          <ContainerForm>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="message-login">
                <h3>Área do Associado</h3>
                <span>
                  Informe o seu CPF, para ter acesso a área do associado com
                  todas as suas funcionalidades.
                </span>
              </div>

              <Input
                label="CPF"
                name="cpf"
                error={errors.cpf?.message}
                register={register}
              />

              <div className="message-buttons">
                <button className="btnLogin" type="submit">
                  Entrar
                </button>
                <div className="message-register">
                  <p> Ainda não é um associado? </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModalNovoAssociado(true)}
                  className="btnRegister"
                >
                  Solicite seu cadastro
                </button>
              </div>
            </form>
          </ContainerForm>
        </Container>
      </Main>
    </>
  );
};

export default LoginAssociado;
