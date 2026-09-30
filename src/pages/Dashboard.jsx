import React, {useState} from 'react';
import {BankCard, Panel, SectionTitle, SimpleBars, LineChart} from '../components';

const recent=[['▣','orange','Spotify Subscription','28 Jan, 12:31 PM','-$2,500'],['$','green','Freepik Sales','25 Jan, 10:40 AM','+$750'],['▯','blue','Mobile Service','20 Jan, 10:40 AM','-$150']];

export default function Dashboard(){
 const [amount,setAmount]=useState('525.00'); const [sent,setSent]=useState(false);
 return <div className="page dashboard">
  <div className="dashboard-top">
   <section><SectionTitle right="See All">My Cards</SectionTitle><div className="two-cards"><BankCard/><BankCard number="3778  ****  ****  5600" light/></div></section>
   <section><SectionTitle right="See All">Recent Transaction</SectionTitle><Panel className="recent-mini">{recent.map((r,i)=><div className="mini-row" key={i}><div className={`row-icon ${r[1]}`}>{r[0]}</div><div><b>{r[2]}</b><small>{r[3]}</small></div><strong className={r[4][0]==='-'?'red':'green-text'}>{r[4]}</strong></div>)}</Panel></section>
  </div>
  <div className="dashboard-mid"><section><SectionTitle>Weekly Activity</SectionTitle><Panel className="chart-panel"><SimpleBars/></Panel></section><section><SectionTitle>Expense Statistics</SectionTitle><Panel className="pie-panel"><div className="pie"></div></Panel></section></div>
  <div className="dashboard-bottom">
   <section><SectionTitle>Quick Transfer</SectionTitle><Panel className="quick-transfer"><div className="people"><div><span className="person active">LB</span><b>Livia Bator</b><small>CEO</small></div><div><span className="person">RP</span><b>Randy Press</b><small>Director</small></div><div><span className="person green">W</span><b>Workman</b><small>Designer</small></div><span className="next">›</span></div><small>Write Amount</small><div className="send-row"><input value={amount} onChange={e=>setAmount(e.target.value)} aria-label="transfer amount"/><button onClick={()=>setSent(true)}>Send ➤</button></div>{sent&&<em className="success">Transfer of ${amount} queued successfully.</em>}</Panel></section>
   <section><SectionTitle>Balance History</SectionTitle><Panel className="line-panel"><LineChart/></Panel></section>
  </div>
 </div>
}
