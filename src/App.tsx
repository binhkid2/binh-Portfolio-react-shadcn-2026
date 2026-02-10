 
import { ToastContainer } from 'react-toastify';   
import 'react-toastify/dist/ReactToastify.css';   
import Layout from './components/Layout';
import AppRoutes from './components/Routes';

function App() { 
  return ( 
    <>
      <ToastContainer />
      <Layout>  
        <AppRoutes /> 
      </Layout>
    </>
  );
}

export default App;