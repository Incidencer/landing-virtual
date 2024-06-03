import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const sections = [
  { id: 'features', component: <FeatureSection /> },
  { id: 'workflow', component: <Workflow /> },
  { id: 'pricing', component: <Pricing /> },
  { id: 'testimonials', component: <Testimonials /> }
];

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        {sections.map(section => (
          <section id={section.id} key={section.id}>
            {section.component}
          </section>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default App;
