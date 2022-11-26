import "minireset.css";
import "./App.css";
import logo from "./learners.svg";

function App({ name, course, date }) {
  return (
    <div className="App">
      <img src={logo} className="app-logo" alt="logo" />
      <p className="byline">Certificate of completion</p>

      <div className="content">
        <p>Proudly Present To</p>
        <h1>{name}</h1>
        <p>for successfully comppleting the course:</p>
        <h2>{course}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on <span className="bold">{date}</span>
        </p>
      )}
    </div>
  );
}

App.defaultProps = {
  name: "James Lee",
  course: "Creating PDFs with React & Make.cm",
  date: "March 15 2021",
};

export default App;
