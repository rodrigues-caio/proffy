import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
  namePage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
  namePage,
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <div className="top-bar-content">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          {namePage && <h2>{namePage}</h2>}
          <img src={logoImg} alt="Proffy" />
        </div>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
