import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import './estilo.css';

import { Provider } from 'react-redux';
import store from './Components/store';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Footer />
    </Provider>
  );
}

export default App;
