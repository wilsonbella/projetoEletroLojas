
import React from "react";
import {Link } from 'react-router-dom';

const Home = () => {
    return(
        <main className="container-fluid mb-5">
            <div className="jumbotron">
                <h1 className="display-4">Seja bem vindo(a)!</h1>
                <p className="lead">Loja varejista que atua no setor de eletrodomésticos, <b>temos diversas promoções</b> para sua casa, venham conferir!!!</p>
                <hr className="my-4"/>
                <p>Venha conhecer nosso produtos!!!!!!</p>
                <Link className="btn btn-primary btn-lg" to="/Produtos" role="button">Saiba mais</Link>
            </div>
        </main>       
    )
}

export default Home;
