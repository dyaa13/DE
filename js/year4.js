'use strict';

/* Year 4 configuration and question bank. */
YEAR_CONFIGS[4] = {"title":"Year 4 Rapid Fire Mental Maths","skillLabel":"Year 4 Skill","mixed":"Mixed Year 4 Skills","labels":{"addition":"Addition","subtraction":"Subtraction","multiplication":"Multiplication","division":"Division","placevalue":"Place Value","rounding":"Rounding & Estimation","missing":"Missing Numbers & Inverse Operations","doubles":"Doubles, Halves & Near Doubles","factors":"Factors, Multiples & Divisibility","fractions":"Fractions Basics","decimalTenths":"Decimal Tenths","time":"Time","measurements":"Measurement & Temperature","perimeterArea":"Perimeter, Area & Volume","sequences":"Sequences & Patterns","mixed":"Mixed Year 4 Skills","review":"Mistake Review","angleBasics":"Angle Basics","mentalStrategies":"Mental Calculation Strategies","moneyChange":"Money & Change","calendarDates":"Calendar & Dates","probability":"Likelihood & Simple Probability","numberBalance":"Number Sentences & Balance","shapesSymmetry":"Shapes, Symmetry & 3D Objects","dataTables":"Data Tables & Categories"},"skills":["addition","subtraction","multiplication","division","placevalue","rounding","missing","numberBalance","doubles","mentalStrategies","factors","fractions","decimalTenths","probability","angleBasics","shapesSymmetry","dataTables","time","moneyChange","calendarDates","measurements","perimeterArea","sequences"],"levels":[["starter","Starter"],["core","Core"],["challenge","Challenge"]],"teacher":"Year 4 includes short, mental-friendly banks across number, fractions, decimal tenths, money, time, measurement, angles, probability, data, number sentences, shapes and symmetry."};
BASE_STORAGE_BY_YEAR[4] = {"stars":"dyaaRapidStars","hero":"dyaaRapidHero","best":"dyaaRapidBest","mistakes":"dyaaRapidMistakes"};

/* ===== YEAR 4 QUESTION GENERATORS ===== */

function y4GenAdd(){
  const L=state.level;
  if(L==='starter'){
    const a=randInt(1,18),b=randInt(1,Math.min(10,20-a));
    return q('addition',`${a} + ${b} = ?`,a+b,'Think: bridge to the next ten.');
  }
  const t=L==='core'?randInt(1,3):randInt(1,5);
  if(t===1){const a=randInt(12,79),b=randInt(3,Math.min(40,149-a));return q('addition',`${a} + ${b} = ?`,a+b,'Add tens, then ones.');}
  if(t===2){const a=randInt(12,89)*10,b=pick([100,200,300,400,500]);return q('addition',`${a} + ${b} = ?`,a+b,'Add the hundreds while keeping the tens unchanged.');}
  if(t===3){const [a,b]=pick([[1250,750],[1750,250],[2400,600],[3250,750],[4500,500],[6800,200]]);return q('addition',`${a.toLocaleString()} + ${b.toLocaleString()} = ?`,a+b,'Use a friendly total such as the next thousand.');}
  if(t===4){const a=randInt(1,8)*1000+randInt(1,8)*100,b=pick([100,200,300,400,500,600]);return q('addition',`${a.toLocaleString()} + ${b.toLocaleString()} = ?`,a+b,'Add the hundreds to the four-digit number.');}
  const target=pick([3000,4000,5000,6000,8000,10000]),a=target-pick([250,500,750,1000]);
  return q('addition',`${a.toLocaleString()} + ? = ${target.toLocaleString()}`,target-a,'Find the complement to the friendly total.');
}


function y4GenSub(){
  const L=state.level;
  if(L==='starter'){
    const a=randInt(8,20),b=randInt(1,Math.min(10,a));
    return q('subtraction',`${a} − ${b} = ?`,a-b,'Think: subtract tens, then ones.');
  }
  const t=L==='core'?randInt(1,3):randInt(1,5);
  if(t===1){const a=randInt(35,149),b=randInt(3,Math.min(49,a-1));return q('subtraction',`${a} − ${b} = ?`,a-b,'Subtract tens, then ones.');}
  if(t===2){const a=randInt(4,9)*100+randInt(0,8)*10,b=pick([100,200,300]);return q('subtraction',`${a} − ${b} = ?`,a-b,'Subtract the hundreds while keeping the tens unchanged.');}
  if(t===3){const [a,b]=pick([[2000,750],[3000,1250],[4000,1750],[5000,2500],[6000,1200],[8000,3200]]);return q('subtraction',`${a.toLocaleString()} − ${b.toLocaleString()} = ?`,a-b,'Break the subtraction into friendly hundreds or thousands.');}
  if(t===4){const a=randInt(3,9)*1000+randInt(2,9)*100,b=pick([100,200,300,400,500,600]);return q('subtraction',`${a.toLocaleString()} − ${b.toLocaleString()} = ?`,a-b,'Subtract the hundreds from the four-digit number.');}
  const a=pick([2500,3000,4000,5000,7500,10000]),b=pick([250,500,750,1000]);
  return q('subtraction',`${a.toLocaleString()} − ${b.toLocaleString()} = ?`,a-b,'Use place value and friendly chunks.');
}


function y4Facts(){return state.level==='starter'?[2,5,10]:state.level==='core'?[2,3,4,5,6,7,8,9,10]:[2,3,4,5,6,7,8,9,10,11,12]}


function y4GenMul(){
  const L=state.level;
  if(L==='starter'){
    const a=pick([2,5,10]),b=randInt(1,10);
    return q('multiplication',`${a} × ${b} = ?`,a*b,`Recall the ${a} times table.`);
  }
  const t=L==='core'?randInt(1,4):randInt(1,6);
  if(t<=2){const a=pick(y4Facts()),b=randInt(1,L==='challenge'?12:10),p=a*b;return q('multiplication',`${a} × ${b} = ?`,p,`Recall the ${a} times table.`);}
  if(t===3){const [a,b]=pick([[12,3],[14,4],[15,6],[18,5],[21,4],[24,3],[25,4],[30,6],[35,4],[42,2]]);return q('multiplication',`${a} × ${b} = ?`,a*b,'Partition the two-digit number into tens and ones.');}
  if(t===4){const [a,b]=pick([[20,7],[30,8],[40,6],[50,9],[60,4],[70,5],[80,3],[90,6]]);return q('multiplication',`${a} × ${b} = ?`,a*b,'Multiply the non-zero digit, then include the zero.');}
  if(t===5){const [a,b]=pick([[120,5],[125,4],[240,3],[250,4],[320,3],[400,6],[1025,3],[1200,4],[2100,3]]);return q('multiplication',`${a.toLocaleString()} × ${b} = ?`,a*b,'Partition into friendly hundreds and thousands.');}
  const a=pick([3,4,5,6,8,10]),b=randInt(12,50),p=a*b;
  return q('multiplication',`${a} × □ = ${p}`,b,`Use the inverse: ${p} ÷ ${a}.`);
}


