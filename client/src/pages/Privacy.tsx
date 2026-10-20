// POPIA privacy notice. This is the client's legal notice: any change to its
// substance needs the owner's approval, recorded in docs/PROJECT.md.
import { ArrowLeft } from "lucide-react";

const symbolLogo = "/branding/tlholoe-web-icon.png";
const lastUpdated = "20 October 2026";

export default function Privacy() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Tlholoe's Funeral Parlour home">
          <img className="brand-mark" src={symbolLogo} alt="" />
          <span className="brand-name">Tlholoe's <em>Funeral Parlour</em></span>
        </a>
        <a className="privacy-back" href="/"><ArrowLeft size={16} /> Back to the website</a>
      </header>

      <main className="privacy-page section-pad">
        <p className="eyebrow"><span className="eyebrow-line" /> Protection of Personal Information Act (POPIA)</p>
        <h1>Privacy <i>notice</i></h1>
        <p className="privacy-updated">Last updated: {lastUpdated}</p>

        <section>
          <h2>Who we are</h2>
          <p>Tlholoe's Funeral Parlour CC (CK 1994/179520/23), 8696 Otlega Dr, Kagiso, Krugersdorp, 1754, South Africa, is the responsible party for personal information collected through this website and when you contact us. For any privacy question or request, contact our Information Officer at <a href="mailto:admin@tlholoesfunerals.co.za">admin@tlholoesfunerals.co.za</a> or <a href="tel:+27114101081">011 410 1081</a>.</p>
        </section>

        <section>
          <h2>What we collect</h2>
          <ul>
            <li><strong>When you contact us</strong> by phone, WhatsApp or email: your name, contact details and what you tell us about your enquiry.</li>
            <li><strong>When you send feedback</strong> through the form on this website: your name, email address or phone number, your message, and whether you agree that we may consider sharing your feedback publicly.</li>
            <li><strong>When you arrange a funeral or join a funeral scheme</strong>: the details needed to provide that service, which we collect directly from you at the parlour.</li>
          </ul>
          <p>The feedback form does not store anything on this website. It opens your own email app with a message addressed to us, and nothing is sent until you press send.</p>
        </section>

        <section>
          <h2>Why we use it</h2>
          <p>We use your information only to answer your enquiry or feedback, to arrange and provide the services you ask for, to improve our service, and where the law requires it. We do not sell your information or use it for marketing without your consent.</p>
          <p>We will only share feedback publicly if you ticked the permission box, and we may still choose not to.</p>
        </section>

        <section>
          <h2>Who we share it with</h2>
          <p>We share personal information only when it is needed to provide the service you asked for (for example, with service providers who help us carry out funeral arrangements), or when the law requires us to.</p>
        </section>

        <section>
          <h2>This website</h2>
          <p>This website does not use advertising or tracking cookies. Like most websites, our hosting provider automatically records basic technical information (such as your IP address and browser type) to keep the site secure and working. Our website is hosted by a provider whose servers may be outside South Africa.</p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>We keep personal information only for as long as we need it for the purpose it was collected, or for as long as the law requires.</p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>You may ask us what personal information we hold about you, ask us to correct or delete it, or object to how we use it. Contact our Information Officer using the details above.</p>
          <p>If you are not satisfied with how we handle your information, you may lodge a complaint with the Information Regulator (South Africa) through its website, <a href="https://inforegulator.org.za" target="_blank" rel="noreferrer">inforegulator.org.za</a>.</p>
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><img src={symbolLogo} alt="" /><div><strong>Tlholoe's Funeral Parlour CC</strong><span>8696 Otlega Dr, Kagiso, Krugersdorp, 1754, South Africa · Est. 1957</span></div></div><div className="footer-links"><a href="/">Home</a><span>© {new Date().getFullYear()} Tlholoe's Funeral Parlour CC</span></div></footer>
    </div>
  );
}
