import React from 'react';

class Inventory extends React.Component {
    bookTitle = React.createRef();

    registerBook = (event) => {
        event.preventDefault();
        console.log(this.bookTitle);
    }
    
    render(){
        return (
            <form className='book-inventory' onSubmit={this.registerBook}>
                <input ref={this.bookTitle} type='text'></input>
                <button type='submit'>Register A Book</button>
            </form>
        );
    }
}

export default Inventory;