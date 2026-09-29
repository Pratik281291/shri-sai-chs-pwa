export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'POST only'});
  const {event,detail}=req.body||{};
  const to=process.env.ADMIN_PHONE||'9594595867';
  const base=process.env.PUBLIC_APP_NAME||'Shri Sai CHS';
  const message=`${base}: ${event||'New notification'}${detail?` - ${detail}`:''}`;
  const r=await fetch(new URL('/api/send-sms',`https://${req.headers.host}`),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({to,message})});
  const data=await r.json();
  return res.status(r.status).json(data);
}
