import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Mail, Linkedin, Dribbble, Figma, Sparkles, Layers3, MoveUpRight } from 'lucide-react';
import './styles.css';

const projects = [
  { id: 1, title: 'Nexa', category: 'Fintech', type: 'Mobile banking · Concept case study', year: '2026', tone: 'lavender', tag: 'Money, made clearer', description: 'A calmer way to manage everyday money, build savings habits and understand spending.', visual: 'finance', role: 'Product strategy, UX and UI design', scope: 'Discovery direction, information architecture, interaction design and visual system.' },
  { id: 2, title: 'Carewell', category: 'Healthtech', type: 'Digital health · Concept case study', year: '2026', tone: 'mint', tag: 'Care without the friction', description: 'A connected care experience that helps people find clinicians, manage appointments and stay informed.', visual: 'health', role: 'Product design, UX flows and design system', scope: 'Patient journey, appointment booking, health dashboard and responsive UI.' },
  { id: 3, title: 'Moveo', category: 'Logistics', type: 'Operations platform · Concept case study', year: '2026', tone: 'peach', tag: 'Every delivery in view', description: 'A logistics workspace that gives operations teams a clearer picture of shipments and exceptions.', visual: 'logistics', role: 'End-to-end product design', scope: 'Dashboard architecture, shipment tracking, exception states and data visualisation.' },
  { id: 4, title: 'TalentOS', category: 'HR Tech', type: 'AI recruitment · Concept case study', year: '2026', tone: 'blue', tag: 'Better hiring decisions', description: 'A recruiter-first workspace for organising roles, reviewing candidates and keeping hiring human.', visual: 'hr', role: 'Product thinking, UX and interface design', scope: 'Recruiter workflows, candidate review, AI transparency and collaboration.' },
  { id: 5, title: 'Relay', category: 'SaaS', type: 'Customer experience · Concept case study', year: '2026', tone: 'yellow', tag: 'Support that feels connected', description: 'A shared customer support hub designed to make conversations easier to follow and resolve.', visual: 'support', role: 'UX strategy and product interface design', scope: 'Ticketing, team inbox, customer context and service analytics.' },
  { id: 6, title: 'Roamly', category: 'Travel', type: 'Travel companion · Concept case study', year: '2026', tone: 'coral', tag: 'Go further, with confidence', description: 'A travel planning companion that brings itineraries, practical guidance and trip details together.', visual: 'travel', role: 'Product design and prototyping', scope: 'Trip planning, destination discovery, itinerary and travel information architecture.' },
  { id: 7, title: 'Daymark', category: 'Productivity', type: 'AI productivity · Concept case study', year: '2026', tone: 'mint', tag: 'Make space for deep work', description: 'A thoughtful planning tool that turns scattered tasks into a realistic, focused day.', visual: 'productivity', role: 'Product design and interaction design', scope: 'Task capture, prioritisation, AI suggestions and focus sessions.' },
  { id: 8, title: 'Forma', category: 'E-commerce', type: 'Commerce experience · Concept case study', year: '2026', tone: 'lavender', tag: 'A more considered way to shop', description: 'A modern shopping experience that helps customers compare, decide and buy with confidence.', visual: 'commerce', role: 'UX and UI design', scope: 'Product discovery, product detail, checkout and order tracking.' },
  { id: 9, title: 'Common', category: 'Communication', type: 'Collaboration · Concept case study', year: '2026', tone: 'blue', tag: 'Work better, together', description: 'A focused communication space that keeps team conversations and decisions connected.', visual: 'communication', role: 'Product design and design system', scope: 'Channels, direct messages, decision notes and team workflows.' },
  { id: 10, title: 'Northstar', category: 'Enterprise', type: 'Analytics platform · Concept case study', year: '2026', tone: 'peach', tag: 'Clarity at every level', description: 'An executive analytics workspace that turns operational data into useful, understandable signals.', visual: 'analytics', role: 'Dashboard UX and visual design', scope: 'Information hierarchy, KPI views, reporting and data visualisation.' }
];

const filters = ['All', 'Fintech', 'Healthtech', 'Logistics', 'HR Tech', 'SaaS', 'Travel', 'Productivity', 'E-commerce', 'Communication', 'Enterprise'];

