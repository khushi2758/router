import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
function ErrorPage() {
   const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find the page you are looking for.";
  } else if (error.status === 403) {
    title = "Access Denied!";
    message = "You are not allowed to access this page.";
  }
  return (
    <PageContent title={title}>
   
      <p>{message}</p>
      <p>
        Back to <a href="/">Home</a>
  </p>
    </PageContent>
  );
}

export default ErrorPage;
