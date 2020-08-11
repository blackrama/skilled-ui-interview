import React, { useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main";
import Layout from './components/Layout/Layout';
import Card from "./components/Card/Card";
import ProductCardComponent from "./components/ProductCard/ProductCard";

class App extends React.Component {
  state = {
   card: [
     {
      src: './img/logo.png',
      name: 'Emily Dougrer',
      position:'Developer',
      text: 'Hi there. 👋 We use Boards to share initial goals and ideas.',
     }
   ],
    categories: [
      {
        title:'Bestsellers',
          info: [{
              src:'./img/nike1.png',
              model:'Nike Air Max 270',
              brand:'Nike',
              price:'$195.80',
          },
          {
              src:'./img/nike2.png',
              model:'Nike Air Max 90',
              brand:'Nike',
              price:'$195.80',
          },
          {
              src:'./img/nike3.png',
              model:'Nike Air Max Plus',
              brand:'Nike',
              price:'$195.80',
          }],
      }
    ],
  };
  render(){
    return (
      <div className="App">
      <Layout>
        <Main>
          <Card  cardInfo={this.state.card}/>
          <ProductCardComponent productInfo={this.state.categories[0]}></ProductCardComponent>
        </Main>
      </Layout>
    </div>
    )
  }
}
export default App;
