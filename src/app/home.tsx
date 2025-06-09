"use client";

import Image from "next/image";
import DownloadButton from "./components/DownloadButton";
import ArrowIcon from "./components/ArrowIcon";
import Card from "./components/Card";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useMemo } from "react";


export const viewport = "width=device-width, initial-scale=1.0";
export default function Home() {
  const images = [
    { src: "/images/browsers.png", alt: "browsers", width: 260, height: 120 },
    { src: "/images/java.png", alt: "Java", width: 200, height: 120 },
    { src: "/images/intellij.png", alt: "IntelliJ", width: 120, height: 120 },
    { src: "/images/vscode.png", alt: "VSCode", width: 200, height: 120 },
    { src: "/images/node.png", alt: "Node.js", width: 200, height: 120 },
    { src: "/images/docker.png", alt: "Docker", width: 300, height: 120 },
  ];
  
  const images_mob = [
    { src: "/images/browsers.png", alt: "browsers", width: 130, height: 60 },
    { src: "/images/java.png", alt: "Java", width: 100, height: 60 },
    { src: "/images/intellij.png", alt: "IntelliJ", width: 60, height: 60 },
    { src: "/images/vscode.png", alt: "VSCode", width: 100, height: 60 },
    { src: "/images/node.png", alt: "Node.js", width: 100, height: 60 },
    { src: "/images/docker.png", alt: "Docker", width: 150, height: 60 },
  ];
  const repeatedImages = [...images, ...images];
  const repeatedImages_mob = [...images_mob, ...images_mob];
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const totalWidth = useMemo(
    () => repeatedImages.reduce((sum, img) => sum + img.width / 2 + 64, 0), // 64 correspond à `space-x-16` entre chaque image
    [repeatedImages]
  );

  const totalWidth_mob = useMemo(
    () => repeatedImages_mob.reduce((sum, img) => sum + img.width / 2 + 32, 0), // 64 correspond à `space-x-16` entre chaque image
    [repeatedImages_mob]
  );

  useEffect(() => {
    const duration = 16;
    const finalPosition = -totalWidth;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration,
      repeat: Infinity,
    });

    return controls.stop;
  }, [xTranslation, totalWidth, width]);

  useEffect(() => {
    const duration = 16;
    const finalPosition = -totalWidth_mob;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration,
      repeat: Infinity,
    });

    return controls.stop;
  }, [xTranslation, totalWidth_mob, width]);

  return (
    <div className="mt-8 md:mt-14 w-full mx-0">

      <section id="introduction" className="flex flex-col items-center w-full">
        <h1 className="text-Respxl md:text-2xl font-extrabold text-center">
          Onboarding is now <span className="text-orange">cool </span>😎
        </h1>
        <Image
          width={2650}
          height={800}
          src="/images/homescreen.png"
          alt="homescreen"
          className="md:mt-8 mt-4 w-[95%] md:w-full max-w-full"
        />
      </section>


      <section id="presenting" className="flex flex-col items-center md:-translate-y-10 -translate-y-5">
        {/* Carousel animation section */}

        <h1 className="text-Respxl md:text-3xl text-center md:leading-1 font-extrabold mx-12 md:mx-0">
          Deploy your entire dev environment{" "}
          <span className="bg-gradient-to-r from-[rgb(247,211,197)]  to-orange bg-clip-text text-transparent">
            in one click
          </span>
        </h1>
        <p className=" w-10/12 md:w-1/2 mt-4 text-center md:font-bold  text-base md:text-1xl">
          Depine <span className="text-orange">installs</span> and{" "}
          <span className="text-orange">configures</span> all dependencies when
          you <span className="text-orange">clone</span> a new project, so
          you’re ready to jump{" "}
          <span className="text-orange">straight into coding</span>.
        </p>
        <div ref={ref} className="grid grid-cols-10  items-center my-20 md:my-36 overflow-hidden">
        
        <div className="absolute left-0 w-10 h-1/2 bg-gradient-to-r from-Custom-gray to-transparent pointer-events-none z-40"></div>
  
  {/* Dégradé à droite */}
          <motion.div
            className="relative md:col-span-6 col-span-5 h-64 flex-row w-full my-auto space-x-16 md:flex hidden z-10"
            style={{ x: xTranslation }}
          >
            {repeatedImages.map((item, idx) => (
              <div key={idx} className="h-full flex-shrink-0 z-0">
                <Card
                  image={item.src}
                  alt={item.alt}
                  w={item.width / 2}
                  h={item.height / 2}
                />
              </div>
            ))}
            {repeatedImages.map((item, idx) => (
              <div key={idx} className="h-full flex-shrink-0 z-0">
                <Card
                  image={item.src}
                  alt={item.alt}
                  w={item.width / 2}
                  h={item.height / 2}
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="relative md:col-span-6 col-span-5 h-64 flex-row w-full my-auto space-x-8 md:hidden flex -10"
            style={{ x: xTranslation }}
          >
            {repeatedImages_mob.map((item, idx) => (
              <div key={idx} className="h-full flex-shrink-0 z-0">
                <Card
                  image={item.src}
                  alt={item.alt}
                  w={item.width / 2}
                  h={item.height / 2}
                />
              </div>
            ))}
            {repeatedImages_mob.map((item, idx) => (
              <div key={idx} className="h-full flex-shrink-0 z-0">
                <Card
                  image={item.src}
                  alt={item.alt}
                  w={item.width / 2}
                  h={item.height / 2}
                />
              </div>
            ))}
          </motion.div>


          {/* Arrow Icon - 2/10 width */}
          <div className="col-span-1 flex justify-center text-orange h-full z-40 bg-gradient-radial">
            <ArrowIcon className="md:w-8 md:h-8 w-4 h-4 my-auto" />

          </div>
          <div className="absolute w-10 h-1/2 bg-gradient-to-r from-transparent to-Custom-gray pointer-events-none z-40 md:left-[calc(60%-2.5rem)] left-[calc(50%-2.5rem)]"></div>

          {/* Text section - 4/10 width */}
          <div className="md:col-span-3 col-span-4 flex flex-col space-y-2 text-center bg-gradient-radial z-40">
            <p className="md:text-xl text-lg">
              And <span className="text-orange">so much more...</span>
            </p>
            <div className="w-fit mx-auto relative md:static flex items-center justify-center">
              <div className="w-28 h-28 absolute blur-lg opacity-40 bg-orange rounded-full "></div>
              <Image
                src="/loop.svg"
                alt="loop"
                width={80}
                height={80}
                className="border-blur md:w-20 md:h-18 w-12 h-12"
              />
            </div>
            <p className="md:w-2/3 mx-auto md:text-xl text-lg">
              Depine is compatible with <span className="text-orange">every stack</span>.
            </p>
          </div>
        </div>
        <div className="w-fit flex-col items-center space-y-3 hidden md:flex">
          <p className="text-lg font-bold">
            It’s free for non-profit projects and students !
          </p>
          <DownloadButton />
        </div>
      </section>
      <section
        id="explaination"
        className="md:mt-36 flex flex-col items-center text-center"
      >
        <p className="text-base md:text-lg">That’s cool and all, but...</p>
        <h1 className="text-2xl md:text-3xl font-extrabold">
          How does it work ?
        </h1>
        <p className="text-base md:text-lg my-2">Really hard !</p>
        <div className="flex flex-col border-[1px] px-4 py-3 pb-8 md:pb-24 my-5 md:space-y-10 rounded-2xl border-gray md:w-full w-11/12 h-full">
          <p className="md:text-xl text-base hidden md:flex">Setup</p>
          <div className=" md:space-x-8 md:px-8 md:mx-auto md:space-y-5 md:mt-16 hidden md:flex">
            <Image
              width={200}
              height={200}
              className="md:w-48 md:h-40 w-24 h-20 ml-auto mt-0 md:my-auto"
              src="/images/git_depine.png"
              alt="git_depine"
            />
            <div>
              <p className="font-bold text-xl md:text-2xl md:leading-1">
                <span className="text-orange">Select</span> and{" "}
                <span className="text-orange">tune</span> your{" "}
                <span className="text-orange">dependencies</span>.
                <br />{" "}
                <span className="text-orange">
                  Push the generated Pinefile
                </span>{" "}
                to the project’s repo.
              </p>
              <p className="mt-3 md:text-xl text-lg">
                <span className="font-bold"> Et voila. Setup is complete.</span>{" "}
                <br />
                The main goal here is to make you and your team save time.
              </p>
            </div>
          </div>
          <div className="relative md:hidden">
            <div className="flex justify-between items-start">
              <p className="md:text-xl text-base max-w-10">Setup</p>
              <div className="ml-auto">
                <Image
                  width={200}
                  height={200}
                  className="h-20 w-24"
                  src="/images/git_depine.png"
                  alt="git_depine"
                />
              </div>
            </div>
            <div className=" ml-6">
              <p className="font-bold text-xl">
                <span className="text-orange">Select</span> and{" "}
                <span className="text-orange">tune</span> your{" "}
                <span className="text-orange">dependencies</span>.
              </p>
              <p className="font-bold text-xl mt-4">
                <span className="text-orange">Push the generated Pinefile</span>{" "}
                to the project’s repo.
              </p>
              <p className="mt-3 md:text-xl text-sm">
                <span className="font-bold text-base">
                  Et voila. Setup is complete.
                </span>
                <br />
                The main goal here is to make you and your team save time.
              </p>
            </div>
          </div>

          <div className="mx-auto">
            <Image
              src="/images/project.png"
              width={550}
              height={10}
              className="hidden md:flex"
              alt="setup"
            />
            <Image
              src="/images/project_mobile.png"
              width={550}
              height={10}
              alt="setup"
              className="w-3/4 h-3/4 flex md:hidden mx-auto mt-6"
            />
            <p className="md-10 mt-12 text-center md:text-xl text-base">
              Project is also updated with this cool banner :
            </p>
            <Image
              src="/images/readme.png"
              width={600}
              height={10}
              alt="setup"
            />
          </div>
        </div>
        <p className="text-lg my-10">And now ?</p>

        <div className="flex flex-col border-[1px] p-3 my-5 rounded-2xl border-gray md:w-full w-11/12 h-full">
          <p className="text-white text-base md:text-xl">Usage</p>
          <p className="mx-auto  md-8 mt-4 text-left md:text-center text-xl md:text-2xl md:leading-1 font-bold w-10/12 md:w-full">
            Next time someone onboards on your project :<br />{" "}
            <span className="text-orange">
              {" "}
              They drop the Pinefile into Depine
            </span>
          </p>
          <Image
            src="/images/drag.png"
            className="px-20 mt-6 w-full mx-auto hidden md:flex"
            width={800}
            height={100}
            alt="setup"
          />
          <Image
            src="/images/drag_pine_mobile.png"
            className="mt-6 w-10/12 mx-auto flex md:hidden"
            width={800}
            height={100}
            alt="setup"
          />
          <p className="text-center my-5 md:text-xl text-lg">
            <span className="text-orange">
              <strong>That’s it !</strong>
            </span>{" "}
            Your environment is now ready!
          </p>
        </div>
      </section>
      <section className="mt-36 flex flex-col items-center">
        <p className="md:text-xl text-lg">And yes, Depine provides...</p>
        <h1 className="md:text-3xl text-2xl font-extrabold text-center">
          Extended compatibility
        </h1>
        <div className="mt-5 md-10 items-center space-x-6 md:flex hidden">
          <div className="text-right space-y-6">
            <p className="font-bold">
              Depine is entirely customizable.
              <br />
              You can upload your own installers.
              <br />
              Your team won’t need to wait for our validation.
            </p>
            <p>Sounds too good to be true ?</p>
          </div>
          <Image
            src="/images/installer_depine.png"
            alt="Installer Depine"
            width={200}
            height={200}
            className="max-w-xs md:max-w-md"
          />
        </div>
        <div className="text-left space-y-6 w-10/12 mb-20 ml-0 text-xs md:hidden leading-tight">
          <p className="font-semibold ">
            Depine is entirely customizable.
            <br />
            You can upload your own installers.
            <br />
            Your team won’t need to wait for our validation.
          </p>
          <p>Sounds too good to be true?</p>
        </div>

        <Image
          width={200}
          height={200}
          className="w-2/3 h-2/3 md:hidden flex mb-8"
          src="/images/process.png"
          alt="process"
        />
        
        <div className="space-x-3 my-5 items-center hidden md:flex">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[30px] leading-none">?</p>
            <p className="bg-dark-gray px-3 py-1 rounded-lg">
              I don&apos;t find a dependancy
            </p>
          </div>
          <Image
            className="mt-9"
            src="/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
          />
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/installer.png"
              alt="installer"
              width={30}
              height={30}
            />
            <p className="bg-dark-gray px-3 py-1 rounded-lg">
              I upload the installer
            </p>
          </div>
          <Image
            className="mt-9"
            src="/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
          />
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/installer.png"
              alt="installer"
              width={30}
              height={30}
            />
            <p className="bg-white text-black px-3 py-1 rounded-lg">
              My team can deploy !
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-orange text-sm mx-auto">High demand?</p>
            <Image
              src="/long_arrow.svg"
              alt="Orange arrow"
              width={120}
              height={20}
            />
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image src="/database.svg" alt="database" width={30} height={30} />
            <p className="bg-orange text-black px-3 py-1 rounded-lg">
              We add it to our database
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
