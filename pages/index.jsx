import Head from "next/head";
import { Linkedin, GitHub, Globe, Mail } from "react-feather";
import getData from "../lib/cms";

function Social({ email, website, github, linkedin }) {
	return (
		<div className="flex justify-around">
			<div className="flex">
				<Mail className="mr-2" />
				<a className="underline" href={`mailto:${email}`}>
					{email}
				</a>
			</div>
			<div className="flex">
				<Globe className="mr-2" />
				<a className="underline" href={`https://${website}`}>
					{website}
				</a>
			</div>
			<div className="flex">
				<GitHub className="mr-2" />
				<a className="underline" href={`https://github.com/${github}`}>
					{github}
				</a>
			</div>
			<div className="flex">
				<Linkedin className="mr-2" />
				<a
					className="underline"
					href={`https://www.linkedin.com/in/${linkedin}`}
				>
					{linkedin}
				</a>
			</div>
		</div>
	);
}

function SkillList({ title, list }) {
	return (
		<div className="grid grid-cols-3">
			<div className="font-bold">{title}</div>
			<div className="col-span-2">{list.join(", ")}</div>
		</div>
	);
}

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
				<Social
					email={data.email}
					website={data.website}
					github={data.github}
					linkedin={data.linkedin}
				/>
				<div className="grid grid-cols-4 py-4">
					<div className="text-2xl">Skills</div>
					<div className="col-span-3 grid gap-y-1">
						<SkillList
							title="Programming Languages"
							list={data.languages}
						/>
						<SkillList
							title="Libraries & Frameworks"
							list={data.librariesAndFrameworks}
						/>
						<SkillList title="Software" list={data.software} />
						<SkillList title="Platforms" list={data.platforms} />
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
