import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/transactionList';
import { AddTransation } from './components/addTransation';

import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>   
    <Header />
    <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransation />
    </div>
    </GlobalProvider>
  );
}

export default App;
