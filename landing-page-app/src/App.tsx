import { Hero, Chips } from 'ui-complib';

import './App.css';

function App() {

  return (
    <>
      <Hero type='image' />
      <hr />
      <Chips />
      <hr />
      <Hero type='default' />
    </>
  )
}

export default App;
