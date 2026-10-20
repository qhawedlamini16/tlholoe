import { ArrowLeft, ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { type Service, services } from "../services";

const symbolLogo = "/branding/tlholoe-web-icon.png";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=8696+Otlega+Drive+Kagiso+2+South+Africa";

export default function ServicePage({ service }: { service: Service }) {
  const others = services.filter((item) => item.slug !== service.slug);
  const whatsappText = encodeURIComponent(`Hello Tlholoes Funeral Parlour, I would like to ask about ${service.name.toLowerCase()}.`);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Tlholoes Funeral Parlour home">
          <img className="brand-mark" src={symbolLogo} alt="" />
          <span className="brand-name">Tlholoes <em>Funeral Parlour</em></span>
        </a>
        <nav className="main-nav service-nav">
          <a href="/#services">All services</a>
          <a href="/#packages">Packages</a>
          <a className="nav-cta" href="tel:+27114101081"><Phone size={15} /> Call us</a>
        </nav>
      </header>

      <main>
        <section className="service-page section-pad">
          <a className="service-back" href="/#services"><ArrowLeft size={16} /> All services</a>
          <p className="eyebrow"><span className="eyebrow-line" /> Tlholoes Funeral Parlour · Kagiso 2 · Est. 1957</p>
          <h1>{service.h1}</h1>
          <div className="service-page-grid">
            <div className="service-page-body">
              {service.body.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
              <div className="hero-actions">
                <a className="button primary" href="tel:+27114101081"><Phone size={17} /> Call 011 410 1081</a>
                <a className="button text-button" href={`https://wa.me/27832796962?text=${whatsappText}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp 083 279 6962</a>
              </div>
            </div>
            <aside className="service-page-card" aria-label="Contact details and hours">
              <div className="hours-title"><Clock3 size={18} /> Office hours</div>
              <div className="hours-row"><span>Monday – Friday</span><strong>08:00 – 16:00</strong></div>
              <div className="hours-row"><span>Saturday</span><strong>08:00 – 12:00</strong></div>
              <div className="hours-row"><span>Emergency support</span><strong>24 hours · 7 days</strong></div>
              <a className="service-page-address" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> 8696 Otlega Drive, Kagiso 2</a>
            </aside>
          </div>
        </section>

        <section className="services section-pad">
          <div className="section-index">Other services <span>How we can help</span></div>
          <div className="service-list">
            {others.map((item) => (
              <a className="service-item" href={`/${item.slug}`} key={item.slug}>
                <span>→</span><img className="service-mark" src={symbolLogo} alt="" />
                <div><h3>{item.name}</h3><p>{item.short}</p></div><ArrowUpRight size={19} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><img src={symbolLogo} alt="" /><div><strong>Tlholoes Funeral Parlour</strong><span>8696 Otlega Drive, Kagiso 2, South Africa · Est. 1957</span></div></div><div className="footer-links"><a href="/">Home</a><a href="https://www.facebook.com/p/Tlholoes-Funeral-Parlour-61556540136992/" target="_blank" rel="noreferrer">Facebook</a><span>© {new Date().getFullYear()} Tlholoes</span></div></footer>
    </div>
  );
}
