import { FC } from "react";
import "./styles.scss"

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    return(
        <>
            <div className="notFound">
                <h1>Page not found.</h1>
            </div>
        </>
    );
}

export default NotFound;