function y4GenDiv(){
  const L=state.level;
  if(L==='starter'){
    const d=pick([2,5,10]),qv=randInt(1,10),n=d*qv;
    return q('division',`${n} ÷ ${d} = ?`,qv,`Think: ${d} × ? = ${n}.`);
  }
  const t=L==='core'?randInt(1,4):randInt(1,6);
  if(t<=2){const d=pick(y4Facts()),qv=randInt(1,L==='challenge'?12:10),n=d*qv;return q('division',`${n} ÷ ${d} = ?`,qv,`Think: ${d} × ? = ${n}.`);}
  if(t===3){const [n,d]=pick([[44,4],[63,3],[72,6],[84,4],[90,5],[96,3],[108,6],[120,5],[144,6]]);return q('division',`${n} ÷ ${d} = ?`,n/d,'Partition the dividend into easy multiples.');}
  if(t===4){const [n,d]=pick([[120,3],[160,4],[180,6],[240,3],[300,5],[360,4],[420,6],[640,8],[960,4]]);return q('division',`${n} ÷ ${d} = ?`,n/d,'Divide the non-zero part, then use place value.');}
  if(t===5){const d=pick([2,3,4,5,6,8,10]),qv=randInt(12,60);return q('division',`□ ÷ ${d} = ${qv}`,d*qv,'Multiply the divisor by the quotient.');}
  const [n,d]=pick([[1000,4],[1200,3],[1500,5],[2400,6],[3200,8],[4500,5]]);
  return q('division',`${n.toLocaleString()} ÷ ${d} = ?`,n/d,'Use place value and known division facts.');
}


function y4GenPlaceValue(){
  const L=state.level;
  const max=L==='starter'?999:L==='core'?9999:99999;
  const min=L==='starter'?100:L==='core'?1000:10000;
  const t=L==='starter'?randInt(1,5):L==='core'?randInt(1,7):randInt(1,9);
  if(t===1){
    const n=randInt(min,max),places=L==='starter'?[1,10,100]:L==='core'?[1,10,100,1000]:[1,10,100,1000,10000],place=pick(places);
    const digit=Math.floor(n/place)%10,name={1:'ones',10:'tens',100:'hundreds',1000:'thousands',10000:'ten-thousands'}[place];
    return q('placevalue',`In ${n.toLocaleString()}, the value of the ${name} digit is ?`,digit*place,'Digit value = digit × place value.');
  }
  if(t===2){
    const thousands=L==='starter'?0:randInt(1,L==='core'?9:40),hundreds=randInt(0,9),tens=randInt(0,9),ones=randInt(0,9),n=thousands*1000+hundreds*100+tens*10+ones;
    const parts=[];if(thousands)parts.push(`${thousands*1000}`);if(hundreds)parts.push(`${hundreds*100}`);if(tens)parts.push(`${tens*10}`);if(ones||!parts.length)parts.push(`${ones}`);
    return q('placevalue',`${parts.join(' + ')} = ?`,n,'Add the place-value parts.');
  }
  if(t===3){
    const n=randInt(min,max),place=pick(L==='starter'?[1,10,100]:L==='core'?[1,10,100,1000]:[1,10,100,1000,10000]);
    const digit=Math.floor(n/place)%10,name={1:'ones',10:'tens',100:'hundreds',1000:'thousands',10000:'ten-thousands'}[place];
    return q('placevalue',`What digit is in the ${name} place of ${n.toLocaleString()}?`,digit,'Read the digit in the named place.');
  }
  if(t===4){
    const [a,b,answer]=pick(L==='starter'?[[405,450,2],[709,790,2],[862,826,1],[350,305,1]]:[[4059,4509,2],[7208,7028,1],[8640,8460,1],[5090,5900,2]]);
    return q('placevalue',`Which is larger? Enter 1 for ${a.toLocaleString()}, or 2 for ${b.toLocaleString()}.`,answer,'Compare digits from the greatest place value.');
  }
  if(t===5){
    const thousands=L==='starter'?randInt(0,9):randInt(1,L==='core'?9:30),hundreds=randInt(0,9),tens=randInt(0,9),ones=randInt(0,9);
    return q('placevalue',`${thousands} thousands + ${hundreds} hundreds + ${tens} tens + ${ones} ones = ?`,thousands*1000+hundreds*100+tens*10+ones,'Build the number from each place.');
  }
  if(t===6){const n=randInt(1000,L==='core'?9999:49999),step=pick([10,100,1000]),add=chance(.5);return q('placevalue',`${n.toLocaleString()} ${add?'plus':'minus'} ${step.toLocaleString()} = ?`,add?n+step:n-step,'Only the matching place-value digit changes, unless regrouping is needed.');}
  if(t===7){const a=randInt(1,9),b=randInt(0,9),c=randInt(0,9),d=randInt(0,9),n=a*1000+b*100+c*10+d,swapped=a*1000+c*100+b*10+d;return q('placevalue',`Swap the hundreds and tens digits in ${n}. New number = ?`,swapped,'Exchange only the hundreds and tens digits.');}
  if(t===8){
    const [values,answer]=pick([[[3402,3240,3420],2],[[5096,5069,5906],2],[[7210,7120,7201],2],[[8435,8453,8345],3]]);
    return q('placevalue',`Which is smallest? Enter 1 for ${values[0].toLocaleString()}, 2 for ${values[1].toLocaleString()}, or 3 for ${values[2].toLocaleString()}.`,answer,'Compare digits from left to right.');
  }
  const n=randInt(10000,99999);return q('placevalue',`Number immediately after ${n.toLocaleString()} = ?`,n+1,'Add 1 and regroup if needed.');
}


function y4GenRounding(){
  const L=state.level;
  const t=L==='starter'?randInt(1,4):L==='core'?randInt(1,6):randInt(1,8);
  if(t===1){const n=randInt(11,L==='starter'?999:4999);return q('rounding',`Round ${n.toLocaleString()} to the nearest 10.`,Math.round(n/10)*10,'Look at the ones digit.');}
  if(t===2){const n=randInt(101,L==='starter'?999:9999);return q('rounding',`Round ${n.toLocaleString()} to the nearest 100.`,Math.round(n/100)*100,'Look at the tens digit.');}
  if(t===3){const a=randInt(120,490),b=randInt(110,480),ans=Math.round(a/100)*100+Math.round(b/100)*100;return q('rounding',`Estimate ${a} + ${b} by rounding both numbers to the nearest 100.`,ans,'Round each number first, then add.');}
  if(t===4){const whole=randInt(1,9),tenths=randInt(1,9),value=whole+tenths/10;return q('rounding',`Round ${value.toFixed(1)} to the nearest whole number.`,Math.round(value),'Five tenths or more rounds up.');}
  if(t===5){const a=randInt(420,990),b=randInt(110,Math.min(480,a-20)),ans=Math.round(a/100)*100-Math.round(b/100)*100;return q('rounding',`Estimate ${a} − ${b} by rounding both numbers to the nearest 100.`,ans,'Round each number first, then subtract.');}
  if(t===6){const n=randInt(1001,9999);return q('rounding',`Round ${n.toLocaleString()} to the nearest 1000.`,Math.round(n/1000)*1000,'Look at the hundreds digit.');}
  if(t===7){const a=randInt(21,89),b=randInt(2,9);return q('rounding',`Estimate ${a} × ${b} by rounding ${a} to the nearest 10.`,Math.round(a/10)*10*b,'Round the two-digit factor, then multiply.');}
  const n=randInt(1000,9999),target=pick([10,100,1000]);return q('rounding',`Round ${n.toLocaleString()} to the nearest ${target.toLocaleString()}.`,Math.round(n/target)*target,'Check the digit immediately to the right of the rounding place.');
}


