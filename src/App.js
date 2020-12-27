import Main from "./Screens/Main";
import { HashRouter } from "react-router-dom"
import {Provider} from 'react-redux';
import { ConfigureStore } from './Redux/ConfigureStore';

const store = ConfigureStore();

function App() {
  return (
  <Provider store = {store} >
<HashRouter >
  <div>
    <Main />
  </div>
  </HashRouter>
  </Provider>
    
  );
}

export default App;
