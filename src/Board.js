import React from 'react';
import Note from './Note';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          note: 'Clean room'
        },
        {
          id: 1,
          note: 'Call Willit'
        }
      ]
    };
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);

  };

  update(newText, i) {
    console.log('Updating item at index', i, newText)
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !==i) ? note : {...note, note: newText}
      )
    }));
  };

  remove(id) {
    console.log('Removing item at', id)
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };
 
  eachNote(note, i) {
    return (
      <Note key ={i}
            index={i}
            onChange={this.update}
            onRemove={this.remove}>
            {note.note}
      </Note>
    )
  };
  
  render() {
    return (
      <div>
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
};

export default Board