function MiniVisual({ kind }) {
  const bars = [42, 66, 52, 78, 60, 88, 70];
  return <div className={`mini-visual ${kind}`}>
    <div className="visual-top"><span className="visual-dot"/><span className="visual-dot"/><span className="visual-dot"/><i>● ● ●</i></div>
    {kind === 'finance' && <><div className="visual-label">TOTAL BALANCE</div><div className="visual-number">₦2,480,500<span>.00</span></div><div className="visual-chip">↗ 12.8% this month</div><div className="visual-chart">{bars.map((b,i)=><span key={i} style={{height:b+'%'}}/>)}</div><div className="visual-bottom"><b>Spending overview</b><small>View report ↗</small></div></>}
    {kind === 'health' && <><div className="health-head"><div><small>Good morning, Alex</small><b>Your health, in one place.</b></div><span>✳</span></div><div className="health-card"><span>UPCOMING APPOINTMENT</span><b>Dr. Amara Okafor</b><small>Cardiology · 10:30 AM</small><div className="health-line"/></div><div className="health-pills"><span>Appointments</span><span>Records</span><span>Messages</span></div></>}
    {kind === 'logistics' && <><div className="visual-label">SHIPMENTS IN TRANSIT</div><div className="visual-number">1,284</div><div className="map-lines"><span/><span/><span/><b>↗</b></div><div className="visual-bottom"><b>Live shipment activity</b><small>Updated just now</small></div></>}
    {kind === 'hr' && <><div className="visual-label">OPEN POSITIONS</div><div className="visual-number">24</div><div className="candidate"><span>AO</span><div><b>Product Designer</b><small>Strong match · 92%</small></div><em>Review</em></div><div className="candidate"><span>MK</span><div><b>Senior Engineer</b><small>Good match · 86%</small></div><em>Review</em></div></>}
    {kind === 'support' && <><div className="visual-label">TEAM INBOX</div><div className="visual-number">Inbox <span>48 open</span></div><div className="ticket"><b>Order delivery update</b><small>Sarah M. · 4 min ago</small><em>Priority</em></div><div className="ticket"><b>Unable to update profile</b><small>David K. · 18 min ago</small><em className="resolved">Assigned</em></div></>}
    {kind === 'travel' && <><div className="travel-art"><span>✳</span><b>Somewhere<br/>wonderful.</b></div><div className="visual-bottom"><b>Your next escape</b><small>Explore destinations ↗</small></div></>}
    {kind === 'productivity' && <><div className="visual-label">TODAY'S FOCUS</div><div className="visual-number">A day with intention.</div><div className="task"><span>✓</span> Review product direction</div><div className="task"><span>○</span> Prepare design critique</div><div className="task"><span>○</span> Share prototype with team</div></>}
    {kind === 'commerce' && <><div className="shop-art"><div/><div/><div/></div><div className="visual-bottom"><b>Objects for everyday living</b><small>Discover collection ↗</small></div></>}
    {kind === 'communication' && <><div className="visual-label">YOUR WORKSPACE</div><div className="visual-number">Studio North</div><div className="message"><span>JM</span><p><b>Jamie Morgan</b><small>Shared a new project update</small></p></div><div className="message"><span>AK</span><p><b>Alex Kim</b><small>Added notes to the roadmap</small></p></div></>}
    {kind === 'analytics' && <><div className="visual-label">REVENUE PERFORMANCE</div><div className="visual-number">₦84.2M <span>↗ 8.4%</span></div><div className="visual-chart">{bars.map((b,i)=><span key={i} style={{height:b+'%'}}/>)}</div><div className="visual-bottom"><b>Quarterly overview</b><small>See insights ↗</small></div></>}
  </div>
}

function ProjectCard({ project, onOpen }) {
  return <button className="project-card" onClick={() => onOpen(project)} aria-label={`View ${project.title} case study`}>
    <div className={`project-art ${project.tone}`}><MiniVisual kind={project.visual}/><span className="project-arrow"><ArrowUpRight size={20}/></span></div>
    <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
    <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={19}/></div>
    <p>{project.description}</p>
  </button>
}

function App() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter]);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav container">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">EA</span><span>Emmanuel Ataekong<small>PRODUCT DESIGNER</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a></div>
    </nav></header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SELECT OPPORTUNITIES</div>
          <h1>Thoughtful design.<br/><span>Meaningful</span> impact.</h1>
          <p className="hero-intro">I’m <strong>Emmanuel Gabriel Ataekong</strong>, a Senior Product Designer shaping useful, intuitive digital experiences at the intersection of people, business and technology.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#about">A little about me <ArrowDownRight size={17}/></a></div>
          <div className="hero-foot"><span>BASED IN NIGERIA · WORKING GLOBALLY</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
        <div className="portrait-column">
          <div className="portrait-frame">
            <div className="portrait-placeholder"><div className="portrait-icon">EA</div><span>YOUR PHOTO GOES HERE</span><small>Replace this placeholder with a<br/>professional portrait of yourself.</small></div>
            <div className="portrait-caption"><span>THE PERSON BEHIND THE PIXELS</span><b>Emmanuel G. Ataekong</b></div>
          </div>
          <div className="orbit-note"><Sparkles size={16}/> Curious by nature. Intentional by design.</div>
        </div>
      </section>

      <section className="proof-strip"><div className="container proof-inner"><span>PRODUCT THINKING</span><i>✳</i><span>UX & INTERACTION</span><i>✳</i><span>DESIGN SYSTEMS</span><i>✳</i><span>VISUAL STORYTELLING</span></div></section>

      <section className="work-section container" id="work">
        <div className="section-heading"><div><div className="eyebrow">A SELECTION OF MY WORK</div><h2>Designed with purpose.<br/><span>Built around people.</span></h2></div><p>A collection of product explorations across industries, each grounded in a clear problem and a considered design response.</p></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div>
        <div className="project-grid">{visible.map(p=><ProjectCard key={p.id} project={p} onOpen={setSelected}/>)}</div>
        <div className="work-note"><span>10 PROJECTS · MULTIPLE INDUSTRIES</span><span>SELECT A PROJECT TO EXPLORE <ArrowUpRight size={14}/></span></div>
      </section>

      <section className="about-section" id="about"><div className="container about-grid">
        <div><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Good design starts<br/>with <span>good questions.</span></h2></div>
        <div className="about-copy"><p className="about-lead">I believe the best digital products do more than look good. They make complicated things feel simple, help people move forward and create value that lasts.</p><p>My approach combines curiosity, systems thinking and a strong attention to detail. I enjoy working through ambiguity, collaborating across disciplines and bringing ideas from early exploration to thoughtful, usable experiences.</p><a href="#contact" className="text-link">Get to know me <ArrowUpRight size={16}/></a></div>
      </div></section>

      <section className="approach-section container" id="approach"><div className="eyebrow">HOW I THINK & WORK</div><h2>From the first question<br/>to the <span>finishing details.</span></h2><div className="approach-grid">
        <article><span>01</span><Layers3/><h3>Understand the why</h3><p>Align on the problem, business context and people we are designing for before jumping to solutions.</p></article>
        <article><span>02</span><Sparkles/><h3>Explore with intent</h3><p>Map journeys, test assumptions and explore directions that balance user needs with product goals.</p></article>
        <article><span>03</span><Figma/><h3>Make it tangible</h3><p>Translate ideas into clear flows, refined interfaces and reusable patterns that teams can build confidently.</p></article>
        <article><span>04</span><MoveUpRight/><h3>Learn and improve</h3><p>Invite feedback, inspect the details and keep improving the experience as real needs become clearer.</p></article>
      </div></section>

      <section className="contact-section" id="contact"><div className="container contact-inner"><div className="eyebrow">HAVE A GOOD PROBLEM TO SOLVE?</div><h2>Let’s make something<br/><span>that matters.</span></h2><p>Open to thoughtful conversations, ambitious products and teams who care about the details.</p><a className="button button-light" href="mailto:hello@emmanuelataekong.com">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-bottom"><span>EMMANUEL GABRIEL ATAEKONG</span><span>PRODUCT DESIGNER · NIGERIA</span></div></div></section>
    </main>

    <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">EA</span><span>Emmanuel Ataekong<small>PRODUCT DESIGNER</small></span></a><span>© 2026 Emmanuel Gabriel Ataekong</span><div className="socials"><a href="mailto:hello@emmanuelataekong.com" aria-label="Email"><Mail/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="Dribbble"><Dribbble/></a></div></footer>

    {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}><section className="case-modal" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${selected.title} case study`}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><div className={`modal-visual ${selected.tone}`}><MiniVisual kind={selected.visual}/></div><div className="modal-content"><div className="eyebrow">{selected.category} · {selected.year} · CONCEPT CASE STUDY</div><h2>{selected.title}: {selected.tag}</h2><p className="modal-lead">{selected.description}</p><div className="case-details"><div><span>MY ROLE</span><b>{selected.role}</b></div><div><span>PROJECT SCOPE</span><b>{selected.scope}</b></div></div><h3>The opportunity</h3><p>This concept explores how a clearer, more human-centred product experience could address a familiar challenge in this space. The design direction focuses on reducing friction, making important information easier to understand and helping people take the next useful step.</p><h3>Design direction</h3><p>The experience is structured around the primary user journey, with a clear information hierarchy, purposeful interaction patterns and a visual language designed to feel approachable and trustworthy.</p><div className="concept-disclaimer">CONCEPT PROJECT — This is an independent portfolio exploration, not a commissioned client engagement. Research findings and product outcomes are not presented as verified real-world results.</div><button className="button button-dark" onClick={()=>setSelected(null)}>Back to all projects <ArrowRight size={16}/></button></div></section></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
