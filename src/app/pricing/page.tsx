import Image from "next/image";
import Title from "../components/Title";
import PricingCard from "../components/pricing/PricingCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depine - Pricing",
};

export default function Princing() {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center">
        <Title title="Pricing" subtitle="Easy, right?" />
      </div>

      <div className="flex flex-col md:flex-row md:w-full w-10/12 mx-auto justify-center items-center space-y-10 md:space-y-0 md:space-x-20 mt-10 h-full">
        <PricingCard
          className="shadow-custom-white"
          color="white"
          edition="Community"
          usage="Free"
          buttonText="Coming soon !"
        />
        <PricingCard
          className="shadow-custom-orange"
          color="orange"
          edition="Commercial"
          usage="Business"
          price="Custom"
          buttonText="Contact Sales"
          additionalFeats={["24/7 support", "Artifactory support"]}
        />
      </div>
      <section>
        <h1 className="font-bold md:text-3xl text-Respxl text-center mt-24">Our strategy</h1>
        <div className="justify-center space-x-5 mx-auto mt-11 md:flex hidden">
          <Image
            src="/images/depine_pricing.png"
            width={200}
            height={150}
            alt={"Depine Strategy"}
            className="w-52 h-48"
          />
          <div className="flex flex-col w-1/2 space-y-5">
            <p className="font-bold">
              {" "}
              Let&apos;s disrupt the onboarding process. <br />
              Let&apos;s make Depine the new standard.
            </p>
            <p>
              By providing Depine for free with its community version, we aim to
              help open-source projects by reducing the friction of onboarding,
              in order to help developers contributing. We count on independant
              developers to adopt Depine in order for them to push its usage in
              their companies.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:hidden w-10/12 mx-auto mt-10">
          <div className="flex flex-col  space-y-5 text-left text-sm ">
            <p className="font-bold ">
              Let&apos;s disrupt the onboarding process. <br />
              Let&apos;s make Depine the new standard.
            </p>
            <p>
              By providing Depine for free with its community version, we aim to help open-source projects by reducing the friction of onboarding, in order to help developers contributing. We count on independant developers to adopt Depine in order for them to push its usage in their companies.
            </p>
          </div>
          <Image
            src="/images/depine_pricing.png"
            width={200}
            height={150}
            alt={"Depine Strategy"}
            className="w-52 h-52 mt-5 mx-auto mb-10"
          />
        </div>

      </section>
    </div>
  );
}
