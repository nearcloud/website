import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Resellers } from "../components/Resellers";
import { Footer } from "../components/Footer";

import services from "../config/services.json";
import resellers from "../config/resellers.json";

export default function Home() {
  return (
    <div>
      <div className="h-1.5 bg-primary-500"></div>
      <Hero></Hero>
      <Services services={services} />
      <Resellers resellers={resellers} />
      <Footer />
    </div>
  );
}
