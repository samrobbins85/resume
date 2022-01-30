import Head from "next/head";
import { Linkedin, GitHub, Globe, Mail } from "react-feather";
import { StructuredText } from "react-datocms";
import { DownloadIcon } from "@heroicons/react/outline";
import getData from "../lib/cms";

function Social({ email, website, github, linkedin }) {
	return (
		<div className="flex justify-center gap-x-2 gap-y-2 sm:justify-between pb-4 tracking-wider flex-wrap text-12pt">
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
		<div className="grid grid-cols-1 sm:grid-cols-5 py-2 print:py-4 print:grid-cols-5">
			<div className="text-2xl font-semibold sm:font-normal pb-2 sm:pb-0">
				{title}
			</div>
			<div className="sm:col-span-4 print:col-span-4 grid gap-y-1">
				{content}
			</div>
		</div>
	);
}

export default function IndexPage({ data }) {
	console.log(data);
	return (
		<>
			<Head>
				<title>Resume</title>
				<meta name="Description" content="My resume" />
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
			</Head>
			<div className="max-w-85ch mx-auto px-4">
				<span
					id="download"
					className="flex justify-center text-blue-600 pt-2"
				>
					<DownloadIcon className="h-6 w-6 mr-1" />{" "}
					<a href="/cv.pdf" className="hover:underline">
						Download as PDF
					</a>
				</span>
				<h1 className="text-center text-4xl font-medium py-6 pt-8 font-display tracking-wide">
					{data.name}
				</h1>
				<div className="py-4">
					<Social
						email={data.email}
						website={data.website}
						github={data.github}
						linkedin={data.linkedin}
					/>
				</div>
				<div className="!text-12pt">
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
						title="Projects"
						content={
							<div className="grid gap-y-2">
								{data.project.map((x) => (
									<div className="grid">
										<div className="text-lg">
											{x.link ? (
												<a
													href={x.link}
													className="underline text-cyan-600"
												>
													<span className="font-medium">
														{x.name}
													</span>
												</a>
											) : (
												<span className="font-medium">
													{x.name}
												</span>
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
