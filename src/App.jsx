import { DownloadIcon } from "@heroicons/react/outline";
import data from "../data.json";
import Social from "./components/Social";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
function App() {
  return (
    <>
      <div className="max-w-85ch mx-auto px-4">
        <span id="download" className="flex justify-center text-blue-600 pt-2">
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
          <Section title="Skills">
            <>
              <SkillList title="Programming Languages" list={data.languages} />
              <SkillList
                title="Libraries & Frameworks"
                list={data.librariesAndFrameworks}
              />
              <SkillList title="Software" list={data.software} />
            </>
          </Section>

          <Section title="Experience">
            <div className="grid gap-y-2">
              {data.experience.map((x) => (
                <div className="grid">
                  <div className="text-lg">
                    <span className="font-medium">{x.role}</span> — {x.company}
                  </div>
                  <span className="italic text-gray-700">{x.duration}</span>
                  <span className="text-base">{x.description}</span>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Education">
            {data.education.map((x) => (
              <div className="grid" key={x.qualification}>
                <div className="text-lg">
                  <span className="font-medium">{x.qualification}</span> —{" "}
                  {x.institution}
                </div>
                <span className="italic text-gray-700">{x.duration}</span>
                <p>{x.description}</p>
              </div>
            ))}
          </Section>
          <Section title="Projects">
            <div className="grid gap-y-2">
              {data.project.map((x) => (
                <div className="grid">
                  <div className="text-lg">
                    {x.link ? (
                      <a href={x.link} className="underline text-cyan-600">
                        <span className="font-medium">{x.name}</span>
                      </a>
                    ) : (
                      <span className="font-medium">{x.name}</span>
                    )}
                  </div>
                  <span className="italic text-gray-700">{x.date}</span>
                  <span>{x.description}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export default App;
