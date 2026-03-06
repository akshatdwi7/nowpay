import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
    </main>
  );
}
