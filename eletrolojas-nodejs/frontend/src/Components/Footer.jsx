import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-secondary mt-5 pt-4 pb-2 text-center" id="rodape">
        <p className="lead mb-5 font-weight-light" id="formas_pagamento">
          Formas de pagamento
        </p>
        <img
          src="./img/Formasdepagamento2.png"
          className="img-fluid mb-5"
          alt="Formas de pagamento"
        />
        <p className="lead">
          <small className="font-weight-light">
            &copy; 2020 Recode Pro · Projeto Prático React avançado · 
          </small>
        </p>
      </footer>
    </>
  );
}

export default Footer;
