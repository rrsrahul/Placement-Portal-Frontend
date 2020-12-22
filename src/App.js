import './App.css';
import CompanyList from './Containers/CompanyList/CompanyList'
import Layout from './Containers/Layout/Layout';

function App() {

  
  return (
    <div className='App'>
      <Layout>
        <CompanyList />
      </Layout>
    </div>
  );
}

export default App;
