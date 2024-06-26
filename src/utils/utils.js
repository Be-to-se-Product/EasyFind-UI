export const logout = (navigate) => {
  sessionStorage.clear();
  navigate("/");
};

export const getQueryParams = (searhParams) => {
  const params = new URLSearchParams(searhParams);
  return Object.fromEntries(params);
};

export const ENUM_METODO_PAGAMENTO = {
  "Cartão de Crédito": "/cartao.png",
  "Cartão de Débito": "/cartao.png",
  Boleto: "/boleto.png",
  Pix: "/pix.png",
  Dinheiro: "/dinheiro.png",
  Cheque: "/cheque.png",
  PicPay: "/picpay.png",
  Bitcoin: "/bitcoin.png",
  PayPal: "/paypal.png",
  "Vale Refeição": "/refeicao.svg",
  "Vale Alimentação": "/alimentacao.png",
  Outros: "Outros.png",
};

export const TIPO_FLUXO = {
  RETIRE_LOJA: "Retire na loja",
  PAGUE_LOJA: "Pague na loja",
};
