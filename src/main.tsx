 
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; 
import './global.css'; 
import "@/lib/i18n" 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
      <Router> 
          <App />  
      </Router>  
);
 {/*  <React.StrictMode>  */}