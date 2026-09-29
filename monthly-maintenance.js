export default async function handler(req,res){
  if(req.method!=='POST' && req.method!=='GET') return res.status(405).json({error:'GET/POST only'});
  const members=JSON.parse(process.env.MEMBERS_JSON||'[]');
  if(!members.length) return res.status(503).json({error:'MEMBERS_JSON is not configured for monthly reminders.'});
  const account=process.env.TWILIO_ACCOUNT_SID, token=process.env.TWILIO_AUTH_TOKEN, from=process.env.TWILIO_FROM_NUMBER;
  if(!account||!token||!from) return res.status(503).json({error:'SMS provider is not configured.'});
  const now=new Date(); const month=now.toLocaleString('en-IN',{month:'long',year:'numeric',timeZone:'Asia/Kolkata'});
  const auth=Buffer.from(`${account}:${token}`).toString('base64'); let sent=0, failed=0;
  for(const m of members){
    if(!m.mobile) continue;
    const to=m.mobile.startsWith('+')?m.mobile:'+91'+String(m.mobile).replace(/^0/,'').replace(/\D/g,'');
    const message=`Shri Sai CHS: ${month} maintenance due for ${m.flat||'your flat'} is Rs.${m.maintenance||1000}. Please pay as per society schedule.`;
    const params=new URLSearchParams({To:to,From:from,Body:message});
    const r=await fetch(`https://api.twilio.com/2010-04-01/Accounts/${account}/Messages.json`,{method:'POST',headers:{Authorization:`Basic ${auth}`,'Content-Type':'application/x-www-form-urlencoded'},body:params});
    if(r.ok) sent++; else failed++;
  }
  return res.status(200).json({ok:true,month,sent,failed,total:members.length});
}
