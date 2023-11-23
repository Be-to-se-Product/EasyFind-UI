import Card from "./componentes/Card";
import Modal from "../../componentes/Modal/Modal";
import FormAdicionar from "./componentes/FormAdicionar";
import FormUpdate from "./componentes/FormUpdate";
import ContentDelete from "./componentes/ContentDelete";
import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { MenuItem, Select } from "@mui/material";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { descriptografar } from "../../utils/Autheticated";

injectStyle();

const GerenciamentoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [stateForm, setStateForm] = useState(null);
  const [state, setState] = useState(0);
  const idEstabelecimento = descriptografar(sessionStorage.getItem("ID"));


  const getProdutos = () => {
    toast.loading("Carregando...");
    api
      .get("/produtos/estabelecimento/" + idEstabelecimento)
      .then((res) => {
        toast.dismiss();
        setProdutos(res.data.length == 0 ? [] : res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {

    getProdutos();
  }, []);

  const openModal = (tipo, id) => {
    setIsVisibleModal(true);
    changeModal(tipo, id);
  };

  const closeModal = () => {
    setIsVisibleModal(false);
  };

  const changeModal = (modal, id) => {
    switch (modal) {
      case "add":
        setStateForm(
          <FormAdicionar
            key={state}
            setState={setState}
            fecharModal={closeModal}
            getProdutos={getProdutos}
          />
        );
        break;
      case "update":
        console.log(produtos.find((produto) => produto.id === id));
        setStateForm(
          <FormUpdate
            fecharModal={closeModal}
            produto={produtos.find((produto) => produto.id === id)}
            getProdutos={getProdutos}
          />
        );
        break;
      case "delete":
        setStateForm(
          <ContentDelete
            fecharModal={closeModal}
            id={id}
            getProdutos={getProdutos}
          />
        );
        break;
      default:
        return "";
    }
  };

  return (
    <>
      <main className="flex h-screen bg-black-300">
        <MenuComerciante />
        <div className="h-screen min-w-[350px] max-w-[350px] bg-gray-300"></div>
        <section className="w-full  text-2xl mx-[33px]">
          <div className="flex py-20 justify-between ">
            <div className="  relative w-[346px] h-max bg- bg-white-principal rounded-lg  shadow-lg">
              <div className="absolute right-5 top-0 w-6 h-full flex  items-center justify-center">
                <img src={searchIcon} alt="" className="w-full " />
              </div>
              <input
                type="text"
                className=" w-full text-base  rounded-lg px-4 py-2  outline-none  bg-transparent"
                placeholder="Pesquisar produto"
              />
            </div>
            <div className="flex gap-x-4">
              <div className="   w-[193px] h-max bg-white-principal rounded-lg  shadow-lg">
                <Select
                  id="demo-simple-select"
                  renderValue={(data) => {
                    if (data.length === 0) {
                      return <em>Selecione um taf</em>;
                    }
                  }}
                  className="w-full h-[42px]"
                >
                  <MenuItem value={"Camiseta"}>Roupas</MenuItem>
                  <MenuItem value={"Plastico"}>Eletronicos</MenuItem>
                  <MenuItem value={"Roupa"}>Utensilhos</MenuItem>
                </Select>
              </div>

              <div className="relative w-[193px] h-max bg-white-principal rounded-lg  shadow-lg">
                <Select
                  id="demo-simple-select"
                  renderValue={(data) => {
                    if (data.length === 0) {
                      return <em>Selecione um tag</em>;
                    }
                  }}
                  className="w-full h-[42px]"
                >
                  <MenuItem value={"Camiseta"}>Roupas</MenuItem>
                  <MenuItem value={"Plastico"}>Eletronicos</MenuItem>
                  <MenuItem value={"Roupa"}>Utensilhos</MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8   ">
            <div className="flex justify-center items-center relative  w-full">
              <button
                className="px-4 py-2 bg-orange-principal absolute left-0  text-white-principal rounded-lg text-xl font-medium"
                onClick={() => openModal("add")}
              >
                Cadastar Produto
              </button>
              <h2 className="text-2xl font-medium">Produtos Cadastrados</h2>
            </div>

            <div className="content-product flex gap-x-6 gap-y-8 flex-wrap h-full overflow-scroll">
              {produtos.map((produto) => (
                produto.isAtivo ?
                  
                <Card
                  key={produto.id}
                  produto={produto}
                  openModal={openModal}
                /> : null
                
              ))}
            </div>
          </div>
        </section>
      </main>
      <Modal isVisible={isVisibleModal}>{stateForm}</Modal>
      <ToastContainer />
    </>
  );
};

export default GerenciamentoProdutos;
