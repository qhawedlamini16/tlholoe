// Quiet Heritage direction: oxblood, warm ivory, ink-black; Cormorant Garamond + DM Sans.
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

const symbolLogo = "/branding/tlholoe-web-icon.png";
const heroSlides = [
  { src: "/images/lions/lions-000.jpg", alt: "A funeral service beneath a black and white canopy", caption: "A dignified farewell" },
  { src: "/images/lions/lions-001.jpg", alt: "Ceremonial guards standing beside a coffin", caption: "Care in every detail" },
  { src: "/images/lions/lions-002.jpg", alt: "A decorated funeral setting with a coffin and flowers", caption: "A considered farewell" },
  { src: "/images/lions/lions-003.jpg", alt: "Tlholoe's Funeral Parlour vehicles outside the parlour", caption: "Here when you need us" },
];
const careImage = "/images/tlholoes-human-approach.jpg";
const detailImage = "/images/tlholoes-find-us.jpg";
const pamphletCallImage = "/images/tlholoes-enquiry.jpg";

const hours = [
  ["Monday – Sunday", "09:00 – 17:00"],
  ["Emergency support", "24 hours · 7 days"],
];

// Official business details. Keep identical to the Google Business Profile and
// the LocalBusiness data in client/index.html.
const businessName = "Tlholoe's Funeral Parlour";
const legalName = "Tlholoe's Funeral Parlour CC";
const streetShort = "8696 Otlega Dr, Kagiso";
const fullAddress = "8696 Otlega Dr, Kagiso, Krugersdorp, 1754, South Africa";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessName}, ${fullAddress}`)}`;

const packageDetails = [
  { name: "Bronze", price: "R180", coffin: "Flat lid coffin", note: "A grounded essential package" },
  { name: "Silver", price: "R220", coffin: "Open face coffin", note: "A considered family package" },
  { name: "Gold", price: "R320", coffin: "Three tier coffin", note: "More room for gathering" },
  { name: "Platinum", price: "R400", coffin: "Economy casket", note: "A complete arrangement" },
];

