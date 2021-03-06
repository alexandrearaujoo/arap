import {Form} from "./style";
import Input from "../Input";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSolicitacoes } from "../../providers/Solicitacoes";
import {AiOutlineCloseCircle } from "react-icons/ai";

const ModalSolicitacaoNovoAssociado = ({ setShowModalNovoAssociado }) => {
  const { sendRequest } = useSolicitacoes();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    description: yup.string().required("Campo Obrigatorio"),
    tel: yup.string().required("Campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    sendRequest(data, "623d15e7c2c87d2dedd7bd19");
    setShowModalNovoAssociado(false)
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ButtonAdd onClick={() => setShowModalNovoAssociado(false)} icon={AiOutlineCloseCircle} />
        <h2>Solicitar associação</h2>
        <span>Informe seu <strong>Nome</strong> e <strong>Endereço</strong> no campo descrição.</span>
        <Input
          label="Titulo"
          name="title"
          error={errors.title?.message}
          register={register}
          bordercolor={`var(--color-secondary)`}
        />
        <Input
          label="Descrição"
          name="description"
          error={errors.description?.message}
          register={register}
          bordercolor={`var(--color-secondary)`}
        />
        <Input
          label="Telefone"
          name="tel"
          error={errors.tel?.message}
          register={register}
          bordercolor={`var(--color-secondary)`}
        />
        <Button
          backgroundColor="#4A5292"
          type="submit"
          margin="0px"
          padding="0px 5px"
        >
          Salvar
        </Button>
      </Form>
    </>
  );
};

export default ModalSolicitacaoNovoAssociado;
