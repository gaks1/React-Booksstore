import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const id = Math.random().toString(36).substr(2, 9);
    const book = {
      item_id: id, title, author,
    };
    dispatch(addBook(book));
  };

  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li key={book.item_id}>
              <span>{book.title}</span>
              <span>{book.author}</span>
              <span>{book.category}</span>
              <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove Book</button>
            </li>
          ))
        }
      </ul>
      <h2>Add New Book</h2>
      <form>
        <label htmlFor="titleInput">
          Title:
          <input type="text" id="titleInput" name="title" />
        </label>
        <br />
        <label htmlFor="authorInput">
          Author:
          <input type="text" id="authorInput" name="author" />
        </label>
        <br />
        <button type="submit" onClick={(e) => handleSubmit(e)}>Add Book</button>
      </form>
    </div>
  );
};

export default Books;
