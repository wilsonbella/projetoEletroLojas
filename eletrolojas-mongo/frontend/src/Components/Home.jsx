import React from "react";

function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Seja bem vindo(a)!</h1>
          <p className="lead">
            Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos
            para a sua casa!
          </p>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm foto">
            <img
              width="100%"
              height="100%"
              src="./img/img_bv.jpg"
              alt="Imagem de compras"
            />
          </div>
          <div className="col-sm foto">
            <img
              width="100%"
              height="100%"
              src="./img/img_bv2.jpg"
              alt="Imagem de compras"
            />
          </div>
          <div className="col-sm foto">
            <img
              width="100%"
              height="100%"
              src="./img/img_bv3.jpg"
              alt="Imagem de compras"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
