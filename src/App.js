import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
    // Create a new array of filtered monsteres based on user input
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={e => {
            // put the user input value in a variable
            const searchField = e.target.value.toLocaleLowerCase();
            // set the state of this
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {/* map through our filtered monsters array instead of our  */}
        {filteredMonsters.map(monster => {
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
