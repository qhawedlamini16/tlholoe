import fs from "node:fs";

const filePath = "/home/ubuntu/tlholoes-funeral-parlour/client/src/pages/Home.tsx";
const source = fs.readFileSync(filePath, "utf8");
const startMarker = '        <section className="feedback-section';
const endMarker = "      </main>";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);
if (start === -1 || end === -1) throw new Error("Could not locate the malformed homepage block.");

const cleanBlock = `        <section className="feedback-section section-pad" id="feedback">
          <div className="section-index">06 <span>Share your feedback</span></div>
          <div className="feedback-grid">
            <div>
              <h2>Help us serve<br /><i>families better.</i></h2>
              <p>Tell Tlholoes about your experience or share a suggestion. Your message will open an email addressed to the parlour team for review.</p>
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
              <button className="button primary" type="submit"><Mail size={17} /> Send feedback to Tlholoes</button>
              {feedbackSent && <p className="feedback-confirmation" role="status">Your email app should now be ready to send the feedback to Tlholoes.</p>}
            </form>
          </div>
        </section>
        <div className="feedback-cta-separator" aria-hidden="true" />

        <section className="final-cta section-pad">
          <div className="final-cta-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Tlholoes Funeral Parlour</p>
            <h2>One clear call.<br /><i>Then the next step.</i></h2>
            <p>For enquiries, arrangements, or simply to know what to do next, we are here to listen.</p>
            <div className="hero-actions">
              <a className="button light" href="tel:+27114101081"><Phone size={17} /> 011 410 1081</a>
              <a className="button light-outline" href="mailto:admin@tlholoesfunerals.co.za"><Mail size={17} /> Email the parlour</a>
            </div>
          </div>
          <div className="final-cta-image">
            <img src={pamphletCallImage} alt="Young adult holding a Tlholoes funeral packages pamphlet while speaking on a phone" />
          </div>
        </section>
`;

fs.writeFileSync(filePath, source.slice(0, start) + cleanBlock + source.slice(end));
console.log("Repaired malformed visual-editor JSX block.");
