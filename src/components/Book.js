const Books = () => (
  <div>
    <ul>
      <li>
        Title: Book 1
        Author: Author 1
      </li>
      <li>
        Title: Book 2
        Author: Author 2
      </li>
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
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Books;
