import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return(
        <div className="mx-auto w-50 text-center mt-5 pt-5 ">
        <h1 className="fw-bolder fs-1 err">404 Error Page</h1><br/>
        <h5>The page cannot be Found</h5><br/>
        <Link to={"/"}>Go to Home page</Link>
        </div>
    )
}

export default ErrorPage;