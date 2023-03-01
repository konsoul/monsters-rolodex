import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // Whatever is inside this method, will get run
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log('');
          }
        )
      );
  }

  render() {
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={e => {
            console.log({ startingArray: this.state.monsters });
            const filteredMonsters = this.state.monsters.filter(monster => {
              return monster.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
