import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddressList from './components/AddressList.jsx';
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Address</Typography>
        </Toolbar>
      </AppBar>
      {/*<AddressList />*/}
        <Login />
    </div>
  );
}
export default App;
