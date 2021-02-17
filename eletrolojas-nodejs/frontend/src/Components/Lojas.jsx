import React from "react";

function Lojas() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Lojas</h1>
          <p className="lead">Conheça nossas lojas.</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src="./img/sp.png"
                alt="Imagem de São Paulo"
              />
              <div className="card-body">
                <h2 className="card-title">São Paulo</h2>
                <p className="card-text">Av. Rebouças, 2000</p>
                <p className="card-text">10 &ordm; andar</p>
                <p className="card-text">Jardins</p>
                <p className="card-text">(11) 5663-8654</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-info btn-block"
                  href="/Lojas"
                  disabled
                >
                  Entrar em contato &raquo;
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="./img/rj.png"
                alt="Imagem de Minas Gerais"
              />
              <div className="card-body">
                <h2 className="card-title">Minas Gerais</h2>
                <p className="card-text">Av. Belo Horizonte, 2300</p>
                <p className="card-text">5 &ordm; andar</p>
                <p className="card-text">Belo Horizonte</p>
                <p className="card-text">(31) 5324-9854</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-info btn-block"
                  href="/Lojas"
                  disabled
                >
                  Entrar em contato &raquo;
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="./img/flr.png"
                alt="Imagem do Rio de Janeiro"
              />
              <div className="card-body">
                <h2 className="card-title">Rio de Janeiro</h2>
                <p className="card-text">Av.Fernandinho beira mar, 200</p>
                <p className="card-text">1 &ordm; andar</p>
                <p className="card-text">Beira Mar</p>
                <p className="card-text">(21) 5874-6589</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-info btn-block"
                  href="/Lojas"
                  disabled
                >
                  Entrar em contato &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lojas;
