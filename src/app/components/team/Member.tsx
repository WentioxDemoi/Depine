import React from "react";
import Image from "next/image";

interface MemberProps {
  avatarSrc: string;
  name: string;
  role: string;
  school: string;
  linkedinUrl: string;
  githubUrl: string;
}

const Member: React.FC<MemberProps> = ({
  avatarSrc,
  name,
  role,
  school,
  linkedinUrl,
  githubUrl,
}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg mb-20 mx-20">
      <Image
        src={avatarSrc}
        alt="Avatar"
        className="rounded-full mb-4"
        height={200}
        width={200}
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-white">{role}</p>
      <p className="text-white mb-2">{school}</p>
      <div className="flex space-x-4">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            height={20}
            width={20}
          />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Image src="/images/github.png" alt="GitHub" height={20} width={20} />
        </a>
      </div>
    </div>
  );
};

export default Member;
