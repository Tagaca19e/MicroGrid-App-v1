import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleOne";
import MainBanner from "@/components/HomeDemo2/MainBanner";
import Features from "@/components/HomeDemo2/Features";
import KeyFeatures from "@/components/HomeDemo2/KeyFeatures";
import AppProgressStyle2 from "@/components/Common/AppProgressStyle2";
import IntroVideo from "@/components/HomeDemo2/IntroVideo";
import AppScreenshotsStyle2 from "@/components/AppScreenshots/AppScreenshotsStyle2";
import SoftwareIntegrationsTwo from "@/components/Common/SoftwareIntegrations";
import ClientFeedbackStyle2 from "@/components/Feedbacks/ClientFeedbackStyle2";
import PricingPlanStyle2 from "@/components/PricingPlan/PricingPlanStyle2";
import FreeTrialStyle2 from "@/components/Common/FreeTrialStyle2";
import PartnerStyle1 from "@/components/Common/PartnerStyle1";
import FooterStyleOne from "@/components/_App/FooterStyleOne";

const IndexPage2 = () => {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />
      <PartnerStyle1 />

      {/* <Features /> */}

      {/* <KeyFeatures /> */}

      <AppProgressStyle2 />

      <AppScreenshotsStyle2 />
      {/* <IntroVideo /> */}

      <SoftwareIntegrationsTwo />

      <ClientFeedbackStyle2 />

      {/* <PricingPlanStyle2 /> */}

      <FreeTrialStyle2 />

      <FooterStyleOne />
    </>
  );
};

export default IndexPage2;
