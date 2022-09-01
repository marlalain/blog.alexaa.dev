import "@code-hike/mdx/dist/index.css";

function MyBlog({ Component, pageProps }) {
	return <article>
		<Component {...pageProps} />
	</article>;
}

export default MyBlog;
