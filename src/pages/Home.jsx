import { useState } from "react";
import Hero from "../sections/Hero.jsx";
import TrustBar from "../sections/TrustBar.jsx";
import Problems from "../sections/Problems.jsx";
import ProductTour from "../sections/ProductTour.jsx";
import RoiCalculator from "../sections/RoiCalculator.jsx";
import VideoCaseStudy from "../sections/VideoCaseStudy.jsx";
import Compliance from "../sections/Compliance.jsx";
import Resources from "../sections/Resources.jsx";
import DemoSection from "../sections/DemoSection.jsx";
import VideoModal from "../components/VideoModal.jsx";

const MODAL_LABELS = {
  overview: "Video placeholder — 2-minute product overview (Wistia embed)",
  "case-study": "Video placeholder — Beacon Trades Trust case study (Wistia embed)",
};

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <Hero onOpenModal={setActiveModal} />
      <TrustBar />
      <Problems />
      <ProductTour />
      <RoiCalculator />
      <VideoCaseStudy onOpenModal={setActiveModal} />
      <Compliance />
      <Resources />
      <DemoSection />

      <VideoModal
        isOpen={activeModal !== null}
        label={activeModal ? MODAL_LABELS[activeModal] : ""}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}
