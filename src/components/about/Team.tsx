import Image from "next/image";

const team = [
  {
    name: "Samuel Choudhury",
    role: "Chief Technology Officer",
    bio: "Leads engineering, platform architecture and AI. Two decades building operational systems for teams that can't afford failure.",
    image: "/images/about/team-samuel-silhouette.png",
  },
  {
    name: "Kaji Hussain",
    role: "Chief Revenue Officer",
    bio: "Runs commercial strategy and partnerships. Focused on translating operational pain into measurable, deployed systems.",
    image: "/images/about/team-kaji-hussain.png",
  },
  {
    name: "Muhin Hussain",
    role: "Chief Operating Officer",
    bio: "Owns delivery, client success and internal operations. Ships fast, keeps quality tight, and rarely misses a deadline.",
    image: "/images/about/team-muhin-hussain.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          The Team Building the Future of Operations
        </h2>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-lg bg-white"
            >
              <div className="relative aspect-[0.95/1] overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-4 pt-12">
                  <p className="font-heading text-sm font-semibold text-white">
                    {member.name}
                  </p>
                  <p className="text-xs text-white/70">{member.role}</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm leading-6 text-zinc-500">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
