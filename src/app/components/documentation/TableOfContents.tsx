"use client";

import React, { useState, useRef } from "react";

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tocRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });

      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="underline font-light">
      <img
        src="/images/menu_mobile.png"
        alt="Table des matières"
        className="md:hidden fixed h-[35px] top-20 mx-auto z-50 p-2 rounded-lg shadow-lg cursor-pointer"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      />

      <div
        ref={tocRef}
        className={`${
          isOpen ? "block fixed top-32 left-1/2 transform -translate-x-1/2 bg-white/90 p-4 rounded-lg w-11/12 text-black z-40 shadow-lg" : "hidden"
        } md:block md:relative md:bg-transparent md:shadow-none`}
      >
        <ol className="list-decimal ml-4 space-y-2">
          <li>
            <a onClick={() => scrollToSection("download")} className="md:cursor-pointer">Download Depine</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("configure_project")} className="md:cursor-pointer">Configure my project</a>
            <ol className="list-[lower-alpha] ml-6 space-y-1">
              <li>
                <a onClick={() => scrollToSection("switch_editor")} className="md:cursor-pointer">Switch to Editor Mode</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("select_project")} className="md:cursor-pointer">Select the project folder</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("select_dependencies")} className="md:cursor-pointer">Select the dependencies</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("tune_dependencies")} className="md:cursor-pointer">Fine tune the dependencies</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("save_work")} className="md:cursor-pointer">Save your work</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("push_file")} className="md:cursor-pointer">Push the Pinefile</a>
              </li>
            </ol>
          </li>
          <li>
            <a onClick={() => scrollToSection("deploy_env")} className="md:cursor-pointer">Deploy an environment</a>
            <ol className="list-[lower-alpha] ml-6 space-y-1">
              <li>
                <a onClick={() => scrollToSection("switch_deploy")} className="md:cursor-pointer">Switch to Deploy Mode</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("deploy_new_env")} className="md:cursor-pointer">Deploy a new environment</a>
                <ol className="list-[lower-roman] ml-6 space-y-1">
                  <li>
                    <a onClick={() => scrollToSection("import_file")} className="md:cursor-pointer">Deploy by importing a Pinefile</a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection("clone_project")} className="md:cursor-pointer">Deploy by cloning a project</a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TableOfContents;