function y4GenMissing(){
  const L=state.level;
  const t=L==='starter'?randInt(1,4):L==='core'?randInt(1,6):randInt(1,8);

  if(t===1){
    const x=randInt(2,L==='starter'?40:120),b=randInt(2,L==='starter'?30:90);
    return q('missing',`□ + ${b} = ${x+b}`,x,'Use subtraction to undo addition.');
  }

  if(t===2){
    const x=randInt(2,L==='starter'?50:140),b=randInt(2,L==='starter'?30:90);
    return q('missing',`${x+b} − □ = ${b}`,x,'Find the difference between the starting number and the result.');
  }

  if(t===3){
    const a=pick(L==='starter'?[2,5,10]:[2,3,4,5,6,7,8,9,10,11,12]),x=randInt(2,12);
    return q('missing',`${a} × □ = ${a*x}`,x,'Use the inverse division fact.');
  }

  if(t===4){
    const d=pick(L==='starter'?[2,5,10]:[2,3,4,5,6,7,8,9,10,11,12]),x=randInt(2,12);
    return q('missing',`${d*x} ÷ □ = ${x}`,d,'Use the related multiplication fact.');
  }

  if(t===5){
    const x=randInt(2,80),b=randInt(2,60);
    return q('missing',`□ − ${b} = ${x}`,x+b,'Undo subtraction by adding.');
  }

  if(t===6){
    const d=randInt(2,10),x=randInt(2,15);
    return q('missing',`□ ÷ ${d} = ${x}`,d*x,'Multiply the divisor by the quotient.');
  }

  if(t===7){
    const a=randInt(2,8),x=randInt(2,12),b=randInt(1,9);
    return q('missing',`${a} × □ + ${b} = ${a*x+b}`,x,'Subtract the final amount, then divide.');
  }

  const d=pick([2,4,5,8,10]),x=randInt(2,12),start=randInt(x*d+15,x*d+60);
  return q('missing',`${start} − □ ÷ ${d} = ${start-x}`,x*d,'Find the amount subtracted, then multiply by the divisor.');
}


function y4GenDoubles(){
  const L=state.level;
  const t=L==='starter'?randInt(1,3):L==='core'?randInt(1,5):randInt(1,7);

  if(t===1){
    const n=randInt(2,L==='starter'?50:L==='core'?150:300);
    return q('doubles',`Double ${n} = ?`,n*2,'Add the number to itself.');
  }

  if(t===2){
    const half=randInt(2,L==='starter'?50:L==='core'?150:300);
    return q('doubles',`Half of ${half*2} = ?`,half,'Split the number into two equal parts.');
  }

  if(t===3){
    const n=randInt(5,L==='starter'?45:L==='core'?120:250);
    return q('doubles',`${n} + ${n+1} = ?`,n*2+1,'Use double the smaller number, then add 1.');
  }

  if(t===4){
    const n=randInt(10,150);
    return q('doubles',`${n} + ${n-1} = ?`,n*2-1,'Use double the larger number, then subtract 1.');
  }

  if(t===5){
    const n=randInt(20,180),add=randInt(2,20);
    return q('doubles',`Double ${n}, then add ${add}.`,n*2+add,'Double first, then add.');
  }

  if(t===6){
    const half=randInt(30,240),sub=randInt(2,Math.min(25,half-1));
    return q('doubles',`Half of ${half*2}, then subtract ${sub}.`,half-sub,'Find half first, then subtract.');
  }

  const n=randInt(20,200),offset=pick([2,3,4,5]);
  return q('doubles',`${n-offset} + ${n+offset} = ?`,2*n,'The equal offsets cancel, leaving double the middle number.');
}


function y4GenFactors(){
  const L=state.level;
  const t=L==='starter'?randInt(1,3):L==='core'?randInt(1,6):randInt(1,8);

  if(t===1){
    const base=randInt(2,L==='starter'?10:12),k=randInt(2,10),n=base*k;
    return q('factors',`Is ${n} a multiple of ${base}? Enter 1 for Yes, 0 for No.`,1,'A multiple divides exactly by the given number.');
  }

  if(t===2){
    const base=randInt(2,L==='starter'?10:12),k=randInt(2,10),n=base*k+1;
    return q('factors',`Is ${n} a multiple of ${base}? Enter 1 for Yes, 0 for No.`,0,'Check whether division leaves a remainder.');
  }

  if(t===3){
    const base=randInt(2,L==='starter'?10:12),k=randInt(1,8);
    return q('factors',`Next multiple of ${base} after ${base*k} = ?`,base*(k+1),'Add one more group of the base number.');
  }

  if(t===4){
    const n=pick([12,16,18,20,24,28,30,32,36,40,42,48]);
    const factor=pick(Array.from({length:n},(_,i)=>i+1).filter(v=>n%v===0));
    return q('factors',`Is ${factor} a factor of ${n}? Enter 1 for Yes, 0 for No.`,1,'A factor divides the number exactly.');
  }

  if(t===5){
    const n=pick([12,16,18,20,24,28,30,32,36,40,42,48]);
    const pairs=[];
    for(let i=1;i*i<=n;i++)if(n%i===0)pairs.push(i);
    return q('factors',`How many factor pairs does ${n} have?`,pairs.length,'List pairs whose product is the number.');
  }

  if(t===6){
    const divisor=pick([2,5,10]),n=randInt(10,99);
    return q('factors',`Is ${n} divisible by ${divisor}? Enter 1 for Yes, 0 for No.`,n%divisor===0?1:0,divisor===2?'Check whether the last digit is even.':'Check the last digit.');
  }

  if(t===7){
    const divisor=pick([3,4,6,9]),n=randInt(20,150);
    return q('factors',`Is ${n} divisible by ${divisor}? Enter 1 for Yes, 0 for No.`,n%divisor===0?1:0,'Use a known divisibility rule or divide mentally.');
  }

  const base=randInt(3,12),threshold=randInt(3,10)*base+randInt(1,base-1);
  return q('factors',`Smallest multiple of ${base} greater than ${threshold} = ?`,Math.ceil((threshold+1)/base)*base,'Move to the next exact multiple.');
}


function y4GenFractions(){
  const L=state.level;
  const t=L==='starter'?randInt(1,6):L==='core'?randInt(1,9):randInt(1,11);
  if(t===1){const [n,d]=pick(L==='starter'?[[1,2],[1,3],[1,4],[1,5]]:[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5]]),k=randInt(2,L==='starter'?10:15);return q('fractions',`${n}/${d} of ${d*k} = ?`,n*k,'Divide by the denominator, then multiply by the numerator.');}
  if(t===2){const d=pick([4,5,6,8,10]),n=randInt(1,d-1);return q('fractions',`${n}/${d} + ?/${d} = 1. Missing numerator = ?`,d-n,'One whole is denominator over denominator.');}
  if(t===3){const d=pick([5,6,7,8,9,10]),a=randInt(1,d-2),b=randInt(a+1,d-1);return q('fractions',`Which is larger? Enter 1 for ${a}/${d}, or 2 for ${b}/${d}.`,2,'With equal denominators, compare the numerators.');}
  if(t===4){const d=pick([4,5,6,8,10]),a=randInt(1,d-2),b=randInt(1,d-a);return qFrac('fractions',`${a}/${d} + ${b}/${d} = ?`,(a+b)/d,'Add the numerators because the denominators are equal.');}
  if(t===5){const [n,d]=pick([[1,2],[1,3],[2,3],[1,4],[3,4],[1,5]]),k=randInt(2,10),part=n*k;return q('fractions',`${n}/${d} of a group is ${part}. Whole group = ?`,d*k,'Divide the known part by the numerator, then multiply by the denominator.');}
  if(t===6){const [whole,n,d]=pick([[1,1,2],[1,1,3],[1,2,3],[1,1,4],[1,3,4],[2,1,2]]);return q('fractions',`${whole} ${n}/${d} = ?/${d}. Missing numerator = ?`,whole*d+n,'Convert the whole number into denominator-sized parts, then add the numerator.');}
  if(t===7){const d=pick([5,6,7,8,9,10]),a=randInt(2,d-1),b=randInt(1,a-1);return qFrac('fractions',`${a}/${d} − ${b}/${d} = ?`,(a-b)/d,'Subtract the numerators because the denominators are equal.');}
  if(t===8){const d=pick([2,3,4,5]),n=randInt(1,d-1),scale=pick([2,3,4]);return q('fractions',`${n}/${d} = ?/${d*scale}. Missing numerator = ?`,n*scale,'Multiply numerator and denominator by the same number.');}
  if(t===9){const pairs=pick([[[1,2],[2,4]],[[1,3],[2,6]],[[2,3],[4,6]],[[3,4],[6,8]],[[2,5],[4,10]]]),first=chance(.5)?pairs[0]:pairs[1],second=first===pairs[0]?pairs[1]:pairs[0];return q('fractions',`Are ${first[0]}/${first[1]} and ${second[0]}/${second[1]} equivalent? Enter 1 for Yes, 0 for No.`,1,'Equivalent fractions have the same value.');}
  if(t===10){const d=pick([3,4,5,6,8]),n=randInt(1,d-1),whole=randInt(2,3);return qFrac('fractions',`${whole} − ${n}/${d} = ?`,whole-n/d,'Write the whole number using the same denominator.');}
  const d=pick([4,5,6,8,10]),a=randInt(1,d-1);let b=randInt(1,d-1);while(b===a)b=randInt(1,d-1);return q('fractions',`Which is smaller? Enter 1 for ${a}/${d}, or 2 for ${b}/${d}.`,a<b?1:2,'With equal denominators, compare the numerators.');
}




