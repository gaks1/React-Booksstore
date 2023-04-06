import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import Abook from './Addbook';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const category = 'non-fiction';
    const id = Math.random().toString(36).substr(2, 9);
    const book = {
      item_id: id, title, author, category,
    };
    dispatch(addBook(book));
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li key={book.item_id}>
              <Abook item={book} />
            </li>
          ))
        }
      </ul>
      <div className="Line" />
      <div className="form-container">
        <h2 className="Title">ADD NEW BOOK</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="titleInput">
            <input
              className="Lesson-Panel"
              type="text"
              id="titleInput"
              name="title"
              placeholder="Title"
            />
          </label>
          <br />
          <label htmlFor="authorInput">
            <input
              className="Lesson-Panel"
              type="text"
              id="authorInput"
              name="author"
              placeholder="Author"
            />
          </label>
          <br />
          <button type="submit" className="ADD-BOOK">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Books;
