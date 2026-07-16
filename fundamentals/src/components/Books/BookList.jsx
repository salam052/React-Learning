import Books from './BooksData';
import './BookList.css';

const BookList = () => {
  return (
    <div className='booklist'>
      <h2>Book List</h2>
      
        {Books.map(book => (
          <section key={book.id} className='book'>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
          </section>
        ))}
      
    </div>
  );
};

export default BookList;