function y4GenDecimalTenths(){
  const L=state.level;
  const t=L==='starter'?randInt(1,5):L==='core'?randInt(1,7):randInt(1,9);
  if(t===1){const n=randInt(1,9);return q('decimalTenths',`${n}/10 = ?`,n/10,'Tenths are written in the first decimal place.');}
  if(t===2){const n=randInt(1,9);return q('decimalTenths',`0.${n} = ?/10. Missing numerator = ?`,n,'The tenths digit is the numerator over 10.');}
  if(t===3){const a=randInt(1,8),b=randInt(a+1,9);return q('decimalTenths',`Which is larger? Enter 1 for 0.${a}, or 2 for 0.${b}.`,2,'Compare the tenths digits.');}
  if(t===4){const a=randInt(1,9),b=randInt(1,10-a);return q('decimalTenths',`0.${a} + 0.${b} = ?`,Number(((a+b)/10).toFixed(1)),'Add the tenths.');}
  if(t===5){const a=randInt(2,9),b=randInt(1,a-1);return q('decimalTenths',`0.${a} − 0.${b} = ?`,Number(((a-b)/10).toFixed(1)),'Subtract the tenths.');}
  if(t===6){const whole=randInt(1,5),a=randInt(1,9),b=randInt(1,10-a);return q('decimalTenths',`${whole}.${a} + 0.${b} = ?`,Number((whole+(a+b)/10).toFixed(1)),'Add the tenths and regroup if they make a whole.');}
  if(t===7){const whole=randInt(1,6),a=randInt(1,9),b=randInt(1,a);return q('decimalTenths',`${whole}.${a} − 0.${b} = ?`,Number((whole+(a-b)/10).toFixed(1)),'Subtract the tenths.');}
  if(t===8){const whole=randInt(1,9),tenths=randInt(1,9);return q('decimalTenths',`Value of the ${tenths} in ${whole}.${tenths} = ?`,tenths/10,'The first digit after the decimal point is tenths.');}
  const start=pick([1.5,2.5,3.5,4.5]),step=pick([0.5,1.5]);return q('decimalTenths',`${start}, ${start+step}, ${start+2*step}, ... next = ?`,Number((start+3*step).toFixed(1)),'Add the same decimal amount each time.');
}

function y4GenTime(){
  const L=state.level;
  const t=L==='starter'?randInt(1,6):L==='core'?randInt(1,8):randInt(1,10);
  if(t===1){const hours=randInt(1,L==='starter'?5:10);return q('time',`${hours} hour${hours===1?'':'s'} = ? minutes`,hours*60,'Each hour has 60 minutes.');}
  if(t===2){const minutes=pick(L==='starter'?[30,60,90,120,150,180]:[30,60,90,120,150,180,210,240]);return q('time',`${minutes} minutes = ? hours`,minutes/60,'Divide the number of minutes by 60.');}
  if(t===3){const hour=randInt(1,11),minute=pick([0,15,30,45]),add=pick([15,30,45,60]),total=hour*60+minute+add,newHour=Math.floor(total/60)%12||12,newMinute=total%60;return q('time',`${hour}:${String(minute).padStart(2,'0')} plus ${add} minutes. Enter as HHMM without a colon (for example 0730); a colon is also accepted.`,newHour*100+newMinute,'Add minutes and regroup 60 minutes as 1 hour.');}
  if(t===4){const startH=randInt(1,10),startM=pick([0,15,30,45]),elapsed=pick([15,30,45,60,75,90]),end=startH*60+startM+elapsed,endH=Math.floor(end/60),endM=end%60;return q('time',`From ${startH}:${String(startM).padStart(2,'0')} to ${endH}:${String(endM).padStart(2,'0')} = ? minutes`,elapsed,'Count through the next hour if needed.');}
  if(t===5){const hour=randInt(1,11),minutes=pick([5,10,15,20,25,30,40,45,50,55]);return q('time',`${minutes} minutes past ${hour}. Enter as HHMM without a colon.`,hour*100+minutes,'“Past” means after the hour.');}
  if(t===6){const nextHour=randInt(2,12),minutesTo=pick([5,10,15,20,25,30]),previousHour=nextHour-1,timeMinute=60-minutesTo;return q('time',`${minutesTo} minutes to ${nextHour}. Enter as HHMM without a colon.`,previousHour*100+timeMinute,'“To” means count backwards from the next hour.');}
  if(t===7){const hour=randInt(2,11),minute=pick([0,10,15,20,30,40,45,50]),sub=pick([10,15,20,30,40,45]),start=hour*60+minute;if(start<=sub)return y4GenTime();const end=start-sub,endH=Math.floor(end/60),endM=end%60;return q('time',`${hour}:${String(minute).padStart(2,'0')} minus ${sub} minutes. Enter as HHMM without a colon.`,endH*100+endM,'Count backwards, crossing the hour if needed.');}
  if(t===8){const hours=randInt(1,4),extra=pick([15,30,45]);return q('time',`${hours} hour${hours===1?'':'s'} ${extra} minutes = ? minutes`,hours*60+extra,'Convert the hours to minutes, then add.');}
  if(t===9){const startH=randInt(8,15),startM=pick([5,10,15,20,25,30,35,40,45,50]),elapsed=pick([35,45,50,55,65,75,85,95]),end=startH*60+startM+elapsed,endH=Math.floor(end/60),endM=end%60;return q('time',`A lesson starts at ${startH}:${String(startM).padStart(2,'0')} and lasts ${elapsed} minutes. Enter the finishing time as HHMM.`,endH*100+endM,'Add the duration to the start time.');}
  const hour=randInt(2,11),minute=pick([5,10,15,20,25,30,35,40,45,50,55]);return q('time',`${hour}:${String(minute).padStart(2,'0')} is how many minutes to ${hour+1}:00?`,60-minute,'Subtract the minutes shown from 60.');
}


