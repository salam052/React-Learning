const Icon = ({ children, className = 'h-5 w-5' }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
export const ArrowUpRight = p => <Icon {...p}><path d="M7 17 17 7M7 7h10v10"/></Icon>
export const Database = p => <Icon {...p}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></Icon>
export const Cloud = p => <Icon {...p}><path d="M17.5 19H7a5 5 0 1 1 .9-9.9A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19Z"/></Icon>
export const Code = p => <Icon {...p}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></Icon>
export const Gauge = p => <Icon {...p}><path d="M20 13a8 8 0 1 0-16 0"/><path d="m12 13 4-4"/><path d="M6.7 17h10.6"/></Icon>
export const Shield = p => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></Icon>
export const Mail = p => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>
export const MapPin = p => <Icon {...p}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>
export const Menu = p => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>
export const X = p => <Icon {...p}><path d="m6 6 12 12M18 6 6 18"/></Icon>
