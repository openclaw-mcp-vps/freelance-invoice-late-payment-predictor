export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Invoice Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict Which Clients Will{" "}
          <span className="text-[#58a6ff]">Pay Late</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Stop chasing payments. Our ML engine analyzes client history and invoice patterns to flag late payers before the due date — so you can act first.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $13/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Payment Risk Scores", "Client History Tracking", "Early Warning Alerts", "Invoice Pattern Analysis", "Accounting API Import"].map((f) => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited invoices & clients",
              "ML late-payment risk scores",
              "Automated early-warning alerts",
              "Accounting API integrations",
              "Full payment history dashboard",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the late payment prediction work?",
              a: "Our ML model analyzes each client's historical payment behavior, invoice amounts, due date patterns, and industry benchmarks to generate a risk score for every outstanding invoice."
            },
            {
              q: "Which accounting tools do you integrate with?",
              a: "We support imports from QuickBooks, FreshBooks, Wave, and CSV exports from any invoicing tool. More integrations are added regularly."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your account settings with no penalties or hidden fees. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Invoice Late Payment Predictor. All rights reserved.
      </footer>
    </main>
  );
}
