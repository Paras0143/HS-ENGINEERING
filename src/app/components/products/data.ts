export type Product = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
};

export const products: Product[] = [
  {
    id: "p1",
    title: "Rotary Screw Air Compressor",
    shortDescription:
      "High-efficiency rotary screw compressor designed for continuous industrial duty.",
    fullDescription:
      "Our Rotary Screw Air Compressor delivers consistent, oil-injected performance with low noise and minimal maintenance. Ideal for manufacturing, automotive, and process industries requiring continuous duty cycles and reliable airflow.",
    imageUrl: "/product1.jpg",
  },
  {
    id: "p2",
    title: "Refrigerated Air Dryer",
    shortDescription:
      "Energy-efficient dryer ensuring dry, clean air for downstream equipment.",
    fullDescription:
      "This Refrigerated Air Dryer reduces moisture to protect pneumatic tools and extend equipment life. Features a compact footprint, easy-access panels, and smart controls for stable dew point under varying loads.",
    imageUrl: "/product2.jpg",
  },
  {
    id: "p3",
    title: "Compressed Air Filter",
    shortDescription:
      "High-grade filtration for particulates, oil aerosols, and vapors in air lines.",
    fullDescription:
      "Engineered for industrial environments, our Compressed Air Filter provides multi-stage filtration to remove particulates, oil, and vapors. Ensures ISO-compliant air quality for sensitive applications.",
    imageUrl: "/compressed air filer.jpg",
  },
  {
    id: "p4",
    title: "Oil-Water Separator",
    shortDescription:
      "Environmentally compliant condensate management with simple maintenance.",
    fullDescription:
      "An efficient Oil-Water Separator designed to treat compressor condensate. It separates and retains oils while discharging clean water, helping facilities meet environmental regulations.",
    imageUrl: "/air oil seperator.jpg",
  },
  {
    id: "p5",
    title: "Heatless Desiccant Dryer",
    shortDescription:
      "Reliable dew point performance for critical applications and instrumentation.",
    fullDescription:
      "A robust Heatless Desiccant Dryer that delivers ultra-dry air with low pressure drop. Ideal for pharmaceutical, food, and electronics manufacturing requiring stringent moisture control.",
    imageUrl: "/product3.jpg",
  },
  {
    id: "p6",
    title: "Air Receiver Tank",
    shortDescription:
      "ASME-rated storage tanks optimizing demand surges and compressor cycling.",
    fullDescription:
      "Built to rigorous standards, our Air Receiver Tanks stabilize system pressure, buffer peak demand, and reduce compressor cycling. Available in multiple capacities and configurations.",
    imageUrl: "/stainless steel replacement filter element.jpg",
  },
];
