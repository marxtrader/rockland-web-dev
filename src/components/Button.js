import React from 'react';

const Button = () => {

  function handleClick(e) {
    e.preventDefault();
    const {firstName, lastName, fact, type} = e.target
    console.log(e.target)
    console.log(firstName, lastName, fact, type)
  }

	return (
    <div>
        <button onClick={this.handleClick}>Submit</button>
    </div>
  )
}

export default Button;
