import { useRouteError } from "react-router-dom";

const NotFound: React.FunctionComponent = () => {
  // const error = useRouteError();
  // console.log(error)
  return (
      <div className="container">
          <div className="error-page">
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>{/* <i>{error.statusText || error.message}</i> */}</p>
          </div>
      </div>
  );
};

export default NotFound;
