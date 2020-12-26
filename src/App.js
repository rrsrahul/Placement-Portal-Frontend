
import './App.css';
import {useEffect} from 'react'
import CompanyList from './Containers/CompanyList/CompanyList'
import Auth from './Containers/Auth/Auth'
import Layout from './Containers/Layout/Layout';
import {Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index'

function App(props) {

  useEffect(() => {
    props.AutoSignUp();
  });
  
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/companies' component={CompanyList}/>
          <Route path='/' exact component={CompanyList}/>
        </Switch>
      </Layout>
    </div>
  );
}

const mapDispatchToProps = dispatch =>
{
  return {
    AutoSignUp: dispatch(actions.authCheckState())
  }
}

export default connect(null,mapDispatchToProps)(App);
