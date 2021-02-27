import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, body, author };
		fetch("http://localhost:8000/blogs/", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			console.log("the blog added ");
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add new Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">Mario</option>
					<option value="yushi">Yushi</option>
				</select>
				{isPending && <button disabled>Adding Blog</button>}
				{!isPending && <button>Add Blog</button>}
			</form>
		</div>
	);
};

export default Create;
