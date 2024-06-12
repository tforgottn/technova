import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/Login';
import Topbar from './components/Topbar/Topbar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
          <div className="App">
        {isAuthenticated ? <>
          <Topbar />
        </>
      : <LoginButton />}
    </div>
    </Router>

  );
}

export default App;
