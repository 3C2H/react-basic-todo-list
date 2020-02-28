import React from 'react';
import '../style/App.css';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';


class App extends React.Component {
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