function y4GenMeasurements(){
  const L=state.level;
  const t=L==='starter'?randInt(1,6):L==='core'?randInt(1,10):randInt(1,12);
  if(t===1){const n=randInt(1,L==='starter'?9:25);return q('measurements',`${n} m = ? cm`,n*100,'1 m = 100 cm.');}
  if(t===2){const n=randInt(1,90);return q('measurements',`${n} cm = ? mm`,n*10,'1 cm = 10 mm.');}
  if(t===3){const n=randInt(1,L==='starter'?8:15);return q('measurements',`${n} km = ? m`,n*1000,'1 km = 1000 m.');}
  if(t===4){const n=randInt(1,L==='starter'?8:15);return q('measurements',`${n} kg = ? g`,n*1000,'1 kg = 1000 g.');}
  if(t===5){const n=randInt(1,L==='starter'?8:15);return q('measurements',`${n} L = ? mL`,n*1000,'1 L = 1000 mL.');}
  if(t===6){const start=randInt(0,15),change=randInt(3,10),rise=chance(.5);return q('measurements',`The temperature ${rise?'rises':'falls'} from ${rise?start:start+change}°C to ${rise?start+change:start}°C. ${rise?'Increase':'Decrease'} = ?°C`,change,'Find the difference between the two temperatures.');}
  if(t===7){const m=randInt(1,9),cm=pick([10,20,25,30,40,50,60,75,80,90]);return q('measurements',`${m} m ${cm} cm = ? cm`,m*100+cm,'Convert metres to centimetres, then add.');}
  if(t===8){const kg=randInt(1,8),g=pick([100,200,250,300,400,500,600,750,800,900]);return q('measurements',`${kg} kg ${g} g = ? g`,kg*1000+g,'Convert kilograms to grams, then add.');}
  if(t===9){const l=randInt(1,8),ml=pick([100,200,250,300,400,500,600,750,800,900]);return q('measurements',`${l} L ${ml} mL = ? mL`,l*1000+ml,'Convert litres to millilitres, then add.');}
  if(t===10){const [item,answer]=pick([['the mass of a watermelon',2],['the mass of a paper clip',1],['the capacity of a drink bottle',3],['the distance between two cities',4]]);return q('measurements',`Best unit for ${item}: enter 1 for grams, 2 for kilograms, 3 for litres, or 4 for kilometres.`,answer,'Choose a unit that matches the object and measurement.');}
  if(t===11){const below=randInt(1,8),above=randInt(1,10);return q('measurements',`The temperature rises from −${below}°C to ${above}°C. Increase = ?°C`,below+above,'Count from the negative temperature to 0, then to the positive temperature.');}
  const [amount,small,big,factor]=pick([[800,'mm','cm',10],[2500,'m','km',1000],[3000,'g','kg',1000],[4000,'mL','L',1000]]);return q('measurements',`${amount} ${small} = ? ${big}`,amount/factor,`Divide by ${factor}.`);
}


function y4GenPerimeterArea(){
  const L=state.level;
  const t=L==='starter'?randInt(1,6):L==='core'?randInt(1,8):randInt(1,10);
  if(t===1){const l=randInt(3,L==='starter'?12:20),w=randInt(2,Math.min(l-1,L==='starter'?9:15));return q('perimeterArea',`Rectangle ${l} cm by ${w} cm. Perimeter = ? cm`,2*(l+w),'Perimeter = 2 × (length + width).');}
  if(t===2){const l=randInt(3,L==='starter'?12:20),w=randInt(2,Math.min(l-1,L==='starter'?9:15));return q('perimeterArea',`Rectangle ${l} cm by ${w} cm. Area = ? cm²`,l*w,'Area = length × width.');}
  if(t===3){const s=randInt(2,L==='starter'?12:20);return q('perimeterArea',`Square side ${s} cm. Perimeter = ? cm`,4*s,'A square has four equal sides.');}
  if(t===4){const s=randInt(2,L==='starter'?12:20);return q('perimeterArea',`Square side ${s} cm. Area = ? cm²`,s*s,'Square area = side × side.');}
  if(t===5){const perLayer=pick([4,6,8,10,12,15]),layers=randInt(2,5);return q('perimeterArea',`A box has ${perLayer} cubes in each layer and ${layers} layers. Total cubes = ?`,perLayer*layers,'Multiply cubes per layer by the number of layers.');}
  if(t===6){const l=randInt(2,6),w=randInt(2,5),h=randInt(2,4);return q('perimeterArea',`A cuboid is ${l} cubes long, ${w} cubes wide and ${h} cubes high. Total cubes = ?`,l*w*h,'Multiply length × width × height.');}
  if(t===7){const s=randInt(3,20);return q('perimeterArea',`A square has perimeter ${4*s} cm. Side length = ? cm`,s,'Divide the perimeter by 4.');}
  if(t===8){const l=randInt(4,18),w=randInt(2,l-1);return q('perimeterArea',`Rectangle area ${l*w} cm² and length ${l} cm. Width = ? cm`,w,'Width = area ÷ length.');}
  if(t===9){const l=randInt(6,24),w=randInt(3,l-2),p=2*(l+w);return q('perimeterArea',`Rectangle perimeter ${p} cm and length ${l} cm. Width = ? cm`,w,'Width = perimeter ÷ 2 − length.');}
  const l=randInt(2,6),w=randInt(2,5),h=randInt(2,5),volume=l*w*h;return q('perimeterArea',`A cuboid has ${l*w} cubes in each layer and ${volume} cubes altogether. Number of layers = ?`,h,'Divide the total cubes by the number in each layer.');
}


function y4GenSequences(){
  const L=state.level;
  const t=L==='starter'?randInt(1,4):L==='core'?randInt(1,6):randInt(1,8);
  if(t===1){const a=randInt(1,30),d=randInt(2,L==='starter'?8:12);return q('sequences',`${a}, ${a+d}, ${a+2*d}, ${a+3*d}, ... next = ?`,a+4*d,'Add the same amount each time.');}
  if(t===2){const d=randInt(2,L==='starter'?8:12),a=randInt(4*d+5,100);return q('sequences',`${a}, ${a-d}, ${a-2*d}, ${a-3*d}, ... next = ?`,a-4*d,'Subtract the same amount each time.');}
  if(t===3){const a=randInt(1,20),d=randInt(2,9);return q('sequences',`${a}, ${a+d}, □, ${a+3*d}, ${a+4*d}. Missing term = ?`,a+2*d,'The difference between consecutive terms stays the same.');}
  if(t===4){const a=randInt(1,8),r=pick([2,3]);return q('sequences',`${a}, ${a*r}, ${a*r*r}, ${a*r*r*r}, ... next = ?`,a*r**4,'Multiply by the same number each time.');}
  if(t===5){const a=randInt(1,15),d=randInt(2,8),n=randInt(5,10);return q('sequences',`Sequence starts at ${a} and increases by ${d}. Term ${n} = ?`,a+(n-1)*d,'Add the step (n−1) times.');}
  if(t===6){const input=randInt(2,15),mult=randInt(2,5),add=randInt(1,9);return q('sequences',`Rule: ×${mult}, then +${add}. Input ${input}. Output = ?`,input*mult+add,'Follow the operations in order.');}
  if(t===7){const a=randInt(1,10),d=randInt(2,8),n=randInt(5,12),term=a+(n-1)*d;return q('sequences',`In ${a}, ${a+d}, ${a+2*d}, ... which term equals ${term}?`,n,'Count how many equal steps are needed from the first term.');}
  const [sequence,answer,hint]=pick([
    [[2,5,8,11],14,'Add 3 each time.'],
    [[3,6,12,24],48,'Multiply by 2 each time.'],
    [[5,10,20,40],80,'Multiply by 2 each time.'],
    [[30,25,20,15],10,'Subtract 5 each time.']
  ]);
  return q('sequences',`${sequence.join(', ')}, ... next = ?`,answer,hint);
}


