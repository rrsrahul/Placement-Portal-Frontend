
import './App.css';
import {useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CompanyList from './Containers/CompanyList/CompanyList'
import Auth from './Containers/Auth/Auth'
import Layout from './Containers/Layout/Layout';
import {Switch,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from './store/actions/index'
import CompanyData from './Containers/Auth/CompanyData/CompanyData';
import UserData from './Containers/Auth/UserData/UserData';
import Logout from './Containers/Auth/Logout/Logout';


function App(props) {

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('use Effect')
    dispatch(actions.getCompanies())
    dispatch(actions.authCheckState())
  });
  
  /*let logout = null;
  if(token!=null)
  {
    logout = <Route path='/logout exact' component={Logout}/>
  }*/
  return (
    <div className='App'>
      <Layout isAuth={false}>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/companies' component={CompanyList}/>
          <Route path='/company' component={CompanyData}/>
          <Route path='/user' component={UserData}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' exact component={CompanyList}/>
        </Switch>
       

      </Layout>
    </div>
  );
}



export default (App);
