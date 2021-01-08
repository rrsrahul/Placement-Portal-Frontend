
import './App.css';
import {useEffect} from 'react'
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CompanyList from './Containers/CompanyList/CompanyList'
import Auth from './Containers/Auth/Auth'
import Layout from './Containers/Layout/Layout';
import { Redirect } from "react-router";
import {Switch,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from './store/actions/index'
import CompanyData from './Containers/Auth/CompanyData/CompanyData';
import Schedule from './Containers/Schedule/Schedule';
import CompanyInfo from './Containers/CompanyInfo/CompanyInfo';
import UserData from './Containers/Auth/UserData/UserData';
import Logout from './Containers/Auth/Logout/Logout';
import axios from 'axios';



function App(props) {

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  let t = useSelector(state =>state.auth.token)
  let userId = useSelector(state =>state.auth.userId)
  useEffect(() => {
    console.log('use Effect')
    dispatch(actions.getCompanies())
    dispatch(actions.authCheckState())
    if(t!=null)
    {
      axios.get('http://localhost:8080/apply/student/?userId='+userId)
      .then(res =>
      {
         dispatch(actions.applyStart(res.data))
      })
      .catch(err=>
      {
        console.log(err)
      });
    }
  })

    
  
  /*let logout = null;
  if(token!=null)
  {
    logout = <Route path='/logout exact' component={Logout}/>
  }*/
  let SignIn = null;
  if(token!=null)
  {
    SignIn = (

          <React.Fragment>
          <Route path='/schedule' component={Schedule}/>
          <Route path='/companyInfo' component={CompanyInfo}/>
          <Route path='/companies' component={CompanyList}/>
          <Route path='/company' component={CompanyData}/>
          <Route path='/user' component={UserData}/>
          <Route path='/logout' component={Logout}/>
          </React.Fragment>

    )
  }
  return (
    <div className='App'>
      <Layout isAuth={token!=null}>
        <Switch>
          {SignIn}
          <Route path='/auth' component={Auth}/>
          <Route path='/' exact component={CompanyList}/>
          <Redirect to='/'/>
        </Switch>
      

      </Layout>
    </div>
  );
}



export default (App);
