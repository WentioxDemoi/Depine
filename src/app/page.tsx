import { Metadata } from "next";
import Home from "./home";


export const metadata: Metadata = {
  title: "Depine",
  description:
    "Deploy your personal development environment in one click. No more configuration hassles – get started with Depine today.",
  openGraph: {
    title: "Depine - Simplify Your Onboarding",
    description:
      "Deploy your personal development environment in one click. No more configuration hassles – get started with Depine today.",
    url: "https://depine.app",
    images: [
      {
        url: "https://depine.app/images/og.jpg",
      },
    ],
  },
  authors: [{ name: "Depine" }],
};

export default function Page() {
  return <Home />;
}