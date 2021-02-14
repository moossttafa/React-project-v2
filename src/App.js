 import React from 'react';
  import { BrowserRouter as Router } from 'react-router-dom';
 import { GlobalStyle } from './globalStyle'; 
 import Hero from './components/Hero';
 import Products from './components/productes'
 import { productData , productDataTwo} from './components/productes/data';
import Feature from './components/feature';
import Footer from './components/footer'

function App() {
  return (
    <Router >
      <GlobalStyle />
       <Hero />
       <Products heading='Choose your favorite' data={productData} />
       <Feature />
       <Products heading='Sweet Treats For You' data={productDataTwo} />
       <Footer />
    </Router>
  );
}

export default App;
