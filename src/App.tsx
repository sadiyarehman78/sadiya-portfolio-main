import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Sections } from "./components/portfolio/Sections";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { Particles } from "./components/portfolio/Particles";

function App() {
  return (
    <>
      <ScrollProgress />
      <Particles />
      <Navbar />
      <Hero />
      <Sections />
    </>
  );
}

export default App;