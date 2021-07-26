import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import PostTest from './API/PostTest';

function App() {
  return (
    <div>
      <PostTest />
    <div className='Position'>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      Q2 Chatbot
    </h1>
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
    </div>
  );
}

export default App;
