
import './App.css';
import {useEffect} from 'react'
import CompanyList from './Containers/CompanyList/CompanyList'
import Auth from './Containers/Auth/Auth'
import Layout from './Containers/Layout/Layout';
import {Switch,Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as actions from './store/actions/index'
import CompanyData from './Containers/Auth/CompanyData/CompanyData';
import UserData from './Containers/Auth/UserData/UserData';


function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.authCheckState())
  });
  
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/companies' component={CompanyList}/>
          <Route path='/company' component={CompanyData}/>
          <Route path='/user' component={UserData}/>
          <Route path='/' exact component={CompanyList}/>

        </Switch>
       

      </Layout>
    </div>
  );
}



export default (App);
