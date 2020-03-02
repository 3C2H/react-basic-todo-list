import React from 'react';
import '../style/App.css';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';
import DateComponent from './DateComponent'


class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Header />
        <DateComponent />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App;
