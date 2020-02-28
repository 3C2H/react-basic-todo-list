import React from 'react';
import './App.css';
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'


class App extends React.Components {
  render() {
    return(
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App;
