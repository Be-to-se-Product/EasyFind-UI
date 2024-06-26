import MenuComerciante from "@componentes/MenuComerciante/MenuComerciante.jsx";
import { NavLink, Outlet, useParams } from "react-router-dom";

const LayoutComercinate = () => {
  const { idEstabelecimento } = useParams();
  const options = [
    {
      router: `/comerciante/lojas`,
      icon: (isAtivo) => (
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2V0H17V2H1ZM1 16V10H0V8L1 3H17L18 8V10H17V16H15V10H11V16H1ZM3 14H9V10H3V14ZM2.05 8H15.95L15.35 5H2.65L2.05 8Z"
            fill={isAtivo ? "#ffa500" : "white"}
          />
        </svg>
      ),
      text: "Gerenciar Lojas",
    },
    {
      router: `/comerciante/lojas/${idEstabelecimento}/produtos`,
      icon: (isAtivo) => (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 17.425V10.575L2 7.1V13.95L8 17.425ZM10 17.425L16 13.95V7.1L10 10.575V17.425ZM8 19.725L1 15.7C0.683333 15.5167 0.4375 15.275 0.2625 14.975C0.0875 14.675 0 14.3417 0 13.975V6.025C0 5.65833 0.0875 5.325 0.2625 5.025C0.4375 4.725 0.683333 4.48333 1 4.3L8 0.275C8.31667 0.0916667 8.65 0 9 0C9.35 0 9.68333 0.0916667 10 0.275L17 4.3C17.3167 4.48333 17.5625 4.725 17.7375 5.025C17.9125 5.325 18 5.65833 18 6.025V13.975C18 14.3417 17.9125 14.675 17.7375 14.975C17.5625 15.275 17.3167 15.5167 17 15.7L10 19.725C9.68333 19.9083 9.35 20 9 20C8.65 20 8.31667 19.9083 8 19.725ZM13 6.525L14.925 5.425L9 2L7.05 3.125L13 6.525ZM9 8.85L10.95 7.725L5.025 4.3L3.075 5.425L9 8.85Z"
            fill={isAtivo ? "#ffa500" : "white"}
          />
        </svg>
      ),
      text: "Gerenciar Produtos",
    },

    {
      router: `/comerciante/lojas/${idEstabelecimento}/vendas`,
      icon: (isAtivo) => (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.40499 20C4.90954 20 4.48539 19.8042 4.13257 19.4125C3.77974 19.0208 3.60333 18.55 3.60333 18C3.60333 17.45 3.77974 16.9792 4.13257 16.5875C4.48539 16.1958 4.90954 16 5.40499 16C5.90045 16 6.32459 16.1958 6.67742 16.5875C7.03025 16.9792 7.20666 17.45 7.20666 18C7.20666 18.55 7.03025 19.0208 6.67742 19.4125C6.32459 19.8042 5.90045 20 5.40499 20ZM14.4133 20C13.9179 20 13.4937 19.8042 13.1409 19.4125C12.7881 19.0208 12.6117 18.55 12.6117 18C12.6117 17.45 12.7881 16.9792 13.1409 16.5875C13.4937 16.1958 13.9179 16 14.4133 16C14.9088 16 15.3329 16.1958 15.6857 16.5875C16.0386 16.9792 16.215 17.45 16.215 18C16.215 18.55 16.0386 19.0208 15.6857 19.4125C15.3329 19.8042 14.9088 20 14.4133 20ZM4.63929 4L6.80128 9H13.1071L15.5844 4H4.63929ZM3.7835 2H17.0708C17.4161 2 17.6788 2.17083 17.859 2.5125C18.0392 2.85417 18.0467 3.2 17.8815 3.55L14.6836 9.95C14.5184 10.2833 14.297 10.5417 14.0192 10.725C13.7414 10.9083 13.4374 11 13.1071 11H6.39591L5.40499 13H16.215V15H5.40499C4.72937 15 4.2189 14.6708 3.87358 14.0125C3.52826 13.3542 3.51325 12.7 3.82854 12.05L5.04466 9.6L1.80166 2H0V0H2.9277L3.7835 2Z"
            fill={isAtivo ? "#ffa500" : "white"}
          />
        </svg>
      ),
      text: "Histórico de Vendas",
    },
    {
      router: `/comerciante/lojas/${idEstabelecimento}/pedidos`,
      icon: (isAtivo) => (
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22V0H2V2H16V0H18V22H16V20H2V22H0ZM2 10H4V6H10V10H16V4H2V10ZM2 18H8V14H14V18H16V12H2V18ZM6 10H8V8H6V10ZM10 18H12V16H10V18Z"
            fill={isAtivo ? "#ffa500" : "white"}
          />
        </svg>
      ),
      text: "Pedidos",
    },
  ];

  return (
    <main className="flex bg-background">
      <MenuComerciante isLogo>
        {options.map(({ icon, router, text }) => (
          <NavLink key={router} to={router} end>
            {({ isActive }) => (
              <li
                className={`text-lg flex gap-x-4 mb-5 items-center font-medium ${
                  isActive ? "text-orange-menu" : " text-white-principal "
                }`}
              >
                {icon(isActive)}
                {text}
              </li>
            )}
          </NavLink>
        ))}
      </MenuComerciante>
      <Outlet />
    </main>
  );
};

export default LayoutComercinate;