const packageInclusions = "Coffin spray flowers · Hearse and 2 family cars · 5×10 tent · 2 tables · 40 chairs · Portable toilet · Vegetables · Concentrated gemere · 100 paper plates, cups and spoons · Gravesite preparation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [feedbackSent, setFeedbackSent] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const submitFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Tlholoe's website feedback from ${form.get("name") || "a visitor"}`;
    const body = `Name: ${form.get("name") || "Not provided"}\nContact: ${form.get("contact") || "Not provided"}\n\nFeedback:\n${form.get("message") || ""}\n\nPermission to share feedback publicly: ${form.get("permission") ? "Yes" : "No"}`;
    window.location.href = `mailto:admin@tlholoesfunerals.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFeedbackSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Tlholoe's Funeral Parlour home">
          <img className="brand-mark" src={symbolLogo} alt="" />
          <span className="brand-name">Tlholoe's <em>Funeral Parlour</em></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <a href="#care" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#packages" onClick={closeMenu}>Packages</a>
          <a href="#hours" onClick={closeMenu}>Hours</a>
          <a href="#feedback" onClick={closeMenu}>Feedback</a>
          <a className="nav-cta" href="tel:+27114101081" onClick={closeMenu}><Phone size={15} /> Call us</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Kagiso 2 · South Africa · 69th Anniversary</p>
            <h1>When a family needs <i>steady hands.</i></h1>
            <p className="hero-intro">A dignified local funeral parlour offering calm guidance and a clear place to begin when someone you love has passed.</p>
            <div className="hero-actions">
              <a className="button primary" href="tel:+27114101081"><Phone size={17} /> Call the parlour</a>
              <a className="button text-button" href="mailto:admin@tlholoesfunerals.co.za">Send an email <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-note"><ShieldCheck size={18} /><span>Here when you need us, with dignity at the centre.</span></div>
          </div>
          <div className="hero-art" aria-roledescription="carousel" aria-label="Tlholoe's Funeral Parlour images">
            <div className="hero-slideshow" aria-live="polite">
              {heroSlides.map((slide, index) => <img key={slide.src} className={index === slideIndex ? "hero-slide active" : "hero-slide"} src={slide.src} alt={slide.alt} aria-hidden={index !== slideIndex} />)}
            </div>
            <div className="hero-art-copy"><span>{heroSlides[slideIndex].caption}</span><strong>With care<br /><i>at every turn.</i></strong></div>
            <div className="hero-caption"><span>0{slideIndex + 1}</span><span>Local care · Clear guidance</span><div className="hero-slide-dots">{heroSlides.map((slide, index) => <button key={slide.src} className={index === slideIndex ? "active" : ""} onClick={() => setSlideIndex(index)} aria-label={`Show image ${index + 1}`} aria-pressed={index === slideIndex} />)}</div></div>
          </div>
        </section>

        <section className="contact-ribbon" aria-label="Contact details">
          <div><span className="ribbon-label">Visit</span><a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> {streetShort}, Krugersdorp</a></div>
          <div><span className="ribbon-label">Call</span><a href="tel:+27114101081"><Phone size={17} /> 011 410 1081</a></div>
          <div><span className="ribbon-label">Write</span><a href="mailto:admin@tlholoesfunerals.co.za"><Mail size={17} /> admin@tlholoesfunerals.co.za</a></div>
        </section>

        <section className="statement section-pad about-section" id="care">
          <div className="section-index">02 <span>About Tlholoe's</span></div>
          <div className="statement-grid">
            <div>
              <h2>Rooted in Kagiso.<br /><i>Here across generations.</i></h2>
            </div>
            <div className="statement-body">
              <p>Tlholoe's Funeral Parlour is at the heart of central Kagiso, serving families across Krugersdorp and nationwide. Founded in 1957, the parlour has supported several generations with excellent service and genuine customer care.</p>
              <p>That care continues beyond funeral arrangements through after-care conversations and feedback that help the team keep improving how it serves each family.</p>
              <p className="signature">Serving families with dignity since 1957</p>
            </div>
          </div>
          <div className="anniversary-banner" role="note"><span>69</span><strong>69 years of service</strong><small>Established 1957 · celebrating the families and community we serve</small></div>
          <div className="credentials-strip" aria-label="Business details"><div><span>Established</span><strong>1957</strong></div><div><span>CK number</span><strong>1994/179520/23</strong></div><div><span>VAT number</span><strong>4790144390</strong></div></div>
        </section>

        <section className="care-feature section-pad">
          <div className="care-image-wrap"><img src={careImage} alt="Four Tlholoe's Funeral Parlour gentlemen wearing suits and red ties" /></div>
          <div className="care-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A human service</p>
            <h2>One clear call.<br /><i>Then the next step.</i></h2>
            <p>When the details feel difficult to hold, start with a conversation. We can help you understand what to do next and connect you with the right support for your family’s arrangements.</p>
            <a className="underlined-link" href="tel:+27114101081">Speak with the parlour <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-index">03 <span>How we can help</span></div>
          <div className="services-heading"><h2>A considered farewell,<br /><i>step by step.</i></h2><p>For current availability and arrangements, please speak directly with the parlour. Our team can guide you through the details with care.</p></div>
          <div className="service-list">
            <div className="service-item"><span>01</span><img className="service-mark" src={symbolLogo} alt="" /><div><h3>Funeral arrangements</h3><p>Calm guidance for the decisions and details that come next.</p></div><ArrowUpRight size={19} /></div>
            <div className="service-item"><span>02</span><img className="service-mark" src={symbolLogo} alt="" /><div><h3>Cremation services</h3><p>Support in arranging a dignified cremation according to your family’s wishes.</p></div><ArrowUpRight size={19} /></div>
            <div className="service-item"><span>03</span><img className="service-mark" src={symbolLogo} alt="" /><div><h3>Repatriation</h3><p>Practical help coordinating the safe return of a loved one.</p></div><ArrowUpRight size={19} /></div>
            <div className="service-item"><span>04</span><img className="service-mark" src={symbolLogo} alt="" /><div><h3>Tombstones</h3><p>Thoughtful memorial options to mark a life and a place of remembrance.</p></div><ArrowUpRight size={19} /></div>
            <div className="service-item"><span>05</span><img className="service-mark" src={symbolLogo} alt="" /><div><h3>Exhumations</h3><p>Respectful support through the arrangements and practical steps involved.</p></div><ArrowUpRight size={19} /></div>
          </div>
        </section>

        <section className="packages section-pad" id="packages">
          <div className="section-index">04 <span>Funeral schemes</span></div>
          <div className="packages-heading"><h2>Clear packages.<br /><i>Room to choose.</i></h2><p>Affordable monthly rates tailored to meet your needs. Speak with the parlour to confirm eligibility, current pricing, and arrangements.</p></div>
          <div className="package-grid">{packageDetails.map((item) => <article className="package-card" key={item.name}><div className="package-card-top"><span>{item.name}</span><strong>{item.price}</strong></div><h3>{item.coffin}</h3><p>{item.note}</p><div className="package-rule" /><small>{packageInclusions}</small><div className="package-card-actions"><a href={`https://wa.me/27832796962?text=${encodeURIComponent(`Hello Tlholoe's Funeral Parlour, I would like to ask about the ${item.name} package.`)}`} target="_blank" rel="noreferrer"><MessageCircle size={14} /> 083 279 6962</a><a href={`https://wa.me/27828591438?text=${encodeURIComponent(`Hello Tlholoe's Funeral Parlour, I would like to ask about the ${item.name} package.`)}`} target="_blank" rel="noreferrer"><MessageCircle size={14} /> 082 859 1438</a></div></article>)}</div>
          <div className="scheme-note"><strong>Scheme 1 + 9</strong><span>Plan A, members 14–65: Bronze R250 · Silver R350 · Platinum R430</span><span>Plan B, members 66–74: Bronze R300 · Silver R410 · Platinum R530</span><span>Pensioners, single only, age 74–80: Bronze R220 premium · 6-month waiting period</span></div>
          <div className="anniversary-note"><span>69</span><div><strong>69th Anniversary</strong><p>Established in 1957 · serving families with dignity.</p></div></div>
          <div className="package-whatsapp"><a className="whatsapp-button" href="https://wa.me/27832796962?text=Hello%20Tlholoe%27s%20Funeral%20Parlour%2C%20I%20would%20like%20to%20ask%20about%20your%20packages." target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp 083 279 6962</a><a className="whatsapp-button" href="https://wa.me/27828591438?text=Hello%20Tlholoe%27s%20Funeral%20Parlour%2C%20I%20would%20like%20to%20ask%20about%20your%20packages." target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp 082 859 1438</a></div>
        </section>

        <section className="hours-section section-pad" id="hours">
          <div className="hours-photo"><img src={detailImage} alt="A pastor beside a casket at a funeral ceremony" /></div>
          <div className="hours-card">
            <div className="section-index">05 <span>Find us</span></div>
            <h2>Open for your<br /><i>next question.</i></h2>
            <p>Our parlour at {fullAddress} is here for conversations, enquiries, guidance, and 24/7 emergency support.</p>
            <div className="hours-list"><div className="hours-title"><Clock3 size={18} /> Office hours</div>{hours.map(([day, time]) => <div className="hours-row" key={day}><span>{day}</span><strong>{time}</strong></div>)}</div>
            <a className="button primary full" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions</a><a className="emergency-link" href="tel:+27114101081"><Phone size={16} /> Emergency support · 24/7</a>
          </div>
        </section>

        <section className="feedback-section section-pad" id="feedback">
          <div className="section-index" style={{ paddingTop: "20px" }}>06 <span>Share your feedback</span></div>
          <div className="feedback-grid">
            <div>
              <h2 style={{ paddingBottom: "20px" }}>Help us serve<br /><i>families better.</i></h2>
              <p style={{ paddingBottom: "22px" }}>Tell Tlholoe's about your experience or share a suggestion. Your message will open an email addressed to the parlour team for review.</p>
              <p className="review-note">Feedback is reviewed by the company before anything is considered for publication. No review is added to this website automatically.</p>
            </div>
            <form className="feedback-form" onSubmit={submitFeedback}>
              <label htmlFor="feedback-name">Your name</label>
              <input id="feedback-name" name="name" type="text" placeholder="Name" required />
              <label htmlFor="feedback-contact">Email or phone</label>
              <input id="feedback-contact" name="contact" type="text" placeholder="How may we reach you?" required />
              <label htmlFor="feedback-message">Your feedback</label>
              <textarea id="feedback-message" name="message" rows={5} placeholder="Share your experience or suggestion" required />
              <label className="permission-check"><input name="permission" type="checkbox" /> I am happy for the company to consider sharing this feedback publicly.</label>
              <p className="privacy-hint">We use your details only to respond to your feedback. See our <a href="/privacy">privacy notice</a>.</p>
              <button className="button primary" type="submit"><Mail size={17} /> Send feedback to Tlholoe's</button>
              {feedbackSent && <p className="feedback-confirmation" role="status">Your email app should now be ready to send the feedback to Tlholoe's.</p>}
            </form>
          </div>
        </section>
        <div className="feedback-cta-separator" aria-hidden="true" />

        <section className="final-cta section-pad">
          <div className="final-cta-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Tlholoe's Funeral Parlour</p>
            <h2>One clear call.<br /><i>Then the next step.</i></h2>
            <p>For enquiries, arrangements, or simply to know what to do next, we are here to listen.</p>
            <div className="hero-actions">
              <a className="button light" href="tel:+27114101081"><Phone size={17} /> 011 410 1081</a>
              <a className="button light-outline" href="mailto:admin@tlholoesfunerals.co.za"><Mail size={17} /> Email the parlour</a>
            </div>
          </div>
          <div className="final-cta-image">
            <img src={pamphletCallImage} alt="A woman holding a Tlholoe's Funeral Parlour pamphlet while making an enquiry call" />
          </div>
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><img src={symbolLogo} alt="" /><div><strong>{legalName}</strong><span>{fullAddress} · Est. 1957</span></div></div><div className="footer-links"><a href="#top">Back to top</a><a href="/privacy">Privacy notice</a><a href="https://www.facebook.com/p/Tlholoes-Funeral-Parlour-61556540136992/" target="_blank" rel="noreferrer">Facebook</a><span>© {new Date().getFullYear()} {legalName}</span></div></footer>
    </div>
  );
}
