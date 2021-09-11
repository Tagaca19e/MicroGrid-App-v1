import React from "react";
import NavbarStyleOne from "@/components/_App/NavbarStyleOne";
import MainBanner from "@/components/HomeDemo4/MainBanner";
import PartnerStyle2 from "@/components/Common/PartnerStyle2";
import IntroVideo from "@/components/HomeDemo4/IntroVideo";
import Features from "@/components/HomeDemo5/Features";
import BestAppEver from "@/components/HomeDemo4/BestAppEver";
import KeyFeatures from "@/components/HomeDemo4/KeyFeatures";
import AppProgressStyle3 from "@/components/Common/AppProgressStyle3";
import AppDownloadStyle3 from "@/components/Common/AppDownloadStyle3";
import AppScreenshotsStyle4 from "@/components/AppScreenshots/AppScreenshotsStyle4";
import SoftwareIntegrationsThree from "@/components/Common/SoftwareIntegrationsThree";
import PricingPlanStyle4 from "@/components/PricingPlan/PricingPlanStyle4";
import ClientFeedbackStyle4 from "@/components/Feedbacks/ClientFeedbackStyle4";
import FreeTrialStyle2 from "@/components/Common/FreeTrialStyle2";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";
import FooterStyleThree from "@/components/_App/FooterStyleThree";
import Contact from "@/components/Contact/ContactForm";

const IndexPage = () => {
  return (
    <>
      <NavbarStyleOne />

      <MainBanner />

      <PartnerStyle2 />

      <IntroVideo />

      <Features />

      <BestAppEver />

      <KeyFeatures />

      <AppProgressStyle3 />

      <AppDownloadStyle3 />

      <AppScreenshotsStyle4 />

      <SoftwareIntegrationsThree />

      <PricingPlanStyle4 />

      <ClientFeedbackStyle4 />

      <div className="ptb-100">
        <FreeTrialStyle2 />g
        <Contact />
      </div>

      <FooterStyleThree />
    </>
  );
};

export default IndexPage;