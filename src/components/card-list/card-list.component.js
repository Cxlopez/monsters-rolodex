import { Component } from 'react';

class CardList extends Component {

  render() {
    const { monsters } = this.props;
    
    return (
      <div>
        {monsters.map(monster => (
         <div className='card-container'>
          <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster ${monster.name}`} />
         </div>
        ))}
      </div>
    )
  }
}

export default CardList;