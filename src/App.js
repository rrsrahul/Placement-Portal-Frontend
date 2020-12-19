import './App.css';
import CompanyList from './Components/CompanyList/CompanyList';
import Layout from './Containers/Layout/Layout';

function App() {

  const companies = [{
    name:'Google',
    ctc:100,
    date:'10/10/10'
  }]
  return (
    <div className='App'>
      <Layout>
        <CompanyList companies={companies}/>
      </Layout>
    </div>
  );
}

export default App;
