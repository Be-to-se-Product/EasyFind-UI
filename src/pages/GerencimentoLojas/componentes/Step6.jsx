import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormContext from "@/context/Form/FormContext";
import Button from "@componentes/Button/Button";
import { converterInputImageToBase64 } from "@utils/conversores";
import IconCam from "@assets/cam-picture.png";
const Step6 = () => {
  const { storage, prevStep, saveEstabelecimento, currentStep } =
    useContext(FormContext);
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      imagem: [],
    },
  });

  const slot = useRef(null);
  const imagem = watch("imagem");
  const removerFoto = () => {
    setValue("imagem", []);
    slot.current.src = "";
  };

  const submit = (data, callback) => {
    const metodosPagamento = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        metodosPagamento.push(key);
      }
    }
    callback?.({ ...storage, ...data });
  };

  const next = () => {
    handleSubmit((data) => {
      submit(data, saveEstabelecimento);
    })();
  };

  const prev = () => {
    handleSubmit((data) => {
      submit(data);
    })();
    prevStep();
  };

  const [isApplyDefault, setIsApplyDefault] = useState(false);
  useEffect(() => {
    if (!isApplyDefault && Object.keys(storage).length > 0) {
      if (storage?.images) {
        (async () => {
          const base64 = await converterInputImageToBase64(storage?.images[0]);
          slot.current.src = base64;
        })();
      }

      setIsApplyDefault(true);
    }
    // eslint-disable-next-line
  }, [storage]);

  useEffect(() => {
    if (imagem?.length > 0) {
      (async () => {
        const file = imagem[0];
        const base64 = await converterInputImageToBase64(file);
        slot.current.src = base64;
      })();
    }
  }, [imagem]);
  return (
    <form
      className={`relative  flex-col gap-y-8 ${
        currentStep() != 5 && "hidden"
      } `}
    >
      <div className="text-center">
        Insira uma imagem para o seu estabelecimento
      </div>
      <div className="flex items-center justify-center gap-y-4 ">
        <div className="flex flex-col gap-y-1 items-center justify-center h-80 relative">
          <img
            src={""}
            ref={slot}
            alt=""
            className="h-full w-80 relative object-cover border-2 top-8 rounded-full z-10"
          />
          <img src={IconCam} alt="" className="absolute w-20 mt-12 z-0" />
          <label
            htmlFor="imagem1"
            className=" h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all rounded-full w-80 cursor-pointer top-8  "
          >
            <span className="text-white-principal font-semibold">
              Clique aqui para editar
            </span>
          </label>
          <input
            id="imagem1"
            type="file"
            className="h-full w-80 absolute top-0 opacity-0 "
            {...register("imagem")}
          />
        </div>
        <div>
          <Button
            type="button"
            variants={{
              class: " absolute right-[-150px] w-max",
            }}
            onClick={removerFoto}
          >
            Remover Foto
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-14 gap-x-4">
        <Button type="button" onClick={prev}>
          Retroceder
        </Button>
        <Button type="button" onClick={next}>
          Finalizar Cadastro
        </Button>
      </div>
    </form>
  );
};

export default Step6;
