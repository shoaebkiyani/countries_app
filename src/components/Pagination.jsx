import { Link } from "react-router-dom";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <Link onClick={() => paginate(num)} href="/" className="page-link">
              {num}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
