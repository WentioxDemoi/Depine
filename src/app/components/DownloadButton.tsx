"use client";

// import Image from "next/image";

interface DownloadProps {
  className?: string;
}

const Download: React.FC<DownloadProps> = ({ className }) => {
  return (
    <div
      className={`z-50 cursor-pointer flex rounded-2xl space-x-2 bg-white text-black px-4 py-2 ${className}`}
    >
      <p>Coming soon !</p>
      {/* <Image src="/download.svg" alt="download" width={16} height={19} /> */}
    </div>
  );
};

export default Download;
