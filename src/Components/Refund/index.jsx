import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold">Payment & Refund Policy</h1>
      <p className="text-muted mb-5">Effective Date: May 2, 2025</p>

      <section className="mb-5">
        <p>
          Corcus Studio LLP is a creative and digital agency offering services across India and abroad. This Payment & Refund Policy applies to all clients engaging with our services, including but not limited to:
        </p>
        <ul className="ps-4" style={{ listStyleType: "disc" }}>
          <li>Website Design & Development</li>
          <li>Digital Marketing (SEO, Social Media, Paid Ads)</li>
          <li>Branding & Visual Identity</li>
          <li>Product Photography & Videography</li>
          <li>UI/UX Design & Consultation</li>
          <li>Graphic Design</li>
          <li>Performance Marketing</li>
          <li>Strategy & Consultation Services</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">1. Payment Terms</h2>
        <p className="fw-bold">Indian Clients:</p>
        <ul className="ps-4" style={{ listStyleType: "disc" }}>
          <li>Payments via NEFT, IMPS, UPI, Razorpay</li>
          <li>GST applicable as per law (currently 18%)</li>
        </ul>
        <p className="fw-bold">International Clients:</p>
        <ul className="ps-4" style={{ listStyleType: "disc" }}>
          <li>Payments accepted via PayPal, Wise, or SWIFT transfer</li>
          <li>Accepted currencies: USD, EUR, GBP, AUD</li>
          <li>Client must bear transaction charges</li>
          <li>GST not applicable on export services (subject to documentation)</li>
        </ul>
        <p className="mt-2">A minimum of 50% advance is required for all services.</p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">2. Delivery Timeline</h2>
        <p>
          Project timelines are shared during onboarding and depend on service type, complexity, and timely inputs from the client. Delays from the client side do not qualify for refund or compensation.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">3. Product Photography / Videography</h2>
        <ul className="ps-4" style={{ listStyleType: "disc" }}>
          <li>50% advance required to confirm shoot dates</li>
          <li>International clients must coordinate shipping and customs logistics</li>
          <li>Final content delivered via secure link after full payment</li>
          <li>Raw files shared only upon prior written agreement</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">4. Cancellation & Refunds</h2>
        <ul className="ps-4" style={{ listStyleType: "disc" }}>
          <li>90% refund if cancelled before project commencement (after deductions)</li>
          <li>Partial refund if cancelled mid-project, minimum 30% will be retained</li>
          <li>No refund post final delivery of any digital asset or service</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">5. Non-Refundable Services</h2>
        <ul className="ps-4" style={{ listStyleType: "disc" }}>
          <li>Third-party tools like hosting, domains, paid software</li>
          <li>Ongoing or executed marketing campaigns</li>
          <li>Completed photography/videography services</li>
          <li>Consultation or strategy sessions already conducted</li>
          <li>Monthly retainers once service period begins</li>
          <li>Custom development post draft sharing</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">6. Scope & Revisions</h2>
        <p>
          The project scope is agreed upon before commencement. Any additional work or revisions beyond the defined scope will be treated as new work and billed separately.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">7. Time Zone & Communication</h2>
        <p>
          We operate from 10 AM to 7 PM IST (Monday to Friday). International meetings are scheduled upon mutual convenience.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">8. Legal Jurisdiction</h2>
        <p>
          All disputes are subject to the jurisdiction of the courts of Patna, Bihar, India, regardless of the client's country of origin.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">Contact Details</h2>
        <p><strong>Corcus Studio LLP</strong></p>
        <p>Chandraprabha Kunj, Lavkush Nagar, Sonu Market, Gola Road, Patna, Bihar – 801503</p>
        <p>Email: <a href="mailto:info@corcus.in">info@corcus.in</a></p>
        <p>Website: <a href="https://www.corcus.in" target="_blank" rel="noopener noreferrer">www.corcus.in</a></p>
        <p>Phone: +91 87896 77330</p>
      </section>

      <p className="mt-4">
        By engaging with Corcus Studio LLP, you agree to the terms mentioned in this Payment & Refund Policy.
      </p>
    </div>
  );
};

export default RefundPolicy;