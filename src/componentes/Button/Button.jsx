/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { tv } from "tailwind-variants";
import { TERipple } from "tw-elements-react";

function Button({ children, variants, ...props }) {
  const button = tv({
    base: "border w-max border-orange-principal disabled:bg-gray-200 disabled:border-none disabled:text-gray-400 text-black-full p-2 text-center w-full    rounded  ",
    variants: {
      colors: {
        primary: "text-black-full  bg-orange-principal ",
        secondary: "bg-none text-white-principal",
        error: "bg-red-500 text-white-principal border-none ",
        close: "bg-red-500 text-white-principal rounded-full ",
        sucess: "bg-green-500 t rounded-md border-none text-white-principal",
        neutral: "bg-gray-75 text-black-full border-gray-400 bg-transparent",
      },
      effects: {
        hover:
          "hover:bg-orange-principal hover:text-white-principal transition-all",
        active: "",
      },
      sizes: {
        xs: "text-xs p-1",
        sm: "text-sm p-2",
        md: "text-md p-2",
        lg: "text-lg p-3",
      },
    },
    defaultVariants: {
      colors: "primary",
      sizes: "sm",
    },
  });

  return (
    <TERipple className="w-full">
      <button type="button" className={button(variants)} {...props}>
        {children}
      </button>
    </TERipple>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variantes: PropTypes.object,
};

Button.defaultProps = {
  children: null,
  variantes: {},
};

export default Button;
