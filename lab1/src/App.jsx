import Layout from './layouts/RootLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
