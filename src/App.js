import './App.css';
import FiltersContainer from './components/Filters/FiltersContainer';
import TableContainer from './components/Table/TableContainer';
import InfoContainer from './components/Info/InfoContainer';

function App(props) {
  return (
    <div className="App_wrapper">
      <FiltersContainer />
      <TableContainer {...props} />
      <InfoContainer />
    </div>
  );
}

export default App;
