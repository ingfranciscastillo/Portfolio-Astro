const experience = [
  {
    id: "bufete",
    date: "2015 - Presente",
    title: "Jefe del área de tecnología",
    company: "Bufete Jurídico Castillo Melo & Asociados",
    location: "La Romana, República Dominicana",
    modality: "Presencial",
    isCurrent: true,
  },
  {
    id: "100esignature",
    date: "2023 - Presente",
    title: "Desarrollador Web",
    company: "100ESignature",
    location: "Santo Domingo, República Dominicana",
    modality: "Remoto",
    isCurrent: true,
  },
  {
    id: "evolution",
    date: "2017 - 2018",
    title: "Desarrollador Web",
    company: "Evolution Solar System LLC",
    location: "Puerto Rico, Estados Unidos",
    modality: "Remoto",
    isCurrent: false,
  },
];

export default function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-secondary">
      {experience.map((item, idx) => (
        <li
          key={item.id}
          className={idx === experience.length - 1 ? "ms-6" : "mb-10 ms-6"}
        >
          <div className="absolute w-3 h-3 bg-foreground rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

          <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
            {item.date}
          </time>

          <h3 className="flex items-center mb-1 text-md font-semibold my-2">
            {item.title}
            <span className="ms-2 text-body font-semibold">
              @ {item.company}
            </span>
            {item.isCurrent && (
              <span className="ms-2 bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded">
                Actual
              </span>
            )}
          </h3>

          <p className="text-body">
            {item.location} — {item.modality}
          </p>
        </li>
      ))}
    </ol>
  );
}
