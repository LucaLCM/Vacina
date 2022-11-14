import { React, Component } from 'react';

const queryParams = new URLSearchParams(window.location.search);
const name = queryParams.get("name")
const number = queryParams.get("number")
const district = queryParams.get("district")
const postalcode = queryParams.get("postalcode")
const city = queryParams.get("city")
const state = queryParams.get("state")

//const registerObj = { name: name, number: number, district: district, postalcode: postalcode, city: city, state: state }
//const registerJson = JSON.stringify(registerObj);

class Vacina extends Component {
//    register = { json: registerJson }
    render() {
        return (
            <div>
                <h1>Vacinas</h1>
                <form class="vacinaform" action='finally'>
                    <h3 className='vacinaselection'>Selecione a vacina</h3>
                    <button class="vacinabutton">Comirnaty (Pfizer/Wyeth)</button>
                    <button class="vacinabutton">Coronavac (Butantan)</button>
                    <p></p>
                    <button class="vacinabutton">Janssen Vaccine (Janssen-Cilag)</button>
                    <button class="vacinabutton">Oxford/Covishield (Fiocruz e Astrazeneca)</button>
                    <p></p>
                    <p>
                        <input type="checkbox" name="influenza" id="influenza" value="" />
                        <label for="influenza">  Selecione para apliação contra influenza D (<b><i>H3N2</i></b>).</label>
                    </p>
                    {/* <p>{this.register.json}</p> */}
                </form>
                <div id="app">
                    <a href="/logout" v-if="logado">Sair</a>
                </div>
                {/* <button onClick={alert(this.register.json)}>Clique aqui</button> */}
                
            </div>
        );
    }
}

export default Vacina;