import React from "react";

function Contato() {
  const [contato, setContato] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  // Limpa o form
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:1987/comentarios";
      const response = await fetch(url);
      setContato(await response.json());
    }
    fetchData();
  }, [render]);

  function enviarComentario(event) {
    event.preventDefault();
    // let formData = new FormData(event.target);
    let formData = {
      nome: nome,
      email: email,
      msg: mensagem,
    };

    const url = "http://localhost:1987/comentarios";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados);
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      });
    //Limpa o form
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Contato</h1>
          <p className="lead">Entre em contato conosco.</p>
        </div>
      </div>

      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <img
                width="70"
                src="img/Email.png"
                alt="Imagem de @"
              />
              <p className="lead mt-2">contato@eletrolojas.com</p>
            </div>
            <div className="col-sm mb-5 text-center">
              <img
                width="70"
                src="img/Whatsapp.png"
                alt="Imagem do Whatsapp"
              />
              <p className="lead mt-2">(11) 95643-4578</p>
            </div>
          </div>
        </div>

        <form onSubmit={enviarComentario}>
          <div className="form-group">
            <h3>Envie uma mensagem para nós !</h3>
            <br />
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="form-control mb-3"
              name="nome"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)} //Limpa o input
              placeholder="Digite seu nome"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
            />
            <br />
            <label htmlFor="msg">Mensagem:</label>
            <textarea
              className="form-control"
              name="msg"
              id="msg"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              placeholder="Digite uma mensagem"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info">
            Enviar
          </button>
        </form>
        {msg && (
          <div className="alert alert-success mx-auto mt-5 w-100" role="alert">
            Cadastro efetuado com sucesso!
          </div>
        )}
        <h3 className="mt-5">Comentários</h3>
        <hr />
      </div>

      {contato.map((element) => {
        return (
          <div key={element.id} className="container">
            <div className="row">
              <div className="col">
                <div className="card border-secondary mx-auto mt-4">
                  <h5 className="card-header bg-transparent border-0">
                    {element.nome}
                  </h5>
                  <div className="card-body lead">{element.msg}</div>
                  <div className="card-footer border-0">
                    <small className="text-info">
                      Enviado em {element.databr}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Contato;
