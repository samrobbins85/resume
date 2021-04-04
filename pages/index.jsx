import Head from "next/head";
import { Linkedin, GitHub, Globe, Mail } from "react-feather";
import getData from "../lib/cms";

export default function IndexPage({ data }) {
	return (
		<>
			<Head>
				<title>Resume</title>
				<meta name="Description" content="My resume" />
			</Head>
			<div className="max-w-85ch mx-auto">
				<h1 className="text-center text-3xl font-medium py-4">
					{data.name}
				</h1>
				<div className="flex justify-around">
					<div className="flex">
						<Mail className="mr-2" />
						<a className="underline" href={`mailto:${data.email}`}>
							{data.email}
						</a>
					</div>
					<div className="flex">
						<Globe className="mr-2" />
						<a
							className="underline"
							href={`https://${data.website}`}
						>
							{data.website}
						</a>
					</div>
					<div className="flex">
						<GitHub className="mr-2" />
						<a
							className="underline"
							href={`https://github.com/${data.github}`}
						>
							{data.github}
						</a>
					</div>
					<div className="flex">
						<Linkedin className="mr-2" />
						<a
							className="underline"
							href={`https://www.linkedin.com/in/${data.linkedin}`}
						>
							{data.linkedin}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const data = await getData();
	return {
		props: { data },
	};
}
