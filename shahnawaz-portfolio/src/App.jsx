import { useState } from 'react'
import { ArrowUpRight, Cloud, Code, Database, Gauge, Mail, MapPin, Menu, Shield, X } from './components/Icons'

const nav = ['About', 'Expertise', 'Experience', 'Contact']
const metrics = [
  ['15+', 'Years of experience'], ['99.9%', 'Critical database uptime'], ['30 TB', 'Redshift cluster managed'], ['50%', 'Search performance gain'],
]
const expertise = [
  { icon: Database, title: 'Database Architecture', text: 'Designing scalable, normalized and reliable database platforms across PostgreSQL, MySQL, MariaDB, SQL Server and Oracle.' },
  { icon: Gauge, title: 'Performance Engineering', text: 'Query optimization, indexing, replication and refactoring that translate directly into faster systems and lower operating cost.' },
  { icon: Cloud, title: 'Cloud & Migration', text: 'Hands-on delivery across AWS and Azure, including RDS, Redshift, DMS, Azure SQL and live cross-cloud migration.' },
  { icon: Shield, title: 'Reliability & Security', text: 'High availability, backup, disaster recovery, patching, access control and encryption for business-critical data services.' },
  { icon: Code, title: 'Automation & Scripting', text: 'Python, T-SQL, PL/SQL, Shell and PowerShell automation that removes repetitive work and improves operational consistency.' },
  { icon: Database, title: 'Data Platform Collaboration', text: 'Partnering with development, DevOps, infrastructure and analytics teams to establish durable engineering practices.' },
]
const experience = [
  { period: 'Jan 2025 — Present', company: 'STC', role: 'Database Specialist', location: 'Riyadh, Saudi Arabia', bullets: ['Sustaining 99.9% uptime for critical cloud databases.', 'Improved search performance by 50% and system efficiency by 30%.', 'Reduced query response time and storage cost by 20%.', 'Managed a 30 TB Amazon Redshift cluster and live AWS DMS migrations.'] },
  { period: 'Oct 2021 — Dec 2024', company: 'INTIGRAL', role: 'Database Specialist', location: 'Riyadh, Saudi Arabia', bullets: ['Transitioned to a full-time employee following the INTIGRAL and STC merger.', 'Worked across development, analytics and infrastructure teams on database reliability and performance.'] },
  { period: 'Oct 2019 — Aug 2021', company: 'Praminfo', role: 'Database Consultant — INTIGRAL', location: 'Dubai, UAE', bullets: ['Delivered database services for INTIGRAL and converted to a full-time client role after a successful contract period.'] },
  { period: 'Sep 2014 — Mar 2019', company: 'SMASCO', role: 'MS SQL Server DBA', location: 'Riyadh, Saudi Arabia', bullets: ['Managed 20+ SQL Server instances with 99.9% uptime.', 'Automated maintenance work, saving around 10 hours weekly.', 'Deployed an on-premises Power BI Server while optimizing licensing cost.'] },
  { period: 'Jun 2010 — Aug 2014', company: 'DENAVE India', role: 'Database Engineer', location: 'Noida, India', bullets: ['Built 50+ complex SQL scripts for automated SSRS reporting.', 'Automated SQL Server Agent maintenance, saving 15 hours weekly.', 'Integrated Excel and SQL Server using VBA to improve operational reporting.'] },
]
const skills = {
  Databases: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'Oracle', 'Azure SQL'],
  Cloud: ['AWS RDS', 'Amazon Redshift', 'AWS DMS', 'Microsoft Azure'],
  Engineering: ['Performance tuning', 'High availability', 'Backup & DR', 'Data migration', 'Schema design', 'Security'],
  Tools: ['Docker', 'SSMS', 'pgAdmin', 'DataGrip', 'Azure Data Studio', 'PowerShell'],
}

