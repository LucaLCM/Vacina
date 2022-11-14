import './App.css';
import { React, Component } from 'react';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'
import './components/footer'

class App extends Component {
  actionName = (window.location.pathname.length == 1 || window.location.pathname.includes('license')) ? 'Entrar' : 'Sair';
  hideToogle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toogleDrawer();
  }
  render() {
    return (
      <div className='demo-big-content'>
        <Layout fixedHeader>
          <Header title={<strong>Agendamento COVID-19</strong>} />
          <Drawer>
            <Navigation className="drawer-style">
              <Link to="/" onClick={() => this.hideToogle()}>{this.actionName}</Link>
              <Link to="/register" onClick={() => this.hideToogle()}>Editar Cadastro</Link>
              <Link to="/contact" onClick={() => this.hideToogle()}>Contato</Link>
              <Link to="/license" onClick={() => this.hideToogle()}>Licença</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
