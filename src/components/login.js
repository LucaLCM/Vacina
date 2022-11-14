import { React, Component } from 'react';
import '../components/footer'

class Login extends Component {
    render() {
        return (
            <div class="container" >
                <div class="content">
                    <div id="login">
                        <form method="get" action="vacina">
                            <h1>Login</h1>
                            <p>
                                <label for="cpf_login">Seu CPF</label>
                                <input id="cpf_login" name="cpf_login" required="required" type="text" placeholder="000.000.000-00" />
                                <label for="senha_login">Senha</label>
                                <input id="senha_login" name="senha_login" required="required" type="password" placeholder="xxxxxxxxxxxxxx" />
                            </p>

                            <p>
                                <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                                <label for="manterlogado"> Manter-me conectado</label>
                            </p>

                            <p>
                                <input type="submit" value="Entrar" />
                            </p>

                            <p class="link">
                                Nao tem cadastro?
                                <a href="http://localhost:3000/register?">Cadastre-se</a>
                            </p>
                        </form>
                    </div>
                </div>
                <rodape/>
            </div>
        );
    }
}

export default Login;