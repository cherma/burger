import React from 'react';
import Layout from './Components/Layout/layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

function App() {
  
  return (
    <div>
       <Layout>
          <BurgerBuilder/>
          {/*Order button */}
       </Layout>
    </div>
  );
}

export default App;
