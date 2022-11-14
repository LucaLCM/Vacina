import { React, Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super();
        let prefix = window.location.host.startsWith("http") ? "" : "https://";
        this.target = prefix + "aps.saude.gov.br/servicos/servicoscontato"
    }
    componentDidMount() {
        window.location.replace(this.target);
    }
    render() {
        return (
            <div>
                <br />
                <h1>Redirecionando para {this.target}</h1>
            </div>
        );
    }
}

export default Contact;