import { useEffect, useState } from 'react';
import HelpScout from '@helpscout/javascript-sdk';
import './App.css';
import Text from './components/Text/Text';

function App() {
  const [context, setContext] = useState({})

  useEffect(() => {
    async function getContext() {
      const { getApplicationContext } = HelpScout
      const context = await getApplicationContext()
      setContext(context)
    }

    getContext()
  }, [])

  console.log(context)

  const { conversation } = context

  return (
    <div className="App">
      <p>App created using create-react-app</p>
      <Text>Styled component</Text>
      {conversation && <p>Conversation ID: {conversation?.id}</p>}
      {!conversation && <p>Loading context...</p>}
    </div>
  );
}

export default App;
