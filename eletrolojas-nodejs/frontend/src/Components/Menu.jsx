import React from "react";
import Home from "./Home";
import Produtos from "./Produtos";
import Lojas from "./Lojas";
import Contato from "./Contato";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/Home">
            <img src="./img/logo-eletrolojas.png" alt="Logo do site" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#conteudoNavbarSuportado"
            aria-controls="conteudoNavbarSuportado"
            aria-expanded="false"
            aria-label="Alterna navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="conteudoNavbarSuportado"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Produtos">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Lojas">
                  Lojas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contato">
                  Contato
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                disabled
              >
                Log in
              </button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Produtos" component={Produtos} />
          <Route path="/Lojas" exact component={Lojas} />
          <Route path="/Contato" exact component={Contato} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Menu;