function y4GenAngleBasics() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 7) : randInt(1, 9);

  if (t === 1) {
    return q('angleBasics', 'A right angle is ?°', 90, 'A right angle is 90°.');
  }

  if (t === 2) {
    const [turn, degrees] = pick([
      ['quarter turn', 90],
      ['half turn', 180],
      ['three-quarter turn', 270],
      ['full turn', 360]
    ]);
    return q('angleBasics', `A ${turn} is ?°`, degrees, 'Use 90° for each quarter turn.');
  }

  if (t === 3) {
    const missing = pick([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]);
    return q('angleBasics', `${90 - missing}° + ?° = 90°`, missing, 'Find the amount needed to make a right angle.');
  }

  if (t === 4) {
    const [angle, code] = pick([
      [25, 1], [40, 1], [65, 1],
      [90, 2],
      [110, 3], [135, 3], [160, 3],
      [180, 4]
    ]);
    return q('angleBasics', `Classify ${angle}°. Enter 1 for acute, 2 for right, 3 for obtuse, or 4 for straight.`, code, 'Acute is below 90°, obtuse is between 90° and 180°.');
  }

  if (t === 5) {
    const [turn, rightAngles] = pick([
      ['quarter turn', 1], ['half turn', 2], ['three-quarter turn', 3], ['full turn', 4]
    ]);
    return q('angleBasics', `How many right angles are in a ${turn}?`, rightAngles, 'Each right angle is 90°.');
  }

  if (t === 6) {
    const missing = pick([20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]);
    return q('angleBasics', `${180 - missing}° + ?° = 180°`, missing, 'Angles on a straight line make 180°.');
  }

  if (t === 7) {
    const hour = pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const difference = Math.min(hour, 12 - hour);
    return q('angleBasics', `At ${hour}:00, the smaller angle between the clock hands is ?°`, difference * 30, 'Each hour mark is 30° apart.');
  }

  if (t === 8) {
    const [a, b, missing] = pick([
      [90, 120, 150], [80, 140, 140], [100, 110, 150], [60, 150, 150], [120, 130, 110]
    ]);
    return q('angleBasics', `Angles around a point are ${a}°, ${b}° and ?°. Find the missing angle.`, missing, 'Angles around a point total 360°.');
  }

  const known = pick([80, 100, 120, 140, 160]);
  return q('angleBasics', `Two equal angles and an angle of ${known}° make a full turn. Each equal angle is ?°`, (360 - known) / 2, 'Subtract the known angle from 360°, then halve the remainder.');
}



/* ===== YEAR 4 EASY MENTAL-MATH ADDITIONS ===== */

function y4GenCommutativeAssociative(forceRecognition = null) {
  const L = state.level;
  const recognition = forceRecognition === null ? randInt(1, 5) === 1 : forceRecognition;

  if (recognition) {
    const r = randInt(1, 4);
    if (r === 1) {
      const a = randInt(3, 20), b = randInt(3, 20);
      return q('mentalStrategies', `${a} + ${b} = ${b} + ${a}. Which property is shown? Enter 1=Commutative, 2=Associative.`, 1, 'Commutative means the order can change: a + b = b + a.');
    }
    if (r === 2) {
      const a = randInt(2, 9), b = randInt(2, 9);
      return q('mentalStrategies', `${a} × ${b} = ${b} × ${a}. Which property is shown? Enter 1=Commutative, 2=Associative.`, 1, 'Commutative means the order can change: a × b = b × a.');
    }
    if (r === 3) {
      const a = randInt(2, 8), b = randInt(2, 8), c = randInt(2, 8);
      return q('mentalStrategies', `(${a} + ${b}) + ${c} = ${a} + (${b} + ${c}). Which property is shown? Enter 1=Commutative, 2=Associative.`, 2, 'Associative means the grouping can change while the order stays the same.');
    }
    const a = randInt(2, 5), b = randInt(2, 5), c = randInt(2, 5);
    return q('mentalStrategies', `(${a} × ${b}) × ${c} = ${a} × (${b} × ${c}). Which property is shown? Enter 1=Commutative, 2=Associative.`, 2, 'Associative means the grouping can change while the order stays the same.');
  }

  const r = randInt(1, 8);
  if (r <= 2) {
    const a = randInt(2, 9), c = 10 - a, b = L === 'starter' ? randInt(10, 30) : randInt(20, 70);
    return q('mentalStrategies', `${a} + ${b} + ${c} = ?`, a + b + c, `Reorder and regroup: (${a} + ${c}) + ${b} = 10 + ${b}.`);
  }
  if (r <= 4) {
    const a = pick([12, 18, 24, 27, 32, 36, 43, 46]), c = 100 - a, b = L === 'starter' ? randInt(5, 20) : randInt(10, 50);
    return q('mentalStrategies', `${a} + ${b} + ${c} = ?`, a + b + c, `Use commutative and associative properties: (${a} + ${c}) + ${b} = 100 + ${b}.`);
  }
  if (r <= 6) {
    const middle = L === 'starter' ? randInt(2, 9) : randInt(4, 12);
    return q('mentalStrategies', `2 × ${middle} × 5 = ?`, middle * 10, `Reorder and regroup: (2 × 5) × ${middle} = 10 × ${middle}.`);
  }
  const middle = L === 'starter' ? randInt(2, 8) : randInt(3, 12);
  return q('mentalStrategies', `4 × ${middle} × 25 = ?`, middle * 100, `Reorder and regroup: (4 × 25) × ${middle} = 100 × ${middle}.`);
}

function y4GenMentalStrategies() {
  const strategyRoll = randInt(1, 10);
  if (strategyRoll <= 2) return y4GenCommutativeAssociative(true);   // ~20% property recognition
  if (strategyRoll <= 5) return y4GenCommutativeAssociative(false);  // ~30% practical regrouping
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 7) : randInt(1, 9);

  if (t === 1) {
    const n = randInt(12, 80);
    return q('mentalStrategies', `${n} + 9 = ?`, n + 9, 'Add 10, then subtract 1.');
  }
  if (t === 2) {
    const n = randInt(20, 99);
    return q('mentalStrategies', `${n} − 9 = ?`, n - 9, 'Subtract 10, then add 1.');
  }
  if (t === 3) {
    const n = randInt(3, 20);
    return q('mentalStrategies', `${n} × 5 = ?`, n * 5, 'Multiply by 10, then halve.');
  }
  if (t === 4) {
    const n = randInt(2, 12);
    return q('mentalStrategies', `${n} × 9 = ?`, n * 9, 'Multiply by 10, then subtract the number once.');
  }
  if (t === 5) {
    const n = randInt(5, 50) * 2;
    return q('mentalStrategies', `Half of ${n} = ?`, n / 2, 'Halve the tens and ones.');
  }
  if (t === 6) {
    const n = randInt(20, 75);
    return q('mentalStrategies', `${n} + 19 = ?`, n + 19, 'Add 20, then subtract 1.');
  }
  if (t === 7) {
    const n = randInt(30, 99);
    return q('mentalStrategies', `${n} − 19 = ?`, n - 19, 'Subtract 20, then add 1.');
  }
  if (t === 8) {
    const n = randInt(12, 88);
    return q('mentalStrategies', `${n} + ? = 100`, 100 - n, 'Find the complement to 100.');
  }
  const n = randInt(6, 40);
  return q('mentalStrategies', `${n} + ${n + 1} = ?`, 2 * n + 1, 'Double the smaller number, then add 1.');
}

