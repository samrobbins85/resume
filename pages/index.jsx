import Head from "next/head";
import { Linkedin, GitHub, Globe, Mail } from "react-feather";
import { StructuredText } from "react-datocms";
import getData from "../lib/cms";

function Social({ email, website, github, linkedin }) {
	return (
		<div className="flex justify-between pb-4 tracking-wider">
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
		<div className="grid grid-cols-5">
			<div className="col-span-2 font-medium">{title}</div>
			<div className="col-span-3">{list.join(", ")}</div>
		</div>
	);
}

function Section({ title, content }) {
	return (
		<div className="grid grid-cols-5 py-2">
			<div className="text-2xl">{title}</div>
			<div className="col-span-4 grid gap-y-1">{content}</div>
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
			<div className="max-w-85ch mx-auto px-4">
				<h1 className="text-center text-4xl font-medium py-6 pt-8 font-display tracking-wide">
					{data.name}
				</h1>
				<Social
					email={data.email}
					website={data.website}
					github={data.github}
					linkedin={data.linkedin}
				/>
				<div className="">
					<Section
						title="Skills"
						content={
							<>
								<SkillList
									title="Programming Languages"
									list={data.languages}
								/>
								<SkillList
									title="Libraries & Frameworks"
									list={data.librariesAndFrameworks}
								/>
								<SkillList
									title="Software"
									list={data.software}
								/>
							</>
						}
					/>
					<Section
						title="Education"
						content={data.education.map((x) => (
							<div className="grid" key={x.qualification}>
								<div className="text-lg">
									<span className="font-medium">
										{x.qualification}
									</span>{" "}
									— {x.institution}
								</div>
								<span className="italic text-gray-700">
									{x.duration}
								</span>
								<StructuredText data={x.description} />
							</div>
						))}
					/>
					<Section
						title="Experience"
						content={
							<div className="grid gap-y-2">
								{data.experience.map((x) => (
									<div className="grid">
										<div className="text-lg">
											<span className="font-medium">
												{x.role}
											</span>{" "}
											— {x.company}
										</div>
										<span className="italic text-gray-700">
											{x.duration}
										</span>
										<span className="text-base">
											{x.description}
										</span>
									</div>
								))}
							</div>
						}
					/>
					<Section
						title="Projects"
						content={
							<div className="grid gap-y-2">
								{data.project.map((x) => (
									<div className="grid">
										<div className="text-lg">
											<span className="font-medium">
												{x.name}
											</span>
											{x.link && (
												<>
													{" "}
													—{" "}
													<a
														className="text-blue-700 underline"
														href={`https://${x.link}`}
													>
														{x.link}
													</a>
												</>
											)}
										</div>
										<span className="italic text-gray-700">
											{x.date}
										</span>
										<span>{x.description}</span>
									</div>
								))}
							</div>
						}
					/>
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
