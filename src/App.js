import './App.css';
import CompanyList from './Components/CompanyList/CompanyList';

function App() {

  const companies = [{
    name:'Google',
    ctc:100,
    date:'10/10/10'
  }]
  return (
    <div className='App'>
      <CompanyList companies={companies}/>
    </div>
  );
}

export default App;
