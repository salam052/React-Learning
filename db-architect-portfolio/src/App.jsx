import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Summary from './components/Summary.jsx'
import SkillsMatrix from './components/SkillsMatrix.jsx'
import ExperienceLog from './components/ExperienceLog.jsx'
import Education from './components/Education.jsx'
import ContactPanel from './components/ContactPanel.jsx'

// All resume content lives here as plain data, sourced from the uploaded
// resume. Edit these values to update the site without touching any
// component markup.
const profile = {
  name: 'Shahnawaz Alam',
  role: 'Cloud & Enterprise Database Architect',
  location: 'Riyadh, Saudi Arabia',
  years: '15+ years experience',
  email: 'shahnawaz052@gmail.com',
  phone: '+966538335141',
  linkedin: 'https://www.linkedin.com/in/shahnawaz-alam-08290634/',
}

const summary = {
  paragraphs: [
    `15+ years of experience managing complex database systems across cloud (AWS, Azure) and on-premises environments — with deep expertise in PostgreSQL, MySQL, MariaDB, MS SQL Server, and Azure SQL Database.`,
    `Skilled in database design, performance tuning, data migration, and backup/disaster recovery strategies that keep business-critical systems running. Extensive hands-on experience optimizing Azure SQL databases for scalability, security, and cost-efficiency.`,
    `A proven track record of cross-functional collaboration with DevOps and Analytics teams to deliver high-performance, reliable database solutions.`,
  ],
  stats: [
    { label: 'Years experience', value: '15+' },
    { label: 'Uptime achieved', value: '99.9%' },
    { label: 'Redshift cluster managed', value: '30TB' },
  ],
}

const skillGroups = [
  {
    table: 'databases',
    items: ['MS SQL Server', 'PostgreSQL', 'MySQL', 'MariaDB', 'Oracle'],
  },
  {
    table: 'cloud_platforms',
    items: ['AWS (RDS, Redshift, DMS)', 'Azure (Azure SQL)'],
  },
  {
    table: 'database_management',
    items: [
      'Design & Normalization',
      'Performance Tuning & Optimization',
      'Backup, Recovery & DR',
      'High Availability',
      'Data Migration (AWS DMS)',
    ],
  },
  {
    table: 'programming_scripting',
    items: ['Python', 'T-SQL', 'PL/SQL', 'Shell Scripting', 'PowerShell'],
  },
  {
    table: 'tools',
    items: ['Docker', 'PgAdmin', 'DataGrip', 'SSMS', 'Azure Data Studio'],
  },
]

const certifications = [
  'AWS Certified Solutions Associate',
  'AWS Certified Cloud Practitioner',
  'Azure Data Fundamentals (DP-900)',
]

const experience = [
  {
    range: 'Jan 2025 — Present',
    company: 'STC',
    location: 'Riyadh, Saudi Arabia',
    title: 'Database Specialist',
    points: [
      'Achieved 99.9% uptime for critical cloud databases through proactive monitoring, performance tuning, and efficient release management.',
      'Collaborated closely with DevOps teams to ensure seamless database patching and smooth minor/major upgrades with minimal downtime.',
      'Improved search performance by 50% and system efficiency by 30% through indexing and replication strategies.',
      'Reduced query response times and storage costs by 20% through query optimization and database refactoring.',
      'Ensured data security and privacy by implementing access controls and encryption measures to protect sensitive customer information.',
      'Managed an Amazon Redshift cluster with 30TB of data, ensuring high availability, performance optimization, and efficient data loading.',
      'Collaborated with the Analytics team to optimize and share critical business datasets, improving decision-making across departments.',
      'Led cross-functional meetings between development, analytics, and infrastructure teams on schema design and performance tuning best practices.',
      'Set up live data migration from AWS to Huawei Cloud using AWS DMS.',
    ],
  },
  {
    range: 'Oct 2021 — Dec 2024',
    company: 'INTIGRAL',
    location: 'Riyadh, Saudi Arabia',
    points: [],
    note: 'Transitioned to a full-time employee after the merger of INTIGRAL with stc.',
  },
  {
    range: 'Oct 2019 — Aug 2021',
    company: 'Praminfo',
    location: 'Dubai, UAE',
    points: [],
    note: 'Worked with client INTIGRAL — hired as a full-time employee after a successful contract period.',
  },
  {
    range: 'Sep 2014 — Mar 2019',
    company: 'Saudi Manpower Solutions Co. (SMASCO)',
    location: 'Riyadh, Saudi Arabia',
    title: 'MS SQL Server DBA',
    points: [
      'Managed the installation, configuration, and patching of 20+ MS SQL Server (2016, 2014) instances across multiple data servers, ensuring 99.9% uptime and compliance with security standards.',
      'Automated routine database maintenance tasks, saving 10 hours of manual work per week and significantly enhancing system reliability.',
      'Developed and deployed an on-premises MS Power BI Server using an existing MS SQL Server license, optimizing resource utilization and reducing licensing costs.',
    ],
  },
  {
    range: 'Jun 2010 — Aug 2014',
    company: 'DENAVE India Pvt Ltd',
    location: 'Noida, UP',
    title: 'Database Engineer',
    points: [
      'Collaborated with development teams to optimize database design and query performance, aligning with best practices and business requirements.',
      'Designed 50+ complex SQL scripts that automated report generation in SSRS, reducing manual reporting time by more than 10 hours weekly.',
      'Implemented SQL Server Agent jobs to automate routine maintenance tasks, saving the team an average of 15 hours of manual work per week.',
      'Integrated Excel with SQL Server databases using VBA to fetch and analyse data directly, reducing manual intervention time by 12 hours per week.',
    ],
  },
]

const education = {
  degree: 'B.Sc. Mathematics with Computer Application',
  institution: 'Annamalai University',
  location: 'Chennai, India',
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Nav />

      <Hero
        name={profile.name}
        role={profile.role}
        location={profile.location}
        years={profile.years}
        email={profile.email}
        linkedin={profile.linkedin}
      />

      <main id="main-content">
        <Summary paragraphs={summary.paragraphs} stats={summary.stats} />
        <SkillsMatrix groups={skillGroups} certifications={certifications} />
        <ExperienceLog entries={experience} />
        <Education
          degree={education.degree}
          institution={education.institution}
          location={education.location}
        />
        <ContactPanel
          email={profile.email}
          phone={profile.phone}
          location={profile.location}
          linkedin={profile.linkedin}
        />
      </main>

      <footer className="max-w-5xl mx-auto px-6 sm:px-10 py-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-ink-dim">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-[11px] text-ink-dim">
          Built with React + Tailwind
        </span>
      </footer>
    </div>
  )
}