function y4Money(value){return Number(value).toFixed(2);}
function y4MoneyQ(text,answer,hint){const item=q('moneyChange',text,answer,hint);item.displayAnswer=y4Money(answer);return item;}
function y4GenMoneyChange(){
  const L=state.level;
  const t=L==='starter'?randInt(1,5):L==='core'?randInt(1,8):randInt(1,10);
  if(t===1){const cents=pick([100,150,200,250,300,350,400,450,500]);return y4MoneyQ(`${cents} cents = $?`,cents/100,'100 cents equals $1.');}
  if(t===2){const [a,b]=pick([[120,180],[150,250],[240,160],[275,225],[320,180],[350,250]]);return y4MoneyQ(`An item costs $${y4Money(a/100)} and another costs $${y4Money(b/100)}. Total cost = $?`,(a+b)/100,'Add the dollars and cents.');}
  if(t===3){const pay=pick([500,1000,2000]),cost=pick(pay===500?[120,180,250,320,375,420]:pay===1000?[250,350,450,600,725,850]:[650,850,1000,1250,1450,1750]);return y4MoneyQ(`You pay $${y4Money(pay/100)} for an item costing $${y4Money(cost/100)}. Change = $?`,(pay-cost)/100,'Change = amount paid − cost.');}
  if(t===4){const quantity=randInt(2,6),unit=pick([100,150,200,250,300,400]);return y4MoneyQ(`${quantity} identical items cost $${y4Money(unit/100)} each. Total = $?`,quantity*unit/100,'Multiply the price by the number of items.');}
  if(t===5){const coin=pick([20,50,100]),count=randInt(3,10);return q('moneyChange',`How many ${coin}c coins make $${y4Money(coin*count/100)}?`,count,'Divide the total number of cents by the value of one coin.');}
  if(t===6){const quantity=randInt(2,5),unit=pick([100,200,250,300]),total=quantity*unit,pay=total<=1000?1000:2000;return y4MoneyQ(`${quantity} items cost $${y4Money(unit/100)} each. You pay $${y4Money(pay/100)}. Change = $?`,(pay-total)/100,'Find the total cost, then subtract it from the amount paid.');}
  if(t===7){const quantity=randInt(2,6),unit=pick([100,150,200,250,300]);return y4MoneyQ(`${quantity} identical items cost $${y4Money(quantity*unit/100)} altogether. Cost of one item = $?`,unit/100,'Divide the total cost by the number of items.');}
  if(t===8){const dollars=randInt(1,8),extraCents=pick([40,60,80]),coin=20;return q('moneyChange',`$${y4Money(dollars+extraCents/100)} is made using ${dollars} one-dollar coins and how many ${coin}c coins?`,extraCents/coin,'Find the remaining cents, then divide by the coin value.');}
  if(t===9){const dollars=randInt(2,15),cents=pick([10,20,30,40,50,60,70,80,90]),amount=dollars+cents/100;return y4MoneyQ(`Round $${y4Money(amount)} to the nearest dollar.`,Math.round(amount),'50 cents or more rounds up to the next dollar.');}
  const coin=50,count=pick([4,6,8,10,12]);return q('moneyChange',`How many 50c coins make $${y4Money(coin*count/100)}?`,count,'Convert the total to cents, then divide by 50.');
}

function y4GenCalendarDates(){
  const L=state.level;
  const t=L==='starter'?randInt(1,4):L==='core'?randInt(1,6):randInt(1,7);
  if(t===1){const weeks=randInt(2,8);return q('calendarDates',`${weeks} weeks = ? days`,weeks*7,'Each week has 7 days.');}
  if(t===2){const [month,days]=pick([['April',30],['June',30],['September',30],['November',30],['January',31],['March',31],['May',31],['July',31],['August',31],['October',31],['December',31]]);return q('calendarDates',`${month} has ? days`,days,'Recall the number of days in the month.');}
  if(t===3){const weeks=randInt(1,6),days=randInt(1,6);return q('calendarDates',`${weeks} weeks and ${days} days = ? days`,weeks*7+days,'Convert the weeks to days, then add.');}
  if(t===4){const monthDays=pick([28,30,31]),date=randInt(10,monthDays-5);return q('calendarDates',`A month has ${monthDays} days. After day ${date}, how many days remain in the month?`,monthDays-date,'Subtract the date from the number of days in the month.');}
  if(t===5){const start=randInt(1,18),gap=randInt(3,12);return q('calendarDates',`An event is on day ${start} and again on day ${start+gap}. How many days apart are the dates?`,gap,'Subtract the earlier date from the later date.');}
  if(t===6){const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],startIndex=randInt(0,6),add=randInt(1,13),answer=(startIndex+add)%7+1;return q('calendarDates',`Today is ${days[startIndex]}. What day is it ${add} days later? Enter 1=Monday, 2=Tuesday, ..., 7=Sunday.`,answer,'Move forward around a 7-day cycle.');}
  const weeks=randInt(2,7);return q('calendarDates',`A class meets once each week for ${weeks} weeks. How many meetings are there?`,weeks,'One meeting happens each week.');
}

/* ===== YEAR 4 FINAL CURRICULUM ADDITIONS ===== */

function y4GenProbability(){
  const L=state.level;
  const t=L==='starter'?randInt(1,6):L==='core'?randInt(1,8):randInt(1,10);
  if(t===1)return qFrac('probability','A fair coin is tossed. P(heads) = ?',1/2,'A fair coin has two equally likely outcomes.');
  if(t===2)return q('probability','Rolling a 7 on a fair six-sided die is: enter 1 for impossible, 2 for unlikely, 3 for an even chance, 4 for likely, or 5 for certain.',1,'A six-sided die has faces numbered 1 to 6.');
  if(t===3){const shaded=randInt(1,3);return qFrac('probability',`A fair spinner has 4 equal sections and ${shaded} shaded section${shaded===1?'':'s'}. P(shaded) = ?`,shaded/4,'Use shaded sections ÷ total sections.');}
  if(t===4){const favourable=pick([1,2,3]);return qFrac('probability',`A bag has ${favourable} red and ${4-favourable} blue counters. P(red) = ?`,favourable/4,'Use red counters ÷ total counters.');}
  if(t===5)return q('probability','Which probability represents an even chance? Enter 1 for 0, 2 for 0.5, or 3 for 1.',2,'An even chance is one half, or 0.5.');
  if(t===6){const heads=randInt(4,16),total=20;return q('probability',`A coin landed heads ${heads} times in ${total} tosses. It landed tails ? times.`,total-heads,'Heads and tails counts add to the total number of tosses.');}
  if(t===7)return qFrac('probability','A fair six-sided die is rolled. P(rolling an even number) = ?',1/2,'The even faces are 2, 4 and 6.');
  if(t===8){const favourable=pick([1,2,3,4,5]);return qFrac('probability',`A fair six-sided die is rolled. ${favourable} faces are winning faces. P(winning) = ?`,favourable/6,'Winning faces ÷ 6 total faces.');}
  if(t===9){const p=pick([1/4,1/2,3/4]);return qFrac('probability',`P(rain) = ${toFraction(p)}. P(no rain) = ?`,1-p,'Complementary probabilities add to 1.');}
  return q('probability','A fair coin is tossed twice. How many possible outcomes are there?',4,'The outcomes are HH, HT, TH and TT.');
}

