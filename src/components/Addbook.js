/* eslint-disable */
import { removeBook } from '../redux/books/booksSlice';
import { useDispatch } from 'react-redux';


const Abook = ({ item }) => {

   const dispatch = useDispatch()
return (
  <li>
    <div className="Lesson-Panel22222">
      <div className="book-Card">
        <div className="book-informations">
          <p className="School-of">{item.category}</p>
          <p className="Title11">{item.title}</p>
          <p className="Author">{item.author}</p>
          <ul className="ul3">
            <li>
              <button className="Comments" type="button">Comments</button>
            </li>
            <div className="Line-2" />
            <li>
              <button type="button" className="Remove"onClick={() => dispatch(removeBook(item.item_id))}>Remove</button>
            </li>
            <div className="Line-2" />
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
          />
          <div className="progress-text">
            <p className="Percent-Complete">
              23
              <span>%</span>
            </p>
            <p className="Completed">Completed</p>
          </div>
        </div>
        <div className="Line-3" />
        <div className="chapters">
          <p className="Current-Chapter">CURRENT CHAPTER</p>
          <p className="Current-Lesson">Chapter 12</p>
          <button type="button" className="Update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  </li>
)
};

export default Abook;
