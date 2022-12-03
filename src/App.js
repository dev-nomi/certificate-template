import "minireset.css";
import "./App.css";
import logo from "./learners.svg";

function App({ name, course, date, certificateNo }) {
  return (
    <div className="App">
      <img src={logo} className="app-logo" alt="logo" />
      <p className="byline">Certificate of completion</p>

      <div className="content">
        <p>Proudly Present To</p>
        <h1>{name}</h1>
        <p>for successfully completing the course:</p>
        <h2>{course}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on <span className="bold">{date}</span>
        </p>
      )}

      {certificateNo && (
        <p className="certificate-no">
          Certificate no : <span className="bold">{certificateNo}</span>
        </p>
      )}
    </div>
  );
}

App.defaultProps = {
  name: "James Lee",
  course: "Creating PDFs with React & Make.cm",
  date: "March 15 2021",
  certificateNo: "12345",
};

export default App;
