import React from "react";
const NossasLojas = () => {
    return(
        <main className="container-fluid">
        <h2>Nossas Lojas</h2>
        <hr/>
        <div className="container">
            <table className="table table-striped table-dark table-sm table-responsive-sm">
                <thead>
                    <tr>
                    <th scope="col">Estado</th>
                    <th scope="col">Paraná</th>
                    <th scope="col">São Paulo</th>
                    <th scope="col">Santa Catarina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Endereço</th>
                        <td>Avenida do comércio, 200</td>
                        <td>Avenida pacaembú, 900</td>
                        <td>Avenida ferraz de Abreu, 250</td>
                    </tr>
                    <tr>
                        <th scope="row">Complemento</th>
                        <td>2º andar</td>
                        <td>5º andar</td>
                        <td>8º andar</td>
                    </tr>
                    <tr>
                        <th scope="row">Bairro</th>
                        <td>Zona Sul</td>
                        <td>Centro</td>
                        <td>Zona Industrial</td>
                    </tr>
                    <tr>
                        <th scope="row">Telefone</th>
                        <td>(41)5642-4587</td>
                        <td>(11)2352-4585</td>
                        <td>(48)3562-4254</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    )
}

export default NossasLojas;
