"use client";

import type { FC } from "react";

const CancellationRefundsPage: FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#050807] px-5 py-16 text-[#e4eee6] sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <header className="space-y-3 text-left">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#7ba3b8] uppercase">
            Policy
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#f7faf7] sm:text-4xl lg:text-[2.6rem]">
            Cancellation &amp; Refunds
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#9cb5b0] sm:text-base">
            At Noww Club, we are committed to offering meaningful, curated
            experiences to our members. We understand that plans can change and
            aim to be fair and transparent with our cancellation and refund
            processes.
          </p>
        </header>

        <section className="space-y-8 text-sm leading-relaxed text-[#c4d0ca] sm:text-base">
          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              1. Event cancellations by the member
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[#e8f1eb]">
                  Free events
                </h3>
                <p className="mt-1">
                  Members must cancel at least{" "}
                  <span className="font-semibold">72 hours</span> before the
                  scheduled time to allow others to attend. Repeated no-shows
                  may affect future event invitations.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#e8f1eb]">
                  Paid events
                </h3>
                <ul className="mt-1 space-y-1.5 pl-4">
                  <li className="list-disc">
                    <span className="font-semibold">
                      More than 96 hours before the event:
                    </span>{" "}
                    Full refund.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold">
                      24–48 hours before the event:
                    </span>{" "}
                    50% refund.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold">
                      Less than 24 hours before the event:
                    </span>{" "}
                    No refund.
                  </li>
                </ul>
                <p className="mt-2">
                  Refunds will be processed within{" "}
                  <span className="font-semibold">7 business days</span> to the
                  original payment method.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              2. Event cancellations by Noww Club
            </h2>
            <p className="mt-2">
              If an event is cancelled by Noww Club due to unforeseen
              circumstances (e.g., weather, logistics, low turnout):
            </p>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">
                Members will be offered a{" "}
                <span className="font-semibold">full refund</span> or an event
                credit for future use.
              </li>
              <li className="list-disc">
                In case of rescheduling, members may opt for a refund or confirm
                their spot on the new date.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              3. Membership fee refunds
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[#e8f1eb]">
                  Monthly or quarterly memberships
                </h3>
                <p className="mt-1">
                  Refunds are not provided once the membership period has
                  started. However, in special cases (e.g., relocation, health
                  emergencies), partial refunds may be considered on a
                  case-by-case basis.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#e8f1eb]">
                  Annual memberships
                </h3>
                <ul className="mt-1 space-y-1.5 pl-4">
                  <li className="list-disc">
                    A <span className="font-semibold">pro‑rata refund</span> may
                    be offered if cancellation is requested within the first{" "}
                    <span className="font-semibold">30 days</span>.
                  </li>
                  <li className="list-disc">
                    No refunds are offered after{" "}
                    <span className="font-semibold">30 days</span> of
                    activation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              4. Concierge &amp; personal services
            </h2>
            <p className="mt-2">
              Fees for one‑time personalized services (e.g., styling sessions,
              reservations, bookings) are non‑refundable once the service is
              confirmed.
            </p>
            <p className="mt-2">
              For cancellations made before the service is delivered, a partial
              refund or service credit may be considered based on vendor and
              partner agreements.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              5. How to request a refund
            </h2>
            <p className="mt-2">
              To cancel or request a refund, please contact us on{" "}
              <span className="font-semibold">WhatsApp</span> with your booking
              details.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              6. Exceptions
            </h2>
            <p className="mt-2">Refunds are not applicable for:</p>
            <ul className="mt-2 space-y-1.5 pl-4">
              <li className="list-disc">No‑shows.</li>
              <li className="list-disc">Partial attendance.</li>
              <li className="list-disc">
                Member ban or removal due to violation of community guidelines.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#e8f1eb] sm:text-lg">
              7. Policy updates
            </h2>
            <p className="mt-2">
              Noww Club reserves the right to modify this policy at any time.
              Updated versions will be reflected on our website/app.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CancellationRefundsPage;

