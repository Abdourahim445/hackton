"use client";
import React from "react";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <div>
            <h1 className="text-lg font-semibold leading-tight">NextStep Jobs</h1>
            <p className="text-xs text-zinc-500">Memphis reentry • gigs & careers</p>
          </div>
        </div>
        <nav className="hidden gap-4 text-sm sm:flex">
          <a className="hover:underline" href="#gigs">Gigs</a>
          <a className="hover:underline" href="#coach">Coach</a>
          <a className="hover:underline" href="#support">Support Hub</a>
          <a className="hover:underline" href="#impact">Impact</a>
        </nav>
      </header>

      {/* Consent-first notice */}
      <div className="mb-6 rounded-xl border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-400/60 dark:bg-amber-950/30 dark:text-amber-200">
        Share data only with your consent. Browse jobs anonymously until you’re ready.
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column: Gigs & filters */}
        <section id="gigs" className="card lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Gig Map</h2>
            <div className="hidden gap-2 sm:flex">
              <span className="chip">Pay $</span>
              <span className="chip">Hours</span>
              <span className="chip">Distance</span>
              <span className="chip">Inclusivity ≥ 4★</span>
            </div>
          </div>
          <div className="map-skeleton" aria-label="Map of gigs" data-testid="map" />
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <GigCard title="Warehouse Picker" meta="$18/hr • 1.1 mi • Today 2–6pm" score={4.5} />
            <GigCard title="Nonprofit Event Setup" meta="$20/hr • 2.4 mi • Sat 8–1" score={4.8} />
            <GigCard title="Restaurant Prep" meta="$16/hr • 0.9 mi • Evenings" score={4.2} />
            <GigCard title="Delivery Associate" meta="$19/hr • 3.2 mi • Flexible" score={4.6} />
          </ul>
        </section>

        {/* Right column: Quick actions + Messages/Appts */}
        <aside className="space-y-6">
          <section className="card">
            <h3 className="text-sm font-semibold">Quick Actions</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <QuickAction title="Get ID" desc="DMV steps" icon={<IdCardIcon />} />
              <QuickAction title="Talk to Someone" desc="Counseling & peers" icon={<ChatIcon />} />
            </div>
          </section>

          <section id="messages" className="card">
            <h3 className="text-sm font-semibold">Appointments & Messages</h3>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <EmptyState title="No upcoming appointments" action="Book appointment" description="Case manager, PO, counselor" />
              <EmptyState title="No new messages" action="Start chat" description="Case manager or peer support" />
            </div>
          </section>
        </aside>
      </div>

      {/* AI Coach + Employer Index + Support + Impact */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section id="coach" className="card lg:col-span-2">
          <h2 className="text-lg font-semibold">AI Career Coach</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <CoachCard title="Resume Builder" desc="Reentry-tailored resume" />
            <CoachCard title="Interview Prep" desc="Practice Q&A" />
            <CoachCard title="Training Paths" desc="Memphis programs" />
          </div>
        </section>
        <section className="card">
          <h2 className="text-lg font-semibold">Employer Inclusivity Index</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center justify-between"><span>Second-chance policy</span><Stars n={5} /></li>
            <li className="flex items-center justify-between"><span>DEI statement quality</span><Stars n={4} /></li>
            <li className="flex items-center justify-between"><span>Reentry participation</span><Stars n={4} /></li>
          </ul>
        </section>
      </div>

      <div id="support" className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="card">
          <h2 className="text-lg font-semibold">Support Hub</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 text-sm">
            <SupportCard title="Housing" desc="Transitional & shelters" />
            <SupportCard title="Transportation" desc="Bus passes & vouchers" />
            <SupportCard title="Legal Aid" desc="Expungement clinics" />
            <SupportCard title="Education" desc="GED • Trade schools" />
          </div>
        </section>
        <section id="impact" className="card lg:col-span-2">
          <h2 className="text-lg font-semibold">Impact Dashboard</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Kpi label="Jobs" value="12" />
            <Kpi label="Hours" value="86" />
            <Kpi label="Skills" value="7" />
            <Kpi label="Long-term" value="2" />
          </div>
          <p className="mt-2 text-xs text-zinc-500">Milestones motivate. Keep going.</p>
        </section>
      </div>

      {/* Bottom nav (mobile) */}
      <nav className="sticky bottom-0 mt-8 grid grid-cols-4 border-t border-zinc-200 bg-white/90 text-center text-xs backdrop-blur dark:border-zinc-800 dark:bg-black/60 sm:hidden">
        <NavItem label="Gigs" />
        <NavItem label="Coach" />
        <NavItem label="Support" />
        <NavItem label="Impact" />
      </nav>

      {/* Test hooks */}
      <div className="sr-only" aria-hidden>
        <span data-testid="gig-count">4</span>
      </div>
    </div>
  );
}

