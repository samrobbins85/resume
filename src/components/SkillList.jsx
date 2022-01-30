export default function SkillList({ title, list }) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 font-medium">{title}</div>
      <div className="col-span-3">{list.join(", ")}</div>
    </div>
  );
}
