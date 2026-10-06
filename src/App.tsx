import { useState } from 'react';

const sections = [
  ['01','Quality Policy','นโยบายคุณภาพ'],
  ['02','Talent Development Center','ศูนย์พัฒนาบุคลากร'],
  ['03','Leadership Team','คณะผู้บริหาร'],
  ['04','Values','ค่านิยมองค์กร'],
  ['05','Make Things Happen','สโลแกนองค์กร'],
  ['06','Culture & Mission','วัฒนธรรมและพันธกิจ'],
  ['07','Internal Trainer Team','วิทยากรภายใน'],
  ['08','Training Process','ขั้นตอนการฝึกประกอบงาน'],
];

function App() {
  const [active,setActive]=useState(0);
  return <div className="proposal">
    <header className="hero">
      <div className="top"><span>A2 ART PLUS</span><span>PRIVATE DESIGN PRESENTATION · 2026</span></div>
      <div className="heroCopy">
        <p className="eyebrow">CORPORATE ENVIRONMENTAL BRANDING</p>
        <h1>QUASAR<br/><i>Workplace Experience</i></h1>
        <p className="lead">A spatial branding proposal translating quality, people development and corporate culture into a coherent workplace environment.</p>
      </div>
      <div className="orb"/>
      <div className="scroll">SCROLL TO EXPLORE ↓</div>
    </header>

    <section className="intro">
      <p>DESIGN DIRECTION</p>
      <h2>One visual language.<br/>Eight workplace moments.</h2>
      <div className="chips"><span>PRECISION</span><span>PEOPLE</span><span>QUALITY</span><span>INNOVATION</span></div>
    </section>

    <nav className="projectNav">{sections.map((s,i)=><button className={active===i?'active':''} onClick={()=>{setActive(i);document.getElementById('d'+i)?.scrollIntoView({behavior:'smooth'})}} key={s[0]}><b>{s[0]}</b><span>{s[1]}</span></button>)}</nav>

    <main>
      {sections.map((s,i)=><section id={'d'+i} className="design" key={s[0]} onMouseEnter={()=>setActive(i)}>
        <div className="meta"><span>DESIGN {s[0]}</span><span>PROPOSED CONCEPT</span></div>
        <div className="title"><h3>{s[1]}</h3><p>{s[2]}</p></div>
        <div className="media placeholder">
          <div><b>{s[0]}</b><p>DROP PROJECT IMAGE / VIDEO HERE</p></div>
        </div>
        <div className="caption"><p>Corporate feature wall developed within Quasar's visual language, designed as a coordinated part of the interior rather than a standalone sign.</p><span>IMAGE · VIDEO · DETAIL</span></div>
      </section>)}
    </main>

    <footer><b>A2 ART PLUS</b><span>DESIGN · PRODUCTION · INSTALLATION</span><small>Client presentation template</small></footer>
  </div>
}
export default App;
