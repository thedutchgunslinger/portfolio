import Link from "next/link";
import errorStyles from "../styles/error.module.scss";

const error = () => {
  return (
    <div className={errorStyles.errorContainer}>
      <h1 className={errorStyles.title}>Oops something went wrong..</h1>
      <div className={errorStyles.errorLink}>
        <Link href="/">
          <a>Go Back to the home Page</a>
        </Link>
      </div>
    </div>
  );
};

export default error;
