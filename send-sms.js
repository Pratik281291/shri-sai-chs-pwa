export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'POST only'});
  const {to,message}=req.body||{};
  const account=process.env.TWILIO_ACCOUNT_SID;
  const token=process.env.TWILIO_AUTH_TOKEN;
  const from=process.env.TWILIO_FROM_NUMBER;
  if(!account||!token||!from) return res.status(503).json({error:'SMS provider is not configured. Add TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN and TWILIO_FROM_NUMBER.'});
  if(!to||!message) return res.status(400).json({error:'to and message are required'});
  const params=new URLSearchParams({To:to.startsWith('+')?to:'+91'+to.replace(/^0/,'').replace(/\D/g,''),From:from,Body:String(message).slice(0,1600)});
  const auth=Buffer.from(`${account}:${token}`).toString('base64');
  const r=await fetch(`https://api.twilio.com/2010-04-01/Accounts/${account}/Messages.json`,{method:'POST',headers:{Authorization:`Basic ${auth}`,'Content-Type':'application/x-www-form-urlencoded'},body:params});
  const data=await r.json();
  if(!r.ok) return res.status(r.status).json({error:data.message||'Twilio SMS failed',details:data});
  return res.status(200).json({ok:true,sid:data.sid,status:data.status,to:data.to});
}
