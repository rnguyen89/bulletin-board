import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <p>Note</p>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    )
  }
}

export default Note