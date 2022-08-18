export default function Item({ title, location, time, description, link }) {
  return (
    <div className="grid">
      <div className="flex justify-between gap-x-4 text-lg">
        <div>
          {link ? (
            <a href={link} className="underline text-cyan-600">
              <span className="font-medium">{title}</span>
            </a>
          ) : (
            <span className="font-medium">{title}</span>
          )}
          {location && ` - ${location}`}
        </div>
        <span className="italic text-gray-700 text-sm ml-4 text-right shrink-0">
          {time}
        </span>
      </div>
      <span className="text-base">{description}</span>
    </div>
  );
}
