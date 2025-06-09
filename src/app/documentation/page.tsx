import { Hint } from "../components/documentation/Hint";
import Question from "../components/documentation/Question";
import TableOfContents from "../components/documentation/TableOfContents";
import Title from "../components/Title";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import ImportingProject from "./ImportingProject";

export const metadata = {
  title: "Depine - Documentation",
};

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation - Depine</title>
        <meta
          name="description"
          content="Deploy your entire development environment in one click. No more configuration hassles – get started with Depine today."
        />
        <meta property="og:title" content="Depine - Simplify Your Onboarding" />
        <meta
          property="og:description"
          content="Deploy your entire development environment in one click. No more configuration hassles – get started with Depine today."
        />
        <meta property="og:url" content="https://depine.app" />
        <meta property="og:image" content="https://depine.app/images/og.jpg" />
      </Head>
      <Title title="Documentation" subtitle="RTFM" />
      <div className="flex flex-col md:flex-row md:space-x-6 ">
        <div className="md:w-1/4 w-full md:mb-0 sticky top-[200px] self-start mt-7">
          <TableOfContents />
        </div>

        {/* Contenu principal */}
        <div id="doc" className="md:w-4/6 w-10/12 mx-auto">
          <ol className="ml-4 space-y-10">
            {/* Section 1 */}
            <div className="mb-8">
              <li id="download" className="md:text-2xl text-Respxl font-bold">
                Download Depine
              </li>
              <p className="font-extralight">
                To get started, download Depine{" "}
                <a href="/pricing" className="underline">
                  here
                </a>
                . Vous pouvez choisir de vous connecter à votre compte, ce qui
                vous permettra de définir votre environnement de développement
                de base et de synchroniser vos projets, vos fichiers
                d’environnements, etc.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section" className="my-8">
              <li
                id="configure_project"
                className="md:text-2xl text-Respxl font-bold"
              >
                Configure my project
              </li>
              <ol className="ml-6 space-y-6">
                {/* Subsection 2.1 */}
                <li id="switch_editor" className="md:text-2xl text-sm">
                  Switch to Editor Mode
                </li>
                <div className="w-full space-y-6">
                  <p className="font-extralight">
                    Everytime you want to edit or configure something, simply
                    switch to Editor Mode, at the top of the window.
                  </p>
                  <Image
                    src="/images/editor_mode.png"
                    alt="Editor Mode"
                    width={300}
                    height={150}
                  />
                </div>

                {/* Subsection 2.2 */}
                <li id="select_project" className="my-8">
                  Select the project folder
                </li>
                <div className="w-full space-y-6 mb-10">
                  <p className="font-extralight">
                    First, select your project’s folder in your file explorer,
                    like you would in your IDE. Simply click on the “Add”
                    button.
                  </p>
                  <Image
                    src="/images/project_folder.png"
                    alt="Select project folder"
                    width={300}
                    height={150}
                  />
                  <Hint text="The folder has to be a Git folder." />
                  <p className="font-extralight mb-4">
                    This will create a new empty Pinefile. This is where all the
                    project dependencies will be written. Also, it will add a
                    banner at the top of your{" "}
                    <span className="underline">README.md</span>.
                  </p>
                  <p className="font-extralight">
                    This indicates to new developpers that they can use Depine
                    to deploy this project.
                  </p>
                  <Image
                    src="/images/git_banneer.png"
                    alt="Select project folder"
                    width={700}
                    height={150}
                  />
                  <Hint text="This is not mandatory, but we highly recommand you to leave it here, or at least mention it in your README.md." />
                </div>

                {/* Subsection 2.3 */}
                <li id="select_dependencies" className="my-8">
                  Select the dependencies
                </li>
                <div className="w-full mb-10">
                  <p className="font-extralight ml-2">
                    Select the dependencies you project needs. Simply search and
                    add them. The dependencies are separated into four distinct
                    categories :
                  </p>
                  <ul className=" space-y-3 font-extralight my-10">
                    <li className="list-disc">
                      <span className="font-bold">Languages </span>- pretty
                      self-explanatory..?
                      <p className="ml-5 text-gray">
                        <span className="font-medium">e.g.</span> Java @11
                      </p>
                    </li>
                    <li>
                      <span className="font-bold">Utilities</span> - it could be
                      package managers or diverse software.
                      <p className="ml-5 text-gray">
                        <span className="font-medium">e.g.</span> Maven @3.81,
                        Docker @latest
                      </p>
                    </li>
                    <li>
                      <span className="font-bold">IDEs</span>
                      <p className="ml-5 text-gray">
                        <span className="font-medium">e.g.</span> IntelliJ IDEA
                        @latest
                      </p>
                    </li>
                    <li>
                      <span className="font-bold">Scripts</span>- the commands
                      Depine needs to run to complete installation.
                      <p className="ml-5 text-gray">
                        <span className="font-medium">e.g.</span> mvn clean
                        install, mvn spring-boot:run
                      </p>
                    </li>
                  </ul>
                  <Image
                    src="/images/dependencies.png"
                    alt="Dependencies"
                    width={700}
                    height={250}
                  />
                  <Question
                    question="What if I don’t find the dependency ?"
                    answer="We got you covered : if the search doesn’t find a dependency, you can upload the installer yourself. 
                    Your team will get a warning when deploying though, with your name. \n
                    If the dependency is frequently added, we’ll make sure to add it to our database : the warning will also disapear."
                  />
                </div>

                {/* Subsection 2.4 */}
                <li id="tune_dependencies" className="my-10">
                  Fine tune the dependencies
                </li>
                <div className="mb-10">
                  <p className="font-extralight ml-2 mb-10">
                    If needed, you can configure the dependencies configuration.
                    That could be an IDE plugin, some Maven auth settings…
                    <br />
                    <br />
                    Simply click the edit button on a dependency.
                  </p>
                  <Image
                    src="/images/tune_dependencies.png"
                    alt="Tune dependencies"
                    width={500}
                    height={250}
                  />
                </div>

                {/* Subsection 2.5 */}
                <li id="save_work" className="my-10">
                  Save your work
                </li>
                <div className="space-y-6 mb-10">
                  <p className="font-extralight">
                    Don’t forget to save your changes. Simply hit Ctrl+S / Cmd+S
                    or click on the “Save” button in the top-right corner.
                  </p>
                  <Image
                    src="/images/save.png"
                    alt="Save your work"
                    width={130}
                    height={100}
                  />
                </div>

                {/* Subsection 2.6 */}
                <li id="push_file" className="my-8">
                  Push the Pinefile
                </li>
                <div className="space-y-8 font-extralight">
                  <p>
                    After saving your changes, it’s important to push the
                    Pinefile (and the README.md) to your Git repository. This
                    will allow your teammates to access the latest project
                    configurations. Simply use your usual Git tool to add,
                    commit, and push the Pinefile to your main branch.
                  </p>
                  <Image
                    src="/images/git_depine.png"
                    alt="Push the Pinefile"
                    width={200}
                    height={200}
                  />
                </div>
              </ol>
            </div>

            <div id="section" className="my-8">
              {/* Section 3 */}
              <li id="deploy_env" className="text-2xl font-bold my-8">
                Deploy an environment
              </li>
              <ol className="ml-6">
                {/* Subsection 3.1 */}
                <ImportingProject />
              </ol>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
}
