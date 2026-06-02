type Brand = {
  name: string;
  image?: string;
};

const BRANDS: Brand[] = [
  { name: "Heyam.ae", image: "/assets/brand-logos/heyam.jpg" },
  { name: "TAM" },
  { name: "MexiVida", image: "/assets/brand-logos/mexivida.png" },
  { name: "TSUKIYO" },
  { name: "Blends Barbershop", image: "/assets/brand-logos/blends.svg" },
  { name: "MIRAE Smooth" },
  { name: "US Home Services" },
  { name: "Balanze & UK Clinics" },
];

function BrandMark({ brand }: { brand: Brand }) {
  if (brand.image) {
    return (
      <img
        loading="eager"
        alt={brand.name}
        src={brand.image}
        className="logo-2 qs-brand-logo-img"
      />
    );
  }
  return (
    <span className="logo-2 qs-brand-wordmark" aria-label={brand.name}>
      {brand.name}
    </span>
  );
}

export function LogoMarqueeSection() {
  const track = [...BRANDS, ...BRANDS.slice(0, 3)];

  return (
    <section className="home-logo-section">
      <div className="w-layout-blockcontainer logo-sec-container w-container">
        <div className="brand-txt">
          <div className="left-divider"></div>
          <p className="divider-with-text">
            Loved by 100+ big and small brands around the worlds
          </p>
          <div className="right-divider"></div>
        </div>
        <div className="logo-section">
          <div className="marquee_wrap qs-marquee-animate">
            <div className="static-marquee_logos">
              {track.map((brand, index) => (
                <BrandMark key={`logo-1-${index}`} brand={brand} />
              ))}
            </div>
            <div className="static-marquee_logos">
              {track.map((brand, index) => (
                <BrandMark key={`logo-2-${index}`} brand={brand} />
              ))}
            </div>
          </div>
          <div className="left-overlay-div"></div>
          <div className="right-overlay-div"></div>
        </div>
      </div>
    </section>
  );
}
