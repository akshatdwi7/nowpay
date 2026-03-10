"use client";

import type { FC } from "react";

const TermsPage: FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#050807] px-5 py-16 text-[#e4eee6] sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="space-y-3 text-left">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#7ba3b8] uppercase">
            Terms
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#f7faf7] sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#9cb5b0] sm:text-base">
            Welcome to Noww Club, owned and operated by True Club Financial
            Technology Private Limited. These Terms and Conditions (&quot;Terms&quot;)
            govern your access to and use of the Noww Club platform, events,
            services, and community offerings (&quot;Services&quot;). By accessing or
            using any part of our Services, you agree to be bound by these
            Terms.
          </p>
        </header>

        <section className="space-y-8 text-sm leading-relaxed text-[#c4d0ca] sm:text-base">
          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              1. Eligibility &amp; membership
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                You must be at least <span className="font-semibold">18</span>{" "}
                years of age to apply for membership.
              </li>
              <li className="list-disc">
                Membership is selective and subject to approval. We reserve the
                right to decline or terminate membership if we believe the
                applicant or member may affect the quality or safety of the
                community.
              </li>
              <li className="list-disc">
                Members are expected to maintain respectful, aspirational
                conduct in all club interactions (online and offline).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              2. Personal information &amp; privacy
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                You agree to provide accurate and truthful information during
                onboarding.
              </li>
              <li className="list-disc">
                Personal data collected during onboarding and usage of the Club
                is used to personalize your experience and offer relevant
                services.
              </li>
              <li className="list-disc">
                For more details, refer to our{" "}
                <span className="font-semibold">Privacy Policy</span>.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              3. Member conduct
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Members shall not engage in any behavior that is harmful,
                discriminatory, or offensive during club events or online
                discussions.
              </li>
              <li className="list-disc">
                Any violation of community standards may lead to suspension or
                permanent removal from the Club.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              4. Event participation
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Club events are by invitation or reservation only.
              </li>
              <li className="list-disc">
                RSVP or booking is mandatory to attend any paid or
                limited‑access experiences.
              </li>
              <li className="list-disc">
                In case of cancellation, refunds (if applicable) will be
                processed as per our event‑specific policy.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              5. Partnership offers &amp; concierge services
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Offers, discounts, or concierge recommendations shared through
                the Club are curated but not guaranteed by Noww Club.
              </li>
              <li className="list-disc">
                The Club is not liable for the quality of
                services/products provided by our partner brands.
              </li>
              <li className="list-disc">
                Users should verify and evaluate third‑party services
                independently.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              6. Content ownership
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                All content (text, visuals, graphics, media) provided on the
                platform is owned by Noww Club or its partners and may not be
                reproduced or used without permission.
              </li>
              <li className="list-disc">
                By submitting any content to Noww Club (e.g., testimonials,
                reviews, feedback), you grant us a non‑exclusive right to use it
                for marketing or community engagement purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              7. Payment &amp; subscription (if applicable)
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Memberships or special access passes may involve one‑time or
                recurring fees.
              </li>
              <li className="list-disc">
                All payments are processed through secure payment gateways.
              </li>
              <li className="list-disc">
                Failure to make timely payments may result in suspension of
                access.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              8. Modification &amp; termination
            </h2>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Noww Club reserves the right to update or change these Terms at
                any time.
              </li>
              <li className="list-disc">
                Continued use of the platform after changes constitutes your
                acceptance of those changes.
              </li>
              <li className="list-disc">
                We reserve the right to terminate access or membership for any
                reason deemed necessary to protect the integrity of the
                community.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              9. Limitation of liability
            </h2>
            <p className="mt-2">
              Noww Club will not be held liable for:
            </p>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Any injury, loss, or damage resulting from participation in
                events or third‑party services.
              </li>
              <li className="list-disc">
                Technical issues or interruptions on our digital platforms.
              </li>
              <li className="list-disc">
                Any action or behavior of other members.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              10. Governing law
            </h2>
            <p className="mt-2">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising will be subject to the
              jurisdiction of the courts of Bengaluru, Karnataka.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              For questions or concerns about these Terms
            </h2>
            <p className="mt-2">
              Contact us at{" "}
              <a
                href="mailto:hello@nowwclub.in"
                className="font-medium text-[#c4e0d0] hover:underline"
              >
                hello@nowwclub.in
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;

