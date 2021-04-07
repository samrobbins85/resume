import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<head
					dangerouslySetInnerHTML={{
						__html:
							"<!-- Favicon courtesy of Twemoji https://twemoji.twitter.com/ -->",
					}}
				/>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
