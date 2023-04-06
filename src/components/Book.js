import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addBook, fetchBooks, removeBook } from '../redux/books/booksSlice';

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
    <div className="Books">
    <div className="Lesson-Panel22222">
      <div className="book-Card">
        <div className="book-informations">
          <p className="School-of">{book.category}</p>
            <p className="Title11">{book.title}</p>
            <p className="Author">{book.author}</p>
          <ul className="ul3">
            <li>
              <button className="Comments" type="button">Comments</button>
            </li>
            <div className="Line-2"></div>
            <li>
              <button className="Remove" type="button">Remove</button>
            </li>
            <div className="Line-2"></div>
            <li>
              <button className="Edit" type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="book-progress">
          <div
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div className="progress-text">
            <p className="Percent-Complete">
              23<span>%</span>
            </p>
            <p className="Completed">Completed</p>
          </div>
        </div>
        <div className="Line-3"></div>
        <div className="chapters">
          <p className="Current-Chapter">CURRENT CHAPTER</p>
          <p className="Current-Lesson">Chapter 12</p>
          <button type="button" className="Update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
      <div className="Line"></div>
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
