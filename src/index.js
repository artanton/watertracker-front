import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor } from './redux/store';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import 'reset-css';
import './index.css';
import 'reactjs-popup/dist/index.css';
// import '../node_modules/reactjs-popup/dist/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/final-team-project-group07">
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