function App() {
  const [open, setOpen] = useState(false)
  return <main className="overflow-hidden">
    <div className="grid-fade pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 font-black text-slate-950">SA</span><span>Shahnawaz Alam</span></a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-300">{item}</a>)}<a href="mailto:shahnawaz052@gmail.com" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2.5 font-medium text-cyan-200 transition hover:bg-cyan-300/20">Let’s connect</a></nav>
        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="border-t border-white/5 px-6 py-5 md:hidden">{nav.map(item => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="block py-3 text-slate-300">{item}</a>)}</nav>}
    </header>

    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
      <div className="max-w-4xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-300"/>Based in Riyadh · Open to architecture & consulting opportunities</div>
        <p className="mb-4 font-mono text-sm uppercase tracking-[.25em] text-cyan-300">Cloud & Enterprise Database Architect</p>
        <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-.045em] text-white sm:text-7xl lg:text-[88px]">I design data platforms that stay <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">fast, resilient and ready to scale.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">15+ years building, optimizing and modernizing enterprise database systems across AWS, Azure and on-premises environments.</p>
        <div className="mt-10 flex flex-wrap gap-4"><a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">View my experience <ArrowUpRight/></a><a href="mailto:shahnawaz052@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"><Mail/> Email me</a></div>
      </div>
      <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{metrics.map(([n,l]) => <div key={l} className="bg-[#0a1728] p-7"><div className="text-3xl font-semibold text-white">{n}</div><div className="mt-2 text-sm text-slate-400">{l}</div></div>)}</div>
    </section>

    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-mono text-sm uppercase tracking-[.2em] text-cyan-300">About</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Database depth.<br/>Business perspective.</h2></div><div className="space-y-6 text-lg leading-8 text-slate-300"><p>I help organizations turn complex database estates into dependable platforms. My work spans architecture, performance engineering, migration, disaster recovery, security and day-to-day operational excellence.</p><p>I am most effective at the intersection of database engineering, cloud infrastructure, DevOps and analytics—where technical decisions must produce measurable business outcomes.</p><div className="flex items-center gap-2 pt-2 text-sm text-slate-400"><MapPin className="h-4 w-4"/> Riyadh, Saudi Arabia</div></div></div></section>

    <section id="expertise" className="scroll-mt-24 border-y border-white/5 bg-white/[.018] py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="font-mono text-sm uppercase tracking-[.2em] text-cyan-300">Core expertise</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white">From database internals to cloud-scale operations.</h2><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{expertise.map(({icon: I,title,text}) => <article key={title} className="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><I/></div><h3 className="mt-6 text-xl font-semibold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></article>)}</div></div></section>

    <section id="experience" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-sm uppercase tracking-[.2em] text-cyan-300">Career journey</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Experience built across enterprise environments.</h2><div className="glass mt-9 rounded-3xl p-6"><p className="text-sm uppercase tracking-widest text-slate-500">Certifications</p><ul className="mt-4 space-y-3 text-slate-200"><li>AWS Certified Solutions Architect — Associate</li><li>AWS Certified Cloud Practitioner</li><li>Microsoft Azure Data Fundamentals (DP-900)</li></ul></div></div><div className="space-y-5">{experience.map((job,i) => <article key={job.company} className="relative rounded-3xl border border-white/10 bg-white/[.025] p-7"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-2xl font-semibold text-white">{job.role}</h3><p className="mt-1 text-cyan-300">{job.company} · {job.location}</p></div><span className="whitespace-nowrap text-sm text-slate-500">{job.period}</span></div><ul className="mt-6 grid gap-3 text-slate-400">{job.bullets.map(b => <li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"/><span>{b}</span></li>)}</ul>{i===0 && <span className="absolute right-6 top-6 hidden rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200 lg:block">Current</span>}</article>)}</div></div></section>

    <section className="border-y border-white/5 bg-white/[.018] py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-mono text-sm uppercase tracking-[.2em] text-cyan-300">Technology landscape</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Tools I use to deliver reliable systems.</h2></div></div><div className="mt-12 grid gap-5 md:grid-cols-2">{Object.entries(skills).map(([group,items]) => <div key={group} className="glass rounded-3xl p-7"><h3 className="text-sm font-semibold uppercase tracking-[.18em] text-slate-500">{group}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{item}</span>)}</div></div>)}</div></div></section>

    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"><div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-indigo-400/10 to-transparent p-8 sm:p-12 lg:p-16"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"/><p className="font-mono text-sm uppercase tracking-[.2em] text-cyan-300">Start a conversation</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">Building or modernizing a database platform?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Let’s discuss architecture, performance, migration, reliability or database-driven product development.</p><div className="mt-9 flex flex-wrap gap-4"><a href="mailto:shahnawaz052@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950"><Mail/> shahnawaz052@gmail.com</a><a href="tel:+966538335141" className="rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white">+966 53 833 5141</a></div></div></section>

    <footer className="border-t border-white/5"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-8"><p>© {new Date().getFullYear()} Shahnawaz Alam</p><p>Cloud & Enterprise Database Architect · Riyadh</p></div></footer>
  </main>
}
export default App
