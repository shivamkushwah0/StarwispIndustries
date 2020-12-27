import logo from './logo.svg';
import ConverSationScreen from './Screens/ConverSationScreen';
import Main from "./Screens/Main";
import { BrowserRouter } from "react-router-dom"
import {Provider} from 'react-redux';
import { ConfigureStore } from './Redux/ConfigureStore';

const store = ConfigureStore();

function App() {
  return (
  <Provider store = {store} >
<BrowserRouter >
  <div>
    <Main />
  </div>
  </BrowserRouter>
  </Provider>
    
  );
}

export default App;