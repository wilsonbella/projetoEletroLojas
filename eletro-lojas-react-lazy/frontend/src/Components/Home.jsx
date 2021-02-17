import React from "react";
import load from "../assets/img/loading.gif";

import { lazy, Suspense } from "react";

const SplitHomeImages = lazy(() => import("./SplitHomeImages"));

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

      <Suspense
        fallback={
          <div className="text-center">
            <img src={load} className="App-loading" alt="Loading" />
          </div>
        }
      >
        <SplitHomeImages />
      </Suspense>
    </>
  );
}

export default Home;
