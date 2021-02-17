import React from "react";

function Produtos() {
  const [produtos, setProdutos] = React.useState([]);

  let elementos = document.getElementsByClassName("box_produto");
  function exibir_categoria(event) {
    const categoria = event.target.id;
    for (var i = 0; i < elementos.length; i++) {
      if (categoria === elementos[i].id) {
        elementos[i].style.display = "inline-block";
      } else {
        elementos[i].style.display = "none";
      }
    }
  }

  function exibir_todos() {
    const elementos = document.getElementsByClassName("box_produto");

    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "inline-block";
    }
  }

  function aumentaImg(event) {
    const img = event.target;
    img.style.width = "240px";
  }

  function diminuiImg(event) {
    const img = event.target;
    img.style.width = "120px";
  }

  React.useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:1987/produtos";
      const response = await fetch(url);
      setProdutos(await response.json());
    }
    fetchData();
  }, []);

  // Retirando as categorias repetidas
  const categoria = produtos.map((categoria) => {
    const container = {};
    container.id = categoria.idcategoria;
    container.name = categoria.categoria;
    return container;
  });

  const categoriafinal = categoria
    .map(JSON.stringify)
    .reverse()
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .reverse()
    .map(JSON.parse);

  //Contando os ítens da categoria
  let categoriasArray = categoria.map((categoria) => categoria.name);
  let count = {};

  for (var i = 0; i < categoriasArray.length; i++) {
    let key = categoriasArray[i];
    count[key] = count[key] ? count[key] + 1 : 1;
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Produtos</h1>
          <p className="lead">
         Nós temos tudo para sua casa e sua família.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container col-10">
          <div className="row">
            <div className="col .col-sm categorias">
              <h3>Categorias</h3>
              <br />

              <ul className="list-group">
                <li
                  onClick={exibir_todos}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  Todos
                  <span className="badge badge-info badge-pill">
                    {categoria.length}
                  </span>
                </li>
                {categoriafinal.map((categoria) => {
                  return (
                    <li
                      key={categoria.id}
                      onClick={exibir_categoria}
                      id={categoria.id}
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      {categoria.name}
                      <span className="badge badge-info badge-pill">
                        {count[categoria.name]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-9">
              {produtos.map((produto) => {
                return (
                  <div
                    key={produto.idproduto}
                    className="box_produto mx-2 text-center"
                    id={produto.idcategoria}
                  >
                    <img
                      src={produto.imagem}
                      alt="Geladeira Eletrolux"
                      onMouseEnter={aumentaImg}
                      onMouseOut={diminuiImg}
                    />
                    <br />
                    <p className="descricao">{produto.descricao}</p>
                    <hr />
                    <p className="preco_antigo pt-2">
                      <s>{produto.preco_antigo.toFixed(2)}</s>
                    </p>
                    <p className="preco_atual text-danger">
                      <strong>R$ {produto.preco.toFixed(2)}</strong>
                    </p>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produtos;
