import Header from './components/Header.jsx';
//import Login from './components/Login-state.jsx';
//import Login from './components/Login-state-hook.jsx';
//import Login from './components/Login.jsx';
//import Signup from './components/Signup.jsx';
import Signup from './components/Signup-form-actions.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
        {/* <Login /> */}
      </main>
    </>
  );
}

export default App;
