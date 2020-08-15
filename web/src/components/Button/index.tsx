import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
      <button className="button" {...rest}>
        {children}  
      </button>
  );
};

export default Button;