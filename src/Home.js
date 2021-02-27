import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
	const { data: blogs, loading, catchError } = useFetch(
		"http://localhost:8000/blogs"
	);

	return (
		<div className="home">
			{catchError && <p>{catchError}</p>}
			{loading && <p>Loading...</p>}
			{blogs && <BlogList blogs={blogs} title="Blogs" />}
		</div>
	);
};

export default Home;
