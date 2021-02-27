import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, loading } = useFetch(
		"http://localhost:8000/blogs/" + id
	);
	const history = useHistory();
	const handleClick = () => {
		fetch("http://localhost:8000/blogs/" + id, {
			method: "delete",
		}).then(() => {
			history.push("/");
		});
	};
	return (
		<div className="blog-details">
			{loading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<div>
						<h2>{blog.title}</h2>
						<p>written by {blog.author}</p>
						<div>{blog.body}</div>
					</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
