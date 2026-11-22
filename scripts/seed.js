import "dotenv/config";
import {getDb} from "../db.js";
const hosts=[{name:"Daniel Reyes",email:"daniel@studiospace.dev"},{name:"Priya Nair",email:"priya@studiospace.dev"},{name:"Marcus Bell",email:"marcus@studiospace.dev"},{name:"Elena Fischer",email:"elena@studiospace.dev"}];
const base=[
["Halo Cyc Wall Studio","Photo Studio",45,100,12,"Brooklyn, New York","Bright studio with seamless white cyc wall, lighting stands and makeup station.",["Cyc wall","Strobe lighting kit","Backdrop rolls","Makeup station","WiFi"]],
["Golden Hour Loft","Photo Studio",38,80,10,"Austin, Texas","Sunlit loft with large windows and exposed brick, perfect for lifestyle shoots.",["Natural light","Reflectors","Props closet","Free parking","WiFi"]],
["Daylight Natural Light Studio","Photo Studio",55,120,15,"Los Angeles, California","Floor-to-ceiling skylights, makeup room and easy load-in.",["Skylights","Makeup room","Cyc wall","Kitchenette"]],
["Soundstage One","Film Stage",120,500,40,"Atlanta, Georgia","Cinema sound stage with full lighting grid and built-in green screen.",["Green screen","Lighting grid","Soundproofing","Green room"]],
["Noir Backlot Stage","Film Stage",95,400,30,"Chicago, Illinois","Moody stage with practical sets for short films and fashion films.",["Practical sets","Fog machine","Dimmable lighting","Dressing rooms"]],
["The Green Room Podcast Lounge","Podcast Lounge",32,60,6,"Seattle, Washington","Acoustically treated lounge with broadcast microphones and mixer.",["Shure microphones","Rodecaster Pro","Acoustic panels","Video recording"]],
["Mic Check Studio","Podcast Lounge",28,50,5,"Nashville, Tennessee","Compact quiet booth for solo shows and interviews.",["Condenser mics","Soundproof booth","Headphone mixes","WiFi"]],
["Tidal Recording Suite","Music Suite",60,200,8,"Nashville, Tennessee","Recording suite with vocal booth, live room and grand piano.",["Vocal booth","Grand piano","Monitor speakers","Engineer on request"]],
["Vinyl Room Production Suite","Music Suite",48,150,6,"Portland, Oregon","Producer-friendly room with hybrid analog and digital setup.",["MIDI keyboards","Pro Tools rig","Synth collection","Treated room"]],
["Echo Chamber Rehearsal Suite","Music Suite",35,100,10,"Brooklyn, New York","Fully equipped rehearsal space with drums, amps and PA.",["Drum kit","Backline amps","PA system","Lounge area"]],
["Clay & Canvas Workshop","Workshop",30,75,14,"Portland, Oregon","Flexible art workshop with pottery wheels and shared kiln.",["Pottery wheels","Kiln access","Easels","Work tables"]],
["Ink & Print Art Workshop","Workshop",26,60,10,"Chicago, Illinois","Print workshop with screen printing press and exposure unit.",["Screen printing press","Drying racks","Exposure unit","Ventilation"]]
];
const reviews=[{name:"Maya Collins",rating:5,comment:"Spotless space and a helpful host."},{name:"Jordan Ellis",rating:5,comment:"Exactly as pictured. Easy load-in."},{name:"Sofia Alvarez",rating:4,comment:"Great room and fair pricing."}];
const db=await getDb(),col=db.collection("studios");
if(process.argv.includes("--reset"))await col.deleteMany({ownerEmail:{$in:hosts.map(h=>h.email)}});
const count=await col.countDocuments({ownerEmail:{$in:hosts.map(h=>h.email)}});
if(count){console.log("Demo studios already exist. Run npm run seed:reset to replace.");process.exit(0)}
const docs=base.map((s,i)=>({title:s[0],category:s[1],hourlyRate:s[2],securityDeposit:s[3],maxCapacity:s[4],location:s[5],overview:s[6],amenities:s[7],image:`https://picsum.photos/seed/studiospace-${i+1}/1200/800`,gallery:[1,2,3].map(n=>`https://picsum.photos/seed/studiospace-${i+1}-${n}/1200/800`),rating:[4.8,4.7,4.9,4.9,4.6,4.8,4.5,4.9,4.7,4.4,4.8,4.6][i],reviewsCount:20+i*3,reviews,ownerName:hosts[i%4].name,ownerEmail:hosts[i%4].email,createdAt:new Date(Date.now()-i*86400000)}));
await col.insertMany(docs);console.log(`Seeded ${docs.length} demo studios.`);process.exit(0);
