"use client";
import { Hint } from "../components/documentation/Hint";
import React, { useState } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Image from "next/image";

const contentSlice = createSlice({
  name: "content",
  initialState: "importing",
  reducers: {
    showImporting: (state) => "importing",
    showCloning: (state) => "cloning",
  },
});

const { actions, reducer } = contentSlice;
const store = configureStore({ reducer });
export default function ImportingProject() {
  const [activeTab, setActiveTab] = useState("importing");
  const dispatch = store.dispatch;

  const handleImportClick = () => {
    setActiveTab("importing");
    dispatch(actions.showImporting());
  };

  const handleCloningClick = () => {
    setActiveTab("cloning");
    dispatch(actions.showCloning());
  };
  return (
    <>
      <div
        id="deploy_new_env"
        className="text-sm font-medium text-center text-gray-500"
      >
        <ul className="flex flex-wrap font-extralight border-b border-gray-200">
          <li className="me-2">
            <a
              className={`inline-block py-3 mx-8 border-b-4 cursor-pointer ${
                activeTab === "importing"
                  ? "border-orange text-white"
                  : "border-transparent text-gray"
              }`}
              onClick={handleImportClick}
            >
              Deploy by importing a Pinefile
            </a>
          </li>
          <li className="me-2">
            <a
              className={`inline-block py-3 border-b-4 cursor-pointer ${
                activeTab === "cloning"
                  ? "border-orange text-white"
                  : "border-transparent text-gray"
              }`}
              onClick={handleCloningClick}
            >
              Deploy by cloning a project
            </a>
          </li>
        </ul>
        {activeTab === "importing" && (
          <div id="importing" className="font-light text-left my-8">
            <p>
              The easiest way to deploy a new environment is to import a new
              Pinefile. Simply drag and drop the Pinefile into Depine.
            </p>
            <img
              src="/images/drag_pine.png"
              alt="Drag and drop"
              width={400}
              height={100}
              className="mt-10"
            />
            <Hint
              text="You can also select the Pinefile in your file explorer
          by clicking on the “Open” button."
            ></Hint>
          </div>
        )}
        {activeTab === "cloning" && (
          <div id="cloning" className="font-extralight my-8">
            <p>WIP</p>
          </div>
        )}
      </div>
      <li id="switch_deploy">Switch to Deploy Mode</li>
      <div className="font-extralight">
        <p>
          Everytime you want to deploy a new environnement, or update one,
          simply switch to Deploy Mode, at the top of the window.
        </p>
        <Image
          src="/images/deploy_mode.png"
          alt="Deploy Mode"
          width={500}
          height={150}
          className="my-8"
        />
      </div>

      {/* Subsection 3.2 */}
      <li id="import_file" className="text-xl font-semibold">
        Import the Pinefile
      </li>
      <div className="space-y-5 my-5">
        <p className="font-extralight ml-2">
          To deploy a new environnement, start by clicking the “Deploy !” button
          in the left panel.
        </p>
        <Image src="/images/deploy.png" alt="Deploy" width={200} height={100} />
      </div>
    </>
  );
}
