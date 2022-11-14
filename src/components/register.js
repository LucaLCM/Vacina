import { React, Component } from 'react';
import './utils.css'

class Register extends Component {
    render() {
        return (
            <div class="wrapper">
                <h1>Endereço Residencial</h1>
                <form class="formulario" action='vacina'>
                    <div>
                        <label class="labeles" for="name">Rua</label>
                        <input class="inputes" required type="text" id="name" name="name" autocomplete="name" placeholder='Rua - Av.' enterkeyhint="next"/>
                    </div>
                    <div>
                        <label class="labeles" for="number">Número</label>
                        <input class="inputes" type="text" id="number" name="number" autocomplete="number" required enterkeyhint="next" placeholder='000' />
                    </div>
                    <div>
                        <label class="labeles" for="district">Bairro</label>
                        <input class="inputes" type="text" id="district" name="district" autocomplete="district" placeholder='xxxx' required enterkeyhint="next" />
                    </div>
                    <div>
                        <label class="labeles" for="postalcode">CEP</label>
                        <input class="postalcode" required id="postalcode" name="postalcode" autocomplete="postalcode" placeholder='00.000-000' enterkeyhint="next"/>
                    </div>
                    <div>
                        <label class="labeles" for="city">Cidade</label>
                        <input class="inputes" required type="text" id="city" name="city" placeholder='xxxx' autocomplete="address-level2" enterkeyhint="next"/>
                    </div>
                    <div>
                        <label class="labeles" for="state">Estado</label>
                        <select class="selectional" id="state" name="state" autocomplete="state" enterkeyhint="done" required>
                            <option value=""></option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="ES">Espiríto Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="DF">Distrito Federal</option>
                        </select>
                    </div>
                    <button class="buttones">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Register;