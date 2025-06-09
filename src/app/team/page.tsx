import Member from "../components/team/Member";
import Title from "../components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depine - Team",
};

export default function Team() {
  const members = [
    {
      avatarSrc: "/images/avatars/lbuonocore.png",
      name: "Lucas Buonocore",
      role: "Chief Executive Officer",
      school: "Epitech Nice",
      linkedinUrl: "https://www.linkedin.com/in/lucas-buonocore/",
      githubUrl: "https://github.com/lukyyy9",
    },
    {
      avatarSrc: "/images/avatars/rdesbordes.png",
      name: "Rémi Desbordes",
      role: "Full-stack Engineer",
      school: "Epitech Nice",
      linkedinUrl: "https://www.linkedin.com/in/r%C3%A9mi-desbordes-b98338206/",
      githubUrl: "https://github.com/orgs/we-are-depine/people/WentioxDemoi",
    },
    {
      avatarSrc: "/images/avatars/evangi.png",
      name: "Esteban Vangi",
      role: "Front-end Engineer",
      school: "MIAGE Nice",
      linkedinUrl: "https://www.linkedin.com/in/esteban-vangi-2083a0212/",
      githubUrl: "https://github.com/esteb621",
    },
    {
      avatarSrc: "/images/avatars/cviegas.png",
      name: "Césaire Viegas",
      role: "Core Engineer",
      school: "42 Paris",
      linkedinUrl: "https://www.linkedin.com/in/c%C3%A9saire-viegas-717600208/",
      githubUrl: "https://github.com/cezou",
    },
    {
      avatarSrc: "/images/avatars/cslimani.png",
      name: "Clément Slimani",
      role: "Core Engineer",
      school: "MIAGE Nice",
      linkedinUrl:
        "https://www.linkedin.com/in/cl%C3%A9ment-slimani-772832215/",
      githubUrl: "https://github.com/Clemouz",
    },
    {
      avatarSrc: "/images/avatars/bollier.png",
      name: "Benjamin Ollier",
      role: "Back-end Engineer",
      school: "ESGI Paris",
      linkedinUrl: "https://www.linkedin.com/in/benjamin-ollier-22363b1a3/",
      githubUrl: "https://github.com/benjamin-ollier",
    },
    {
      avatarSrc: "/images/avatars/lboatti.png",
      name: "Lauris Boatti",
      role: "Sales Representative",
      school: "MIAGE Nice",
      linkedinUrl: "https://www.linkedin.com/in/laurisboatti/",
      githubUrl: "https://github.com/Boatti",
    },
  ];

  return (
    <div>
      <Title title="Team" subtitle="Made in France 🐓" />
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center text-center">
        {members.map((member, index) => (
          <Member
            key={index}
            avatarSrc={member.avatarSrc}
            name={member.name}
            role={member.role}
            school={member.school}
            linkedinUrl={member.linkedinUrl}
            githubUrl={member.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
