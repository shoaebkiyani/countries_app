import { useState } from "react";
// import { FaTimes } from "react-icons/fa";

const Search = ({ countries, onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      const results = countries.filter((country) =>
        country.name.official.toLowerCase().includes(text.toLowerCase())
      );
      onSearch(results);
    }
  };

  return (
    <div className="search-form">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div>
              <input
                type="text"
                placeholder="Search Country"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {/* {text ? (
                <button
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.preventDefault();
                    } else {
                      setText("");
                    }
                  }}
                  className="close"
                >
                  <FaTimes color="black" />
                </button>
              ) : null} */}
              <button type="submit" className="btn">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Search;