function y4GenNumberBalance() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 6) : randInt(1, 8);

  if (t === 1) {
    const a = randInt(10, 60), x = randInt(5, 30);
    return q('numberBalance', `${a} + ? = ${a + x}`, x, 'Use subtraction to find the missing addend.');
  }
  if (t === 2) {
    const a = randInt(30, 90), x = randInt(5, a - 5);
    return q('numberBalance', `${a} − ? = ${a - x}`, x, 'Use the difference between the two numbers.');
  }
  if (t === 3) {
    const a = randInt(10, 40), b = randInt(5, 25), correct = chance(0.5);
    const shown = a + b + (correct ? 0 : pick([-1, 1, 2]));
    return q('numberBalance', `Is ${a} + ${b} = ${shown}? Enter 1 for True or 0 for False.`, correct ? 1 : 0, 'Calculate the left side and compare.');
  }
  if (t === 4) {
    const a = randInt(5, 25), b = randInt(5, 25), c = randInt(1, a + b - 1);
    return q('numberBalance', `${a} + ${b} = ${c} + ?`, a + b - c, 'Both sides of the equals sign must have the same value.');
  }
  if (t === 5) {
    const a = pick([2, 3, 4, 5, 10]), b = randInt(2, 10);
    const total = a * b;
    const factors = [2, 3, 4, 5, 10].filter(value => total % value === 0);
    const c = pick(factors);
    return q('numberBalance', `${a} × ${b} = ${c} × ?`, total / c, 'Find the value of the left side, then divide by the known factor.');
  }
  if (t === 6) {
    const divisor = pick([2, 4, 5, 10]), answer = randInt(2, 12);
    return q('numberBalance', `? ÷ ${divisor} = ${answer}`, divisor * answer, 'Use multiplication as the inverse of division.');
  }
  if (t === 7) {
    const left = randInt(20, 80), right = left + pick([-10, -5, 5, 10]);
    return q('numberBalance', `Which is greater? Enter 1 for ${left}, or 2 for ${right}.`, left > right ? 1 : 2, 'Compare the place values.');
  }
  const a = randInt(20, 60), b = randInt(5, 25), limit = a + b + pick([-5, 0, 5]);
  return q('numberBalance', `Is ${a} + ${b} ≤ ${limit}? Enter 1 for True or 0 for False.`, a + b <= limit ? 1 : 0, 'Calculate, then compare using ≤.');
}

function y4GenShapesSymmetry(){
  const L=state.level;
  const t=L==='starter'?randInt(1,6):L==='core'?randInt(1,10):randInt(1,13);
  if(t===1){const n=pick([3,4,5,6,8]);return q('shapesSymmetry',`A polygon with ${n} sides has ? vertices`,n,'A polygon has the same number of sides and vertices.');}
  if(t===2){const [name,sides]=pick([['triangle',3],['quadrilateral',4],['pentagon',5],['hexagon',6],['octagon',8]]);return q('shapesSymmetry',`A ${name} has ? sides`,sides,'Recall the polygon name.');}
  if(t===3)return q('shapesSymmetry','How many lines of symmetry does a square have?',4,'A square can be folded along two diagonals and two midlines.');
  if(t===4)return q('shapesSymmetry','How many lines of symmetry does a non-square rectangle have?',2,'A rectangle has one horizontal and one vertical line of symmetry.');
  if(t===5)return q('shapesSymmetry','A quadrilateral has 4 equal sides and 4 right angles. Enter 1 for square, 2 for rectangle, or 3 for triangle.',1,'A square has four equal sides and four right angles.');
  if(t===6)return q('shapesSymmetry','Two lines that never meet are: enter 1 for parallel or 2 for perpendicular.',1,'Parallel lines stay the same distance apart.');
  if(t===7)return q('shapesSymmetry','How many faces does a cube have?',6,'Count the square faces.');
  if(t===8)return q('shapesSymmetry','How many vertices does a cube have?',8,'A cube has four top vertices and four bottom vertices.');
  if(t===9)return q('shapesSymmetry','How many edges does a cube have?',12,'A cube has 4 top, 4 bottom and 4 vertical edges.');
  if(t===10)return q('shapesSymmetry','A shape is moved without turning or flipping. Enter 1 for translation, 2 for reflection, or 3 for rotation.',1,'A translation slides a shape.');
  if(t===11)return q('shapesSymmetry','A shape is flipped across a line. Enter 1 for translation, 2 for reflection, or 3 for rotation.',2,'A reflection makes a mirror image.');
  if(t===12)return q('shapesSymmetry','A shape is turned about a point. Enter 1 for translation, 2 for reflection, or 3 for rotation.',3,'A rotation turns a shape around a point.');
  return q('shapesSymmetry','A 3D object has 6 equal square faces. Enter 1 for cube or 2 for cylinder.',1,'A cube has six equal square faces.');
}



function y4GenDataTables(){
  const L=state.level;
  const t=L==='starter'?randInt(1,4):L==='core'?randInt(1,6):randInt(1,8);
  if(t===1){const a=randInt(4,12),b=randInt(3,10),c=randInt(2,9);return q('dataTables',`A survey found: apples ${a}, bananas ${b}, oranges ${c}. Total responses = ?`,a+b+c,'Add all category frequencies.');}
  if(t===2){const [a,b,c,answer]=pick([[9,5,7,1],[4,11,6,2],[5,7,12,3]]);return q('dataTables',`Favourite fruit: apples ${a}, bananas ${b}, oranges ${c}. Most popular category: enter 1 for apples, 2 for bananas, or 3 for oranges.`,answer,'Choose the category with the greatest frequency.');}
  if(t===3){const high=randInt(10,18),low=randInt(3,high-2);return q('dataTables',`Blue received ${high} votes and green received ${low} votes. How many more votes did blue receive?`,high-low,'Subtract the smaller frequency from the larger one.');}
  if(t===4)return q('dataTables','Favourite colour is: enter 1 for categorical data, 2 for counted numerical data, or 3 for measured numerical data.',1,'Favourite colour is a category, not a number.');
  if(t===5){const y5=randInt(4,12),y6=randInt(4,12);return q('dataTables',`Year 4: ${y5} students chose apples. Year 5: ${y6} students chose apples. Total choosing apples = ?`,y5+y6,'Add the two group counts.');}
  if(t===6){const a=randInt(5,12),b=randInt(5,12);if(a===b)return y4GenDataTables();return q('dataTables',`Class A recorded ${a} bike riders. Class B recorded ${b} bike riders. Which class recorded more? Enter 1 for Class A or 2 for Class B.`,a>b?1:2,'Compare the two frequencies.');}
  if(t===7)return q('dataTables','Number of pets owned is: enter 1 for categorical data, 2 for counted numerical data, or 3 for measured numerical data.',2,'The number of pets is counted.');
  return q('dataTables','Height in centimetres is: enter 1 for categorical data, 2 for counted numerical data, or 3 for measured numerical data.',3,'Height is measured.');
}

YEAR_BANKS[4] = {
  "probability": y4GenProbability,
  "decimalTenths": y4GenDecimalTenths,
  "dataTables": y4GenDataTables,
  "numberBalance": y4GenNumberBalance,
  "shapesSymmetry": y4GenShapesSymmetry,

  "mentalStrategies": y4GenMentalStrategies,
  "moneyChange": y4GenMoneyChange,
  "calendarDates": y4GenCalendarDates,
  "angleBasics": y4GenAngleBasics,
  "addition": y4GenAdd,
  "subtraction": y4GenSub,
  "multiplication": y4GenMul,
  "division": y4GenDiv,
  "placevalue": y4GenPlaceValue,
  "rounding": y4GenRounding,
  "missing": y4GenMissing,
  "doubles": y4GenDoubles,
  "factors": y4GenFactors,
  "fractions": y4GenFractions,
  "time": y4GenTime,
  "measurements": y4GenMeasurements,
  "perimeterArea": y4GenPerimeterArea,
  "sequences": y4GenSequences
};
