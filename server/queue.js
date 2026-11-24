export function validPhone(phone){return /^\d{10}$/.test(String(phone||''));}
export function transition(from,to){const allowed={Waiting:['Called','Cancelled'],Called:['In chair','No-show'], 'In chair':['Done']};return (allowed[from]||[]).includes(to);}
export function nextEligible(queue,barberId){return queue.filter(q=>q.status==='Waiting'&&(!q.barber_id||q.barber_id===barberId)).sort((a,b)=>a.created_at.localeCompare(b.created_at))[0]||null;}
export function estimateWait(queue,entry,workingBarbers){const ahead=queue.filter(q=>q.status==='Waiting'&&q.created_at<entry.created_at&&(!entry.barber_id||!q.barber_id||q.barber_id===entry.barber_id));const divisor=Math.max(1,workingBarbers);return Math.max(0,Math.ceil(ahead.reduce((n,q)=>n+q.minutes,0)/divisor));}
