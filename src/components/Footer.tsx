export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="logo"><img src="/madgen-logo.svg" alt="MADGEN" className="logo-img" /></a>
            <p>A digital foundry for automation, product and brand — built as one connected system.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">AI Automation</a>
              <a href="#services">Website Development</a>
              <a href="#services">App Development</a>
              <a href="#services">Digital Marketing</a>
              <a href="#services">Branding</a>
            </div>
            <div className="footer-col">
              <h4>Studio</h4>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#work">Work</a>
              <a href="#cta">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="mailto:hello@madgen.co">hello@madgen.co</a>
              <a href="#">LinkedIn</a>
              <a href="https://www.instagram.com/madgen.media/">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 MADGEN STUDIO. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED &amp; BUILT REMOTE-FIRST</span>
        </div>
      </div>
    </footer>
  )
}
