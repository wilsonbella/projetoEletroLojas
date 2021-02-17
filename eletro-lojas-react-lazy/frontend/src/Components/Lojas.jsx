import React from "react";
import load from "../assets/img/loading.gif";

import { lazy, Suspense } from "react";

const SplitCardLojas = lazy(() => import("./SplitCardLojas"));

function Lojas() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Lojas</h1>
          <p className="lead">Conheça nossas lojas.</p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="text-center">
            <img src={load} className="App-loading" alt="Loading" />
          </div>
        }
      >
        <SplitCardLojas />
      </Suspense>
    </>
  );
}

export default Lojas;
