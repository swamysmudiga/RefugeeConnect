
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
