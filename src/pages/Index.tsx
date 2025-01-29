import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { PlanSection } from "@/components/PlanSection";
import { SuccessSection } from "@/components/SuccessSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PlanSection />
      <SuccessSection />
      <Footer />
    </div>
  );
};

export default Index;