/* Inline components & icons – same as preview to keep this file standalone */
function LogoIcon() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded"><rect x="2" y="2" width="20" height="20" rx="4" className="fill-zinc-900 dark:fill-zinc-100" /><path d="M7 16l5-8 5 8" className="stroke-white dark:stroke-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function IdCardIcon() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" className="stroke-current" strokeWidth="1.5" /><circle cx="9" cy="11" r="2" className="stroke-current" strokeWidth="1.5" /><path d="M6.5 16c.7-1.2 2-2 3.5-2s2.8.8 3.5 2" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" /><path d="M14 9h4M14 12h4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" /></svg>); }
function ChatIcon() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 15a4 4 0 0 1-4 4H9l-4 3V7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v8z" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" /><path d="M8 9h8M8 12h5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" /></svg>); }
function Chip({ children }: { children: React.ReactNode }) { return <span className="chip">{children}</span>; }
function NavItem({ label }: { label: string }) { return (<button className="flex flex-col items-center gap-1 py-3 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"><span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" aria-hidden /><span>{label}</span></button>); }
function Kpi({ label, value }: { label: string; value: string }) { return (<div className="rounded-xl border border-zinc-200/70 p-4 text-center dark:border-zinc-800"><div className="text-2xl font-semibold">{value}</div><div className="text-xs text-zinc-500">{label}</div></div>); }
function Stars({ n }: { n: number }) { return (<div className="flex gap-0.5" aria-label={String(n) + " stars"}>{Array.from({ length: 5 }).map((_, i) => (<span key={i} className={(i < n ? "inline-block h-3 w-3 bg-zinc-900 dark:bg-zinc-100 rounded-xs" : "inline-block h-3 w-3 bg-zinc-300 dark:bg-zinc-700 rounded-xs")} />))}</div>); }
function QuickAction({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) { return (<div className="group flex items-center gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"><span aria-hidden className="opacity-80 group-hover:opacity-100">{icon}</span><div><div className="text-sm font-semibold leading-tight">{title}</div><div className="text-xs text-zinc-600 dark:text-zinc-400">{desc}</div></div></div>); }
function EmptyState({ title, description, action }: { title: string; description: string; action: string }) { return (<div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700"><div><div className="text-sm font-semibold">{title}</div><p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p></div><button className="btn-primary text-xs">{action}</button></div>); }
function GigCard({ title, meta, score }: { title: string; meta: string; score: number }) { return (<li className="rounded-xl border border-zinc-200/70 p-4 transition hover:shadow dark:border-zinc-800" data-testid="gig-card"><div className="flex items-center justify-between"><h3 className="text-sm font-semibold">{title}</h3><span className="kbd" aria-label="Inclusivity score">{score.toFixed(1)}★</span></div><p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{meta}</p><div className="mt-3 flex gap-2"><button className="btn-primary text-xs">Quick Apply</button><button className="btn-ghost text-xs">Save</button></div></li>); }
function SupportCard({ title, desc }: { title: string; desc: string }) { return (<div className="rounded-xl border border-zinc-200/70 p-4 dark:border-zinc-800"><div className="text-sm font-semibold">{title}</div><p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p></div>); }
function CoachCard({ title, desc }: { title: string; desc: string }) { return (<div className="rounded-xl border border-zinc-200/70 p-4 dark:border-zinc-800"><div className="text-sm font-semibold">{title}</div><p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p><div className="mt-3 flex gap-2"><button className="btn-primary text-xs">Open</button><button className="btn-ghost text-xs">Save</button></div></div>); }
