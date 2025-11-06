import { 
  Navbar, 
  HomeSection, 
  AboutMiniSection,
  ProductsSection, 
  IndustriesSection, 
  QualitySection
} from "./components/index.js";

export default function Home() {
  return (
    <div className="bg-sky-50 font-sans dark:bg-slate-900">
      {/* Navigation Components */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutMiniSection />
        <ProductsSection />
        <IndustriesSection />
        <QualitySection />
      </main>
    </div>
  );
}
