'use strict';

/* Year 12 configuration and question bank. */
YEAR_CONFIGS[12] = {
  title: 'Year 12 Rapid Fire Mental Maths',
  skillLabel: 'Year 12 Skill',
  mixed: 'Mixed Year 12 Skills',
  labels: {
    rationalAlg: 'Rational Algebraic Expressions',
    indices: 'Index Laws',
    logs: 'Logarithms',
    exponential: 'Exponential Equations & Growth',
    coord: 'Coordinate Geometry',
    linearFn: 'Linear Functions',
    quadraticFn: 'Quadratic Functions',
    nonlinearFn: 'Non-linear Functions',
    fnTransforms: 'Function Transformations',
    arithSeq: 'Arithmetic Sequences',
    geomSeq: 'Geometric Sequences',
    series: 'Sequences & Series',
    equations: 'Linear Equations & Inequalities',
    quadratics: 'Quadratic Equations',
    trigEq: 'Simple Trigonometric Equations',
    systems: 'Systems of Equations',
    formula: 'Formula Rearrangement',
    sineRule: 'Sine Rule',
    cosineRule: 'Cosine Rule',
    trigArea: 'Triangle Area & Trigonometry',
    trig3d: 'Trigonometry 2D & 3D',
    networks: 'Networks & Optimisation',
    diffBasics: 'Differentiation Basics',
    diffPoly: 'Polynomial Differentiation',
    tangentNormal: 'Gradients, Tangents & Normals',
    stationary: 'Stationary Points',
    calcOptimisation: 'Calculus Optimisation',
    antidiff: 'Antidifferentiation',
    definiteIntegral: 'Definite Integrals & Area',
    motionRates: 'Motion & Rates of Change',
    statInvestigation: 'Statistical Investigations',
    samplingError: 'Sampling & Survey Error',
    experimentalDesign: 'Experimental Design',
    compareDist: 'Comparing Distributions',
    pointEstimate: 'Point Estimates & Sample Size',
    inference: 'Statistical Inference',
    statLiteracy: 'Statistical Literacy & Association',
    risk: 'Risk & Relative Risk',
    normal: 'Normal Distribution',
    probRules: 'Probability Rules',
    tablesTrees: 'Two-Way Tables & Trees',
    simulation: 'Simulation & Experimental Probability',
    mixed: 'Mixed Year 12 Skills',
    review: 'Mistake Review'
  },
  skills: [
    'rationalAlg','indices','logs','exponential','coord','linearFn','quadraticFn',
    'nonlinearFn','fnTransforms','arithSeq','geomSeq','series','equations','quadratics',
    'trigEq','systems','formula','sineRule','cosineRule','trigArea','trig3d','networks',
    'diffBasics','diffPoly','tangentNormal','stationary','calcOptimisation','antidiff',
    'definiteIntegral','motionRates','statInvestigation','samplingError','experimentalDesign',
    'compareDist','pointEstimate','inference','statLiteracy','risk','normal','probRules',
    'tablesTrees','simulation'
  ],
  levels: [['starter','Starter'],['core','Core'],['challenge','Challenge']],
  teacher: 'Year 12 develops curriculum Level 7 / NCEA Level 2 fluency in algebra, functions, sequences, trigonometry, calculus, statistics and probability using short exact-answer questions.'
};

BASE_STORAGE_BY_YEAR[12] = {
  stars: 'dyaaY12Stars',
  hero: 'dyaaY12Hero',
  best: 'dyaaY12Best',
  mistakes: 'dyaaY12Mistakes'
};

