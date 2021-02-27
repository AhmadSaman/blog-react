import { Link } from "react-router-dom";
const notFound = () => {
	return (
		<div className="not-found">
			<h1>Sorry</h1>
			<p>Page not Found</p>
			<Link to="/">Go back</Link>
		</div>
	);
};

export default notFound;
