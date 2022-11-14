import { React, Component } from 'react';

class Finally extends Component {
    cDate = {date: new Date()}
    render() {
        this.cDate.date.setDate(this.cDate.date.getDate() + 15)
        return (
            <div>
                <h1>Processo Conluído</h1>
                <div class="vacinaform">
                    <img src={require('./img/mascara-logo.png')} />
                    <p></p>
                    <h3 className='vacinaselection'>Sua vacina foi agendada para {this.cDate.date.toLocaleDateString()}</h3>
                    <h3 className='vacinaselection'>Protocolo {this.cDate.date.getTime()}</h3>
                    <a class="labeles" href='https://goo.gl/maps/hpvsnWjxTMish3wa9'>Clique para obter local de vacinação</a>
                    <p></p>
                    <img src={require('./img/flamengo.png')} />
                </div>
            </div>

        );
    }
}

export default Finally;