import { Route } from 'react-router-dom';

import './App.css';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/Chatpage';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact />
      {/* agr exact na laga to /chat likne par sare compoment ajeagey isliye likha exact  */}
      {/* ki matbl jab default ho sirf tab ise kholo */}
      <Route path='/chats' component={ChatPage} />
    </div>
  );
}

export default App;