/* ===== YEAR 12 HELPERS ===== */
function y12Superscript(value) {
  const map = {'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
  return String(value).split('').map(ch => map[ch] || ch).join('');
}
function y12Power(base, exponent) { return `${base}${y12Superscript(exponent)}`; }
function y12Subscript(value) {
  const map = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'};
  return String(value).split('').map(ch => map[ch] || ch).join('');
}
function y12LogText(base, value) { return `log${y12Subscript(base)}(${value})`; }
function y12LevelCount(starter, core, challenge) { return state.level==='starter'?starter:state.level==='core'?core:challenge; }
function y12Type(starter,core,challenge){
  if(state.level==='starter')return randInt(1,starter);
  if(state.level==='core')return randInt(1,core);
  const roll=Math.random();
  if(roll<0.20||core<=starter)return randInt(1,starter);
  if(roll<0.55||challenge<=core)return randInt(starter+1,core);
  return randInt(core+1,challenge);
}
function y12NonZeroInt(min,max){ let n=0; while(n===0)n=randInt(min,max); return n; }
function y12VarTerm(c,v='x',first=true){
  c=Number(c); if(c===0)return '';
  const body=`${Math.abs(c)===1?'':fmt(Math.abs(c))}${v}`;
  if(first)return c<0?`−${body}`:body;
  return c<0?`− ${body}`:`+ ${body}`;
}
function y12Signed(n){n=Number(n);if(n===0)return'';return n>0?`+ ${fmt(n)}`:`− ${fmt(Math.abs(n))}`;}
function y12LinearText(m,c){const s=y12Signed(c);return `y = ${y12VarTerm(m,'x',true)}${s?` ${s}`:''}`;}

function y12PowTerm(c,p,first=true){
  c=Number(c); if(c===0)return '';
  const power=p===1?'x':`x${y12Superscript(p)}`;
  const body=`${Math.abs(c)===1?'':fmt(Math.abs(c))}${power}`;
  if(first)return c<0?`−${body}`:body;
  return c<0?`− ${body}`:`+ ${body}`;
}
function y12ChooseDistinctAbs(){let a=y12NonZeroInt(-6,6),b=y12NonZeroInt(-6,6);while(Math.abs(a)===Math.abs(b))b=y12NonZeroInt(-6,6);return[a,b];}
function y12Mean(arr){return arr.reduce((s,v)=>s+v,0)/arr.length;}

/* ===== ALGEBRA / NUMBER ===== */
function y12GenRationalAlg(){
  const t=y12Type(5,9,17);
  if(t===1){const a=randInt(2,8),b=randInt(2,8);return q('rationalAlg',`${a}x + ${b}x = ?x`,a+b,'Collect like terms.');}
  if(t===2){const [a,b]=pick([[6,2],[8,4],[12,3],[15,5],[18,3]]);return q('rationalAlg',`${a}x² ÷ ${b}x = ?x`,a/b,'Cancel one factor of x, then divide the coefficients.');}
  if(t===3){const a=randInt(2,8),b=randInt(2,8);return q('rationalAlg',`${a}/x + ${b}/x = ?/x`,a+b,'Same denominator: add numerators.');}
  if(t===4){const a=randInt(2,6),b=randInt(2,6);return q('rationalAlg',`(${a}x)(${b}x²) = ?x³`,a*b,'Multiply coefficients and add exponents.');}
  if(t===5){const r=pick([2,3,4]);return q('rationalAlg',`(x² − ${r*r}) ÷ (x − ${r}) = x + ?`,r,'Use difference of squares.');}
  if(t===6){const a=pick([5,7,9,10,12]),b=pick([2,3,4]);return qFrac('rationalAlg',`${a}x/${b} ÷ x = ?`,a/b,'Cancel x, then simplify the numerical fraction.');}
  if(t===7){const r=pick([2,3,4,5]);return q('rationalAlg',`(x² + ${2*r}x + ${r*r}) ÷ (x + ${r}) = x + ?`,r,'Recognise a perfect-square factorisation.');}
  if(t===8){const a=randInt(2,5),b=randInt(2,5),x=pick([1,2,4,5]);return qFrac('rationalAlg',`For x=${x}, ${a}/x + ${b}/x = ?`,(a+b)/x,'Combine over the common denominator, then substitute.');}
  if(t===9){const r=pick([2,3,4,5]);return q('rationalAlg',`(x² − ${r*r})/(x − ${r}) is undefined at x = ?`,r,'Cancelling a factor does not remove the original denominator restriction.');}
  if(t===10){const [a,b]=pick([[2,3],[3,2],[4,5],[5,2]]);return q('rationalAlg',`${a}/x + ${b}/(2x) = ?/(2x)`,2*a+b,'Rewrite the first fraction with denominator 2x, then add numerators.');}
  if(t===11)return q('rationalAlg','For (x²−9)/(x²−x−6), the positive excluded x-value is ?',3,'The denominator factors as (x−3)(x+2), so x=3 remains excluded even if a factor cancels.');
  if(t===12)return q('rationalAlg','For (x²−4)/(x²+5x+6), the negative excluded x-value closest to zero is ?',-2,'The denominator factors as (x+2)(x+3).');
  if(t===13){const r=pick([2,3,4]),s=pick([5,6,7]);return q('rationalAlg',`(x − ${r})(x + ${s}) has x-coefficient ?`,s-r,'The middle coefficient is s−r.');}
  if(t===14){const a=randInt(2,5),b=randInt(2,5),c=randInt(2,5);return q('rationalAlg',`${a}x² + ${b}x − ${c}x². Coefficient of x² = ?`,a-c,'Collect only like powers.');}
  if(t===15){const r=pick([2,3,4,5]);return q('rationalAlg',`For allowed x-values, (x²−${r*r})/(x−${r}) × 2/(x+${r}) = ?`,2,'Factor x²−r²=(x−r)(x+r), then cancel common factors.');}
  if(t===16){const r=pick([2,3,4,5]);return q('rationalAlg',`In (x²−${r*r})/(x−${r}) × 2/(x+${r}), how many x-values are excluded?`,2,'The original denominators exclude x=r and x=−r, even after cancellation.');}
  const r=pick([2,3,4,5]);return q('rationalAlg',`For allowed x-values, (x²−${r*r})/((x−${r})(x+${r})) = ?`,1,'Factor the numerator and cancel both factors, while keeping the original restrictions.');
}


function y12GenIndices(){
  const t=y12Type(5,8,10);
  if(t===1){const b=pick([2,3,5]),m=randInt(2,7),n=randInt(1,5);return q('indices',`${y12Power(b,m)} × ${y12Power(b,n)} = ${b}ⁿ. n = ?`,m+n,'Add exponents.');}
  if(t===2){const b=pick([2,3,5]),m=randInt(5,10),n=randInt(1,m-1);return q('indices',`${y12Power(b,m)} ÷ ${y12Power(b,n)} = ${b}ⁿ. n = ?`,m-n,'Subtract exponents.');}
  if(t===3){const b=pick([2,3,4]),m=randInt(2,4),n=randInt(2,4);return q('indices',`(${y12Power(b,m)})${y12Superscript(n)} = ${b}ⁿ. n = ?`,m*n,'Multiply exponents.');}
  if(t===4){const b=pick([2,4,5,10]),n=randInt(1,3);return qFrac('indices',`${y12Power(b,-n)} = ?`,1/(b**n),'Negative exponent means reciprocal.');}
  if(t===5){const [base,ans]=pick([[16,4],[25,5],[36,6],[81,9]]);return q('indices',`${base}${y12Superscript(1)}ᐟ${y12Superscript(2)} = ?`,ans,'Power 1/2 is square root.');}
  if(t===6){const [base,ans]=pick([[8,2],[27,3],[64,4],[125,5],[216,6]]);return q('indices',`${base}${y12Superscript(1)}ᐟ${y12Superscript(3)} = ?`,ans,'Power 1/3 is cube root.');}
  if(t===7){const [base,num,den,ans]=pick([[16,3,4,8],[81,3,4,27],[27,2,3,9],[32,2,5,4]]);return q('indices',`${base}${y12Superscript(num)}ᐟ${y12Superscript(den)} = ?`,ans,'Take the root then the numerator power.');}
  if(t===8){const b=pick([2,3,5]),m=randInt(1,4),n=randInt(1,4);return q('indices',`${y12Power(b,-m)} × ${y12Power(b,n)} = ${b}ⁿ. n = ?`,n-m,'Add signed exponents.');}
  if(t===9){const b=pick([2,3]),m=randInt(2,4),n=randInt(2,3),p=randInt(1,3);return q('indices',`(${y12Power(b,m)})${y12Superscript(n)} ÷ ${y12Power(b,p)} = ${b}ⁿ. n = ?`,m*n-p,'Multiply then subtract exponents.');}
  return q('indices',`${y12Power(7,0)} = ?`,1,'Any non-zero base to power zero equals 1.');
}

function y12GenLogs(){
  const t=y12Type(5,8,16);
  if(t===1){const [b,p,v]=pick([[2,3,8],[2,5,32],[3,2,9],[3,4,81],[5,3,125],[7,4,2401],[10,3,1000]]);return q('logs',`${y12LogText(b,v)} = ?`,p,'Ask: what power of the base gives the number?');}
  if(t===2){const b=pick([2,3,5,10]);return q('logs',`${y12LogText(b,1)} = ?`,0,'Any non-zero base to power 0 is 1.');}
  if(t===3){const b=pick([2,3,5,7,10]);return q('logs',`${y12LogText(b,b)} = ?`,1,'The base to power 1 is itself.');}
  if(t===4){const [b,a,c,ans]=pick([[2,8,4,5],[3,9,3,3],[5,25,5,3],[10,1000,100,5]]);return q('logs',`${y12LogText(b,`${a} × ${c}`)} = ?`,ans,'Multiply first, then identify the power of the base.');}
  if(t===5){const [b,a,c,ans]=pick([[2,64,4,4],[3,81,3,3],[5,125,5,2],[10,100000,100,3]]);return q('logs',`${y12LogText(b,`${a} ÷ ${c}`)} = ?`,ans,'Divide first, then identify the power of the base.');}
  if(t===6){const [b,p]=pick([[2,4],[3,3],[5,2],[10,3]]);return q('logs',`If ${y12LogText(b,'x')} = ${p}, then x = ?`,b**p,'Convert logarithmic form to exponential form.');}
  if(t===7){const [b,v,p]=pick([[2,16,4],[3,27,3],[5,125,3],[10,100,2]]);return q('logs',`If ${b}ˣ = ${v}, then ${y12LogText(b,v)} = ?`,p,'Logs undo exponentiation.');}
  if(t===8){const [b,p]=pick([[2,-3],[5,-2],[10,-3]]);return qFrac('logs',`If ${y12LogText(b,'x')} = ${p}, then x = ?`,b**p,'A negative logarithm exponent gives a reciprocal power.');}
  if(t===9){const [b,a,c,ans]=pick([[2,4,8,5],[3,3,9,3],[5,5,25,3]]);return q('logs',`${y12LogText(b,a)} + ${y12LogText(b,c)} = ?`,ans,'Evaluate each logarithm, then add.');}
  if(t===10){const [b,a,c,ans]=pick([[2,32,4,3],[3,81,3,3],[10,1000000,100,4]]);return q('logs',`${y12LogText(b,a)} − ${y12LogText(b,c)} = ?`,ans,'Evaluate each logarithm, then subtract.');}
  if(t===11)return q('logs',`${y12LogText(10,0.01)} = ?`,-2,'0.01 = 10⁻².');
  if(t===12){const [b,k,p]=pick([[2,1,3],[3,2,2],[5,4,2]]);return q('logs',`${y12LogText(b,`x − ${k}`)} = ${p}. x = ?`,b**p+k,'Rewrite in exponential form, then solve.');}
  if(t===13){const [b,a,target,ans]=pick([[2,4,3,2],[3,3,3,9],[5,5,3,25]]);return q('logs',`${y12LogText(b,'x')} + ${y12LogText(b,a)} = ${target}. x = ?`,ans,'Evaluate the known logarithm, then solve for x.');}
  if(t===14){const [b,a,c,prod]=pick([[2,8,4,32],[3,9,3,27],[5,25,5,125]]);return q('logs',`${y12LogText(b,a)} + ${y12LogText(b,c)} = ${y12LogText(b,'N')}. N = ?`,prod,'Product law: log a + log b = log(ab).');}
  if(t===15){const [b,a,c,quot]=pick([[2,32,4,8],[3,81,3,27],[5,125,5,25]]);return q('logs',`${y12LogText(b,a)} − ${y12LogText(b,c)} = ${y12LogText(b,'N')}. N = ?`,quot,'Quotient law: log a − log b = log(a/b).');}
  const [b,a,pow]=pick([[2,4,16],[3,3,9],[5,5,25]]);return q('logs',`2${y12LogText(b,a)} = ${y12LogText(b,'N')}. N = ?`,pow,'Power law: 2 log(a)=log(a²).');
}

function y12GenExponential(){
  const t=y12Type(5,8,13);
  if(t===1){const [b,x]=pick([[2,4],[2,5],[3,3],[5,3]]);return q('exponential',`${b}ˣ = ${b**x}. x = ?`,x,'Recognise the power.');}
  if(t===2){const [a,b,x]=pick([[4,2,3],[8,2,2],[9,3,3],[25,5,2]]);return q('exponential',`${a}ˣ = ${b}${y12Superscript(Math.round(Math.log(a**x)/Math.log(b)))}. x = ?`,x,'Rewrite both sides with the same base.');}
  if(t===3){const [start,r,n]=pick([[100,1.1,2],[200,1.05,2],[80,1.25,2],[400,0.9,2]]);return q('exponential',`${start} × ${r}${y12Superscript(n)} = ?`,roundTo(start*(r**n),6),'Apply the growth or decay multiplier repeatedly.');}
  if(t===4){const [start,end,n]=pick([[100,121,2],[200,242,2],[80,125,2]]);return q('exponential',`A quantity grows from ${start} to ${end} in ${n} equal periods. Growth multiplier each period = ?`,roundTo((end/start)**(1/n),6),'Take the nth root of the total growth factor.');}
  if(t===5){const [p,r,n]=pick([[500,0.1,2],[800,0.05,2],[200,0.2,2]]);return q('exponential',`$${p} grows by ${r*100}% per period for ${n} periods. Final amount = $?`,roundTo(p*(1+r)**n,2),'Use repeated multiplication by 1+r.');}
  if(t===6){const [start,r]=pick([[100,0.5],[160,0.5],[200,0.8]]);return q('exponential',`Start ${start}; multiply by ${r} each period. Value after 3 periods = ?`,roundTo(start*r**3,6),'Repeated decay is exponential.');}
  if(t===7){const [b,v]=pick([[2,64],[3,243],[5,625]]);return q('exponential',`${b}ˣ = ${v}. x = ?`,Math.round(Math.log(v)/Math.log(b)),'Recognise a whole-number power.');}
  if(t===8){const [start,end]=pick([[100,125],[200,250],[400,500]]);return q('exponential',`One-period multiplier taking ${start} to ${end} = ?`,end/start,'Multiplier = new ÷ original.');}
  if(t===9){const [start,mult]=pick([[100,1.2],[500,0.9],[200,1.05]]);return q('exponential',`Model A=${start}×${mult}ⁿ. Initial value A when n=0 = ?`,start,'Any non-zero multiplier to power 0 equals 1.');}
  if(t===10){const [start,mult]=pick([[100,1.2],[500,0.9],[200,1.05]]);return q('exponential',`Model A=${start}×${mult}ⁿ. Per-period percentage change = ?%`,roundTo((mult-1)*100,6),'Convert the multiplier difference from 1 into a percentage.');}
  if(t===11)return q('exponential','If an exponential model has multiplier 0.75 each period, is it growth or decay? Enter 1=growth, 2=decay.',2,'A multiplier between 0 and 1 gives decay.');
  if(t===12){const [start,mult,end,n]=pick([[100,2,800,3],[50,3,1350,3],[200,2,1600,3]]);return q('exponential',`${start}×${mult}ⁿ = ${end}. n = ?`,n,'Divide by the initial value, then recognise the power.');}
  const [start,mult,end,n]=pick([[500,1.1,605,2],[200,1.2,288,2],[800,1.05,882,2]]);return q('exponential',`${start}×${mult}ⁿ = ${end}. n = ?`,n,'Recognise the repeated percentage multiplier.');
}

/* ===== FUNCTIONS / COORDINATE GEOMETRY ===== */
function y12GenCoord(){
  const t=y12Type(5,8,14);
  if(t===1){const x1=randInt(-5,5),y1=randInt(-5,5),dx=pick([2,4,6]),m=pick([-3,-2,-1,1,2,3]),x2=x1+dx,y2=y1+m*dx;return q('coord',`Gradient through (${x1},${y1}) and (${x2},${y2}) = ?`,m,'m=(change in y)/(change in x).');}
  if(t===2){const x1=randInt(-6,2),x2=x1+pick([2,4,6]),y1=randInt(-6,2),y2=y1+pick([2,4,6]);return q('coord',`Midpoint x-coordinate of (${x1},${y1}) and (${x2},${y2}) = ?`,(x1+x2)/2,'Average the x-coordinates.');}
  if(t===3){const [dx,dy,d]=pick([[3,4,5],[5,12,13],[8,15,17],[6,8,10]]),x1=randInt(-3,3),y1=randInt(-3,3);return q('coord',`Distance between (${x1},${y1}) and (${x1+dx},${y1+dy}) = ?`,d,'Use Pythagoras on coordinate differences.');}
  if(t===4){const m=pick([-4,-3,-2,2,3,4]),c=randInt(-8,8);return q('coord',`${y12LinearText(m,c)}. y-intercept = ?`,c,'At x=0, y=c.');}
  if(t===5){const m=pick([-4,-2,-1,1,2,4]);return qFrac('coord',`A line has gradient ${m}. Gradient of a perpendicular line = ?`,-1/m,'Perpendicular gradients multiply to −1.');}
  if(t===6){const m=pick([-3,-2,2,3]),x=pick([-2,-1,1,2]),c=randInt(-5,5),y=m*x+c;return q('coord',`A line has gradient ${m} and passes through (${x},${y}). y-intercept = ?`,c,'Use y=mx+c.');}
  if(t===7){const [m1,m2]=y12ChooseDistinctAbs();return q('coord',`Which line is steeper? Enter 1 for gradient ${m1}, 2 for gradient ${m2}.`,Math.abs(m1)>Math.abs(m2)?1:2,'Compare absolute gradient values.');}
  if(t===8){const m=pick([-4,-3,-2,2,3,4]);return q('coord',`A line parallel to y=${y12VarTerm(m,'x',true)} + 7 has gradient ?`,m,'Parallel lines have equal gradients.');}
  if(t===9){const x=randInt(-6,6);return q('coord',`Vertical line through (${x},4) has equation x = ?`,x,'A vertical line has constant x-coordinate.');}
  if(t===10){const y=randInt(-6,6);return q('coord',`Horizontal line through (3,${y}) has y-intercept ?`,y,'A horizontal line is y=constant.');}
  if(t===11)return q('coord','If two non-vertical lines have gradients whose product is −1, they are: enter 1=parallel, 2=perpendicular.',2,'Negative reciprocal gradients are perpendicular.');
  if(t===12){const [m1,c1,m2,c2,x]=pick([[2,1,-1,7,2],[3,-2,-1,6,2],[2,-3,-2,9,3]]);return q('coord',`Lines ${y12LinearText(m1,c1)} and ${y12LinearText(m2,c2)}. Intersection x-coordinate = ?`,x,'Set the two y-expressions equal and solve.');}
  if(t===13){const [x,k]=pick([[2,5],[-1,3],[7,4],[4,-2]]);return q('coord',`Point (${x},3) is reflected in the vertical line x=${k}. New x-coordinate = ?`,2*k-x,'A vertical mirror line is the midpoint of the old and new x-coordinates.');}
  const [y,k]=pick([[2,5],[-1,3],[7,4],[4,-2]]);return q('coord',`Point (3,${y}) is reflected in the horizontal line y=${k}. New y-coordinate = ?`,2*k-y,'A horizontal mirror line is the midpoint of the old and new y-coordinates.');
}

function y12GenLinearFn(){
  const t=y12Type(5,8,10);
  if(t===1){const m=pick([-5,-3,-2,2,3,5]),c=randInt(-6,6),x=randInt(-3,5);return q('linearFn',`${y12LinearText(m,c)}. When x=${x}, y = ?`,m*x+c,'Substitute x.');}
  if(t===2){const m=pick([-5,-3,-2,2,3,5]),c=randInt(-8,8);return q('linearFn',`${y12LinearText(m,c)}. Gradient = ?`,m,'In y=mx+c, m is the gradient.');}
  if(t===3){const m=pick([-5,-3,-2,2,3,5]),c=randInt(-8,8);return q('linearFn',`${y12LinearText(m,c)}. y-intercept = ?`,c,'In y=mx+c, c is the y-intercept.');}
  if(t===4){const m=pick([-4,-2,2,4]),x=pick([1,2,3]),y=m*x;return q('linearFn',`A line through the origin contains (${x},${y}). Gradient = ?`,m,'For a line through the origin, m=y/x.');}
  if(t===5){const m=pick([-4,-3,-2,2,3,4]),root=pick([-3,-2,-1,1,2,3]),c=-m*root;return q('linearFn',`${y12LinearText(m,c)}. x-intercept = ?`,root,'Set y=0 and solve.');}
  if(t===6){const m=pick([-4,-2,2,4]),c=randInt(-5,5),x=pick([-2,-1,1,2]),y=m*x+c;return q('linearFn',`Line gradient=${m} through (${x},${y}). y-intercept = ?`,c,'Use c=y−mx.');}
  if(t===7){const up=randInt(1,6),down=-randInt(1,6),positiveFirst=Math.random()<0.5,m1=positiveFirst?up:down,m2=positiveFirst?down:up;return q('linearFn',`Which line rises as x increases? Enter 1 for gradient ${m1}, 2 for gradient ${m2}.`,positiveFirst?1:2,'Positive gradient means increasing.');}
  if(t===8){const m=pick([2,3,4]),c=randInt(-5,5),x=pick([1,2,3]);const cs=y12Signed(c);return q('linearFn',`f(x)=${m}x${cs?` ${cs}`:''}. f(${x}) = ?`,m*x+c,'Substitute into the function.');}
  if(t===9)return q('linearFn','A horizontal line has gradient ?',0,'There is no vertical change.');
  return q('linearFn','A vertical line has a defined finite gradient. Enter 1=True or 0=False.',0,'Vertical-line gradient is undefined.');
}

function y12GenQuadraticFn(){
  const t=y12Type(5,8,11);
  if(t===1){const a=pick([1,2,3]),x=pick([-3,-2,-1,1,2,3]);return q('quadraticFn',`y=${a===1?'':a}x². When x=${x}, y = ?`,a*x*x,'Square x, then multiply by a.');}
  if(t===2){const h=pick([-4,-3,-2,2,3,4]),k=y12NonZeroInt(-5,5);return q('quadraticFn',`y=(x ${h>=0?`− ${h}`:`+ ${Math.abs(h)}`})² ${k>=0?`+ ${k}`:`− ${Math.abs(k)}`}. Vertex x-coordinate = ?`,h,'Vertex form is (x−h)²+k.');}
  if(t===3){const h=pick([-4,-3,-2,2,3,4]),k=y12NonZeroInt(-5,5);return q('quadraticFn',`y=(x ${h>=0?`− ${h}`:`+ ${Math.abs(h)}`})² ${k>=0?`+ ${k}`:`− ${Math.abs(k)}`}. Minimum y-value = ?`,k,'For positive coefficient, the vertex gives the minimum.');}
  if(t===4){const r1=pick([-6,-5,-4,-3,-2]),r2=pick([2,3,4,5,6]);return q('quadraticFn',`y=(x + ${Math.abs(r1)})(x − ${r2}). Positive x-intercept = ?`,r2,'The other root is negative, so the positive x-intercept is unique.');}
  if(t===5){const a=pick([-3,-2,2,3]);return q('quadraticFn',`For y=${a}x², does the parabola open upward? Enter 1=yes, 0=no.`,a>0?1:0,'The sign of a controls opening direction.');}
  if(t===6){const a=pick([3,4,5]),b=pick([1,2]);return q('quadraticFn',`Which parabola is narrower? Enter 1 for y=${y12PowTerm(a,2)}, 2 for y=${y12PowTerm(b,2)}.`,1,'Larger |a| gives a narrower parabola.');}
  if(t===7){const r=pick([2,3,4,5]);return q('quadraticFn',`y=x²−${r*r}. Positive x-intercept = ?`,r,'Solve x²=r².');}
  if(t===8){const h=pick([-3,-2,2,3]),k=pick([-4,-2,2,4]),x=h;return q('quadraticFn',`For y=(x ${h>=0?`− ${h}`:`+ ${Math.abs(h)}`})² ${k>=0?`+ ${k}`:`− ${Math.abs(k)}`}, y when x=${x} is ?`,k,'At x=h the squared term is zero.');}
  if(t===9){const b=pick([-6,-4,-2,2,4,6]);return q('quadraticFn',`For y=x² ${b>=0?`+ ${b}x`:`− ${Math.abs(b)}x`}, axis of symmetry x = ?`,-b/2,'For x²+bx+c, axis is x=−b/2.');}
  if(t===10){const r1=pick([-4,-3,-2]),r2=pick([2,3,4]);return q('quadraticFn',`Roots are ${r1} and ${r2}. Sum of roots = ?`,r1+r2,'Add the roots.');}
  return q('quadraticFn','A quadratic graph can have at most how many x-intercepts?',2,'A quadratic equation has at most two real roots.');
}

function y12GenNonlinearFn(){
  const t=y12Type(5,8,17);
  if(t===1){const x=pick([-3,-2,-1,1,2,3]);return q('nonlinearFn',`y=x³. When x=${x}, y = ?`,x**3,'Cube x.');}
  if(t===2){const k=pick([6,12,18,24]),x=pick([2,3,4,6]);if(k%x!==0)return y12GenNonlinearFn();return q('nonlinearFn',`y=${k}/x. When x=${x}, y = ?`,k/x,'Substitute into the reciprocal relationship.');}
  if(t===3){const k=pick([6,12,18,24]),x=pick([2,3,4,6]);if(k%x!==0)return y12GenNonlinearFn();return q('nonlinearFn',`For y=${k}/x, x×y = ?`,k,'Inverse proportion has constant product.');}
  if(t===4){const x=pick([0,1,2,3,4]);return q('nonlinearFn',`y=2${y12Superscript(x)}. y = ?`,2**x,'Evaluate the exponential function.');}
  if(t===5){const x=pick([1,10,100,1000]);return q('nonlinearFn',`y=${y12LogText(10,'x')}. For x=${x}, y = ?`,Math.log10(x),'Recognise a power of 10.');}
  if(t===6)return q('nonlinearFn','For y=1/x, can x=0? Enter 1=yes, 0=no.',0,'Division by zero is undefined.');
  if(t===7)return q('nonlinearFn','For y=x³, is the function increasing for all real x? Enter 1=yes, 0=no.',1,'The cubic x³ increases throughout.');
  if(t===8){const x=pick([-2,-1,1,2]);return q('nonlinearFn',`For y=x³−x, when x=${x}, y = ?`,x**3-x,'Substitute and simplify.');}
  if(t===9)return q('nonlinearFn','Which is exponential? Enter 1=y=3x+2, 2=y=3ˣ.',2,'In an exponential function the variable is in the exponent.');
  if(t===10)return q('nonlinearFn','Which is reciprocal? Enter 1=y=6/x, 2=y=x/6.',1,'A reciprocal model has the variable in the denominator.');
  if(t===11){const h=pick([-4,-2,2,4]),k=pick([2,3,5]);return q('nonlinearFn',`For y=${k}/(x ${h>=0?`− ${h}`:`+ ${Math.abs(h)}`}) + 1, vertical asymptote x = ?`,h,'The denominator is zero at the vertical asymptote.');}
  if(t===12){const v=pick([-4,-2,2,4]),k=pick([2,3,5]);return q('nonlinearFn',`For y=${k}/x ${v>=0?`+ ${v}`:`− ${Math.abs(v)}`}, horizontal asymptote y = ?`,v,'As |x| grows, k/x tends to 0.');}
  if(t===13){const h=pick([1,2,3,4]);return q('nonlinearFn',`For y=${y12LogText(2,`x − ${h}`)}, vertical asymptote x = ?`,h,'A logarithm requires x−h>0, so the boundary is x=h.');}
  if(t===14){const k=pick([-4,-2,2,4]);return q('nonlinearFn',`For y=2ˣ ${k>=0?`+ ${k}`:`− ${Math.abs(k)}`}, horizontal asymptote y = ?`,k,'The base exponential tends to 0 on one side, so the vertical shift gives the asymptote.');}
  if(t===15){const h=pick([2,3,4,5]);return q('nonlinearFn',`For y=${y12LogText(3,`x − ${h}`)}, the domain is x > ?.`,h,'The logarithm input must be positive.');}
  if(t===16)return q('nonlinearFn','The graph y=4/x has an x-intercept. Enter 1=True or 0=False.',0,'4/x can never equal 0.');
  return q('nonlinearFn','The graph y=2ˣ has horizontal asymptote y=0. Enter 1=True or 0=False.',1,'Positive exponential values approach 0 but never reach it.');
}


function y12GenFnTransforms(){
  const t=y12Type(5,9,14);
  if(t===1){const k=pick([2,3,4,5]);return q('fnTransforms',`Compared with y=x², y=x²+${k} is shifted up by ? units.`,k,'Adding outside the function shifts vertically.');}
  if(t===2){const k=pick([2,3,4,5]);return q('fnTransforms',`Compared with y=x², y=(x−${k})² is shifted right by ? units.`,k,'Replacing x by x−k shifts right.');}
  if(t===3){const k=pick([2,3,4,5]);return q('fnTransforms',`Compared with y=x², y=(x+${k})² is shifted left by ? units.`,k,'Replacing x by x+k shifts left.');}
  if(t===4){const a=pick([2,3,4]);return q('fnTransforms',`Compared with y=x², y=${a}x² has vertical scale factor ?`,a,'Multiplying the function output scales vertically.');}
  if(t===5)return q('fnTransforms','y=−x² is a reflection of y=x² in the x-axis. Enter 1=True or 0=False.',1,'Multiplying all y-values by −1 reflects in the x-axis.');
  if(t===6){const h=pick([2,3,4]),k=pick([1,2,5]);return q('fnTransforms',`For y=(x−${h})²+${k}, vertex y-coordinate = ?`,k,'Vertex is (h,k).');}
  if(t===7){const h=pick([2,3,4]),k=pick([1,2,5]);return q('fnTransforms',`For y=(x−${h})²+${k}, vertex x-coordinate = ?`,h,'Vertex is (h,k).');}
  if(t===8)return q('fnTransforms','Replacing x by x−4 shifts a graph 4 units right. Enter 1=True or 0=False.',1,'Horizontal shifts have the opposite sign inside brackets.');
  if(t===9)return q('fnTransforms','Adding 5 to f(x) changes every y-value by +5. Enter 1=True or 0=False.',1,'This is a vertical translation.');
  if(t===10)return q('fnTransforms','Multiplying f(x) by −1 reflects the graph in: enter 1=x-axis, 2=y-axis.',1,'All y-values change sign.');
  if(t===11){const a=pick([2,3,4,5]);return q('fnTransforms',`For y=${a} sin x, amplitude = ?`,a,'Amplitude is the absolute value of the sine coefficient.');}
  if(t===12){const b=pick([2,3,4,6]);return q('fnTransforms',`For y=2 cos(${b}x), period = ?°`,360/b,'For sin(bx) or cos(bx), period = 360°/|b|.');}
  if(t===13){const h=pick([30,40,60,90]);return q('fnTransforms',`Compared with y=sin x, y=sin(x−${h}°) shifts right by ?°`,h,'The horizontal shift has the opposite sign inside the brackets.');}
  const a=pick([-5,-4,-3,3,4,5]);return q('fnTransforms',`For y=${a} cos x, amplitude = ?`,Math.abs(a),'Amplitude is always non-negative: |a|.');
}

/* ===== SEQUENCES & SERIES ===== */
function y12GenArithSeq(){
  const t=y12Type(5,8,13);
  if(t===1){const a=randInt(-5,10),d=pick([-5,-3,-2,2,3,4,5]);return q('arithSeq',`${a}, ${a+d}, ${a+2*d}, ${a+3*d}, ... next = ?`,a+4*d,'Add the common difference.');}
  if(t===2){const a=randInt(-5,10),d=pick([-5,-3,-2,2,3,4,5]);return q('arithSeq',`Arithmetic sequence first term=${a}, common difference=${d}. 10th term = ?`,a+9*d,'aₙ=a₁+(n−1)d.');}
  if(t===3){const a=randInt(-5,10),d=pick([-4,-2,2,4]);const n=pick([5,8,10]);return q('arithSeq',`aₙ=${a} + (n−1)×${d}. Find a${y12Subscript(n)}.`,a+(n-1)*d,'Substitute the term number.');}
  if(t===4){const a=randInt(1,8),d=pick([2,3,4,5]),n=pick([4,5,6]);const term=a+(n-1)*d;return q('arithSeq',`Arithmetic sequence starts ${a} with difference ${d}. Which term number has value ${term}?`,n,'Solve a+(n−1)d=term.');}
  if(t===5){const d=pick([-5,-3,-2,2,3,5]);return q('arithSeq',`In an arithmetic sequence, a₇−a₆ = ? if common difference=${d}.`,d,'Consecutive terms differ by d.');}
  if(t===6){const a=randInt(1,10),d=pick([2,3,4]),n=pick([5,6,8]);return q('arithSeq',`a₁=${a}, d=${d}. a${y12Subscript(n)}−a₁ = ?`,(n-1)*d,'There are n−1 jumps.');}
  if(t===7){const a=randInt(1,10),d=pick([2,3,4]),n=pick([5,7,9]);return q('arithSeq',`a₁=${a}, a${y12Subscript(n)}=${a+(n-1)*d}. Common difference = ?`,d,'Difference over n−1 equal gaps.');}
  if(t===8){const d=pick([2,3,4,5]);return q('arithSeq',`Rule aₙ=${d}n+3. Common difference = ?`,d,'The coefficient of n is the common difference.');}
  if(t===9)return q('arithSeq','An arithmetic sequence has a constant difference between consecutive terms. Enter 1=True or 0=False.',1,'That defines an arithmetic sequence.');
  if(t===10)return q('arithSeq','Sequence 3, 6, 12, 24 is arithmetic. Enter 1=True or 0=False.',0,'It has a constant ratio, not constant difference.');
  if(t===11){const a=pick([2,5,7]),d=pick([3,4,5]);return q('arithSeq',`a₁=${a}, aₙ₊₁=aₙ+${d}. Find a₄.`,a+3*d,'Apply the recurrence three times from a₁ to a₄.');}
  if(t===12){const d=pick([-5,-3,2,4,6]);return q('arithSeq',`aₙ₊₁=aₙ ${d>=0?`+ ${d}`:`− ${Math.abs(d)}`}. Common difference = ?`,d,'The recurrence adds the same amount each step.');}
  const a=pick([1,3,5]),d=pick([2,4,6]),n=pick([5,6]);return q('arithSeq',`a₁=${a}, aₙ₊₁=aₙ+${d}. Find a${y12Subscript(n)}.`,a+(n-1)*d,'Use repeated addition or aₙ=a₁+(n−1)d.');
}

function y12GenGeomSeq(){
  const t=y12Type(5,8,13);
  if(t===1){const a=pick([1,2,3,4]),r=pick([2,3,4]);return q('geomSeq',`${a}, ${a*r}, ${a*r*r}, ${a*r**3}, ... next = ?`,a*r**4,'Multiply by the common ratio.');}
  if(t===2){const a=pick([1,2,3,4]),r=pick([2,3]),n=pick([5,6]);return q('geomSeq',`Geometric sequence a₁=${a}, r=${r}. a${y12Subscript(n)} = ?`,a*r**(n-1),'aₙ=a₁rⁿ⁻¹.');}
  if(t===3){const [a,r]=pick([[64,0.5],[96,0.5],[81,1/3],[243,1/3],[125,0.2]]);const seq=[a,a*r,a*r*r];return qFrac('geomSeq',`${fmt(seq[0])}, ${fmt(seq[1])}, ${fmt(seq[2])}, ... common ratio = ?`,r,'Divide a term by the previous term.');}
  if(t===4){const a=pick([1,2,3]),r=pick([2,3]),n=pick([4,5]);return q('geomSeq',`aₙ=${a}×${r}ⁿ⁻¹. Find a${y12Subscript(n)}.`,a*r**(n-1),'Substitute n.');}
  if(t===5){const r=pick([2,3,4]);return q('geomSeq',`In a geometric sequence, a₅/a₄ = ? if r=${r}.`,r,'Consecutive-term ratio is r.');}
  if(t===6){const a=pick([2,3]),r=pick([-2,-3]),n=pick([4,5]);return q('geomSeq',`a₁=${a}, r=${r}. a${y12Subscript(n)} = ?`,a*r**(n-1),'Apply the signed ratio repeatedly.');}
  if(t===7){const a=pick([2,3,4]),r=pick([2,3]),term=a*r**4;return q('geomSeq',`a₁=${a}, r=${r}. Term ${term} is aₙ. n = ?`,5,'There are four multiplications by r from a₁ to a₅.');}
  if(t===8)return q('geomSeq','A geometric sequence has a constant ratio between consecutive non-zero terms. Enter 1=True or 0=False.',1,'That defines a geometric sequence.');
  if(t===9)return q('geomSeq','Sequence 5, 8, 11, 14 is geometric. Enter 1=True or 0=False.',0,'It has constant difference, not constant ratio.');
  if(t===10)return q('geomSeq','If |r|<1 in a geometric sequence, term magnitudes tend toward 0. Enter 1=True or 0=False.',1,'Repeated multiplication by a magnitude below 1 shrinks the terms.');
  if(t===11){const a=pick([1,2,3]),r=pick([2,3]);return q('geomSeq',`a₁=${a}, aₙ₊₁=${r}aₙ. Find a₅.`,a*r**4,'Apply the recurrence four times from a₁ to a₅.');}
  if(t===12){const r=pick([-3,-2,2,3,4]);return q('geomSeq',`aₙ₊₁=${r}aₙ. Common ratio = ?`,r,'The recurrence multiplies by the same ratio each step.');}
  const a=pick([64,80,96]),r=0.5;return q('geomSeq',`a₁=${a}, aₙ₊₁=${r}aₙ. Find a₄.`,a*r**3,'Multiply by 0.5 three times.');
}

function y12GenSeries(){
  const t=y12Type(5,8,13);
  if(t===1){const a=pick([2,4,6]),d=pick([2,3,4]),n=pick([5,6,8]);const last=a+(n-1)*d;return q('series',`Arithmetic series: a₁=${a}, a${y12Subscript(n)}=${last}. Sum of first ${n} terms = ?`,n*(a+last)/2,'Sₙ=n(a₁+aₙ)/2.');}
  if(t===2){const a=pick([1,2,3]),r=pick([2,3]),n=pick([3,4,5]);return q('series',`Geometric series with a=${a}, r=${r}, n=${n}. Sum = ?`,a*(r**n-1)/(r-1),'Use the finite geometric sum formula.');}
  if(t===3){const seq=pick([[3,6,9,12,15],[2,5,8,11,14],[10,8,6,4,2]]);return q('series',`Sum of ${seq.join(' + ')} = ?`,seq.reduce((a,b)=>a+b,0),'Add the listed terms.');}
  if(t===4){const [a,r,sum]=pick([[2,0.5,4],[4,0.5,8],[3,0.25,4],[6,0.25,8]]);return q('series',`Infinite geometric series has a=${a}, r=${r}. Sum to infinity = ?`,sum,'For |r|<1, S∞=a/(1−r).');}
  if(t===5){const r=pick([1.2,2,-2]);return q('series',`Can a geometric series with r=${r} have a finite sum to infinity? Enter 1=yes, 0=no.`,0,'A finite infinite sum needs |r|<1.');}
  if(t===6){const a=pick([2,3,4]),d=pick([2,3,5]),n=pick([5,10]);return q('series',`Arithmetic sequence a₁=${a}, d=${d}. Number of terms in S${y12Subscript(n)} = ?`,n,'Sₙ means the sum of the first n terms.');}
  if(t===7){const a=pick([1,2,3]),r=pick([2,3]),n=pick([4,5]);return q('series',`Geometric sequence a=${a}, r=${r}. Last term in the first ${n} terms = ?`,a*r**(n-1),'The nth term is arⁿ⁻¹.');}
  if(t===8){const a=pick([2,4]),d=pick([2,4]),n=pick([6,8]);const last=a+(n-1)*d;return q('series',`Arithmetic series first=${a}, last=${last}, number of terms=${n}. Average term value = ?`,(a+last)/2,'In an arithmetic series, average of first and last equals mean term.');}
  if(t===9)return q('series','For a finite geometric series, the usual formula needs separate treatment when r=1. Enter 1=True or 0=False.',1,'The standard form divides by 1−r or r−1.');
  if(t===10){const a=pick([4,6,8]),r=0.5;return q('series',`Infinite geometric series a=${a}, r=0.5. Sum to infinity = ?`,2*a,'Divide a by 1−0.5.');}
  if(t===11){const [a,sum,r]=pick([[6,8,0.25],[4,8,0.5],[3,4,0.25]]);return qFrac('series',`Infinite geometric series has first term ${a} and sum ${sum}. Common ratio r = ?`,r,'Use S∞=a/(1−r) and rearrange.');}
  if(t===12)return q('series','A recurrence rule defines each new term from earlier term(s). Enter 1=True or 0=False.',1,'Recurrence relations generate a sequence step by step.');
  const a=pick([2,3,4]),d=pick([2,3,5]);return q('series',`a₁=${a}, aₙ₊₁=aₙ+${d}. Sum of first 3 terms = ?`,a+(a+d)+(a+2*d),'Generate the first three terms, then add them.');
}

/* ===== EQUATIONS ===== */
function y12GenEquations(){
  const t=y12Type(5,8,10);
  if(t===1){const x=randInt(-6,8),a=y12NonZeroInt(-5,5),b=y12NonZeroInt(-8,8);const ss=y12Signed(b);return q('equations',`${y12VarTerm(a)}${ss?` ${ss}`:''} = ${a*x+b}. x = ?`,x,'Undo the constant then divide by the coefficient.');}
  if(t===2){const x=randInt(-5,7),a=pick([2,3,4]),b=y12NonZeroInt(-5,5);return q('equations',`${a}(x ${b>0?`+ ${b}`:`− ${Math.abs(b)}`}) = ${a*(x+b)}. x = ?`,x,'Divide first, then undo the bracket shift.');}
  if(t===3){const x=randInt(-5,8),a=pick([2,3,4]),b=pick([1,2,3]);if(a===b)return y12GenEquations();const c2=y12NonZeroInt(-7,7),c1=b*x+c2-a*x;const l=y12Signed(c1),r=y12Signed(c2);return q('equations',`${y12VarTerm(a)}${l?` ${l}`:''} = ${y12VarTerm(b)}${r?` ${r}`:''}. x = ?`,x,'Collect x-terms on one side.');}
  if(t===4){const a=pick([2,3,4]),k=pick([-3,-2,2,3,4]),x=a*k;return q('equations',`x/${a} = ${k}. x = ?`,x,'Multiply both sides by the denominator.');}
  if(t===5){const a=pick([2,3,4]),b=y12NonZeroInt(-5,5),bound=pick([-3,-2,2,3,4]);const rhs=a*bound+b;return q('equations',`${y12VarTerm(a)} ${b>0?`+ ${b}`:`− ${Math.abs(b)}`} > ${rhs}. Smallest integer solution = ?`,bound+1,'Solve the boundary, then choose the next integer.');}
  if(t===6){const a=pick([-4,-3,-2]),bound=pick([-3,-2,1,2,3]),rhs=a*bound;return q('equations',`${y12VarTerm(a)} > ${rhs}. Is x < ${bound}? Enter 1=yes, 0=no.`,1,'Dividing by a negative reverses the inequality.');}
  if(t===7){const x=pick([2,4,6,8]),a=pick([0.5,1.5,2.5]);const rhs=a*x;return q('equations',`${a}x = ${rhs}. x = ?`,x,'Divide by the decimal coefficient.');}
  if(t===8){const x=pick([-4,-2,2,3,5]),a=pick([2,3,4]),b=pick([1,2,4]),d=pick([2,5,7]);const rhs=a*(x+b)-d;return q('equations',`${a}(x+${b})−${d} = ${rhs}. x = ?`,x,'Expand or undo the subtraction, then divide.');}
  if(t===9)return q('equations','When multiplying both sides of an inequality by −1, the inequality sign reverses. Enter 1=True or 0=False.',1,'Negative multiplication reverses order.');
  return q('equations','Equation 3x+4=3x+4 has exactly one solution. Enter 1=True or 0=False.',0,'It is an identity with infinitely many solutions.');
}

function y12GenQuadratics(){
  const t=y12Type(5,8,14);
  if(t===1){const r1=pick([-6,-5,-4,-3]),r2=pick([2,3,4,5,6]);return q('quadratics',`(x ${r1>=0?`− ${r1}`:`+ ${Math.abs(r1)}`})(x−${r2})=0. Positive solution = ?`,r2,'Use the zero-product property.');}
  if(t===2){const r=pick([2,3,4,5,6]);return q('quadratics',`x²=${r*r}. Positive solution = ?`,r,'Take the positive square root.');}
  if(t===3){const r=pick([2,3,4,5]),a=pick([2,3]);return q('quadratics',`(${a}x−${a*r})(x+4)=0. Positive solution = ?`,r,'Set the first factor equal to zero.');}
  if(t===4){const r1=pick([2,3,4]),r2=pick([5,6,7]);return q('quadratics',`x²−${r1+r2}x+${r1*r2}=0. Smaller root = ?`,r1,'Factor into (x−r1)(x−r2).');}
  if(t===5){const r=pick([2,3,4,5]);return q('quadratics',`x²−${r*r}=0. Number of real solutions = ?`,2,'The roots are ±r.');}
  if(t===6){const r=pick([2,3,4]),a=pick([2,3]);return q('quadratics',`${a}x²−${a*r*r}=0. Positive solution = ?`,r,'Divide by a then solve x²=r².');}
  if(t===7){const r1=pick([-4,-3,-2]),r2=pick([2,3,4]);return q('quadratics',`Roots are ${r1} and ${r2}. Product of roots = ?`,r1*r2,'Multiply the roots.');}
  if(t===8){const r=pick([2,3,4]),k=pick([1,2,3]);return q('quadratics',`(x−${r})²=${k*k}. Larger solution = ?`,r+k,'Take square roots: x−r=±k.');}
  if(t===9){const [a,b,c]=pick([[1,4,4],[1,6,9],[4,4,1]]);return q('quadratics',`For ${y12PowTerm(a,2)} ${y12VarTerm(b,'x',false)} ${y12Signed(c)} = 0, discriminant b²−4ac = ?`,b*b-4*a*c,'Calculate the discriminant.');}
  if(t===10)return q('quadratics','A quadratic with discriminant 0 has how many distinct real roots?',1,'The two roots coincide.');
  if(t===11)return q('quadratics','For x²−2x−1=0, the real roots are: enter 1=rational, 2=irrational, 3=no real roots.',2,'The discriminant is 8: positive but not a perfect square.');
  if(t===12)return q('quadratics','For x²−5x+6=0, the real roots are: enter 1=rational, 2=irrational, 3=no real roots.',1,'The discriminant is 1, a perfect square.');
  if(t===13)return q('quadratics','For x²+2x+5=0, the roots are: enter 1=rational real, 2=irrational real, 3=no real roots.',3,'The discriminant is negative.');
  return q('quadratics','A positive discriminant that is not a perfect square gives irrational real roots. Enter 1=True or 0=False.',1,'The quadratic formula contains the square root of a non-square positive number.');
}


function y12GenTrigEq(){
  const t=y12Type(5,8,14);
  if(t===1)return q('trigEq','sin θ = 0.5, for 0°<θ<90°. θ = ?°',30,'Recognise the exact special-angle value.');
  if(t===2)return q('trigEq','cos θ = 0.5, for 0°<θ<90°. θ = ?°',60,'Recognise the exact special-angle value.');
  if(t===3)return q('trigEq','tan θ = 1, for 0°<θ<90°. θ = ?°',45,'Recognise the exact special-angle value.');
  if(t===4)return q('trigEq','sin θ = √2/2, for 0°<θ<90°. θ = ?°',45,'sin 45°=√2/2.');
  if(t===5)return q('trigEq','cos θ = √3/2, for 0°<θ<90°. θ = ?°',30,'cos 30°=√3/2.');
  if(t===6)return q('trigEq','tan θ = √3, for 0°<θ<90°. θ = ?°',60,'tan 60°=√3.');
  if(t===7)return q('trigEq','In 0°≤θ≤180°, sin θ=0 has how many solutions?',2,'θ=0° and 180°.');
  if(t===8)return q('trigEq','In 0°≤θ≤180°, cos θ=0 at θ = ?°',90,'cos 90°=0.');
  if(t===9)return q('trigEq','In 0°≤θ≤360°, sin θ=0.5. Larger solution = ?°',150,'Sine is positive in quadrants I and II: 30° and 150°.');
  if(t===10)return q('trigEq','In 0°≤θ≤360°, cos θ=−0.5. Smaller positive solution = ?°',120,'Cosine is negative in quadrants II and III: 120° and 240°.');
  if(t===11)return q('trigEq','In 0°≤θ≤360°, tan θ=1. Larger solution = ?°',225,'Tangent is positive in quadrants I and III: 45° and 225°.');
  if(t===12)return q('trigEq','In 0°≤θ≤360°, cos θ=0.5 has how many solutions?',2,'The solutions are 60° and 300°.');
  if(t===13)return q('trigEq','In 0°≤θ≤360°, sin θ=−0.5. Smaller positive solution = ?°',210,'Sine is negative in quadrants III and IV: 210° and 330°.');
  return q('trigEq','sin(180°−θ)=sin θ. Enter 1=True or 0=False.',1,'Supplementary angles have equal sine values.');
}


function y12GenSystems(){
  const t=y12Type(5,8,17);
  if(t===1){const x=randInt(-4,7),y=randInt(-4,7);return q('systems',`x+y=${x+y}, x−y=${x-y}. x = ?`,x,'Add the equations.');}
  if(t===2){const x=randInt(-3,6),y=randInt(-3,6);return q('systems',`2x+y=${2*x+y}, x+y=${x+y}. x = ?`,x,'Subtract the second equation from the first.');}
  if(t===3){const x=randInt(-3,5),y=randInt(-3,5);return q('systems',`x+2y=${x+2*y}, x−y=${x-y}. y = ?`,y,'Eliminate x.');}
  if(t===4){const x=pick([2,3,4]),y=x*x;return q('systems',`y=x² and y=${y}. Positive x = ?`,x,'Set x² equal to y.');}
  if(t===5){const [x,y]=pick([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]),s=x+y,p=x*y;return q('systems',`x+y=${s}, xy=${p}. Larger value = ?`,y,'Find the two distinct numbers with the given sum and product.');}
  if(t===6){const x=pick([1,2,3]),y=x*x;return q('systems',`y=x² and y=${x+2}x${y-(x+2)*x>=0?`+${y-(x+2)*x}`:`−${Math.abs(y-(x+2)*x)}`}. Is x=${x} a solution? Enter 1=yes,0=no.`,1,'Check both equations.');}
  if(t===7){const x=randInt(-3,5),y=randInt(-3,5);return q('systems',`3x+2y=${3*x+2*y}, x−y=${x-y}. x = ?`,x,'Use substitution or elimination.');}
  if(t===8){const x=randInt(-3,5),y=randInt(-3,5);return q('systems',`2x−y=${2*x-y}, x+2y=${x+2*y}. y = ?`,y,'Eliminate one variable.');}
  if(t===9){const [r1,r2]=pick([[-1,4],[-2,3],[-3,2]]),m=r1+r2,c=-r1*r2;return q('systems',`y=x² and ${y12LinearText(m,c)}. Larger intersection x-coordinate = ?`,r2,'Set x²=mx+c, then solve the resulting quadratic.');}
  if(t===10){const [r1,r2]=pick([[-2,5],[-1,3],[-4,2]]),m=r1+r2,c=-r1*r2;return q('systems',`y=x² and ${y12LinearText(m,c)}. Smaller intersection x-coordinate = ?`,r1,'Set the equations equal and factor the quadratic.');}
  if(t===11)return q('systems','A line and a parabola can intersect in at most how many real points?',2,'A line-substituted quadratic has at most two real roots.');
  if(t===12)return q('systems','Two distinct parallel lines have how many intersection points?',0,'Parallel distinct lines never meet.');
  if(t===13)return q('systems','Two identical linear equations represent infinitely many common points. Enter 1=True or 0=False.',1,'They are the same line.');
  if(t===14)return q('systems','A line tangent to a parabola has exactly one real intersection point. Enter 1=True or 0=False.',1,'Tangency corresponds to a repeated quadratic root.');
  if(t===15){const [m,c,x]=pick([[4,-4,2],[6,-9,3],[-4,-4,-2]]);return q('systems',`y=x² and ${y12LinearText(m,c)} are tangent. Intersection x-coordinate = ?`,x,'Set the equations equal; the resulting quadratic is a perfect square.');}
  if(t===16){const [m,k]=pick([[4,-4],[6,-9],[2,-1]]);return q('systems',`y=x² and y=${m}x+k are tangent. k = ?`,k,'Tangency requires discriminant m²+4k=0.');}
  const [m,c]=pick([[4,-3],[6,-8],[2,0]]);return q('systems',`For y=x² and ${y12LinearText(m,c)}, number of real intersection points = ?`,2,'Set the equations equal; the discriminant is positive.');
}

function y12GenFormula(){
  const t=y12Type(5,8,10);
  if(t===1){const v=pick([20,25,30]),u=pick([4,5,10]),tme=pick([2,5]);const a=(v-u)/tme;if(!Number.isInteger(a))return y12GenFormula();return q('formula',`v=u+at. v=${v}, u=${u}, t=${tme}. a = ?`,a,'Rearrange to a=(v−u)/t.');}
  if(t===2){const A=pick([36,49,64,81]);return q('formula',`A=r². If A=${A}, positive r = ?`,Math.sqrt(A),'Take the positive square root.');}
  if(t===3){const d=pick([120,180,240]),tm=pick([2,3,4]);return q('formula',`d=vt. d=${d}, t=${tm}. v = ?`,d/tm,'Rearrange to v=d/t.');}
  if(t===4)return q('formula','v=u+at. Which makes a the subject? Enter 1=(v−u)/t, 2=(v+u)/t, 3=t/(v−u).',1,'Subtract u then divide by t.');
  if(t===5)return q('formula','A=πr². Which gives r? Enter 1=A/π, 2=√(A/π), 3=√A/π.',2,'Divide by π then square-root.');
  if(t===6)return q('formula','y=(ax+b)/c. Which first step isolates ax+b? Enter 1=multiply by c, 2=divide by c.',1,'Multiply both sides by c.');
  if(t===7){const P=pick([30,40,50]),l=pick([8,12,15]);const w=P/2-l;if(w<=0||!Number.isInteger(w))return y12GenFormula();return q('formula',`P=2(l+w). P=${P}, l=${l}. w = ?`,w,'Divide by 2 then subtract l.');}
  if(t===8){const V=pick([60,120,180]),A=pick([10,20,30]);return q('formula',`V=Ah. V=${V}, A=${A}. h = ?`,V/A,'Divide volume by base area.');}
  if(t===9)return q('formula','From y=mx+c, c=y−mx. Enter 1=True or 0=False.',1,'Subtract mx from both sides.');
  return q('formula','From s=ut+½at², solving for u first requires subtracting ½at² then dividing by t. Enter 1=True or 0=False.',1,'Use inverse operations.');
}

/* ===== TRIGONOMETRY & NETWORKS ===== */
function y12GenSineRule(){
  const t=y12Type(5,8,10);
  if(t===1){const [a,A,b,B]=pick([[5,30,10,90],[6,30,12,90],[8,30,16,90]]);return q('sineRule',`a=${a}, A=${A}°, B=${B}°. Using a/sin A=b/sin B, b = ?`,b,'Use sin30°=1/2 and sin90°=1.');}
  if(t===2){const [a,A,b,B]=pick([[6,90,3,30],[10,90,5,30],[8,90,4,30]]);return q('sineRule',`a=${a}, A=${A}°, b=${b}. If sin B = b sin A / a, B = ?°`,B,'The sine ratio is 1/2, so B=30°.');}
  if(t===3)return q('sineRule','In the sine rule, each side is paired with its opposite angle. Enter 1=True or 0=False.',1,'Opposite side-angle pairs must match.');
  if(t===4){const [a,b]=pick([[5,10],[6,12],[7,14]]);return q('sineRule',`If A=30°, B=90°, and a=${a}, then b/a = ?`,b/a,'Ratio is sin90°/sin30°=2.');}
  if(t===5)return q('sineRule','Which setup is valid? Enter 1=a/sin A=b/sin B, 2=a/sin B=b/sin A.',1,'Match each side to its opposite angle.');
  if(t===6){const [a,A,b,B]=pick([[4,30,8,90],[5,30,10,90],[9,30,18,90]]);return q('sineRule',`a=${a}, A=${A}°, b=${b}. sin B = ?`,roundTo(b*Math.sin(A*Math.PI/180)/a,6),'Use sinB=b sinA/a.');}
  if(t===7)return q('sineRule','The sine rule is useful when a side-angle opposite pair is known. Enter 1=True or 0=False.',1,'That pair anchors the ratio.');
  if(t===8)return q('sineRule','If A=B in a triangle, opposite sides a and b are equal. Enter 1=True or 0=False.',1,'Equal angles face equal sides.');
  if(t===9){const a=pick([3,4,5]);return q('sineRule',`a=${a}, A=30°, B=90°. b = ?`,2*a,'sin90/sin30=2.');}
  return q('sineRule','Sine rule can be written sin A/a = sin B/b. Enter 1=True or 0=False.',1,'It is the reciprocal form of a/sinA=b/sinB.');
}

function y12GenCosineRule(){
  const t=y12Type(5,8,12);
  if(t===1){const [a,b,C,c]=pick([[3,4,90,5],[5,12,90,13],[8,15,90,17]]);return q('cosineRule',`a=${a}, b=${b}, C=${C}°. Using c²=a²+b²−2ab cos C, c = ?`,c,'At 90°, cosC=0, so this becomes Pythagoras.');}
  if(t===2){const [a,b,C,c2]=pick([[5,5,60,25],[6,6,60,36],[8,8,60,64]]);return q('cosineRule',`a=${a}, b=${b}, C=${C}°. Find c².`,c2,'cos60°=1/2.');}
  if(t===3){const [a,b,c,cosC]=pick([[3,4,5,0],[5,5,5,0.5],[6,6,6,0.5]]);return q('cosineRule',`a=${a}, b=${b}, c=${c}. cos C = (a²+b²−c²)/(2ab) = ?`,cosC,'Rearrange the cosine rule.');}
  if(t===4)return q('cosineRule','When C=90°, the cosine rule reduces to Pythagoras. Enter 1=True or 0=False.',1,'cos90°=0.');
  if(t===5)return q('cosineRule','The cosine rule is useful for SAS or SSS triangle information. Enter 1=True or 0=False.',1,'It handles two sides with included angle or all three sides.');
  if(t===6){const a=pick([4,6,8]);return q('cosineRule',`Two sides are ${a} and ${a} with included angle 60°. Opposite side = ?`,a,'An equilateral triangle results.');}
  if(t===7){const [a,b,c]=pick([[5,12,13],[8,15,17],[7,24,25]]);return q('cosineRule',`Sides ${a}, ${b}, ${c}. Angle opposite side ${c} is ?°`,90,'These are Pythagorean triples.');}
  if(t===8)return q('cosineRule','In c²=a²+b²−2ab cos C, C is the included angle between a and b. Enter 1=True or 0=False.',1,'C lies between sides a and b.');
  if(t===9){const a=pick([4,6,8]);return q('cosineRule',`Equilateral triangle side ${a}. cos each interior angle = ?`,0.5,'Each angle is 60°.');}
  if(t===10){const [a,b,C]=pick([[3,4,90],[5,12,90],[8,15,90]]);return q('cosineRule',`For a=${a}, b=${b}, C=${C}°, the term −2ab cos C equals ?`,0,'cos90°=0.');}
  if(t===11){const a=pick([2,4,6]);return q('cosineRule',`Two sides are both ${a} with included angle 120°. Find c².`,3*a*a,'cos120°=−1/2, so c²=3a².');}
  return q('cosineRule','If c is the longest side and c²>a²+b², angle C is obtuse. Enter 1=True or 0=False.',1,'Then cosC<0, so C>90°.');
}

function y12GenTrigArea(){
  const t=y12Type(5,8,11);
  if(t===1){const a=pick([4,6,8,10]),b=pick([6,8,10,12]);return q('trigArea',`Two sides ${a} and ${b} include 90°. Area = ?`,a*b/2,'A=½ab sinC and sin90°=1.');}
  if(t===2){const a=pick([4,6,8,10]),b=pick([6,8,10,12]);return q('trigArea',`Two sides ${a} and ${b} include 30°. Area = ?`,a*b/4,'sin30°=1/2, so area=ab/4.');}
  if(t===3){const a=pick([4,6,8]),b=pick([6,8,10]);return q('trigArea',`A=½ab sin C. If a=${a}, b=${b}, C=90°, coefficient multiplying ab is ?`,0.5,'sin90°=1.');}
  if(t===4)return q('trigArea','Formula ½ab sin C requires C to be the included angle between a and b. Enter 1=True or 0=False.',1,'The angle must lie between the two chosen sides.');
  if(t===5){const a=pick([4,8,12]),b=pick([6,10,14]);return q('trigArea',`Sides a=${a}, b=${b}, area=${a*b/4}. If C=30°, check area = ?`,a*b/4,'Use sin30°=1/2.');}
  if(t===6){const a=pick([6,8,10]),b=pick([8,10,12]);return q('trigArea',`If C changes from 30° to 90° while a,b stay fixed, area is multiplied by ?`,2,'sin90/sin30=2.');}
  if(t===7)return q('trigArea','For fixed sides a and b, triangle area is greatest when included angle is 90°. Enter 1=True or 0=False.',1,'sinC has maximum value 1.');
  if(t===8){const a=pick([4,6,8]),b=pick([10,12,14]),area=a*b/4;return q('trigArea',`Area=${area}, a=${a}, b=${b}. sin C = ?`,0.5,'Rearrange sinC=2A/(ab).');}
  if(t===9)return q('trigArea','If sin C=0, the triangle area from ½ab sinC is 0. Enter 1=True or 0=False.',1,'The points are collinear in the limiting case.');
  if(t===10)return q('trigArea','The formula ½bh and ½ab sinC are consistent because h=b sinC. Enter 1=True or 0=False.',1,'Resolve b perpendicular to a.');
  const [a,b,coef]=pick([[4,6,6],[6,8,12],[8,10,20]]);return q('trigArea',`Two sides ${a} and ${b} include 60°. Area = ?√3`,coef,'Since sin60°=√3/2, area=ab√3/4.');
}

function y12GenTrig3D(){
  const t=y12Type(5,8,10);
  if(t===1){const [opp,adj]=pick([[3,4],[5,12],[8,15]]);return qFrac('trig3d',`Right triangle: opposite=${opp}, adjacent=${adj}. tan θ = ?`,opp/adj,'tan=opposite/adjacent.');}
  if(t===2){const [opp,hyp]=pick([[3,5],[5,13],[8,17]]);return qFrac('trig3d',`Right triangle: opposite=${opp}, hypotenuse=${hyp}. sin θ = ?`,opp/hyp,'sin=opposite/hypotenuse.');}
  if(t===3){const [adj,hyp]=pick([[4,5],[12,13],[15,17]]);return qFrac('trig3d',`Right triangle: adjacent=${adj}, hypotenuse=${hyp}. cos θ = ?`,adj/hyp,'cos=adjacent/hypotenuse.');}
  if(t===4){const [baseDiag,height]=pick([[5,5],[12,5],[5,12]]);return qFrac('trig3d',`A cuboid has base diagonal ${baseDiag} and height ${height}. For angle θ between space diagonal and base, tan θ = ?`,height/baseDiag,'Use the right triangle formed by base diagonal and height.');}
  if(t===5)return q('trig3d','A 3D trig problem can often be solved by finding a 2D diagonal first. Enter 1=True or 0=False.',1,'Break the solid into right triangles.');
  if(t===6){const [x,y,z,d]=pick([[3,4,12,13],[6,8,24,26],[1,2,2,3]]);return q('trig3d',`Cuboid dimensions ${x},${y},${z}. Space diagonal = ?`,d,'Use √(x²+y²+z²).');}
  if(t===7)return q('trig3d','SOH CAH TOA applies only to right triangles. Enter 1=True or 0=False.',1,'Basic trig ratios are defined using a right triangle.');
  if(t===8){const [opp,adj,ang]=pick([[3,3,45],[5,5,45],[6,6,45]]);return q('trig3d',`Right triangle opposite=${opp}, adjacent=${adj}. θ = ?°`,ang,'tanθ=1.');}
  if(t===9){const [opp,hyp,ang]=pick([[3,6,30],[4,8,30],[5,10,30]]);return q('trig3d',`Right triangle opposite=${opp}, hypotenuse=${hyp}. θ = ?°`,ang,'sinθ=1/2.');}
  return q('trig3d','For a fixed horizontal distance, increasing height increases the angle of elevation. Enter 1=True or 0=False.',1,'tanθ=height/horizontal distance.');
}

function y12GenNetworks(){
  const t=y12Type(5,8,16);
  if(t===1)return q('networks','A path that visits every vertex once is called: enter 1=Hamiltonian path, 2=Euler circuit.',1,'Hamiltonian focuses on vertices.');
  if(t===2)return q('networks','A route that uses every edge exactly once is an Euler trail. Enter 1=True or 0=False.',1,'Euler methods focus on edges.');
  if(t===3){const [a,b,c]=pick([[4,7,6],[5,9,8],[3,10,6]]);return q('networks',`Three possible route lengths are ${a}, ${b}, ${c}. Shortest = ?`,Math.min(a,b,c),'Compare route totals.');}
  if(t===4){const edges=pick([[3,4,5],[2,6,7],[4,5,6]]);return q('networks',`A spanning tree has edge weights ${edges.join(', ')}. Total weight = ?`,edges.reduce((a,b)=>a+b,0),'Add the included edge weights.');}
  if(t===5)return q('networks','A tree with n vertices has n−1 edges. Enter 1=True or 0=False.',1,'Connected acyclic graphs have n−1 edges.');
  if(t===6){const n=pick([5,6,8,10]);return q('networks',`A tree has ${n} vertices. Number of edges = ?`,n-1,'Tree edges = vertices−1.');}
  if(t===7)return q('networks','A minimum spanning tree connects all vertices with minimum total edge weight and no cycles. Enter 1=True or 0=False.',1,'That is the goal of MST methods.');
  if(t===8){const [p1,p2,p3]=pick([[14,17,12],[21,19,23],[30,28,35]]);return q('networks',`Candidate route totals: A=${p1}, B=${p2}, C=${p3}. Enter 1=A,2=B,3=C for the minimum.`,[p1,p2,p3].indexOf(Math.min(p1,p2,p3))+1,'Choose the least total weight.');}
  if(t===9)return q('networks','A tree has 7 vertices. One extra edge is added between two existing vertices. How many cycles are created?',1,'A tree has one unique path between any two vertices, so one added edge creates one cycle.');
  if(t===10)return q('networks','A company wants the least total cable length that still connects every site. Best method: enter 1=shortest path, 2=minimum spanning tree, 3=Euler trail.',2,'A minimum spanning tree minimises total connection cost while keeping all vertices connected.');
  if(t===11){const degrees=pick([[2,2,3,3],[1,2,2,3],[2,2,2,2]]);return q('networks',`Vertex degrees are ${degrees.join(', ')}. Sum of degrees = ?`,degrees.reduce((a,b)=>a+b,0),'The degree sum counts each edge twice.');}
  if(t===12){const odd=pick([0,2,4]);return q('networks',`A connected graph has ${odd} odd-degree vertices. Can it have an Euler trail using every edge once? Enter 1=yes,0=no.`,odd===0||odd===2?1:0,'An Euler trail exists with exactly 0 or 2 odd-degree vertices.');}
  if(t===13){const [ab,ac,bc]=pick([[4,7,6],[5,9,8],[3,10,6]]);const vals=[ab,ac,bc].sort((a,b)=>b-a);return q('networks',`Triangle network edges: AB=${ab}, AC=${ac}, BC=${bc}. Maximum spanning tree total = ?`,vals[0]+vals[1],'With three vertices, choose the two largest edges; two edges cannot form a cycle.');}
  if(t===14)return q('networks','A network must connect all sites without cycles while maximising total edge weight. Choose: 1=minimum spanning tree, 2=maximum spanning tree, 3=shortest path.',2,'This is a maximum spanning tree objective.');
  if(t===15)return q('networks','A street inspector wants to travel every road exactly once. The relevant idea is: enter 1=Euler trail, 2=Hamiltonian path, 3=minimum spanning tree.',1,'Euler methods focus on using every edge exactly once.');
  return q('networks','A salesperson wants to visit every location once. The relevant idea is: enter 1=Euler trail, 2=Hamiltonian path, 3=maximum spanning tree.',2,'Hamiltonian methods focus on visiting vertices.');
}

/* ===== CALCULUS ===== */
function y12GenDiffBasics(){
  const t=y12Type(5,8,17);
  if(t===1){const n=pick([2,3,4,5]),a=pick([2,3,4]);return q('diffBasics',`For y=${a}x${y12Superscript(n)}, derivative coefficient = ?`,a*n,'Power rule: multiply by the exponent.');}
  if(t===2){const n=pick([2,3,4,5]);return q('diffBasics',`d/dx(x${y12Superscript(n)}) has exponent ?`,n-1,'Power rule reduces exponent by 1.');}
  if(t===3){const a=y12NonZeroInt(-6,6);return q('diffBasics',`d/dx(${y12VarTerm(a)}) = ?`,a,'Derivative of ax is a.');}
  if(t===4){const c=randInt(-20,20);return q('diffBasics',`d/dx(${c}) = ?`,0,'A constant has zero rate of change.');}
  if(t===5){const a=pick([2,3,4]),b=y12NonZeroInt(-5,5);return q('diffBasics',`For y=${a}x² ${b>0?`+ ${b}`:`− ${Math.abs(b)}`}, gradient at x=2 = ?`,4*a,'dy/dx=2ax.');}
  if(t===6){const a=pick([2,3]),n=pick([3,4]),x=pick([1,2]);return q('diffBasics',`For y=${a}x${y12Superscript(n)}, dy/dx at x=${x} = ?`,a*n*x**(n-1),'Differentiate then substitute.');}
  if(t===7)return q('diffBasics','The derivative represents instantaneous rate of change. Enter 1=True or 0=False.',1,'It is the gradient of the tangent.');
  if(t===8)return q('diffBasics','At a stationary point, dy/dx = ?',0,'Stationary means horizontal tangent.');
  if(t===9){const a=pick([-4,-3,3,4]);return q('diffBasics',`For y=${a}x², derivative coefficient of x = ?`,2*a,'d/dx(ax²)=2ax.');}
  if(t===10){const [a,b,x]=pick([[4,2,-0.5],[6,3,-0.5],[8,4,-0.5]]);return q('diffBasics',`For y=${a}x² + ${b}x, gradient at x=${x} = ?`,2*a*x+b,'Differentiate first, then substitute the fractional x-value.');}
  if(t===11)return q('diffBasics','If f′(x)>0 on an interval, f is: enter 1=increasing, 2=decreasing.',1,'Positive gradient means the function rises as x increases.');
  if(t===12)return q('diffBasics','If f′(x)<0 on an interval, f is: enter 1=increasing, 2=decreasing.',2,'Negative gradient means the function falls as x increases.');
  if(t===13)return q('diffBasics','If f′(x) is a quadratic polynomial, f(x) can be a polynomial of degree ?',3,'Antidifferentiating raises the degree by 1.');
  if(t===14)return q('diffBasics','If f′ changes from positive to negative at a stationary point, the point is: enter 1=max, 2=min.',1,'The function changes from increasing to decreasing.');
  if(t===15)return q('diffBasics','If f′ changes from negative to positive at x=3, f has at x=3: enter 1=local maximum,2=local minimum.',2,'The function changes from decreasing to increasing.');
  if(t===16)return q('diffBasics','If f′(x)=0 at two distinct x-values, f can have at most how many stationary points from those zeros?',2,'Each real zero of the derivative is a stationary-point candidate.');
  return q('diffBasics','If the gradient graph f′ lies above the x-axis, the original graph f is increasing. Enter 1=True or 0=False.',1,'Positive derivative means positive tangent gradient.');
}


function y12GenDiffPoly(){
  const t=y12Type(5,8,11);
  if(t===1){const a=pick([2,3,4]),b=y12NonZeroInt(-6,6);return q('diffPoly',`For f(x)=${y12PowTerm(a,2)} ${y12VarTerm(b,'x',false)}, f′(0)=?`,b,'f′(x)=2ax+b.');}
  if(t===2){const a=pick([1,2,3]),b=pick([2,3,4]),x=pick([1,2]);return q('diffPoly',`f(x)=${y12PowTerm(a,3)} ${y12PowTerm(b,2,false)}. f′(${x}) = ?`,3*a*x*x+2*b*x,'Differentiate term by term, then substitute.');}
  if(t===3){const a=pick([2,3,4]),b=y12NonZeroInt(-5,5),c=y12NonZeroInt(-5,5);return q('diffPoly',`f(x)=${y12PowTerm(a,2)} ${y12VarTerm(b,'x',false)} ${y12Signed(c)}. Constant term in f′(x) = ?`,b,'The constant c differentiates to 0.');}
  if(t===4){const a=pick([1,2,3]),n=pick([3,4,5]);return q('diffPoly',`d/dx(${y12PowTerm(a,n)}) has coefficient ?`,a*n,'Multiply coefficient by exponent.');}
  if(t===5){const a=pick([2,3]),b=pick([4,5]),c=y12NonZeroInt(-5,5);return q('diffPoly',`f(x)=${y12PowTerm(a,3)} ${y12VarTerm(-b,'x',false)} ${y12Signed(c)}. f′(0)=?`,-b,'Cubic derivative term is zero at x=0.');}
  if(t===6){const a=pick([1,2]),b=pick([2,4]),x=pick([1,2]);return q('diffPoly',`f(x)=${y12PowTerm(a,4)} ${y12PowTerm(-b,2,false)}. f′(${x}) = ?`,4*a*x**3-2*b*x,'Differentiate each power.');}
  if(t===7)return q('diffPoly','Differentiation is linear: derivative of f+g equals f′+g′. Enter 1=True or 0=False.',1,'Differentiate term-by-term.');
  if(t===8){const a=pick([2,3]),b=pick([4,6]);return q('diffPoly',`f′(x)=${a}x+${b}. f′(2)=?`,2*a+b,'Substitute x=2 into the derivative.');}
  if(t===9){const a=pick([2,3]),b=pick([4,6]);return qFrac('diffPoly',`If f′(x)=${a}x−${b}, stationary x = ?`,b/a,'Set derivative equal to zero.');}
  if(t===10)return q('diffPoly','Differentiating lowers every positive integer power by 1. Enter 1=True or 0=False.',1,'That is the polynomial power rule.');
  return q('diffPoly','Derivative of 5x³−2x²+x−7 has constant term ?',1,'Only the derivative of x contributes the constant 1.');
}

function y12GenTangentNormal(){
  const t=y12Type(5,8,11);
  if(t===1){const x=pick([1,2,3]),a=pick([1,2,3]);return q('tangentNormal',`For y=${y12PowTerm(a,2)}, tangent gradient at x=${x} = ?`,2*a*x,'dy/dx=2ax.');}
  if(t===2){const m=pick([-4,-2,-1,1,2,4]);return qFrac('tangentNormal',`Tangent gradient=${m}. Normal gradient = ?`,-1/m,'Normal is perpendicular to tangent.');}
  if(t===3){const x=pick([1,2,3]),a=pick([1,2]);const m=2*a*x;return q('tangentNormal',`For y=${y12PowTerm(a,2)} at x=${x}, tangent gradient=${m}. Is the function increasing there? Enter 1=yes,0=no.`,m>0?1:0,'Positive derivative means increasing.');}
  if(t===4){const a=pick([1,2]),x=pick([-3,-2,-1]);return q('tangentNormal',`For y=${y12PowTerm(a,2)} at x=${x}, tangent gradient = ?`,2*a*x,'Use dy/dx=2ax.');}
  if(t===5)return q('tangentNormal','A tangent and its normal are perpendicular. Enter 1=True or 0=False.',1,'Their gradients are negative reciprocals when defined.');
  if(t===6){const m=pick([2,3,4]),c=randInt(-5,5),x=pick([1,2]),y=m*x+c;return q('tangentNormal',`A tangent has gradient ${m} and passes through (${x},${y}). y-intercept = ?`,c,'Use y=mx+c.');}
  if(t===7){const m=pick([2,4,5]);return qFrac('tangentNormal',`A normal has gradient ${m}. Tangent gradient = ?`,-1/m,'Perpendicular gradients multiply to −1.');}
  if(t===8)return q('tangentNormal','At a local maximum or minimum of a smooth polynomial, the tangent is horizontal. Enter 1=True or 0=False.',1,'The derivative is zero.');
  if(t===9){const x=pick([1,2]),a=pick([1,2]),b=pick([1,3]);return q('tangentNormal',`For y=${y12PowTerm(a,2)} ${y12VarTerm(b,'x',false)}, tangent gradient at x=${x} = ?`,2*a*x+b,'Differentiate and substitute.');}
  if(t===10)return q('tangentNormal','If tangent gradient is 0, a finite normal gradient is 0. Enter 1=True or 0=False.',0,'The normal is vertical, with undefined gradient.');
  const r=pick([1,2,3,4]);return q('tangentNormal',`For y=x² at x=${r}, the tangent line has y-intercept ?`,-r*r,'The tangent has gradient 2r and passes through (r,r²).');
}

function y12GenStationary(){
  const t=y12Type(5,8,13);
  if(t===1){const h=pick([-4,-3,-2,2,3,4]),k=y12NonZeroInt(-5,5);return q('stationary',`y=(x ${h>=0?`− ${h}`:`+ ${Math.abs(h)}`})² ${k>=0?`+ ${k}`:`− ${Math.abs(k)}`}. Stationary x = ?`,h,'Vertex of the parabola.');}
  if(t===2){const h=pick([-4,-3,-2,2,3,4]),k=y12NonZeroInt(-5,5);return q('stationary',`y=(x ${h>=0?`− ${h}`:`+ ${Math.abs(h)}`})² ${k>=0?`+ ${k}`:`− ${Math.abs(k)}`}. Stationary y = ?`,k,'Vertex y-coordinate.');}
  if(t===3){const a=pick([2,4,6]),b=pick([-12,-8,-4,4,8,12]);if((-b)%(2*a)!==0)return y12GenStationary();return q('stationary',`For y=${a}x² ${b>=0?`+ ${b}x`:`− ${Math.abs(b)}x`}, stationary x = ?`,-b/(2*a),'Set dy/dx=2ax+b=0.');}
  if(t===4){const a=pick([1,2,3]);return q('stationary',`For y=${y12PowTerm(a,2)}+4, stationary point is a: enter 1=minimum, 2=maximum.`,1,'Positive x² coefficient opens upward.');}
  if(t===5){const a=pick([-3,-2,-1]);return q('stationary',`For y=${y12PowTerm(a,2)}+4, stationary point is a: enter 1=minimum, 2=maximum.`,2,'Negative x² coefficient opens downward.');}
  if(t===6)return q('stationary','At a stationary point, first derivative equals ?',0,'Definition of stationary point.');
  if(t===7){const a=pick([2,3,4]);return q('stationary',`For y=${a}x², second derivative = ?`,2*a,'Differentiate twice.');}
  if(t===8){const a=pick([-4,-3,-2]);return q('stationary',`For y=${a}x², second derivative is negative. Does this indicate a maximum? Enter 1=yes,0=no.`,1,'Negative second derivative means concave down.');}
  if(t===9)return q('stationary','For y=x³, stationary x-coordinate = ?',0,'dy/dx=3x², so the derivative is zero at x=0.');
  if(t===10)return q('stationary','For y=x³ at x=0, classify the stationary point: enter 1=maximum, 2=minimum, 3=stationary inflection.',3,'The graph keeps increasing through a horizontal tangent.');
  if(t===11)return q('stationary','At x=0, f′(x)=3x² is positive on both sides of 0. The stationary point is: enter 1=max, 2=min, 3=stationary inflection.',3,'The derivative does not change sign, so it is not a max or min.');
  if(t===12)return q('stationary','For y=x³−3x, how many stationary points are there?',2,'dy/dx=3x²−3=0 gives x=−1 and x=1.');
  return q('stationary','For y=x⁴ at x=0, classify the stationary point: enter 1=maximum, 2=minimum, 3=stationary inflection.',2,'x⁴ is non-negative and has its minimum at x=0.');
}

function y12GenCalcOptimisation(){
  const t=y12Type(5,8,12);
  if(t===1){const p=pick([20,24,28]);return q('calcOptimisation',`A rectangle has perimeter ${p}. The area model is A=x(${p/2}−x). x-value giving maximum area = ?`,p/4,'The quadratic is symmetric about x=p/4.');}
  if(t===2){const h=pick([4,5,6]);return q('calcOptimisation',`Area model A(x)=−x²+${2*h}x. x-value of maximum = ?`,h,'Vertex x=−b/(2a).');}
  if(t===3){const h=pick([3,4,5]);return q('calcOptimisation',`Profit P(x)=−(x−${h})²+100. Profit is maximised at x = ?`,h,'Squared term is smallest at zero.');}
  if(t===4)return q('calcOptimisation','For a differentiable model, interior optimum candidates occur where derivative = 0. Enter 1=True or 0=False.',1,'Stationary points are candidates.');
  if(t===5){const x=pick([2,3,4]);return q('calcOptimisation',`f′(x)=2x−${2*x}. Stationary x = ?`,x,'Set derivative to zero.');}
  if(t===6){const x=pick([2,3,4]);return q('calcOptimisation',`f′(x)=−2x+${2*x}. If f″(x)=−2, stationary point is: enter 1=max,2=min.`,1,'Negative second derivative gives a maximum.');}
  if(t===7)return q('calcOptimisation','A maximum value must be checked against endpoints when the domain is restricted. Enter 1=True or 0=False.',1,'Endpoint values can exceed interior stationary values.');
  if(t===8){const vals=pick([[12,18,15],[20,17,16],[8,11,10]]);return q('calcOptimisation',`Candidate objective values: ${vals.join(', ')}. Maximum = ?`,Math.max(...vals),'Compare candidate values.');}
  if(t===9){const vals=pick([[12,18,15],[20,17,16],[8,11,10]]);return q('calcOptimisation',`Candidate cost values: ${vals.join(', ')}. Minimum = ?`,Math.min(...vals),'Compare candidate values.');}
  if(t===10)return q('calcOptimisation','If f″(x)>0 at a stationary point, it is locally concave up and usually a minimum. Enter 1=True or 0=False.',1,'Positive second derivative indicates a local minimum.');
  if(t===11){const h=pick([4,5,6]);return q('calcOptimisation',`A(x)=−x²+${2*h}x. Maximum value of A = ?`,h*h,'Substitute the vertex x-value h.');}
  const [L,x]=pick([[12,6],[16,8],[20,10]]);return q('calcOptimisation',`A rectangle has sides x and ${L}−x. At the maximum-area value of x, x = ?`,x,'A product x(L−x) is maximised when the two factors are equal.');
}

function y12GenAntidiff(){
  const t=y12Type(5,8,12);
  if(t===1){const a=pick([2,3,4,5]);return qFrac('antidiff',`If f′(x)=${a}x, coefficient of x² in f(x) = ?`,a/2,'Increase power to 2 and divide by 2.');}
  if(t===2){const a=pick([3,6,9,12]);return q('antidiff',`If f′(x)=${a}x², coefficient of x³ in f(x) = ?`,a/3,'Increase power to 3 and divide by 3.');}
  if(t===3){const a=pick([4,8,12,16]);return q('antidiff',`If f′(x)=${a}x³, coefficient of x⁴ in f(x) = ?`,a/4,'Increase power to 4 and divide by 4.');}
  if(t===4){const c=y12NonZeroInt(-8,8);return q('antidiff',`An antiderivative of ${c} is ${y12VarTerm(c)} + C. Coefficient of x = ?`,c,'Integral of a constant c is cx.');}
  if(t===5){const a=pick([2,4,6]),b=y12NonZeroInt(-5,5);return q('antidiff',`If f′(x)=${a}x ${b>0?`+ ${b}`:`− ${Math.abs(b)}`}, coefficient of x² in f(x) = ?`,a/2,'Integrate term by term.');}
  if(t===6)return q('antidiff','Antiderivatives of the same function differ by a constant. Enter 1=True or 0=False.',1,'Differentiating a constant gives zero.');
  if(t===7){const n=pick([1,2,3,4]);return qFrac('antidiff',`Coefficient of x${y12Superscript(n+1)} in ∫x${y12Superscript(n)} dx = ?`,1/(n+1),'Increase the power and divide by the new exponent.');}
  if(t===8){const a=pick([6,12,18]),n=pick([2,3]);return qFrac('antidiff',`Coefficient after integrating ${a}x${y12Superscript(n)} is ?`,a/(n+1),'Divide by n+1.');}
  if(t===9)return q('antidiff','An indefinite integral should include an arbitrary constant C. Enter 1=True or 0=False.',1,'All antiderivatives differ by constants.');
  if(t===10)return q('antidiff','Differentiation and antidifferentiation are inverse processes for polynomials, up to a constant. Enter 1=True or 0=False.',1,'Differentiating removes the integration constant.');
  if(t===11){const [a,c,x]=pick([[6,4,2],[4,3,2],[8,5,1]]);return q('antidiff',`f′(x)=${a}x and f(0)=${c}. Find f(${x}).`,a*x*x/2+c,'Integrate, then use f(0) to find the constant.');}
  const [a,b,c,x]=pick([[4,2,3,1],[6,-2,5,1],[2,4,1,2]]);return q('antidiff',`f′(x)=${a}x ${b>=0?`+ ${b}`:`− ${Math.abs(b)}`} and f(0)=${c}. Find f(${x}).`,a*x*x/2+b*x+c,'Integrate term by term and use the initial value.');
}

function y12GenDefiniteIntegral(){
  const t=y12Type(5,8,15);
  if(t===1){const b=pick([2,4,6]);return q('definiteIntegral',`Area under y=x from x=0 to x=${b} = ?`,b*b/2,'This is a triangle with base b and height b.');}
  if(t===2){const c=pick([2,3,4,5]),b=pick([2,4,6]);return q('definiteIntegral',`Area under y=${c} from x=0 to x=${b} = ?`,c*b,'Rectangle area = height × width.');}
  if(t===3){const a=pick([2,4,6]),b=pick([2,3]);return q('definiteIntegral',`∫ from 0 to ${b} of ${a}x dx = ?`,a*b*b/2,'Antiderivative is (a/2)x².');}
  if(t===4){const a=pick([3,6,9]),b=pick([1,2]);return q('definiteIntegral',`∫ from 0 to ${b} of ${a}x² dx = ?`,a*b**3/3,'Antiderivative is (a/3)x³.');}
  if(t===5)return q('definiteIntegral','A definite integral can represent signed area. Enter 1=True or 0=False.',1,'Area below the x-axis contributes negatively.');
  if(t===6){const c=pick([2,3,4]),a=pick([1,2]),b=a+pick([2,3]);return q('definiteIntegral',`∫ from ${a} to ${b} of ${c} dx = ?`,c*(b-a),'Constant function gives rectangle area.');}
  if(t===7){const b=pick([2,4,6]);return q('definiteIntegral',`For F(x)=x²/2, F(${b})−F(0) = ?`,b*b/2,'Evaluate the antiderivative at bounds.');}
  if(t===8)return q('definiteIntegral','If f(x)≥0 over [a,b], its definite integral equals the ordinary area under the curve. Enter 1=True or 0=False.',1,'No negative signed area occurs.');
  if(t===9){const b=pick([2,4,6]);return q('definiteIntegral',`Triangle under y=x on [0,${b}] has average height ?`,b/2,'Average height of a straight-line triangle is half the maximum.');}
  if(t===10)return q('definiteIntegral','Changing the order of definite-integral limits changes the sign. Enter 1=True or 0=False.',1,'∫b→a = −∫a→b.');
  if(t===11){const [a,b,k]=pick([[1,3,2],[1,4,4],[2,4,2]]);return q('definiteIntegral',`∫ from ${a} to ${b} of ${k}x dx = ?`,k*(b*b-a*a)/2,'Use (k/2)x² at the two limits.');}
  if(t===12)return q('definiteIntegral','∫ from −3 to 3 of x dx = ?',0,'x is odd and the limits are symmetric.');
  if(t===13)return q('definiteIntegral','∫ from −2 to 0 of x dx = ?',-2,'The graph is below the x-axis, so the signed area is negative.');
  if(t===14)return q('definiteIntegral','Geometric area between y=x and the x-axis from x=−2 to x=0 = ?',2,'Geometric area is positive even though the definite integral is negative.');
  return q('definiteIntegral','For y=x from x=−2 to x=2, total geometric area between the graph and x-axis = ?',4,'There are two congruent triangles, each with area 2.');
}

function y12GenMotionRates(){
  const t=y12Type(5,8,12);
  if(t===1){const a=pick([2,3,4]),tme=pick([1,2,3]);return q('motionRates',`Position s=${a}t². Velocity at t=${tme} = ?`,2*a*tme,'v=ds/dt.');}
  if(t===2){const a=pick([2,3,4]),tme=pick([1,2,3]);return q('motionRates',`Velocity v=${a}t². Acceleration at t=${tme} = ?`,2*a*tme,'a=dv/dt.');}
  if(t===3){const u=pick([3,5,8]),a=pick([2,4]),tme=pick([2,3]);return q('motionRates',`v=${u}+${a}t. At t=${tme}, v = ?`,u+a*tme,'Substitute time.');}
  if(t===4){const u=pick([2,4,6]),a=pick([2,4]),tme=pick([2,3]);const quad=a/2===1?'t²':`${fmt(a/2)}t²`;return q('motionRates',`s=${u}t+${quad}. At t=${tme}, s = ?`,u*tme+(a/2)*tme*tme,'Substitute time into the displacement model.');}
  if(t===5)return q('motionRates','Velocity is the derivative of displacement with respect to time. Enter 1=True or 0=False.',1,'v=ds/dt.');
  if(t===6)return q('motionRates','Acceleration is the derivative of velocity with respect to time. Enter 1=True or 0=False.',1,'a=dv/dt.');
  if(t===7){const a=pick([2,3,4]),tme=pick([2,3]);return q('motionRates',`s=${a}t³. Velocity at t=${tme} = ?`,3*a*tme*tme,'Differentiate s with respect to t.');}
  if(t===8){const v=pick([4,6,8]),tme=pick([3,5]);return q('motionRates',`Constant velocity ${v} m/s for ${tme} s. Displacement = ? m`,v*tme,'Area under a velocity-time graph is displacement.');}
  if(t===9)return q('motionRates','If velocity is negative, position must be negative. Enter 1=True or 0=False.',0,'Negative velocity means moving in the negative direction, not necessarily negative position.');
  if(t===10)return q('motionRates','At a turning point of a position-time model, instantaneous velocity can be 0. Enter 1=True or 0=False.',1,'The position derivative is zero at a smooth turning point.');
  if(t===11){const [acc,u,tme]=pick([[2,3,4],[4,5,3],[3,2,4]]);return q('motionRates',`Acceleration is constant at ${acc} m/s² and v(0)=${u} m/s. v(${tme}) = ? m/s`,u+acc*tme,'Integrate acceleration: v=at+u.');}
  const [a,u,tme]=pick([[2,3,4],[4,2,3],[2,5,2]]);return q('motionRates',`v(t)=${a}t+${u}. Displacement from t=0 to t=${tme} = ?`,a*tme*tme/2+u*tme,'Integrate velocity over the time interval.');
}

/* ===== STATISTICS ===== */
function y12GenStatInvestigation(){
  const t=y12Type(5,8,10);
  if(t===1)return q('statInvestigation','A question comparing sleep time for Year 12 students in two schools is mainly: enter 1=summary, 2=comparison, 3=relationship.',2,'It compares two groups.');
  if(t===2)return q('statInvestigation','A question about the relationship between height and arm span is: enter 1=summary,2=comparison,3=relationship.',3,'It studies association between two variables.');
  if(t===3)return q('statInvestigation','A question describing weekly bus delays at one stop is mainly: enter 1=summary,2=comparison,3=relationship.',1,'It describes one distribution.');
  if(t===4)return q('statInvestigation','The statistical enquiry cycle includes posing a question, collecting/using data, analysing, and concluding. Enter 1=True or 0=False.',1,'Those are central investigation stages.');
  if(t===5)return q('statInvestigation','An observational study assigns treatments to participants. Enter 1=True or 0=False.',0,'Assigning treatments makes it an experiment.');
  if(t===6)return q('statInvestigation','Existing administrative data can be used in a statistical investigation. Enter 1=True or 0=False.',1,'Level 7 investigations can use existing datasets.');
  if(t===7)return q('statInvestigation','A good statistical question anticipates variability. Enter 1=True or 0=False.',1,'Statistical questions expect differing data values.');
  if(t===8)return q('statInvestigation','If a variable is measured in seconds, it is usually numerical. Enter 1=True or 0=False.',1,'Time is a numerical measurement.');
  if(t===9)return q('statInvestigation','Eye colour is usually: enter 1=categorical, 2=numerical.',1,'Eye colour consists of categories.');
  return q('statInvestigation','Number of siblings is usually: enter 1=discrete numerical, 2=continuous numerical.',1,'It is counted in whole numbers.');
}

function y12GenSamplingError(){
  const t=y12Type(5,8,18);
  if(t===1)return q('samplingError','Selecting every 10th name after a random start is: enter 1=systematic sample,2=voluntary sample.',1,'That is systematic sampling.');
  if(t===2)return q('samplingError','Asking only volunteers can introduce self-selection bias. Enter 1=True or 0=False.',1,'Volunteers may differ from the population.');
  if(t===3)return q('samplingError','A census measures every member of the target population. Enter 1=True or 0=False.',1,'That is the definition of a census.');
  if(t===4)return q('samplingError','Random sampling eliminates all sampling variation. Enter 1=True or 0=False.',0,'Random samples still vary by chance.');
  if(t===5)return q('samplingError','Increasing sample size usually reduces sampling variability. Enter 1=True or 0=False.',1,'Larger random samples tend to give more stable estimates.');
  if(t===6)return q('samplingError','A badly worded leading question is a sampling error. Enter 1=True or 0=False.',0,'It is a non-sampling error / response bias issue.');
  if(t===7)return q('samplingError','Non-response can create bias if non-responders differ systematically from responders. Enter 1=True or 0=False.',1,'Missing responses may distort results.');
  if(t===8)return q('samplingError','A random sample guarantees a perfectly representative sample every time. Enter 1=True or 0=False.',0,'Random variation remains.');
  if(t===9)return q('samplingError','A scale always reads 0.5 kg too high. Main issue: enter 1=sampling variation, 2=measurement error, 3=undercoverage.',2,'The measuring instrument introduces systematic error.');
  if(t===10)return q('samplingError','A school survey is emailed only to sports-club members but claims to represent all students. Main issue: enter 1=undercoverage, 2=random variation, 3=double-barrelled wording.',1,'Students outside the sports club cannot be selected.');
  if(t===11)return q('samplingError','Which is generally more reliable for estimating a population mean? Enter 1=random sample of 30, 2=random sample of 300.',2,'Larger random samples usually have less sampling variability.');
  if(t===12)return q('samplingError','Question: “Don’t you agree the new timetable is better?” Main flaw: enter 1=leading, 2=double-barrelled, 3=clear.',1,'The wording pushes respondents toward agreement.');
  if(t===13)return q('samplingError','Question: “How satisfied are you with homework and school lunches?” Main flaw: enter 1=leading, 2=double-barrelled, 3=clear.',2,'It asks about two different issues in one response.');
  if(t===14)return q('samplingError','Age options are 10–15, 15–20, 20–25. Main issue: enter 1=overlap, 2=gap, 3=none.',1,'Boundary ages such as 15 fit two categories.');
  if(t===15)return q('samplingError','Question: “How often do you exercise?” Main issue: enter 1=unclear time period, 2=leading, 3=undercoverage.',1,'A reference period such as per week is needed.');
  if(t===16)return q('samplingError','Response options are 0–2, 3–5, 6–8, 9+ times per week. Main category issue: enter 1=overlap, 2=gap, 3=none.',3,'Every whole-number frequency belongs to exactly one option.');
  if(t===17)return q('samplingError','Many selected people do not reply, and non-responders may differ from responders. Main issue: enter 1=non-response bias, 2=sampling variation, 3=measurement error.',1,'Systematic differences in non-response can bias results.');
  return q('samplingError','A researcher surveys the first 50 people leaving one gym to estimate exercise habits of the whole city. Main issue: enter 1=convenience/selection bias, 2=calculation error, 3=random assignment.',1,'The sample is easy to reach but not representative of the city.');
}

function y12GenExperimentalDesign(){
  const t=y12Type(5,8,14);
  if(t===1)return q('experimentalDesign','Randomly assigning participants to treatments helps balance lurking variables. Enter 1=True or 0=False.',1,'Random assignment supports fair treatment comparison.');
  if(t===2)return q('experimentalDesign','A control group provides a baseline for comparison. Enter 1=True or 0=False.',1,'It helps isolate treatment effects.');
  if(t===3)return q('experimentalDesign','Blinding can reduce expectation and measurement bias. Enter 1=True or 0=False.',1,'Participants or assessors may otherwise influence outcomes.');
  if(t===4)return q('experimentalDesign','An experiment can provide stronger evidence for causation than an observational study. Enter 1=True or 0=False.',1,'Random assignment can isolate treatment effects.');
  if(t===5)return q('experimentalDesign','Replication means using more than one experimental unit per treatment. Enter 1=True or 0=False.',1,'Replication helps assess variation.');
  if(t===6)return q('experimentalDesign','Changing two treatment variables at once makes causal interpretation easier. Enter 1=True or 0=False.',0,'Confounding makes interpretation harder.');
  if(t===7)return q('experimentalDesign','Matched pairs can control person-to-person variation. Enter 1=True or 0=False.',1,'Pairing similar units can reduce unwanted variation.');
  if(t===8)return q('experimentalDesign','Random selection and random assignment have the same purpose. Enter 1=True or 0=False.',0,'Selection supports generalisation; assignment supports causal comparison.');
  if(t===9)return q('experimentalDesign','Students are randomly allocated to two teaching methods. Which feature most directly supports a causal comparison? Enter 1=random assignment, 2=large population, 3=voluntary response.',1,'Random assignment helps separate treatment effects from pre-existing group differences.');
  if(t===10)return q('experimentalDesign','A medicine trial gives one group an inactive pill that looks identical to the treatment. This is: enter 1=placebo control, 2=systematic sampling, 3=extrapolation.',1,'A placebo helps control expectation effects.');
  if(t===11)return q('experimentalDesign','Each participant tries both treatments in a random order. The design is closest to: enter 1=matched pairs, 2=convenience sample, 3=cluster sample.',1,'Each person acts as a match for themself, reducing person-to-person variation.');
  if(t===12)return q('experimentalDesign','Participants choose whether to receive treatment A or B. Main design concern: enter 1=confounding, 2=too much replication, 3=overlapping categories.',1,'Treatment choice may be related to other characteristics that affect the response.');
  if(t===13)return q('experimentalDesign','A random sample is observed but no treatment is assigned. Strongest conclusion type: enter 1=association, 2=causation from random assignment.',1,'Random selection can support generalisation, but observation alone does not establish causation.');
  return q('experimentalDesign','Neither participants nor outcome assessors know the assigned treatment. This is: enter 1=double blinding, 2=stratified sampling, 3=blocking by time.',1,'Blinding both participants and assessors reduces expectation and assessment bias.');
}

function y12GenCompareDist(){
  const t=y12Type(5,8,14);
  if(t===1){const [a,b]=pick([[18,24],[20,27],[35,31],[42,50]]);return q('compareDist',`Group A median=${a}, Group B median=${b}. Higher median: enter 1=A,2=B.`,a>b?1:2,'Compare centres.');}
  if(t===2){const [a,b]=pick([[6,10],[12,8],[5,9],[14,7]]);return q('compareDist',`Group A IQR=${a}, Group B IQR=${b}. Smaller spread: enter 1=A,2=B.`,a<b?1:2,'Smaller IQR means tighter middle 50%.');}
  if(t===3)return q('compareDist','Informal median intervals: A=18–22, B=25–29. Do the intervals overlap? Enter 1=yes,0=no.',0,'The upper end of A is below the lower end of B.');
  if(t===4)return q('compareDist','Informal median intervals: A=18–24, B=22–28. Do the intervals overlap? Enter 1=yes,0=no.',1,'The intervals share values from 22 to 24.');
  if(t===5)return q('compareDist','Intervals A=14–18 and B=22–26. Is there strong sample evidence that B population median is higher? Enter 1=yes,0=no.',1,'The informal intervals are clearly separated.');
  if(t===6)return q('compareDist','Intervals A=20–27 and B=24–31. Is separation evidence strong? Enter 1=yes,0=no.',0,'The informal intervals overlap substantially.');
  if(t===7){const [a,b]=pick([[0.62,0.48],[0.35,0.55],[0.71,0.69]]);return q('compareDist',`Proportion meeting a condition: A=${a}, B=${b}. Higher proportion: enter 1=A,2=B.`,a>b?1:2,'Compare proportions.');}
  if(t===8)return q('compareDist','Two samples can have the same median but different IQRs. Enter 1=True or 0=False.',1,'Centre and spread are separate features.');
  if(t===9){const [a1,a2,b1,b2]=pick([[12,20,24,30],[18,26,22,32],[30,36,38,44]]);return q('compareDist',`Median intervals A=${a1}–${a2}, B=${b1}–${b2}. Overlap length = ?`,Math.max(0,Math.min(a2,b2)-Math.max(a1,b1)),'Overlap length is the shared part of the two intervals.');}
  if(t===10){const [wA,wB]=pick([[10,6],[8,12],[14,5]]);return q('compareDist',`Informal median interval widths: A=${wA}, B=${wB}. More precise estimate: enter 1=A,2=B.`,wA<wB?1:2,'A narrower interval indicates greater precision.');}
  if(t===11)return q('compareDist','Group A median interval=15–19 and Group B=23–27. Best conclusion: enter 1=B population median likely higher, 2=every B value exceeds every A value.',1,'Separated median intervals support a population-median difference, not a statement about every individual.');
  if(t===12)return q('compareDist','Group A and B have equal medians, but B has a much larger IQR. Which differs more clearly? Enter 1=centre,2=spread.',2,'Equal medians indicate similar centre; the IQRs show different spread.');
  if(t===13)return q('compareDist','Intervals A=20–26 and B=25–31. The intervals overlap by 1 unit. Evidence of a shift is: enter 1=weaker than with no overlap,2=stronger than with no overlap.',1,'Some overlap gives less clear separation than no overlap.');
  return q('compareDist','Sample medians are 18 and 25, but both informal median intervals are very wide and overlap heavily. Best response: enter 1=claim a certain population difference,2=acknowledge weak evidence.',2,'Heavy overlap means the data do not strongly separate the population medians.');
}


function y12GenPointEstimate(){
  const t=y12Type(5,8,10);
  if(t===1){const arr=pick([[8,10,12,14],[20,22,24,26],[5,7,9,11]]);return q('pointEstimate',`Sample mean of ${arr.join(', ')} = ?`,y12Mean(arr),'Sample mean is a point estimate of population mean.');}
  if(t===2){const success=pick([20,30,40,60]),n=pick([50,100]);if(success>n)return y12GenPointEstimate();return q('pointEstimate',`${success} successes in sample of ${n}. Sample proportion = ?`,success/n,'p-hat=successes/sample size.');}
  if(t===3)return q('pointEstimate','A sample mean can be used as a point estimate of the population mean. Enter 1=True or 0=False.',1,'It gives one numerical estimate.');
  if(t===4)return q('pointEstimate','A larger random sample generally gives a less variable point estimate. Enter 1=True or 0=False.',1,'Sampling variability tends to shrink.');
  if(t===5){const p=pick([0.2,0.3,0.4,0.5]),n=100;return q('pointEstimate',`Sample proportion=${p} from n=${n}. Estimated count in a population of 500 with same proportion = ?`,p*500,'Apply the estimated proportion.');}
  if(t===6)return q('pointEstimate','A point estimate describes uncertainty around the estimate. Enter 1=True or 0=False.',0,'A point estimate is a single value, not an uncertainty interval.');
  if(t===7){const mean=pick([12,15,18]),n=pick([20,30,50]);return q('pointEstimate',`Sample mean=${mean}. Best simple point estimate of population mean = ?`,mean,'Use the sample mean.');}
  if(t===8)return q('pointEstimate','Which usually has lower sampling variability? Enter 1=n=25,2=n=400.',2,'Larger samples are more stable.');
  if(t===9)return q('pointEstimate','A biased sampling method can still give a precise-looking but misleading point estimate. Enter 1=True or 0=False.',1,'Low random variability does not remove systematic bias.');
  return q('pointEstimate','Doubling sample size guarantees exactly half the sampling error in every sample. Enter 1=True or 0=False.',0,'Sampling error is random and does not change deterministically.');
}

function y12GenInference(){
  const t=y12Type(5,8,16);
  if(t===1)return q('inference','An inference from a random sample extends a conclusion from sample toward a population. Enter 1=True or 0=False.',1,'Inference generalises beyond observed data.');
  if(t===2)return q('inference','A larger sample usually reduces the variability of repeated sample estimates. Enter 1=True or 0=False.',1,'Larger samples are more stable.');
  if(t===3)return q('inference','If two informal median intervals overlap heavily, evidence of a population difference is usually stronger. Enter 1=True or 0=False.',0,'Heavy overlap generally weakens evidence.');
  if(t===4)return q('inference','Contextual knowledge should be considered when making a statistical inference. Enter 1=True or 0=False.',1,'Statistical conclusions need context.');
  if(t===5)return q('inference','A random sample allows certainty about the exact population parameter. Enter 1=True or 0=False.',0,'Sampling uncertainty remains.');
  if(t===6)return q('inference','Group A informal median interval=16–20; Group B=23–27. Is there evidence B population median is higher? Enter 1=yes,0=no.',1,'The intervals are separated with B entirely above A.');
  if(t===7)return q('inference','Group A informal median interval=18–25; Group B=22–29. Is strong separation shown? Enter 1=yes,0=no.',0,'The intervals overlap.');
  if(t===8)return q('inference','Point estimates from repeated random samples vary. Enter 1=True or 0=False.',1,'This is sampling variability.');
  if(t===9)return q('inference','An informal median interval is best interpreted as: enter 1=a plausible range for a population median, 2=the exact range of all population values, 3=a guarantee about every future sample.',1,'The interval communicates uncertainty about the population median.');
  if(t===10)return q('inference','Interval A=18–30; interval B=21–27. Which gives the more precise median estimate? Enter 1=A, 2=B.',2,'B is narrower.');
  if(t===11)return q('inference','A model is used to predict well beyond the observed x-range. This is: enter 1=interpolation, 2=extrapolation.',2,'Prediction outside the observed range is extrapolation.');
  if(t===12)return q('inference','Group A interval=14–18; Group B=22–26. Is there evidence B population median is higher? Enter 1=yes,0=no.',1,'The intervals are clearly separated.');
  if(t===13)return q('inference','Two non-overlapping median intervals most directly support: enter 1=a likely difference in population medians, 2=every B value exceeds every A value.',1,'The inference concerns population medians, not all individual values.');
  if(t===14)return q('inference','Intervals A=18–24 and B=22–29. Length of their overlap = ?',2,'They overlap from 22 to 24, a length of 2 units.');
  if(t===15)return q('inference','Interval A=10–18; interval B=12–16. More precise estimate: enter 1=A, 2=B.',2,'A narrower interval indicates greater precision.');
  return q('inference','Two random samples from the same population give slightly different estimates. Main reason: enter 1=sampling variation, 2=causation, 3=measurement units.',1,'Random samples naturally vary.');
}


function y12GenStatLiteracy(){
  const t=y12Type(5,8,14);
  if(t===1)return q('statLiteracy','As temperature rises, ice-cream sales tend to rise. Association: enter 1=positive,2=negative,3=none.',1,'Both variables tend to move upward together.');
  if(t===2)return q('statLiteracy','For fixed distance, higher speed gives lower travel time. Association: enter 1=positive,2=negative,3=none.',2,'As one increases, the other decreases.');
  if(t===3)return q('statLiteracy','Association alone proves causation. Enter 1=True or 0=False.',0,'Other explanations or confounding variables may exist.');
  if(t===4)return q('statLiteracy','A graph with a truncated vertical axis can exaggerate visual differences. Enter 1=True or 0=False.',1,'Scale choices can mislead.');
  if(t===5)return q('statLiteracy','A claim based on a non-random convenience sample may not generalise well. Enter 1=True or 0=False.',1,'Selection bias limits generalisation.');
  if(t===6)return q('statLiteracy','Interpolation is generally safer than extrapolation when the relationship is stable. Enter 1=True or 0=False.',1,'Interpolation stays within observed data.');
  if(t===7)return q('statLiteracy','A correlation near 0 means there is definitely no relationship of any kind. Enter 1=True or 0=False.',0,'There may be non-linear association.');
  if(t===8)return q('statLiteracy','The explanatory variable is usually placed on the x-axis in a scatter plot. Enter 1=True or 0=False.',1,'That is the usual convention.');
  if(t===9)return q('statLiteracy','A news graph starts its y-axis at 98 instead of 0, making a small rise look huge. Main concern: enter 1=truncated scale,2=random assignment,3=matched pairs.',1,'The restricted vertical scale exaggerates the visual change.');
  if(t===10)return q('statLiteracy','A study finds students who sleep more have higher grades. Which is justified? Enter 1=association,2=sleep definitely causes higher grades.',1,'Observational association alone does not establish causation.');
  if(t===11)return q('statLiteracy','A prediction is made for x=90 when the observed data only cover x=20 to 50. This is: enter 1=interpolation,2=extrapolation.',2,'The prediction is outside the observed range.');
  if(t===12)return q('statLiteracy','An online poll is answered only by people who choose to click it. Main concern: enter 1=self-selection bias,2=double blinding,3=measurement precision.',1,'Voluntary respondents may differ systematically from non-respondents.');
  if(t===13)return q('statLiteracy','A report says risk rose from 1 in 10,000 to 2 in 10,000. Relative increase is 100%. Which extra information matters? Enter 1=absolute risk,2=parabola vertex,3=sample midpoint.',1,'A large relative change can still correspond to a very small absolute risk.');
  return q('statLiteracy','Two variables show a curved pattern but near-zero linear correlation. Best conclusion: enter 1=no relationship is possible,2=a non-linear relationship may still exist.',2,'A correlation coefficient mainly summarises linear association.');
}

function y12GenRisk(){
  const t=y12Type(5,8,10);
  if(t===1){const [cases,total]=pick([[20,100],[30,150],[8,80]]);return q('risk',`${cases} cases among ${total} people. Risk = ?`,cases/total,'Risk=cases/total.');}
  if(t===2){const [r1,r2]=pick([[0.2,0.1],[0.3,0.15],[0.4,0.2]]);return q('risk',`Risk exposed=${r1}, risk unexposed=${r2}. Relative risk = ?`,r1/r2,'RR=risk exposed/risk unexposed.');}
  if(t===3){const [r1,r2]=pick([[0.2,0.1],[0.3,0.15],[0.4,0.2]]);return q('risk',`Risk exposed=${r1}, risk unexposed=${r2}. Absolute risk difference = ?`,r1-r2,'Subtract the two risks.');}
  if(t===4)return q('risk','Relative risk 1 means equal risk in the two groups. Enter 1=True or 0=False.',1,'RR=1 means no relative difference.');
  if(t===5)return q('risk','Relative risk greater than 1 means the numerator group has higher risk. Enter 1=True or 0=False.',1,'The numerator risk is larger.');
  if(t===6)return q('risk','Relative risk 0.5 means the numerator group has half the risk. Enter 1=True or 0=False.',1,'0.5 is half.');
  if(t===7){const [r1,r2]=pick([[0.1,0.2],[0.15,0.3],[0.25,0.5]]);return q('risk',`Risk A=${r1}, risk B=${r2}. Relative risk A/B = ?`,r1/r2,'Divide A risk by B risk.');}
  if(t===8)return q('risk','A large relative risk can still correspond to a small absolute risk difference when both risks are tiny. Enter 1=True or 0=False.',1,'Relative and absolute risk answer different questions.');
  if(t===9){const [cases,total]=pick([[5,1000],[10,1000],[20,2000]]);return q('risk',`${cases} cases among ${total}. Risk as a percentage = ?%`,cases/total*100,'Convert proportion to percent.');}
  return q('risk','Risk is a probability and must lie between 0 and 1. Enter 1=True or 0=False.',1,'Probabilities are bounded by 0 and 1.');
}

/* ===== PROBABILITY ===== */
function y12GenNormal(){
  const t=y12Type(5,8,18);
  if(t===1){const mu=pick([50,60,100]),sd=pick([5,10,20]),x=mu+sd;return q('normal',`Normal model mean=${mu}, SD=${sd}. z-score of x=${x} = ?`,1,'z=(x−mean)/SD.');}
  if(t===2){const mu=pick([50,60,100]),sd=pick([5,10,20]),x=mu-sd;return q('normal',`Normal model mean=${mu}, SD=${sd}. z-score of x=${x} = ?`,-1,'z=(x−mean)/SD.');}
  if(t===3){const mu=pick([50,60,100]),sd=pick([5,10,20]);return q('normal',`Mean=${mu}, SD=${sd}. Value at z=2 is ?`,mu+2*sd,'x=mean+z×SD.');}
  if(t===4)return q('normal','In a normal distribution, mean=median=mode. Enter 1=True or 0=False.',1,'The normal distribution is symmetric.');
  if(t===5)return q('normal','Approximately 68% of a normal distribution lies within 1 standard deviation of the mean. Enter 1=True or 0=False.',1,'Use the empirical 68-95-99.7 rule.');
  if(t===6)return q('normal','Approximately 95% lies within 2 standard deviations of the mean. Enter 1=True or 0=False.',1,'Use the empirical rule.');
  if(t===7)return q('normal','A z-score of 0 is at the mean. Enter 1=True or 0=False.',1,'z=0 means no deviation from the mean.');
  if(t===8){const mu=pick([50,60,100]),sd=pick([5,10,20]),x=mu+3*sd;return q('normal',`Mean=${mu}, SD=${sd}. x=${x}. z = ?`,3,'Count standard deviations above the mean.');}
  if(t===9){const mu=pick([50,60,100]),d=pick([10,20]);return q('normal',`A normal distribution has mean ${mu}. The value ${mu+d} is mirrored across the mean at ?`,mu-d,'Symmetric normal values are equally far from the mean.');}
  if(t===10){const mu=pick([50,60,100]),sd=pick([5,10]);return q('normal',`Mean=${mu}, SD=${sd}. A z-score of −2 corresponds to x = ?`,mu-2*sd,'x=mean+z×SD.');}
  if(t===11)return q('normal','Using the 99.7% rule, approximately what proportion lies outside ±3 SD?',0.003,'100%−99.7%=0.3%=0.003.');
  if(t===12){const mu=pick([50,100]),sd=pick([5,10]);return q('normal',`Normal model mean=${mu}, SD=${sd}. Using the 68% rule, approximately P(X > ${mu+sd}) = ?`,0.16,'About 34% lies between the mean and +1 SD, leaving about 16% above.');}
  if(t===13){const mu=pick([50,100]),sd=pick([5,10]);return q('normal',`Normal model mean=${mu}, SD=${sd}. Using the 95% rule, approximate 97.5th percentile = ?`,mu+2*sd,'About 95% lies within ±2 SD, leaving 2.5% above +2 SD.');}
  if(t===14){const [mu,x,z,sd]=pick([[100,120,2,10],[60,75,3,5],[50,40,-2,5]]);return q('normal',`Normal model mean=${mu}. If x=${x} has z=${z}, SD = ?`,sd,'Rearrange z=(x−mean)/SD.');}
  if(t===15)return q('normal','Given P(Z < 1)=0.8413, find P(Z > 1). Give your answer to 4 d.p.',0.1587,'Use the complement: 1−0.8413.');
  if(t===16)return q('normal','Given P(Z < 1)=0.8413 and symmetry, find P(−1 < Z < 1). Give your answer to 4 d.p.',0.6826,'Remove equal tails of 0.1587 from both sides.');
  if(t===17){const [mu,sd]=pick([[50,5],[100,10],[60,4]]);return q('normal',`The 97.5th percentile has z≈1.96. For mean=${mu}, SD=${sd}, percentile value ≈ ? (2 d.p.)`,roundTo(mu+1.96*sd,2),'Use x=mean+z×SD.');}
  return q('normal','Using the 95% rule, approximately what proportion lies outside ±2 SD?',0.05,'100%−95%=5%.');
}


function y12GenProbRules(){
  const t=y12Type(5,8,12);
  if(t===1){const p=pick([0.2,0.25,0.4,0.6]);return q('probRules',`P(A)=${p}. P(not A)=?`,1-p,'Complement rule.');}
  if(t===2){const [a,b]=pick([[0.2,0.3],[0.25,0.5],[0.4,0.2]]);return q('probRules',`Mutually exclusive: P(A)=${a}, P(B)=${b}. P(A or B)=?`,roundTo(a+b,6),'Add disjoint probabilities.');}
  if(t===3){const [a,b,both]=pick([[0.5,0.4,0.2],[0.6,0.3,0.1],[0.4,0.5,0.15]]);return q('probRules',`P(A)=${a}, P(B)=${b}, P(A and B)=${both}. P(A or B)=?`,roundTo(a+b-both,6),'Subtract overlap once.');}
  if(t===4){const [a,b]=pick([[0.5,0.4],[0.25,0.6],[0.3,0.5]]);return q('probRules',`Independent: P(A)=${a}, P(B)=${b}. P(A and B)=?`,roundTo(a*b,6),'Multiply independent probabilities.');}
  if(t===5){const p=pick([0.2,0.25,0.5]);return q('probRules',`Independent success probability=${p} twice. P(at least one success)=?`,roundTo(1-(1-p)**2,6),'Use complement of no successes.');}
  if(t===6)return q('probRules','Mutually exclusive non-zero events are independent. Enter 1=True or 0=False.',0,'Knowing one occurred makes the other impossible.');
  if(t===7){const [a,b,both]=pick([[0.5,0.4,0.2],[0.3,0.5,0.15],[0.25,0.8,0.2]]);return q('probRules',`P(A)=${a}, P(B)=${b}, P(A∩B)=${both}. Are A,B independent? Enter 1=yes,0=no.`,Math.abs(a*b-both)<1e-9?1:0,'Check whether P(A∩B)=P(A)P(B).');}
  if(t===8)return q('probRules','If P(A|B)=P(A), this supports independence. Enter 1=True or 0=False.',1,'B does not change A probability.');
  if(t===9){const p=pick([0.25,0.5]);return q('probRules',`Success probability=${p} in two independent trials. P(exactly one success)=?`,roundTo(2*p*(1-p),6),'Two orders: SF or FS.');}
  if(t===10)return qFrac('probRules','Two fair six-sided dice are rolled. P(sum is 7)=?',1/6,'Six of 36 ordered outcomes sum to 7.');
  if(t===11){const [both,b,ans]=pick([[0.2,0.5,0.4],[0.15,0.3,0.5],[0.1,0.4,0.25]]);return q('probRules',`P(A∩B)=${both}, P(B)=${b}. P(A|B)=?`,ans,'Conditional probability is P(A∩B)/P(B).');}
  const [cond,b,both]=pick([[0.4,0.5,0.2],[0.5,0.3,0.15],[0.25,0.4,0.1]]);return q('probRules',`P(A|B)=${cond}, P(B)=${b}. P(A∩B)=?`,both,'Multiply P(A|B) by P(B).');
}

function y12GenTablesTrees(){
  const t=y12Type(5,8,11);
  if(t===1){const a=pick([20,30,40]),b=pick([10,20]),c=pick([15,25]),d=pick([5,15]);return q('tablesTrees',`Two-way table cells are ${a}, ${b}, ${c}, ${d}. Grand total = ?`,a+b+c+d,'Add all four cells.');}
  if(t===2){const yes=pick([20,30,40]),no=pick([10,20]);return q('tablesTrees',`Row counts: Yes=${yes}, No=${no}. Row total = ?`,yes+no,'Add row cells.');}
  if(t===3){const a=pick([20,30,40]),total=pick([50,100]);if(a>total)return y12GenTablesTrees();return q('tablesTrees',`Two-way table count for A∩B=${a}, total=${total}. P(A∩B)=?`,a/total,'Probability = relevant count / total.');}
  if(t===4){const first=pick([0.2,0.4,0.5]),second=pick([0.25,0.5]);return q('tablesTrees',`Tree path probabilities ${first} then ${second}. Path probability = ?`,first*second,'Multiply along a path.');}
  if(t===5){const p1=pick([0.2,0.3]),p2=pick([0.1,0.2]);return q('tablesTrees',`Two disjoint tree paths have probabilities ${p1} and ${p2}. Combined probability = ?`,roundTo(p1+p2,6),'Add alternative paths.');}
  if(t===6)return q('tablesTrees','At a probability-tree split, branch probabilities leaving one node sum to 1. Enter 1=True or 0=False.',1,'They cover all next-stage outcomes.');
  if(t===7){const red=3,blue=2,total=5;return qFrac('tablesTrees','Bag has 3 red,2 blue. Without replacement, P(red then blue)=?',red/total*blue/(total-1),'Multiply branch probabilities; second denominator changes.');}
  if(t===8)return q('tablesTrees','A two-way table is useful for counts involving two categorical variables. Enter 1=True or 0=False.',1,'Rows and columns can represent categories.');
  if(t===9){const a=20,b=30;return q('tablesTrees',`Among ${a+b} people in a row, ${a} satisfy A. Conditional proportion P(A | row)=?`,a/(a+b),'Use the row total as denominator.');}
  if(t===10)return q('tablesTrees','Adding probabilities across mutually exclusive complete branches gives total 1. Enter 1=True or 0=False.',1,'Complete outcomes exhaust the sample space.');
  return q('tablesTrees','In a without-replacement tree, second-stage probabilities may depend on the first result. Enter 1=True or 0=False.',1,'The composition changes.');
}

function y12GenSimulation(){
  const t=y12Type(5,8,15);
  if(t===1){const [s,n]=pick([[30,50],[45,75],[72,120]]);return q('simulation',`${s} successes in ${n} simulated trials. Relative frequency = ?`,s/n,'Divide successes by trials.');}
  if(t===2){const p=pick([0.2,0.25,0.5]),n=pick([40,80,100]);return q('simulation',`Theoretical probability=${p}. Expected successes in ${n} trials = ?`,p*n,'Expected count = np.');}
  if(t===3)return q('simulation','Increasing simulation trials usually makes relative frequency more stable. Enter 1=True or 0=False.',1,'Law of large numbers.');
  if(t===4)return q('simulation','Simulation can estimate probability when an exact theoretical calculation is difficult. Enter 1=True or 0=False.',1,'Repeated random trials approximate the chance.');
  if(t===5)return q('simulation','A simulation must model the important chance mechanisms of the real situation. Enter 1=True or 0=False.',1,'Otherwise the estimate may not be relevant.');
  if(t===6){const [obs,n,p,pText]=pick([[42,80,0.5,'0.5'],[28,50,0.5,'0.5'],[18,60,1/3,'1/3']]);return q('simulation',`Observed successes=${obs}, trials=${n}, theoretical p=${pText}. Expected count = ?`,n*p,'Expected count=np.');}
  if(t===7)return q('simulation','Experimental probability must equal theoretical probability exactly. Enter 1=True or 0=False.',0,'Random variation causes differences.');
  if(t===8)return q('simulation','Which gives a more stable probability estimate? Enter 1=50 trials,2=5000 trials.',2,'More trials reduce relative random fluctuation.');
  if(t===9){const [s,n]=pick([[60,100],[90,150],[120,200]]);return q('simulation',`${s} successes in ${n} trials. Failures = ?`,n-s,'Successes + failures = total.');}
  if(t===10)return q('simulation','A simulation result is an estimate, not a proof of the exact probability. Enter 1=True or 0=False.',1,'Finite random trials have sampling variation.');
  if(t===11)return q('simulation','Random digit 0–9 is generated. Digits 0,1,2 represent success. Modelled P(success) = ?',0.3,'Three of ten equally likely digits represent success.');
  if(t===12)return q('simulation','To model P(success)=0.4 with random digits 0–9, how many digits should represent success?',4,'Four of ten equally likely digits gives probability 0.4.');
  if(t===13)return q('simulation','Digits 0,1 represent A and digits 2–9 represent B. Does this model P(A)=1/4? Enter 1=yes,0=no.',0,'It gives P(A)=2/10=0.2, not 0.25.');
  if(t===14)return q('simulation','A simulation gives 46 successes in 200 trials. Estimated probability = ?',0.23,'Relative frequency is 46/200.');
  return q('simulation','To model a fair six-sided die using equally likely random integers 1–6 is valid. Enter 1=True or 0=False.',1,'Each face is represented by one equally likely integer.');
}

YEAR_BANKS[12] = {
  rationalAlg:y12GenRationalAlg,
  indices:y12GenIndices,
  logs:y12GenLogs,
  exponential:y12GenExponential,
  coord:y12GenCoord,
  linearFn:y12GenLinearFn,
  quadraticFn:y12GenQuadraticFn,
  nonlinearFn:y12GenNonlinearFn,
  fnTransforms:y12GenFnTransforms,
  arithSeq:y12GenArithSeq,
  geomSeq:y12GenGeomSeq,
  series:y12GenSeries,
  equations:y12GenEquations,
  quadratics:y12GenQuadratics,
  trigEq:y12GenTrigEq,
  systems:y12GenSystems,
  formula:y12GenFormula,
  sineRule:y12GenSineRule,
  cosineRule:y12GenCosineRule,
  trigArea:y12GenTrigArea,
  trig3d:y12GenTrig3D,
  networks:y12GenNetworks,
  diffBasics:y12GenDiffBasics,
  diffPoly:y12GenDiffPoly,
  tangentNormal:y12GenTangentNormal,
  stationary:y12GenStationary,
  calcOptimisation:y12GenCalcOptimisation,
  antidiff:y12GenAntidiff,
  definiteIntegral:y12GenDefiniteIntegral,
  motionRates:y12GenMotionRates,
  statInvestigation:y12GenStatInvestigation,
  samplingError:y12GenSamplingError,
  experimentalDesign:y12GenExperimentalDesign,
  compareDist:y12GenCompareDist,
  pointEstimate:y12GenPointEstimate,
  inference:y12GenInference,
  statLiteracy:y12GenStatLiteracy,
  risk:y12GenRisk,
  normal:y12GenNormal,
  probRules:y12GenProbRules,
  tablesTrees:y12GenTablesTrees,
  simulation:y12GenSimulation
};

/* Reduce near-duplicate Year 12 questions during practice/tests without changing shared app logic. */
const y12RecentQuestionText = {};
Object.keys(YEAR_BANKS[12]).forEach(skill => {
  const rawGenerator = YEAR_BANKS[12][skill];
  YEAR_BANKS[12][skill] = function(){
    const recent = y12RecentQuestionText[skill] || (y12RecentQuestionText[skill] = []);
    let item = rawGenerator();
    let tries = 0;
    while(recent.includes(item.text) && tries < 30){
      item = rawGenerator();
      tries++;
    }
    recent.push(item.text);
    if(recent.length > 3) recent.shift();
    return item;
  };
});
