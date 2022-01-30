import { Linkedin, GitHub, Globe, Mail } from "react-feather";

export default function Social({ email, website, github, linkedin }) {
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
