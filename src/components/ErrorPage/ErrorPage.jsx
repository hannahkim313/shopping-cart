import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <>
    <h1>Oh no, this route does not exist!</h1>
    <Link to="/">Click here to go back to the home page.</Link>
  </>
);

export default ErrorPage;
