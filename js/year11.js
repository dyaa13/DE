'use strict';

/* Year 11 configuration and question bank. */
YEAR_CONFIGS[11] = {
  title: 'Year 11 Rapid Fire Mental Maths',
  skillLabel: 'Year 11 Skill',
  mixed: 'Mixed Year 11 Skills',
  labels: {
    rational: 'Rational Number Operations',
    indices: 'Index Laws',
    fractionalIndices: 'Fractional Indices & Roots',
    surds: 'Surds',
    scientific: 'Scientific Notation',
    accuracy: 'Significant Figures & Accuracy',
    proportion: 'Direct & Inverse Proportion',
    finance: 'Compound Rates & Finance',
    algebraSimplify: 'Algebraic Simplification',
    expand: 'Expanding Brackets',
    factorise: 'Factorising',
    algebraFractions: 'Algebraic Fractions',
    linearEq: 'Linear Equations',
    inequalities: 'Linear Inequalities',
    simultaneous: 'Simultaneous Equations',
    quadratics: 'Quadratic Equations',
    exponentialEq: 'Simple Exponential Equations',
    formula: 'Formula Rearrangement',
    linearRel: 'Linear Relationships',
    quadraticRel: 'Quadratic Relationships',
    exponentialRel: 'Exponential Relationships',
    metric: 'Metric & Derived Units',
    prismPyramid: 'Prism & Pyramid Volume',
    coneSphere: 'Cone & Sphere Volume',
    surfaceArea: 'Surface Area',
    compositeMeasurement: 'Composite Measurement',
    pythagoras2d: 'Pythagoras 2D',
    pythagoras3d: 'Pythagoras 3D',
    trig: 'Trigonometric Ratios',
    similarity: 'Similarity',
    circleAngles: 'Circle Angle Properties',
    loci: 'Loci',
    transformations: 'Coordinate Transformations',
    centreSpread: 'Centre & Spread',
    compareDist: 'Comparing Distributions',
    samplingBias: 'Sampling & Bias',
    inference: 'Informal Inference',
    statLiteracy: 'Statistical Literacy',
    experimentalProb: 'Experimental Probability',
    indepDep: 'Independent & Dependent Events',
    combinedProb: 'Combined Probability',
    reasoning: 'Mathematical Reasoning',
    mixed: 'Mixed Year 11 Skills',
    review: 'Mistake Review'
  },
  skills: [
    'rational','indices','fractionalIndices','surds','scientific','accuracy',
    'proportion','finance','algebraSimplify','expand','factorise','algebraFractions',
    'linearEq','inequalities','simultaneous','quadratics','exponentialEq','formula',
    'linearRel','quadraticRel','exponentialRel','metric','prismPyramid','coneSphere',
    'surfaceArea','compositeMeasurement','pythagoras2d','pythagoras3d','trig',
    'similarity','circleAngles','loci','transformations','centreSpread','compareDist',
    'samplingBias','inference','statLiteracy','experimentalProb','indepDep',
    'combinedProb','reasoning'
  ],
  levels: [['starter','Starter'],['core','Core'],['challenge','Challenge']],
  teacher: 'Year 11 develops fluent Level 1 / curriculum Level 6 number, algebra, measurement, geometry, statistics and probability skills through short, exact-answer questions.'
};

BASE_STORAGE_BY_YEAR[11] = {
  stars: 'dyaaY11Stars',
  hero: 'dyaaY11Hero',
  best: 'dyaaY11Best',
  mistakes: 'dyaaY11Mistakes'
};

/* ===== YEAR 11 HELPERS ===== */
function y11Superscript(value) {
  const map = {'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
  return String(value).split('').map(ch => map[ch] || ch).join('');
}

function y11Power(base, exponent) {
  return `${base}${y11Superscript(exponent)}`;
}

function y11FracPower(base, numerator, denominator) {
  return `${base}${y11Superscript(numerator)}ᐟ${y11Superscript(denominator)}`;
}

function y11LevelCount(starter, core, challenge) {
  return state.level === 'starter' ? starter : state.level === 'core' ? core : challenge;
}

function y11NonZeroInt(min, max) {
  let n = 0;
  while (n === 0) n = randInt(min, max);
  return n;
}

function y11VarTerm(coef, variable='x', first=true) {
  const c = Number(coef);
  if (c === 0) return '';
  const body = `${Math.abs(c) === 1 ? '' : fmt(Math.abs(c))}${variable}`;
  if (first) return c < 0 ? `−${body}` : body;
  return c < 0 ? `− ${body}` : `+ ${body}`;
}

function y11Signed(value) {
  const n = Number(value);
  if (n === 0) return '';
  return n > 0 ? `+ ${fmt(n)}` : `− ${fmt(Math.abs(n))}`;
}

function y11LinearText(m, c) {
  const constant = y11Signed(c);
  return `y = ${y11VarTerm(m,'x',true)}${constant ? ` ${constant}` : ''}`;
}

function y11ClockText(totalMinutes) {
  const day = 24 * 60;
  const value = ((totalMinutes % day) + day) % day;
  const h = Math.floor(value / 60);
  const m = value % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
}

function y11HHMMValue(totalMinutes) {
  const day = 24 * 60;
  const value = ((totalMinutes % day) + day) % day;
  return Math.floor(value / 60) * 100 + value % 60;
}

/* ===== NUMBER ===== */
function y11GenRational() {
  const t = randInt(1, y11LevelCount(5,8,10));
  if (t===1) { const a=randInt(-18,18), b=y11NonZeroInt(-15,15); return q('rational',`${a} − (${b}) = ?`,a-b,'Use the integer sign rules.'); }
  if (t===2) { const a=pick([-24,-18,-12,12,18,24]), b=pick([-6,-4,-3,2,3,4,6]); return q('rational',`${a} ÷ (${b}) = ?`,a/b,'Use the sign rules for division.'); }
  if (t===3) { const [a,b,c,d]=pick([[5,6,1,4],[7,8,-1,2],[-3,5,7,10],[11,12,-1,3]]); return qFrac('rational',`${a}/${b} + ${c}/${d} = ?`,a/b+c/d,'Use a common denominator and simplify.'); }
  if (t===4) { const [a,b,c,d]=pick([[3,4,8,9],[-5,6,9,10],[7,12,6,7],[-4,5,-15,8]]); return qFrac('rational',`${a}/${b} × ${c}/${d} = ?`,a/b*c/d,'Cancel common factors before multiplying.'); }
  if (t===5) { const [a,b,c,d]=pick([[3,4,9,8],[5,6,10,9],[7,10,14,15],[-2,3,4,9]]); return qFrac('rational',`${a}/${b} ÷ ${c}/${d} = ?`,(a/b)/(c/d),'Multiply by the reciprocal.'); }
  if (t===6) { const [a,b]=pick([[2.4,0.6],[3.75,1.25],[4.8,0.4],[6.3,0.9]]); return q('rational',`${a} ÷ ${b} = ?`,a/b,'Scale both numbers to an equivalent whole-number division.'); }
  if (t===7) { const [a,b,c]=pick([[3,4,1.5],[5,8,1.25],[-2,5,0.8],[7,10,-0.3]]); return q('rational',`${a}/${b} + ${c} = ?`,a/b+c,'Convert to a common form.'); }
  if (t===8) { const [n,d]=pick([[17,4],[23,5],[29,8],[37,20]]); return q('rational',`${n} ÷ ${d} as a decimal = ?`,n/d,'Write the remainder as a fraction of the divisor.'); }
  if (t===9) { const a=randInt(-9,9), b=y11NonZeroInt(-8,8), c=y11NonZeroInt(-6,6); return q('rational',`${a} − [${b} − (${c})] = ?`,a-(b-c),'Work from the inner brackets.'); }
  const [a,b,c,d]=pick([[7,8,0.86,1],[5,6,0.84,2],[-3,4,-0.7,2],[-7,10,-0.72,1]]); return q('rational',`Which is greater? Enter 1 for ${a}/${b}, or 2 for ${c}.`,a/b>c?1:2,'Compare using equivalent decimals or fractions.');
}

function y11GenIndices() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const b=pick([2,3,5,7]),a=randInt(2,7),c=randInt(1,5);return q('indices',`${y11Power(b,a)} × ${y11Power(b,c)} = ${b}ⁿ. Find n.`,a+c,'Add exponents for the same base.');}
  if(t===2){const b=pick([2,3,5]),a=randInt(5,11),c=randInt(1,a-1);return q('indices',`${y11Power(b,a)} ÷ ${y11Power(b,c)} = ${b}ⁿ. Find n.`,a-c,'Subtract exponents for the same base.');}
  if(t===3){const b=pick([2,3,4,5]),a=randInt(2,4),c=randInt(2,4);return q('indices',`(${y11Power(b,a)})${y11Superscript(c)} = ${b}ⁿ. Find n.`,a*c,'Multiply the exponents.');}
  if(t===4){const b=randInt(2,20);return q('indices',`${y11Power(b,0)} = ?`,1,'Any non-zero base to power zero equals 1.');}
  if(t===5){const b=pick([2,3,4,5,10]),p=randInt(1,3);return qFrac('indices',`${y11Power(b,-p)} = ?`,1/(b**p),'A negative exponent means take the reciprocal.');}
  if(t===6){const a=randInt(2,5),b=randInt(2,5),m=randInt(2,4);return q('indices',`${y11Power(a,m)} × ${y11Power(b,m)} = ${a*b}ⁿ. Find n.`,m,'Use aᵐbᵐ=(ab)ᵐ.');}
  if(t===7){const a=randInt(2,5),m=randInt(3,6);return q('indices',`${y11Power(a,m)} ÷ ${a} = ${a}ⁿ. Find n.`,m-1,'The base alone has exponent 1.');}
  if(t===8){const b=pick([2,3,5]),m=randInt(2,5),n=randInt(1,4);return q('indices',`${y11Power(b,m)} × ${y11Power(b,-n)} = ${b}ⁿ. Find n.`,m-n,'Add signed exponents.');}
  if(t===9){const b=pick([2,3,4]),m=randInt(2,4),n=randInt(2,3),p=randInt(1,3);return q('indices',`(${y11Power(b,m)})${y11Superscript(n)} ÷ ${y11Power(b,p)} = ${b}ⁿ. Find n.`,m*n-p,'Multiply first, then subtract exponents.');}
  const b=pick([2,3,5]),m=randInt(1,4);return q('indices',`${y11Power(b,-m)} × ${y11Power(b,m)} = ?`,1,'Opposite exponents cancel to exponent zero.');
}

function y11GenFractionalIndices() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const [base,ans]=pick([[4,2],[9,3],[16,4],[25,5],[36,6],[49,7],[64,8],[81,9]]);return q('fractionalIndices',`${y11FracPower(base,1,2)} = ?`,ans,'Power 1/2 means square root.');}
  if(t===2){const [base,ans]=pick([[8,2],[27,3],[64,4],[125,5],[216,6],[343,7],[512,8],[729,9]]);return q('fractionalIndices',`${y11FracPower(base,1,3)} = ?`,ans,'Power 1/3 means cube root.');}
  if(t===3){const [base,num,den,ans]=pick([[16,3,4,8],[81,3,4,27],[27,2,3,9],[32,2,5,4],[64,2,3,16]]);return q('fractionalIndices',`${y11FracPower(base,num,den)} = ?`,ans,'Take the root indicated by the denominator, then apply the numerator power.');}
  if(t===4){const [root,power,ans]=pick([[3,2,9],[4,3,64],[5,2,25],[2,5,32]]);return q('fractionalIndices',`If ${y11FracPower(ans,1,power)} = ${root}, then the denominator of the fractional index is ?`,power,'The denominator tells you which root is taken.');}
  if(t===5){const [base,ans]=pick([[16,0.25,2],[81,0.25,3],[32,0.2,2],[243,0.2,3]]);return q('fractionalIndices',`${base} to the power ${ans} = ?`,Math.round(base**ans),'Convert the decimal exponent to a simple fraction.');}
  if(t===6){const [base,num,den,ans]=pick([[16,-1,2,0.25],[25,-1,2,0.2],[8,-1,3,0.5],[27,-1,3,1/3]]);return qFrac('fractionalIndices',`${y11FracPower(base,num,den)} = ?`,ans,'Take the root, then use the reciprocal for the negative exponent.');}
  if(t===7){const [x,m,n]=pick([[4,2,4],[9,2,4],[8,2,6],[27,2,6]]);return q('fractionalIndices',`${y11FracPower(x,m,n)} can be simplified by reducing the fractional exponent. Reduced denominator = ?`,n/gcd(m,n),'Reduce the numerator and denominator of the exponent.');}
  if(t===8){const [base,num,den,ans]=pick([[64,4,6,16],[81,2,4,9],[32,3,5,8],[16,6,8,8]]);return q('fractionalIndices',`${y11FracPower(base,num,den)} = ?`,ans,'Reduce the fractional exponent if helpful.');}
  if(t===9){const [base,a,b,ans]=pick([[16,1,2,4],[27,1,3,3],[81,1,4,3],[32,1,5,2]]);return q('fractionalIndices',`If ${y11FracPower(base,a,b)} = k, find k.`,ans,'Interpret the fractional power as a root.');}
  const [base,num,den,ans]=pick([[16,5,4,32],[27,4,3,81],[32,6,5,64]]);return q('fractionalIndices',`${y11FracPower(base,num,den)} = ?`,ans,'Take the root first to keep the arithmetic small.');
}

function y11GenSurds() {
  const t=randInt(1,y11LevelCount(5,8,11));
  if(t===1){const [n,k,r]=pick([[8,2,2],[12,2,3],[18,3,2],[20,2,5],[27,3,3],[32,4,2],[45,3,5],[48,4,3],[72,6,2]]);return q('surds',`√${n} = ?√${r}`,k,'Take out the largest square factor.');}
  if(t===2){const [a,b,r]=pick([[3,2,5],[7,-4,3],[5,6,2],[9,-2,7]]);return q('surds',`${a}√${r} ${b>=0?'+':'−'} ${Math.abs(b)}√${r} = ?√${r}`,a+b,'Add or subtract coefficients of like surds.');}
  if(t===3){const [a,b,ans]=pick([[3,12,6],[2,8,4],[5,20,10],[6,24,12]]);return q('surds',`√${a} × √${b} = ?`,ans,'Multiply inside the square root, then simplify.');}
  if(t===4){const n=pick([2,3,5,7,11]);return q('surds',`√${n} × √${n} = ?`,n,'A square root multiplied by itself gives the radicand.');}
  if(t===5){const [a,b,ans]=pick([[12,3,2],[20,5,2],[45,5,3],[72,2,6]]);return q('surds',`√${a} ÷ √${b} = ?`,ans,'Combine the roots, then simplify.');}
  if(t===6){const n=pick([2,3,5,7]);return q('surds',`1/√${n} = √${n}/?. Find the denominator.`,n,'Multiply numerator and denominator by the same surd.');}
  if(t===7){const n=pick([2,3,5,6]);return q('surds',`${n}/√${n} = ?√${n}`,1,'Rationalising gives n√n/n = √n.');}
  if(t===8){const [a,r,b,ans]=pick([[2,3,1,11],[3,2,2,14],[2,5,3,29]]);return q('surds',`(${a}√${r} + ${b})(${a}√${r} − ${b}) = ?`,ans,'Use the difference of squares.');}
  if(t===9){const [a,r,b,ans]=pick([[2,3,5,7],[3,2,4,14],[4,5,3,77]]);return q('surds',`(${a}√${r})² − ${b} = ?`,ans,'Square the coefficient and the surd.');}
  if(t===10){const [n,r,k]=pick([[50,2,5],[75,3,5],[98,2,7],[108,3,6]]);return q('surds',`Coefficient of √${r} when √${n} is simplified = ?`,k,'Factor out the largest perfect square.');}
  const [a,b,r,ans]=pick([[5,3,2,2],[7,2,3,5],[4,1,5,3]]);return q('surds',`${a}√${r} − ${b}√${r} = ?√${r}`,ans,'Combine like surds.');
}

function y11GenScientific() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const [n,c,e]=pick([[640000,6.4,5],[8200000,8.2,6],[37500,3.75,4],[910000000,9.1,8]]);return q('scientific',`${n} = ${c} × 10ⁿ. Find n.`,e,'Move the decimal until the coefficient is between 1 and 10.');}
  if(t===2){const [n,c,e]=pick([[0.00072,7.2,-4],[0.0035,3.5,-3],[0.0000064,6.4,-6],[0.081,8.1,-2]]);return q('scientific',`${n} = ${c} × 10ⁿ. Find n.`,e,'Small values use a negative power of ten.');}
  if(t===3){const [a,b,ea,eb]=pick([[3,4,5,2],[6,5,3,4],[8,2,6,-2],[9,4,-3,5]]);const raw=a*b;const shift=raw>=10?1:0;const coeff=raw/10**shift;return q('scientific',`(${a} × 10${y11Superscript(ea)})(${b} × 10${y11Superscript(eb)}) = ${fmt(coeff)} × 10ⁿ. Find n.`,ea+eb+shift,'Multiply coefficients and add exponents, then standardise.');}
  if(t===4){const [a,b,ea,eb]=pick([[8,2,7,3],[9,3,5,-2],[6,2,-3,-5],[4,2,8,2]]);return q('scientific',`(${a} × 10${y11Superscript(ea)}) ÷ (${b} × 10${y11Superscript(eb)}) = ${a/b} × 10ⁿ. Find n.`,ea-eb,'Divide coefficients and subtract exponents.');}
  if(t===5){const [a,e,b,f,ans]=pick([[7,4,6,5,2],[8,-4,9,-5,1],[3,7,9,6,1],[5,-8,2,-7,2]]);return q('scientific',`Which is larger? Enter 1 for ${a} × 10${y11Superscript(e)}, or 2 for ${b} × 10${y11Superscript(f)}.`,ans,'Compare powers of ten first.');}
  if(t===6){const [c,e,newC,newE]=pick([[32,4,3.2,5],[0.45,7,4.5,6],[72,-5,7.2,-4],[0.81,-3,8.1,-4]]);return q('scientific',`${c} × 10${y11Superscript(e)} = ${newC} × 10ⁿ. Find n.`,newE,'Adjust the exponent when moving the decimal point.');}
  if(t===7){const [a,b,ea,eb]=pick([[4,5,-3,6],[6,3,7,2],[8,4,-2,-5],[3,4,5,-1]]);let coeff=a/b,exp=ea-eb;while(coeff>=10){coeff/=10;exp++;}while(coeff<1){coeff*=10;exp--;}return q('scientific',`(${a} × 10${y11Superscript(ea)}) ÷ (${b} × 10${y11Superscript(eb)}) = ${fmt(coeff)} × 10ⁿ. Find n.`,exp,'Divide coefficients and subtract powers, then standardise the coefficient.');}
  if(t===8){const [c,e,sig,ans]=pick([[4.786,5,3,4.79],[7.946,-4,2,7.9],[3.145,8,3,3.15],[8.364,-6,2,8.4]]);return q('scientific',`Coefficient ${c} in ${c} × 10${y11Superscript(e)} rounded to ${sig} significant figures = ?`,ans,'Round only the coefficient.');}
  if(t===9){const [n,c,e]=pick([[7200000000,7.2,9],[0.000000035,3.5,-8],[60400000,6.04,7]]);return q('scientific',`${n} = ${c} × 10ⁿ. Find n.`,e,'Count decimal-place moves.');}
  const [a,b,e1,e2,coeff,exp]=pick([[2,5,4,4,1,9],[4,3,2,5,1.2,8],[7,2,-3,5,1.4,3]]);return q('scientific',`(${a} × 10${y11Superscript(e1)})(${b} × 10${y11Superscript(e2)}) in standard form has coefficient ${coeff}. Its exponent = ?`,exp,'Standardise the coefficient after multiplying.');
}

function y11GenAccuracy() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const [n,s,ans]=pick([[12.764,3,12.8],[0.07846,2,0.078],[3847,2,3800],[76543,3,76500]]);return q('accuracy',`${n} to ${s} significant figures = ?`,ans,'Count significant digits from the first non-zero digit.');}
  if(t===2){const [n,dp,ans]=pick([[3.146,2,3.15],[7.2846,3,7.285],[12.765,2,12.77],[0.4376,2,0.44]]);return q('accuracy',`${n} to ${dp} decimal places = ?`,ans,'Round using the next decimal digit.');}
  if(t===3){const [value,unit,ans]=pick([[8.4,0.1,8.35],[12.7,0.1,12.65],[35,1,34.5],[240,10,235]]);return q('accuracy',`${value} measured to the nearest ${unit}. Lower bound = ?`,ans,'Subtract half the rounding unit.');}
  if(t===4){const [value,unit,ans]=pick([[8.4,0.1,8.45],[12.7,0.1,12.75],[35,1,35.5],[240,10,245]]);return q('accuracy',`${value} measured to the nearest ${unit}. Upper bound = ?`,ans,'Add half the rounding unit.');}
  if(t===5){const [a,b,ra,rb]=pick([[49.8,6.1,50,6],[19.7,4.9,20,5],[101.2,2.98,100,3],[79.6,9.9,80,10]]);return q('accuracy',`Estimate ${a} × ${b} using ${ra} × ${rb}.`,ra*rb,'Use the stated friendly-number estimate.');}
  if(t===6){const [x,unit,width]=pick([[25,1,1],[8.4,0.1,0.1],[120,10,10]]);return q('accuracy',`${x} is rounded to the nearest ${unit}. Width of the possible-value interval = ?`,width,'The full interval width equals the rounding unit.');}
  if(t===7){const [n,ans]=pick([[0.004786,0.0048],[98765,99000],[0.08643,0.086]]);return q('accuracy',`${n} to 2 significant figures = ?`,ans,'Ignore leading zeros when counting significant figures.');}
  if(t===8){const [value,unit,ans]=pick([[3.25,0.01,3.255],[7.86,0.01,7.865],[12.34,0.01,12.345]]);return q('accuracy',`${value} measured to the nearest ${unit}. Upper bound = ?`,ans,'Add half the smallest measurement unit.');}
  if(t===9)return q('accuracy','Which is more precise? Enter 1=nearest 1 cm, 2=nearest 0.1 cm.',2,'A smaller rounding unit gives greater precision.');
  return q('accuracy','A value recorded as 7.2 to the nearest 0.1 can equal exactly 7.25. Enter 1=True or 0=False.',0,'The upper bound is excluded: values are less than 7.25.');
}

function y11GenProportion() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const k=pick([2,3,4,5,6]),x=pick([3,4,5,6,8]);return q('proportion',`y is directly proportional to x. y=${k*x} when x=${x}. Constant k = ?`,k,'For y=kx, divide y by x.');}
  if(t===2){const k=pick([3,4,5,6]),x=pick([2,3,4,5]);const newX=pick([6,8,10]);return q('proportion',`y is directly proportional to x. y=${k*x} when x=${x}. When x=${newX}, y = ?`,k*newX,'Find k, then use y=kx.');}
  if(t===3){const k=pick([24,30,36,48,60]),x=pick([3,4,5,6]);return q('proportion',`y is inversely proportional to x. y=${k/x} when x=${x}. Constant k = ?`,k,'For y=k/x, multiply x by y.');}
  if(t===4){const k=pick([24,36,48,60]),x1=pick([3,4,6]),x2=pick([2,3,4,6]);return q('proportion',`y is inversely proportional to x with k=${k}. When x=${x2}, y = ?`,k/x2,'Use y=k/x.');}
  if(t===5){const [a,b,c]=pick([[3,5,21],[4,7,20],[5,8,30],[2,3,18]]);return q('proportion',`${a}:${b} = ${c}:?. Find ?.`,b*c/a,'Use equivalent ratios.');}
  if(t===6){const [ratio,total,ans]=pick([[[2,3],40,16],[[3,5],64,24],[[4,7],55,20],[[5,7],72,30]]);return q('proportion',`A total of ${total} is split in the ratio ${ratio[0]}:${ratio[1]}. Smaller share = ?`,ans,'Find one ratio part, then multiply.');}
  if(t===7){const [rate,qty]=pick([[3,8],[4,7],[6,5],[2.5,8]]);return q('proportion',`A quantity costs $${fmt(rate)} per unit. Cost of ${qty} units = $?`,rate*qty,'Multiply unit rate by quantity.');}
  if(t===8){const [scale,map]=pick([[5,7],[4,9],[8,6],[2.5,12]]);return q('proportion',`Map scale: 1 cm represents ${scale} km. ${map} cm represents ? km.`,scale*map,'Multiply map distance by the scale.');}
  if(t===9){const [workers,hours,newWorkers,ans]=pick([[4,6,8,3],[6,8,12,4],[5,10,10,5]]);return q('proportion',`${workers} workers take ${hours} hours at the same rate. ${newWorkers} workers take ? hours.`,ans,'Workers and time are inversely proportional for fixed work.');}
  const [x1,y1,x2,ans]=pick([[4,18,10,45],[6,15,14,35],[5,24,15,72]]);return q('proportion',`y ∝ x. If x=${x1} gives y=${y1}, then x=${x2} gives y = ?`,ans,'Use the same multiplier y/x.');
}

function y11GenFinance() {
  const t=randInt(1,y11LevelCount(5,8,11));
  if(t===1){const [p,r,ans]=pick([[500,10,550],[800,5,840],[600,20,720],[1200,10,1320]]);return q('finance',`$${p} increases by ${r}%. New value = $?`,ans,'Multiply by 1 plus the percentage rate.');}
  if(t===2){const [p,r,ans]=pick([[500,10,405],[800,5,722],[1000,20,640],[400,10,324]]);return q('finance',`$${p} depreciates by ${r}% each year for 2 years. Value after 2 years = $?`,ans,'Apply the decrease twice.');}
  if(t===3){const [p,r,ans]=pick([[500,10,605],[400,20,576],[1000,5,1102.5],[800,10,968]]);return q('finance',`$${p} grows by ${r}% each year for 2 years. Value after 2 years = $?`,ans,'Use repeated percentage growth.');}
  if(t===4){const [ex,ans]=pick([[115,100],[230,200],[575,500]]);return q('finance',`A GST-inclusive price is $${ex}. GST is 15%. Price before GST = $?`,ans,'Divide the inclusive amount by 1.15.');}
  if(t===5){const [pre,ans]=pick([[80,92],[120,138],[200,230],[40,46]]);return q('finance',`Price before 15% GST is $${pre}. GST-inclusive price = $?`,ans,'Multiply by 1.15.');}
  if(t===6){const [nz,rate,foreign]=pick([[100,0.6,60],[250,0.8,200],[300,0.5,150]]);return q('finance',`NZ$${nz} converts at ${rate} foreign units per NZ dollar. Foreign amount = ?`,foreign,'Multiply by the exchange rate.');}
  if(t===7){const [foreign,rate,nz]=pick([[120,0.6,200],[160,0.8,200],[150,0.5,300]]);return q('finance',`${foreign} foreign units convert at ${rate} foreign units per NZ dollar. NZ dollars = ?`,nz,'Divide foreign currency by the rate.');}
  if(t===8){const [p,r,months,ans]=pick([[1000,1,2,1020.1],[500,2,2,520.2],[200,5,2,220.5]]);return q('finance',`$${p} earns ${r}% per month, compounded monthly for ${months} months. Amount = $?`,ans,'Apply the monthly multiplier repeatedly.');}
  if(t===9){const [oldV,newV,ans]=pick([[80,100,25],[120,90,-25],[50,60,20],[200,150,-25]]);return q('finance',`A value changes from ${oldV} to ${newV}. Percentage change = ?%`,ans,'Change ÷ original × 100. A decrease is negative.');}
  if(t===10){const [sale,discount,original]=pick([[60,25,80],[90,10,100],[120,20,150],[75,25,100]]);return q('finance',`After a ${discount}% discount, the price is $${sale}. Original price = $?`,original,'Divide by the remaining percentage multiplier.');}
  const [weekly,annual,ans]=pick([[12,650,26],[15,800,20],[20,1000,40]]);return q('finance',`Plan A costs $${weekly} per week for 52 weeks. Plan B costs $${annual} per year. How many dollars cheaper is the cheaper plan?`,ans,'Convert the weekly plan to an annual cost first.');
}

/* ===== ALGEBRA ===== */
function y11GenAlgebraSimplify() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const a=y11NonZeroInt(-8,8),b=y11NonZeroInt(-8,8);return q('algebraSimplify',`${y11VarTerm(a)} ${y11VarTerm(b,'x',false)} = ?x`,a+b,'Add coefficients of like terms.');}
  if(t===2){const a=randInt(2,8),b=randInt(2,8),c=randInt(2,6);return q('algebraSimplify',`${a}x + ${b}y − ${c}x = ?x + ${b}y`,a-c,'Combine only like terms.');}
  if(t===3){const a=randInt(2,7),b=randInt(2,7),c=randInt(2,7);return q('algebraSimplify',`${a}x + ${b} − ${c}x + ${c} = ?x + ${b+c}`,a-c,'Collect x-terms separately from constants.');}
  if(t===4){const a=randInt(2,5),b=randInt(2,5),x=pick([-3,-2,2,3,4]);return q('algebraSimplify',`For x=${x}, ${a}x + ${b} = ?`,a*x+b,'Substitute the value of x.');}
  if(t===5){const a=randInt(2,6),b=randInt(2,6),x=pick([-2,-1,2,3]);return q('algebraSimplify',`For x=${x}, ${a}x² − ${b}x = ?`,a*x*x-b*x,'Square x before multiplying.');}
  if(t===6){const a=randInt(2,6),b=randInt(2,6),c=randInt(2,5);return q('algebraSimplify',`${a}x² + ${b}x² − ${c}x = ?x² − ${c}x`,a+b,'Only the x² terms are like terms.');}
  if(t===7){const a=y11NonZeroInt(-5,5),b=y11NonZeroInt(-5,5),c=y11NonZeroInt(-5,5);return q('algebraSimplify',`Coefficient of x in ${y11VarTerm(a)} ${y11VarTerm(b,'y',false)} ${y11VarTerm(c,'x',false)} = ?`,a+c,'Combine only x-terms.');}
  if(t===8){const a=randInt(2,6),b=randInt(2,6),c=randInt(2,6);return q('algebraSimplify',`${a}a + ${b}b − ${c}a. Coefficient of a = ?`,a-c,'Collect the a-terms.');}
  if(t===9){const x=pick([-3,-2,2,3]),y=pick([-2,1,2,4]);return q('algebraSimplify',`For x=${x}, y=${y}, 2x − 3y = ?`,2*x-3*y,'Substitute both values carefully.');}
  const a=randInt(2,5),b=randInt(2,5),c=randInt(2,5);return q('algebraSimplify',`${a}x² + ${b}x − ${c}x². Coefficient of x² = ?`,a-c,'Combine like powers only.');
}

function y11GenExpand() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const a=y11NonZeroInt(-6,6),b=y11NonZeroInt(-8,8);return q('expand',`${a}(x ${b>=0?'+':'−'} ${Math.abs(b)}). Constant term after expansion = ?`,a*b,'Multiply both terms by the outside factor.');}
  if(t===2){const a=randInt(2,6),b=randInt(2,6),c=randInt(2,6);return q('expand',`${a}(${b}x + ${c}). Coefficient of x after expansion = ?`,a*b,'Multiply the coefficient of x by the outside factor.');}
  if(t===3){const a=randInt(2,6),b=randInt(2,8),c=randInt(2,6);return q('expand',`${a}(x + ${b}) + ${c}x. Coefficient of x after simplifying = ?`,a+c,'Expand, then combine x-terms.');}
  if(t===4){const a=randInt(1,7),b=randInt(1,7);return q('expand',`(x + ${a})(x + ${b}). Coefficient of x = ?`,a+b,'The middle coefficient is the sum of the constants.');}
  if(t===5){const a=randInt(1,7),b=randInt(1,7);return q('expand',`(x + ${a})(x − ${b}). Constant term = ?`,-a*b,'Multiply the constant terms.');}
  if(t===6){const a=randInt(2,5),b=randInt(1,5),c=randInt(2,4),d=randInt(1,5);return q('expand',`(${a}x + ${b})(${c}x + ${d}). Coefficient of x = ?`,a*d+b*c,'Add the two cross-products.');}
  if(t===7){const a=randInt(2,7);return q('expand',`(x + ${a})². Coefficient of x = ?`,2*a,'Use (x+a)²=x²+2ax+a².');}
  if(t===8){const a=randInt(2,7);return q('expand',`(x − ${a})². Constant term = ?`,a*a,'The constant is the square of a.');}
  if(t===9){const a=randInt(2,7),b=randInt(2,7);return q('expand',`(x + ${a})(x − ${a}) = x² − ?. Find ?.`,a*a,'Use the difference of squares.');}
  const a=randInt(2,5),b=randInt(1,5),c=randInt(2,5);return q('expand',`${a}(2x − ${b}) − ${c}(x + 1). Coefficient of x = ?`,2*a-c,'Expand both brackets, then combine x-terms.');
}

function y11GenFactorise() {
  const t=randInt(1,y11LevelCount(5,8,11));
  if(t===1){const g=randInt(2,8),a=randInt(2,8),b=randInt(1,8);return q('factorise',`${g*a}x + ${g*b} = ${g}(?x + ${b}). Find ?.`,a,'Factor out the common numerical factor.');}
  if(t===2){const g=randInt(2,6),a=randInt(2,6),b=randInt(1,5);return q('factorise',`${g*a}x² + ${g*b}x = ${g}x(?x + ${b}). Find ?.`,a,'Factor out the common factor including x.');}
  if(t===3){const a=randInt(1,8),b=randInt(1,8);return q('factorise',`x² + ${a+b}x + ${a*b} = (x + ${a})(x + ?). Find ?.`,b,'Find two numbers with the required sum and product.');}
  if(t===4){const a=randInt(1,8),b=randInt(1,8);return q('factorise',`x² − ${a+b}x + ${a*b} = (x − ${a})(x − ?). Find ?.`,b,'Find two negative factors.');}
  if(t===5){const a=randInt(2,10);return q('factorise',`x² − ${a*a} = (x − ${a})(x + ?). Find ?.`,a,'Use the difference of squares.');}
  if(t===6){const a=randInt(2,8);return q('factorise',`x² + ${2*a}x + ${a*a} = (x + ?)². Find ?.`,a,'Recognise a perfect-square trinomial.');}
  if(t===7){const p=randInt(2,6),qv=randInt(2,6);return q('factorise',`x² + ${p}x + ${qv}x + ${p*qv} = (x + ${p})(x + ?). Find ?.`,qv,'Group the first two and last two terms.');}
  if(t===8){const a=randInt(2,5),b=randInt(1,5),c=randInt(1,5);const mid=a*c+b;return q('factorise',`${a}x² + ${mid}x + ${b*c} = (${a}x + ${b})(x + ?). Find ?.`,c,'Check the cross terms.');}
  if(t===9){const g=randInt(2,6),a=randInt(2,5),b=randInt(1,6);return q('factorise',`${g*a}x² − ${g*b}x. Greatest common numerical factor = ?`,g*gcd(a,b),'Find the greatest common factor of the coefficients.');}
  if(t===10){const a=randInt(2,7);return q('factorise',`x² − ${2*a}x + ${a*a} = (x − ?)². Find ?.`,a,'Recognise a perfect-square trinomial.');}
  const a=randInt(2,5),b=randInt(1,5),c=randInt(2,5),d=randInt(1,5);return q('factorise',`${a*c}x² + ${a*d+b*c}x + ${b*d} = (${a}x + ${b})(${c}x + ?). Find ?.`,d,'Use factor-pair matching.');
}

function y11GenAlgebraFractions() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const a=pick([4,6,8,10,12]),b=pick([2,4]);if(a%b!==0)return y11GenAlgebraFractions();return q('algebraFractions',`${a}x / ${b} = ?x`,a/b,'Divide the coefficient.');}
  if(t===2){const a=pick([6,8,10,12]),b=pick([2,4]);return q('algebraFractions',`${a}x² / ${b}x = ?x`,a/b,'Cancel one factor of x and divide coefficients.');}
  if(t===3){const a=randInt(2,7);return q('algebraFractions',`(x² − ${a*a})/(x − ${a}) = x + ?. Find ?.`,a,'Factor the numerator as a difference of squares.');}
  if(t===4){const a=randInt(2,7);return q('algebraFractions',`(x² + ${2*a}x + ${a*a})/(x + ${a}) = x + ?. Find ?.`,a,'Factor the numerator as a perfect square.');}
  if(t===5){const a=pick([2,3,4,5]),b=pick([2,3,4,5]);return qFrac('algebraFractions',`For x=${b}, ${a}x/${b} = ?`,a,'Substitute x and simplify.');}
  if(t===6){const a=randInt(2,6),b=randInt(2,6);return q('algebraFractions',`${a}/x + ${b}/x = ?/x`,a+b,'Same denominator: add numerators.');}
  if(t===7){const a=randInt(2,6),b=randInt(2,6);return qFrac('algebraFractions',`${a}x/${b} ÷ x = ?`,a/b,'Cancel x, then simplify the numerical fraction.');}
  if(t===8){const a=randInt(2,7),x=pick([2,3,4,5]);return qFrac('algebraFractions',`For x=${x}, (x + ${a})/x = ?`,(x+a)/x,'Substitute first, then simplify the fraction.');}
  if(t===9){const a=randInt(2,6),b=randInt(2,6),x=pick([2,3,4]);return qFrac('algebraFractions',`For x=${x}, ${a}/x + ${b}/x = ?`,(a+b)/x,'Combine numerators over the common denominator and simplify.');}
  const a=randInt(2,6);return q('algebraFractions',`(x² − ${a}x)/x = x − ?. Find ?.`,a,'Factor x from the numerator and cancel.');
}

function y11GenLinearEq() {
  const t=randInt(1,y11LevelCount(5,8,11));
  const x=pick([-6,-4,-3,-2,2,3,4,5,6,8]);
  if(t===1){const a=y11NonZeroInt(-8,8),b=randInt(-12,12),rhs=a*x+b;return q('linearEq',`${y11VarTerm(a)} ${y11Signed(b)} = ${rhs}. x = ?`,x,'Undo the constant, then divide by the coefficient.');}
  if(t===2){const a=randInt(2,6),b=y11NonZeroInt(-8,8),rhs=a*(x+b);return q('linearEq',`${a}(x ${b>0?'+':'−'} ${Math.abs(b)}) = ${rhs}. x = ?`,x,'Divide first, then undo the bracket constant.');}
  if(t===3){const a=randInt(2,7),c=randInt(1,a-1),b=randInt(-10,10),rhsConst=a*x+b-c*x;return q('linearEq',`${a}x ${y11Signed(b)} = ${y11VarTerm(c)} ${y11Signed(rhsConst)}. x = ?`,x,'Collect x-terms on one side.');}
  if(t===4){const d=pick([2,3,4,5]),localX=d*pick([-3,-2,2,3]),b=randInt(-6,6),rhs=localX/d+b;return q('linearEq',`x/${d} ${y11Signed(b)} = ${fmt(rhs)}. x = ?`,localX,'Undo the constant, then multiply by the denominator.');}
  if(t===5){const a=pick([0.5,1.5,2.5]),b=pick([-4,-2,2,4]),rhs=a*x+b;return q('linearEq',`${a}x ${y11Signed(b)} = ${fmt(rhs)}. x = ?`,x,'Use inverse operations with the decimal coefficient.');}
  if(t===6){const a=randInt(2,5),b=randInt(1,6),c=randInt(1,6),rhs=a*(x+b)+c;return q('linearEq',`${a}(x + ${b}) + ${c} = ${rhs}. x = ?`,x,'Undo the outside constant, divide, then undo the bracket shift.');}
  if(t===7){const a=randInt(2,5),b=randInt(1,5),c=randInt(1,5),d=a*(x-b)-c;return q('linearEq',`${a}(x − ${b}) − ${c} = ${d}. x = ?`,x,'Reverse the operations in order.');}
  if(t===8){const a=randInt(2,6),b=randInt(2,6),rhs=(a+b)*x;return q('linearEq',`${a}x + ${b}x = ${rhs}. x = ?`,x,'Combine like terms first.');}
  if(t===9){let a=randInt(2,5),c=randInt(1,5);while(c===a)c=randInt(1,5);const b=randInt(1,5),rhs=a*(x+b)-c*x;return q('linearEq',`${a}(x + ${b}) − ${y11VarTerm(c,'x',true)} = ${rhs}. x = ?`,x,'Expand and collect like terms.');}
  if(t===10){const a=pick([2,3,4]),b=pick([2,3,4]),localX=lcm(a,b)*pick([2,3,4]),rhs=localX/a+localX/b;return q('linearEq',`x/${a} + x/${b} = ${fmt(rhs)}. x = ?`,localX,'Use a common denominator or factor out x.');}
  const a=randInt(2,5),b=randInt(1,5),c=randInt(1,5);let d=randInt(2,5);while(d===a)d=randInt(2,5);const rhsConst=a*(x-b)+c-d*x;return q('linearEq',`${a}(x − ${b}) + ${c} = ${d}x ${y11Signed(rhsConst)}. x = ?`,x,'Expand and collect x-terms. The coefficients are chosen to give a unique solution.');
}

function y11GenInequalities() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const a=randInt(2,6),boundary=pick([-4,-2,2,3,5]),b=randInt(-6,6),rhs=a*boundary+b;return q('inequalities',`${a}x ${y11Signed(b)} < ${rhs}. Boundary value of x = ?`,boundary,'Solve the matching equality to find the boundary.');}
  if(t===2){const a=pick([-2,-3,-4,-5]),boundary=pick([-4,-2,2,3]),rhs=a*boundary;return q('inequalities',`${y11VarTerm(a)} > ${rhs}. Boundary value of x = ?`,boundary,'Divide by the negative coefficient; the inequality sign would reverse.');}
  if(t===3){const a=randInt(2,5),b=randInt(1,5),boundary=pick([2,3,4,5]);const rhs=a*(boundary+b);return q('inequalities',`${a}(x + ${b}) ≤ ${rhs}. Boundary value = ?`,boundary,'Solve the corresponding equality.');}
  if(t===4){const boundary=pick([-3,-1,2,4]),test=pick([-5,-2,0,3,6]);return q('inequalities',`Does x=${test} satisfy x > ${boundary}? Enter 1=yes, 0=no.`,test>boundary?1:0,'Compare the test value with the boundary.');}
  if(t===5){const boundary=pick([-3,-1,2,4]),test=pick([-5,-2,0,3,6]);return q('inequalities',`Does x=${test} satisfy x ≤ ${boundary}? Enter 1=yes, 0=no.`,test<=boundary?1:0,'Check whether the endpoint is included.');}
  if(t===6){const a=pick([-2,-3,-4]),x=pick([-4,-2,2,3]),b=randInt(-5,5),rhs=a*x+b;return q('inequalities',`${y11VarTerm(a)} ${y11Signed(b)} ≥ ${rhs}. Boundary value of x = ?`,x,'Solve the equality; remember a negative division reverses the sign.');}
  if(t===7){const a=randInt(2,5),b=randInt(1,5),boundary=pick([2,3,4,5]),rhs=a*boundary-b;return q('inequalities',`${a}x − ${b} > ${rhs}. Smallest integer solution = ?`,boundary+1,'Find the boundary first, then take the next integer above it.');}
  if(t===8){const b=pick([2,3,4]),rhs=pick([2,3,4,5]),boundary=b*rhs;return q('inequalities',`x/${b} < ${rhs}. Boundary value of x = ?`,boundary,'Multiply both sides by the positive denominator.');}
  if(t===9){const a=pick([-0.5,-1.5,-2.5]),boundary=pick([-4,-2,2,4]),rhs=a*boundary;return q('inequalities',`${a}x ≤ ${fmt(rhs)}. Boundary value of x = ?`,boundary,'Solve the equality, then reverse the inequality because the coefficient is negative.');}
  return q('inequalities','When multiplying both sides of an inequality by −3, should the inequality sign reverse? Enter 1=yes, 0=no.',1,'Multiplying or dividing by a negative reverses the inequality.');
}

function y11GenSimultaneous() {
  const t=randInt(1,y11LevelCount(5,8,10));
  const x=pick([-4,-2,2,3,4,5,6]),y=pick([-3,-1,1,2,3,4,5]);
  if(t===1)return q('simultaneous',`x + y = ${x+y}; x − y = ${x-y}. Find x.`,x,'Add the equations to eliminate y.');
  if(t===2)return q('simultaneous',`x + y = ${x+y}; x − y = ${x-y}. Find y.`,y,'Subtract or substitute after finding x.');
  if(t===3){const a=pick([2,3,4]);return q('simultaneous',`${a}x + y = ${a*x+y}; x + y = ${x+y}. Find x.`,x,'Subtract the second equation from the first.');}
  if(t===4){const b=pick([2,3,4]);return q('simultaneous',`x + ${b}y = ${x+b*y}; x + y = ${x+y}. Find y.`,y,'Subtract to eliminate x.');}
  if(t===5){const a=pick([2,3]),b=pick([2,3]);return q('simultaneous',`${a}x + y = ${a*x+y}; x + ${b}y = ${x+b*y}. Find x.`,x,'Use elimination or substitution.');}
  if(t===6){const a=pick([2,3]),b=pick([2,3]);return q('simultaneous',`${a}x + y = ${a*x+y}; x + ${b}y = ${x+b*y}. Find y.`,y,'Use elimination or substitution.');}
  if(t===7){const sum=x+y,diff=Math.abs(x-y),larger=Math.max(x,y);return q('simultaneous',`Two numbers have sum ${sum} and positive difference ${diff}. Larger number = ?`,larger,'Use sum and difference together.');}
  if(t===8){const a=pick([2,3,4]),b=pick([2,3]);return q('simultaneous',`${a}x + ${b}y = ${a*x+b*y}; x − y = ${x-y}. Find x.`,x,'Use substitution from x−y.');}
  if(t===9){const qA=pick([2,3,4,5,6]),qB=pick([1,2,3,4,5]),p1=pick([2,3,4]),p2=pick([5,6,7]);const total=p1*qA+p2*qB;return q('simultaneous',`${qA+qB} items are split into two types. Type A costs $${p1}, Type B costs $${p2}, total cost $${total}. Number of Type A items = ?`,qA,'Use count and total-cost equations.');}
  const a=pick([2,3]),b=pick([2,3]),c=pick([2,3]);return q('simultaneous',`${a}x + ${b}y = ${a*x+b*y}; ${c}x − y = ${c*x-y}. Find y.`,y,'Eliminate one variable carefully.');
}

function y11GenQuadratics() {
  const t=randInt(1,y11LevelCount(5,9,13));
  if(t===1){const a=pick([2,3,4,5,6]),b=pick([2,3,4,5,6]);return q('quadratics',`(x − ${a})(x + ${b}) = 0. Positive solution = ?`,a,'Set each factor equal to zero.');}
  if(t===2){const a=pick([2,3,4,5,6]);return q('quadratics',`x² = ${a*a}. Positive solution = ?`,a,'Take the positive square root.');}
  if(t===3){const a=pick([2,3,4,5]),b=pick([1,2,3,4]);const middle=y11VarTerm(b-a,'x',false);return q('quadratics',`x²${middle ? ` ${middle}` : ''} − ${a*b} = 0 has roots ${a} and ?. Find the other root.`,-b,'Use the factorised form (x−a)(x+b).');}
  if(t===4){const r1=pick([-5,-3,-2,2,3,4]),r2=pick([-4,-2,1,2,5]);return q('quadratics',`A quadratic has roots ${r1} and ${r2}. Sum of roots = ?`,r1+r2,'Add the roots.');}
  if(t===5){const r1=pick([-5,-3,-2,2,3,4]),r2=pick([-4,-2,1,2,5]);return q('quadratics',`A quadratic has roots ${r1} and ${r2}. Product of roots = ?`,r1*r2,'Multiply the roots.');}
  if(t===6){const a=pick([1,2,3,4,5]),b=pick([1,2,3,4,5]);return q('quadratics',`x² + ${a+b}x + ${a*b} = 0. One root is −${a}. Other root = ?`,-b,'Factor as (x+a)(x+b).');}
  if(t===7){const a=pick([2,3,4,5]);return q('quadratics',`x² − ${a*a} = 0. Negative solution = ?`,-a,'Use difference of squares.');}
  if(t===8){const h=pick([-4,-2,2,3,5]),k=pick([-3,-1,1,2,4]);return q('quadratics',`For y=(x ${h>=0?'−':'+'} ${Math.abs(h)})² ${y11Signed(k)}, x-coordinate of the vertex = ?`,h,'Vertex form gives the horizontal shift directly.');}
  if(t===9){const h=pick([-4,-2,2,3,5]),k=pick([-3,-1,1,2,4]);return q('quadratics',`For y=(x ${h>=0?'−':'+'} ${Math.abs(h)})² ${y11Signed(k)}, minimum y-value = ?`,k,'A positive square is smallest at zero.');}
  if(t===10){const a=pick([2,3,4]),x=pick([-3,-2,2,3]);return q('quadratics',`For y=${a}x² − 2, when x=${x}, y = ?`,a*x*x-2,'Substitute x and square before multiplying.');}
  if(t===11){const a=pick([2,3,4]),b=pick([1,2,3]);return q('quadratics',`${a}x² − ${a*b*b} = 0. Positive solution = ?`,b,'Divide by the coefficient, then take the square root.');}
  if(t===12){const a=pick([2,3,4]),r=pick([2,3,4]),b=pick([2,3,5]);return q('quadratics',`(${a}x − ${a*r})(x + ${b}) = 0. Positive solution = ?`,r,'Set the first factor equal to zero and divide by its coefficient.');}
  const a=pick([2,3,4]),r=pick([2,3,4]),b=pick([2,3,5]);return q('quadratics',`(${a}x + ${a*r})(x − ${b}) = 0. Negative solution = ?`,-r,'Set the first factor equal to zero and divide by its coefficient.');
}

function y11GenExponentialEq() {
  const t=randInt(1,y11LevelCount(5,8,12));
  if(t===1){const b=pick([2,3,4,5]),x=pick([2,3,4,5]);return q('exponentialEq',`${b}ˣ = ${b**x}. x = ?`,x,'Recognise the power.');}
  if(t===2){const b=pick([2,3,5]),x=pick([2,3,4]);return q('exponentialEq',`${y11Power(b,x)} = ${b}ˣ. x = ?`,x,'Match equal powers with the same base.');}
  if(t===3){const b=pick([2,3,4]),x=pick([2,3,4]);const rhs=b**x*b;return q('exponentialEq',`${b}ˣ × ${b} = ${rhs}. x = ?`,x,'Combine the powers on the left.');}
  if(t===4){const b=pick([2,3,5]),x=pick([3,4,5]);const rhs=b**(x-1);return q('exponentialEq',`${b}ˣ ÷ ${b} = ${rhs}. x = ?`,x,'Subtract one from the exponent when dividing by the base.');}
  if(t===5){const b=pick([2,3]),x=pick([2,3,4]);return q('exponentialEq',`${b}${y11Superscript(2*x)} = ${(b**2)**x}. Exponent on the left = ?`,2*x,'Evaluate the exponent relation.');}
  if(t===6){const x=pick([2,3,4,5]);return q('exponentialEq',`4ˣ = ${4**x}. x = ?`,x,'Recognise powers of 4.');}
  if(t===7){const x=pick([2,3,4]);return q('exponentialEq',`8ˣ = ${8**x}. x = ?`,x,'Recognise powers of 8.');}
  if(t===8){const b=pick([2,3]),x=pick([2,3,4]);return q('exponentialEq',`${b}ˣ = ${b**x}. If y=${b}ˣ, y = ?`,b**x,'Substitute the exponent.');}
  if(t===9){const b=pick([2,3,5]),x=pick([2,3,4]);return q('exponentialEq',`${b}ˣ = ${b**x}. Then ${b}${y11Superscript(x+1)} = ?`,b**(x+1),'Increase the exponent by one, so multiply by the base.');}
  if(t===10){const b=pick([2,3]),x=pick([2,3,4]);return q('exponentialEq',`${b}${y11Superscript(x+1)} ÷ ${b} = ${b}ˣ. Find x.`,x,'Subtract one from the exponent.');}
  if(t===11){const [leftBase,rightBase,rightExp,ans]=pick([[4,2,6,3],[9,3,6,3],[25,5,6,3],[16,2,8,2]]);return q('exponentialEq',`${leftBase}ˣ = ${rightBase}${y11Superscript(rightExp)}. x = ?`,ans,'Rewrite both sides using the same base, then compare exponents.');}
  const [leftBase,rightBase,rightExp,ans]=pick([[8,2,9,3],[27,3,9,3],[32,2,10,2],[125,5,9,3]]);return q('exponentialEq',`${leftBase}ˣ = ${rightBase}${y11Superscript(rightExp)}. x = ?`,ans,'Rewrite the left base as a power of the right base.');
}

function y11GenFormula() {
  const t=randInt(1,y11LevelCount(5,9,14));
  if(t===1){const l=pick([6,8,10,12]),w=pick([3,4,5,6]);return q('formula',`A=lw. If A=${l*w} and l=${l}, w = ?`,w,'Rearrange to w=A/l.');}
  if(t===2){const s=pick([40,50,60,80]),time=pick([2,3,4,5]);return q('formula',`d=st. If d=${s*time} and t=${time}, s = ?`,s,'Rearrange to s=d/t.');}
  if(t===3){const u=pick([2,5,10]),a=pick([2,3,4]),time=pick([3,4,5]);const v=u+a*time;return q('formula',`v=u+at. If v=${v}, u=${u}, t=${time}, a = ?`,a,'Rearrange to a=(v−u)/t.');}
  if(t===4){const r=pick([3,4,5,6,7]);return q('formula',`A=πr² and A=${r*r}π. r = ?`,r,'Divide by π, then take the positive square root.');}
  if(t===5){const r=pick([2,3,4,5]),h=pick([3,4,5,6]);return q('formula',`V=πr²h. If V=${r*r*h}π and r=${r}, h = ?`,h,'Divide by πr².');}
  if(t===6){const a=pick([3,4,5]),b=pick([4,6,8]),h=pick([5,6,10]);const area=(a+b)*h/2;return q('formula',`A=(a+b)h/2. If A=${area}, a=${a}, b=${b}, h = ?`,h,'Multiply area by 2, then divide by a+b.');}
  if(t===7){const F=pick([50,68,86,104]);return q('formula',`C=(F−32)×5/9. If F=${F}, C = ?`,(F-32)*5/9,'Substitute F, then calculate in order.');}
  if(t===8){const m=pick([2,3,4]),c=pick([-5,-2,2,5]),x=pick([-3,-2,2,3]);const y=m*x+c;return q('formula',`${y11LinearText(m,c)}. If y=${y}, x = ?`,x,'Rearrange the linear formula.');}
  if(t===9){const a=pick([3,4,5]),b=pick([4,5,6]),c=Math.sqrt(a*a+b*b);if(!Number.isInteger(c))return y11GenFormula();return q('formula',`c²=a²+b². If c=${c}, a=${a}, b = ?`,b,'Rearrange to b²=c²−a².');}
  if(t===10){const P=pick([30,34,40,46]),l=pick([8,9,12,14]);const w=P/2-l;if(w<=0||!Number.isInteger(w))return y11GenFormula();return q('formula',`P=2l+2w. If P=${P} and l=${l}, w = ?`,w,'Subtract 2l, then divide by 2.');}
  if(t===11){const density=pick([2,3,4,5]),volume=pick([6,8,10,12]);return q('formula',`D=m/V. If D=${density} and V=${volume}, mass m = ?`,density*volume,'Rearrange to m=DV.');}
  if(t===12)return q('formula','v=u+at. Which correctly makes a the subject? Enter 1=(v−u)/t, 2=(v+u)/t, 3=t/(v−u).',1,'Subtract u, then divide by t.');
  if(t===13)return q('formula','A=πr². Which correctly makes r the subject? Enter 1=A/π, 2=√(A/π), 3=√A/π.',2,'Divide by π, then take the positive square root.');
  return q('formula','P=2l+2w. Which correctly makes w the subject? Enter 1=P/2−l, 2=P−2l, 3=(P−l)/2.',1,'Divide the perimeter by 2, then subtract l.');
}

/* ===== RELATIONSHIPS ===== */
function y11GenLinearRel() {
  const t=randInt(1,y11LevelCount(5,8,12));
  if(t===1){const m=y11NonZeroInt(-6,6),c=randInt(-8,8);return q('linearRel',`${y11LinearText(m,c)}. Gradient = ?`,m,'The coefficient of x is the gradient.');}
  if(t===2){const m=y11NonZeroInt(-6,6),c=randInt(-8,8);return q('linearRel',`${y11LinearText(m,c)}. y-intercept = ?`,c,'The constant term is the y-intercept.');}
  if(t===3){const m=y11NonZeroInt(-5,5),c=randInt(-6,6),x=pick([-3,-2,2,3,4]);return q('linearRel',`${y11LinearText(m,c)}. When x=${x}, y = ?`,m*x+c,'Substitute x into the rule.');}
  if(t===4){const m=y11NonZeroInt(-5,5),c=randInt(-6,6),x=pick([-3,-2,2,3]);const y=m*x+c;return q('linearRel',`${y11LinearText(m,c)}. When y=${y}, x = ?`,x,'Rearrange or work backwards.');}
  if(t===5){const x1=pick([-3,-2,0,1]),m=y11NonZeroInt(-5,5),x2=x1+pick([2,3,4]);const y1=randInt(-5,5),y2=y1+m*(x2-x1);return q('linearRel',`Gradient through (${x1}, ${y1}) and (${x2}, ${y2}) = ?`,m,'Use change in y divided by change in x.');}
  if(t===6){const m=y11NonZeroInt(-4,4),c=randInt(-5,5),x1=pick([1,2,3]),x2=x1+2;const y1=m*x1+c,y2=m*x2+c;return q('linearRel',`A line passes through (${x1}, ${y1}) and (${x2}, ${y2}). y-intercept = ?`,c,'Find gradient first, then use y=mx+c.');}
  if(t===7){const m1=pick([-6,-5,-4,2,3]),m2=pick([-3,-2,4,5,6]);if(Math.abs(m1)===Math.abs(m2))return y11GenLinearRel();return q('linearRel',`Which line is steeper? Enter 1 for gradient ${m1}, or 2 for gradient ${m2}.`,Math.abs(m1)>Math.abs(m2)?1:2,'Steepness depends on the magnitude of the gradient.');}
  if(t===8){const m=pick([-5,-3,-2,2,4,6]);return q('linearRel',`A line has gradient ${m}. As x increases, y: enter 1=increases, 2=decreases.`,m>0?1:2,'The sign of the gradient gives the direction.');}
  if(t===9)return q('linearRel','For y=7, gradient = ?',0,'A horizontal line has zero gradient.');
  if(t===10){const x=pick([-6,-3,2,5]);return q('linearRel',`The vertical line x=${x} crosses the x-axis at x = ?`,x,'Every point on the line has the same x-coordinate.');}
  if(t===11){const m=y11NonZeroInt(-5,5),x=pick([-3,-2,1,2,3]),c=randInt(-6,6),y=m*x+c;return q('linearRel',`A line has gradient ${m} and passes through (${x}, ${y}). y-intercept = ?`,c,'Substitute the point into y=mx+c and solve for c.');}
  const [start,step]=pick([[5,3],[7,4],[-2,5],[10,-3]]);return q('linearRel',`Sequence ${start}, ${start+step}, ${start+2*step}, ... has rule an+b. Coefficient a = ?`,step,'The common difference is the coefficient of n.');
}

function y11GenQuadraticRel() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const a=pick([1,2,3,4]),x=pick([-3,-2,2,3]);const expr=a===1?'x²':`${a}x²`;return q('quadraticRel',`For y=${expr}, when x=${x}, y = ?`,a*x*x,'Square x, then multiply by a.');}
  if(t===2){const k=pick([-5,-3,2,4,6]);return q('quadraticRel',`For y=x² ${y11Signed(k)}, minimum y-value = ?`,k,'x² is smallest at x=0.');}
  if(t===3){const h=pick([-4,-2,2,3,5]),k=pick([-3,-1,1,4]);return q('quadraticRel',`For y=(x ${h>=0?'−':'+'} ${Math.abs(h)})² ${y11Signed(k)}, vertex x-coordinate = ?`,h,'Read the horizontal shift from vertex form.');}
  if(t===4){const h=pick([-4,-2,2,3,5]),k=pick([-3,-1,1,4]);return q('quadraticRel',`For y=(x ${h>=0?'−':'+'} ${Math.abs(h)})² ${y11Signed(k)}, vertex y-coordinate = ?`,k,'Read the vertical shift from vertex form.');}
  if(t===5){const a=pick([2,3,4,5]),b=pick([6,7,8,9]);return q('quadraticRel',`Which parabola is narrower? Enter 1 for y=${a}x², 2 for y=${b}x².`,b>a?2:1,'Larger |a| gives a narrower parabola.');}
  if(t===6){const r=pick([2,3,4,5]);return q('quadraticRel',`For y=x²−${r*r}, positive x-intercept = ?`,r,'Set y=0 and solve x²=r².');}
  if(t===7){const r1=pick([-5,-3,-2]),r2=pick([2,3,4,5]);return q('quadraticRel',`A parabola crosses the x-axis at ${r1} and ${r2}. Axis of symmetry x = ?`,(r1+r2)/2,'The axis lies halfway between the roots.');}
  if(t===8){const h=pick([-3,-2,2,4]),x=h+pick([-2,-1,1,2]);return q('quadraticRel',`For y=(x ${h>=0?'−':'+'} ${Math.abs(h)})², when x=${x}, y = ?`,(x-h)**2,'Find the horizontal distance from the vertex, then square it.');}
  if(t===9)return q('quadraticRel','For y=−2x²+3, the parabola opens: enter 1=up, 2=down.',2,'A negative x² coefficient opens downward.');
  return q('quadraticRel','For y=3x²−4, the y-intercept = ?',-4,'Set x=0.');
}

function y11GenExponentialRel() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const b=pick([2,3,4,5]),x=pick([2,3,4]);return q('exponentialRel',`For y=${b}ˣ, when x=${x}, y = ?`,b**x,'Evaluate the power.');}
  if(t===2){const a=pick([2,3,5]),b=pick([2,3,4]),x=pick([2,3]);return q('exponentialRel',`For y=${a}×${b}ˣ, when x=${x}, y = ?`,a*b**x,'Evaluate the power, then multiply by the starting value.');}
  if(t===3){const start=pick([2,3,5]),r=pick([2,3,4]);return q('exponentialRel',`Sequence ${start}, ${start*r}, ${start*r*r}, ${start*r*r*r}, ... Growth factor = ?`,r,'Divide any term by the previous term.');}
  if(t===4){const start=pick([64,81,100]),r=pick([0.5,0.25]);return q('exponentialRel',`A quantity starts at ${start} and is multiplied by ${r} each step. Value after 2 steps = ?`,start*r*r,'Apply the multiplier twice.');}
  if(t===5){const r=pick([1.1,1.2,1.5]);return q('exponentialRel',`A repeated growth multiplier is ${r}. Percentage increase each step = ?%`,(r-1)*100,'Subtract 1 and convert to a percentage.');}
  if(t===6){const r=pick([0.9,0.8,0.75]);return q('exponentialRel',`A repeated multiplier is ${r}. Percentage decrease each step = ?%`,(1-r)*100,'Subtract the multiplier from 1.');}
  if(t===7){const b=pick([2,3,4]),x=pick([2,3,4]);return q('exponentialRel',`For y=${b}ˣ, increasing x by 1 multiplies y by ?`,b,'The base is the constant multiplicative rate.');}
  if(t===8){const b=pick([2,3]),x=pick([2,3,4]);return q('exponentialRel',`For y=${b}ˣ, y=${b**x}. x = ?`,x,'Match the value to a power of the base.');}
  if(t===9){const start=pick([5,10,20]),r=pick([2,3]);const n=pick([3,4]);return q('exponentialRel',`A sequence starts at ${start} and multiplies by ${r}. Term ${n} = ?`,start*r**(n-1),'Term 1 is the starting value.');}
  return q('exponentialRel','Which represents exponential growth? Enter 1=add 5 each step, 2=multiply by 1.2 each step.',2,'Exponential change uses a constant multiplier.');
}

/* ===== MEASUREMENT ===== */
function y11GenMetric() {
  const t=randInt(1,y11LevelCount(5,8,11));
  if(t===1){const km=pick([1.2,2.5,3.6,4.8]);return q('metric',`${km} km = ? m`,km*1000,'Multiply kilometres by 1000.');}
  if(t===2){const cm=pick([25,40,75,120]);return q('metric',`${cm} cm = ? m`,cm/100,'100 cm = 1 m.');}
  if(t===3){const area=pick([2,3,5,8]);return q('metric',`${area} m² = ? cm²`,area*10000,'Area conversion squares the length conversion.');}
  if(t===4){const volume=pick([1,2,3,5]);return q('metric',`${volume} m³ = ? L`,volume*1000,'1 m³ = 1000 L.');}
  if(t===5){const ml=pick([250,500,750,1250]);return q('metric',`${ml} mL = ? cm³`,ml,'1 mL = 1 cm³.');}
  if(t===6){const ms=pick([2000,3500,5000]);return q('metric',`${ms} ms = ? s`,ms/1000,'1000 milliseconds = 1 second.');}
  if(t===7){const micro=pick([2000,5000,8000]);return q('metric',`${micro} microseconds = ? milliseconds`,micro/1000,'1000 microseconds = 1 millisecond.');}
  if(t===8){const gb=pick([2,3,5]);return q('metric',`${gb} TB = ? GB`,gb*1000,'Use decimal SI: 1 TB = 1000 GB.');}
  if(t===9){const [d,t]=pick([[120,2],[180,3],[240,4]]);return q('metric',`${d} km in ${t} h = ? km/h`,d/t,'Speed unit is distance divided by time.');}
  if(t===10){const [mass,vol]=pick([[20,5],[36,6],[48,8],[75,15]]);return q('metric',`Mass ${mass} g, volume ${vol} cm³. Density = ? g/cm³`,mass/vol,'Density = mass ÷ volume.');}
  return q('metric','Which prefix means one billion times the base unit? Enter 1=mega, 2=giga, 3=tera.',2,'Giga means 10⁹.');
}

function y11GenPrismPyramid() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const l=pick([5,6,8,10]),w=pick([3,4,5]),h=pick([2,3,4]);return q('prismPyramid',`Rectangular prism ${l}×${w}×${h}. Volume = ?`,l*w*h,'Volume = length × width × height.');}
  if(t===2){const b=pick([6,8,10]),h=pick([4,6,8]),len=pick([5,6,10]);return q('prismPyramid',`Triangular prism: triangle base ${b}, triangle height ${h}, prism length ${len}. Volume = ?`,b*h/2*len,'Find triangular area, then multiply by prism length.');}
  if(t===3){const baseArea=pick([24,30,36,48]),h=pick([4,5,6]);return q('prismPyramid',`A prism has cross-sectional area ${baseArea} and length ${h}. Volume = ?`,baseArea*h,'Prism volume = cross-sectional area × length.');}
  if(t===4){const base=pick([36,48,60,72]),h=pick([3,6,9]);if(base*h%3!==0)return y11GenPrismPyramid();return q('prismPyramid',`A pyramid has base area ${base} and perpendicular height ${h}. Volume = ?`,base*h/3,'Pyramid volume = one third × base area × height.');}
  if(t===5){const l=pick([5,6,8]),w=pick([3,4,5]),v=l*w*pick([2,3,4]);return q('prismPyramid',`A rectangular prism has volume ${v}, length ${l}, width ${w}. Height = ?`,v/(l*w),'Height = volume ÷ base area.');}
  if(t===6){const baseArea=pick([18,24,30]),volume=baseArea*pick([4,5,6]);return q('prismPyramid',`A prism volume is ${volume} and cross-sectional area is ${baseArea}. Length = ?`,volume/baseArea,'Length = volume ÷ cross-sectional area.');}
  if(t===7){const baseArea=pick([24,30,36]),h=pick([6,9,12]);const v=baseArea*h/3;return q('prismPyramid',`A pyramid volume is ${v} and base area is ${baseArea}. Height = ?`,h,'Rearrange V=Bh/3 to h=3V/B.');}
  if(t===8){const base=pick([6,8,10]),height=pick([4,6,8]);return q('prismPyramid',`Triangle base ${base}, height ${height}. Cross-sectional area = ?`,base*height/2,'Area of triangle = bh/2.');}
  if(t===9){const B=pick([25,36,49]),h=pick([6,9,12]);return q('prismPyramid',`Square-based pyramid: base area ${B}, height ${h}. Volume = ?`,B*h/3,'Use V=Bh/3.');}
  const baseArea=pick([20,24,30]),len=pick([5,8,10]);return q('prismPyramid',`A prism has volume ${baseArea*len}. Its length is ${len}. Cross-sectional area = ?`,baseArea,'Cross-sectional area = volume ÷ length.');
}

function y11GenConeSphere() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const r=pick([2,3,4,5]),h=pick([3,6,9,12]);if(r*r*h%3!==0)return y11GenConeSphere();return q('coneSphere',`Cone radius ${r}, height ${h}. Volume = ?π`,r*r*h/3,'Cone volume = πr²h/3.');}
  if(t===2){const r=pick([3,6]);return q('coneSphere',`Sphere radius ${r}. Volume = ?π`,4*r**3/3,'Sphere volume = 4πr³/3.');}
  if(t===3){const r=pick([2,3,4,5]);return q('coneSphere',`Sphere radius ${r}. Surface area = ?π`,4*r*r,'Sphere surface area = 4πr².');}
  if(t===4){const r=pick([2,3,4,5]),h=pick([3,6,9]);const coeff=r*r*h/3;if(!Number.isInteger(coeff))return y11GenConeSphere();return q('coneSphere',`A cone has volume ${coeff}π and radius ${r}. Height = ?`,h,'Rearrange V=πr²h/3.');}
  if(t===5){const r=pick([3,6]);const coeff=4*r**3/3;return q('coneSphere',`A sphere has volume ${coeff}π. Radius = ?`,r,'Use V=4πr³/3.');}
  if(t===6){const r=pick([3,4,5]),h=pick([4,6,8]);return q('coneSphere',`Cylinder radius ${r}, height ${h}. Volume = ?π`,r*r*h,'Cylinder volume = πr²h.');}
  if(t===7){const r=pick([2,3,4]),h=pick([3,6,9]);const cone=r*r*h/3;const cyl=r*r*h;return q('coneSphere',`Same radius and height: cylinder volume is how many times cone volume?`,cyl/cone,'A cone is one third of the matching cylinder.');}
  if(t===8){const r=pick([3,6]);return q('coneSphere',`Sphere radius ${r}. Diameter = ?`,2*r,'Diameter is twice the radius.');}
  if(t===9){const r=pick([3,6]);const V=4*r**3/3;return q('coneSphere',`Sphere volume coefficient is ${V}π. What is r³?`,r**3,'Use 4r³/3 for the coefficient.');}
  return qFrac('coneSphere','A cone and cylinder have the same base and height. Cone volume is what fraction of cylinder volume?',1/3,'A cone is one third of the corresponding cylinder.');
}

function y11GenSurfaceArea() {
  const t=randInt(1,y11LevelCount(5,8,11));
  if(t===1){const s=pick([3,4,5,6]);return q('surfaceArea',`Cube side ${s}. Total surface area = ?`,6*s*s,'Six congruent square faces.');}
  if(t===2){const l=pick([5,6,8]),w=pick([3,4,5]),h=pick([2,3,4]);return q('surfaceArea',`Cuboid ${l}×${w}×${h}. Total surface area = ?`,2*(l*w+l*h+w*h),'Add the three face-pair areas.');}
  if(t===3){const r=pick([2,3,4,5]),h=pick([3,4,5,6]);return q('surfaceArea',`Closed cylinder radius ${r}, height ${h}. Surface area = ?π`,2*r*r+2*r*h,'Two circles plus curved area.');}
  if(t===4){const r=pick([2,3,4,5]),h=pick([3,4,5,6]);return q('surfaceArea',`Cylinder curved surface only: radius ${r}, height ${h}. Area = ?π`,2*r*h,'Curved area = circumference × height.');}
  if(t===5){const [a,b,c,len]=pick([[3,4,5,6],[6,8,10,5],[5,12,13,4]]);const tri=a*b/2;return q('surfaceArea',`Right-triangular prism has triangle sides ${a}, ${b}, ${c} and length ${len}. Total surface area = ?`,2*tri+(a+b+c)*len,'Two triangular ends plus three rectangles.');}
  if(t===6){const s=pick([2,3,4]);return q('surfaceArea',`Two cubes of side ${s} are joined face-to-face. External surface area = ?`,10*s*s,'Twelve faces minus the two hidden joining faces.');}
  if(t===7){const [r,slant]=pick([[3,5],[3,6],[4,5],[4,8],[5,6],[5,8]]);return q('surfaceArea',`Cone curved area uses A=πrl. If r=${r} and slant height l=${slant}, curved area = ?π`,r*slant,'Multiply radius by slant height.');}
  if(t===8){const [r,slant]=pick([[3,5],[3,6],[4,5],[4,8],[5,6],[5,8]]);return q('surfaceArea',`Closed cone radius ${r}, slant height ${slant}. Total surface area = ?π`,r*r+r*slant,'Base area plus curved area.');}
  if(t===9){const r=pick([2,3,4,5]);return q('surfaceArea',`Sphere radius ${r}. Surface area = ?π`,4*r*r,'Use 4πr².');}
  if(t===10){const s=pick([3,4,5]);const area=6*s*s;return q('surfaceArea',`A cube has surface area ${area}. Side length = ?`,s,'Divide by 6, then take the square root.');}
  const r=pick([2,3,4]),h=pick([4,6,8]);const coeff=2*r*r+2*r*h;return q('surfaceArea',`Closed cylinder surface area is ${coeff}π and radius ${r}. Height = ?`,h,'Remove the two circular ends, then divide by 2πr.');
}

function y11GenCompositeMeasurement() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const a=pick([20,30,40]),b=pick([12,18,24]);return q('compositeMeasurement',`Two non-overlapping regions have areas ${a} and ${b}. Combined area = ?`,a+b,'Add non-overlapping areas.');}
  if(t===2){const outer=pick([80,100,120]),cut=pick([20,25,30]);return q('compositeMeasurement',`A shape has outer area ${outer} with a cut-out area ${cut}. Remaining area = ?`,outer-cut,'Subtract the cut-out.');}
  if(t===3){const v1=pick([40,60,80]),v2=pick([20,30,50]);return q('compositeMeasurement',`Two non-overlapping solids have volumes ${v1} and ${v2}. Combined volume = ?`,v1+v2,'Add component volumes.');}
  if(t===4){const l=pick([8,10,12]),w=pick([5,6]),cutL=pick([2,3]),cutW=pick([2,3]);return q('compositeMeasurement',`Rectangle ${l}×${w} with a ${cutL}×${cutW} corner removed. Area = ?`,l*w-cutL*cutW,'Whole rectangle minus cut-out.');}
  if(t===5){const rectL=pick([8,10]),rectW=pick([4,6]),triB=pick([4,6]),triH=pick([4,6]);return q('compositeMeasurement',`Rectangle ${rectL}×${rectW} plus a non-overlapping triangle base ${triB}, height ${triH}. Total area = ?`,rectL*rectW+triB*triH/2,'Add the rectangle and triangle areas.');}
  if(t===6){const a=pick([3,4,5]),scale=pick([2,3]);return q('compositeMeasurement',`A square side ${a} is enlarged by scale factor ${scale}. New area = ?`,a*a*scale*scale,'Area scales by the square of the length factor.');}
  if(t===7){const v=pick([24,40,60]),scale=pick([2,3]);return q('compositeMeasurement',`A solid volume is ${v}. Length scale factor becomes ${scale}. New volume = ?`,v*scale**3,'Volume scales by the cube of the length factor.');}
  if(t===8){const r=pick([2,3,4]);const rect=pick([20,30,40]);return q('compositeMeasurement',`A rectangle area is ${rect}. A circular hole radius ${r} is removed. Remaining area = ${rect} − ?π. Find ?.`,r*r,'Circle area = πr².');}
  if(t===9){const base=pick([30,40,50]),height=pick([4,5,6]);return q('compositeMeasurement',`A prism has volume ${base*height}. Base area = ${base}. Height = ?`,height,'Height = volume ÷ base area.');}
  const a=pick([6,8,10]),b=pick([4,5,6]);return q('compositeMeasurement',`A rectangle ${a}×${b} is split into two triangles by a diagonal. Area of one triangle = ?`,a*b/2,'A diagonal splits a rectangle into equal-area triangles.');
}

/* ===== GEOMETRY ===== */
function y11GenPythagoras2D() {
  const t=randInt(1,y11LevelCount(5,8,10));
  const triple=pick([[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25],[9,12,15]]);
  const [a,b,c]=triple;
  if(t===1)return q('pythagoras2d',`Right triangle legs ${a} and ${b}. Hypotenuse = ?`,c,'Use a²+b²=c².');
  if(t===2)return q('pythagoras2d',`Right triangle hypotenuse ${c}, one leg ${a}. Other leg = ?`,b,'Use b²=c²−a².');
  if(t===3){const k=pick([2,3,4]);return q('pythagoras2d',`${a}, ${b}, ${c} is a right-triangle triple. Multiply all sides by ${k}. New hypotenuse = ?`,c*k,'Scaled Pythagorean triples remain right triangles.');}
  if(t===4){const x1=pick([-4,-2,0,2]),y1=pick([-3,-1,1,3]);return q('pythagoras2d',`Distance between (${x1}, ${y1}) and (${x1+a}, ${y1+b}) = ?`,c,'Coordinate differences form the two perpendicular legs.');}
  if(t===5)return q('pythagoras2d',`Do side lengths ${a}, ${b}, ${c} form a right triangle? Enter 1=yes, 0=no.`,1,'Check a²+b²=c².');
  if(t===6){const bad=c+1;return q('pythagoras2d',`Do side lengths ${a}, ${b}, ${bad} form a right triangle? Enter 1=yes, 0=no.`,0,'Compare the square of the longest side with the sum of the other squares.');}
  if(t===7){const l=pick([6,8,10]),w=pick([8,15,24]);const d=Math.sqrt(l*l+w*w);if(!Number.isInteger(d))return y11GenPythagoras2D();return q('pythagoras2d',`Rectangle ${l} by ${w}. Diagonal = ?`,d,'Use Pythagoras on the rectangle.');}
  if(t===8){const ladder=c,height=b;return q('pythagoras2d',`A ladder length ${ladder} reaches height ${height}. Distance of its base from the wall = ?`,a,'The wall, ground and ladder form a right triangle.');}
  if(t===9){const a2=a*a,b2=b*b;return q('pythagoras2d',`${a}² + ${b}² = ?.`,c*c,'Square and add the two legs.');}
  return q('pythagoras2d',`If c=${c} and a=${a}, then c²−a² = ?`,b*b,'This equals the square of the missing leg.');
}

function y11GenPythagoras3D() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1)return q('pythagoras3d','A cuboid is 3 × 4 × 12. Space diagonal = ?',13,'First base diagonal is 5, then use 5-12-13.');
  if(t===2)return q('pythagoras3d','A cuboid is 6 × 8 × 24. Space diagonal = ?',26,'Base diagonal is 10, then use 10-24-26.');
  if(t===3)return q('pythagoras3d','A cuboid is 5 × 12 × 84. Space diagonal = ?',85,'Base diagonal is 13, then use 13-84-85.');
  if(t===4)return q('pythagoras3d','A cuboid has base diagonal 5 and height 12. Space diagonal = ?',13,'Use Pythagoras a second time.');
  if(t===5)return q('pythagoras3d','A cuboid has space diagonal 13 and base diagonal 5. Height = ?',12,'Use h²=13²−5².');
  if(t===6)return q('pythagoras3d','A cuboid base is 3 by 4. Base diagonal = ?',5,'Use Pythagoras on the base first.');
  if(t===7)return q('pythagoras3d','A cuboid base is 6 by 8 and height is 24. Base diagonal = ?',10,'Find the face diagonal before the space diagonal.');
  if(t===8)return q('pythagoras3d','A cuboid has dimensions 3, 4, 12. Sum of the squares of the three dimensions = ?',169,'The square of the space diagonal is x²+y²+z².');
  if(t===9)return q('pythagoras3d','A cuboid has space diagonal 26 and height 24. Base diagonal = ?',10,'Use d_base²=26²−24².');
  return q('pythagoras3d','For a cuboid, the space diagonal squared equals l²+w²+h². Enter 1=True or 0=False.',1,'Apply Pythagoras in two stages.');
}

function y11GenTrig() {
  const t=randInt(1,y11LevelCount(6,10,13));
  if(t===1)return qFrac('trig','In a 3-4-5 right triangle, sin θ = opposite/hypotenuse with opposite=3. sin θ = ?',3/5,'SOH: sine = opposite ÷ hypotenuse.');
  if(t===2)return qFrac('trig','In a 3-4-5 right triangle, cos θ = adjacent/hypotenuse with adjacent=4. cos θ = ?',4/5,'CAH: cosine = adjacent ÷ hypotenuse.');
  if(t===3)return qFrac('trig','In a 3-4-5 right triangle, tan θ = opposite/adjacent with opposite=3, adjacent=4. tan θ = ?',3/4,'TOA: tangent = opposite ÷ adjacent.');
  if(t===4){const [ratio,adj,opp]=pick([[0.5,8,4],[0.75,8,6],[1.5,4,6],[2,5,10]]);return q('trig',`tan θ = ${ratio}. Adjacent side = ${adj}. Opposite side = ?`,opp,'Use opposite = tan θ × adjacent.');}
  if(t===5){const [ratio,hyp,opp]=pick([[0.5,10,5],[0.6,10,6],[0.8,15,12]]);return q('trig',`sin θ = ${ratio}. Hypotenuse = ${hyp}. Opposite side = ?`,opp,'Use opposite = sin θ × hypotenuse.');}
  if(t===6){const [ratio,hyp,adj]=pick([[0.5,12,6],[0.6,15,9],[0.8,10,8]]);return q('trig',`cos θ = ${ratio}. Hypotenuse = ${hyp}. Adjacent side = ?`,adj,'Use adjacent = cos θ × hypotenuse.');}
  if(t===7)return q('trig','tan 45° = ?',1,'At 45°, opposite and adjacent are equal.');
  if(t===8)return q('trig','sin 30° = ?',0.5,'This is a standard exact value.');
  if(t===9)return q('trig','cos 60° = ?',0.5,'This is a standard exact value.');
  if(t===10){const [fn,val,angle]=pick([['sin',0.5,30],['cos',0.5,60],['tan',1,45]]);return q('trig',`${fn} θ = ${val}. For an acute angle, θ = ?°`,angle,'Use the standard 30°, 45°, and 60° ratios.');}
  if(t===11)return q('trig','Which ratio uses opposite and hypotenuse? Enter 1=sin, 2=cos, 3=tan.',1,'SOH identifies sine.');
  if(t===12)return q('trig','Which ratio uses opposite and adjacent? Enter 1=sin, 2=cos, 3=tan.',3,'TOA identifies tangent.');
  const [baseDiag,height]=pick([[5,5],[12,5],[5,12],[8,6]]);return qFrac('trig',`A cuboid has base diagonal ${baseDiag} and vertical height ${height}. For θ, the angle between the space diagonal and its projection on the base, tan θ = ?`,height/baseDiag,'For this right triangle, opposite=height and adjacent=base diagonal.');
}

function y11GenSimilarity() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const small=pick([3,4,5,6]),scale=pick([2,3,4]);return q('similarity',`A length ${small} is enlarged by scale factor ${scale}. New length = ?`,small*scale,'Multiply corresponding lengths by the scale factor.');}
  if(t===2){const small=pick([3,4,5,6]),large=small*pick([2,3,4]);return q('similarity',`Corresponding lengths are ${small} and ${large}. Scale factor from small to large = ?`,large/small,'Large ÷ small gives scale factor.');}
  if(t===3){const [a,b,c]=pick([[3,5,12],[4,7,20],[5,8,15]]);return q('similarity',`Similar triangles: ${a} corresponds to ${b}; ${c} corresponds to ?. Find ?.`,c*b/a,'Use equal ratios of corresponding sides.');}
  if(t===4){const scale=pick([2,3,4]);return q('similarity',`Length scale factor = ${scale}. Area scale factor = ?`,scale**2,'Area scales by k².');}
  if(t===5){const scale=pick([2,3,4]);return q('similarity',`Length scale factor = ${scale}. Volume scale factor = ?`,scale**3,'Volume scales by k³.');}
  if(t===6){const angle=pick([35,42,58,67]);return q('similarity',`Two triangles are similar. One angle is ${angle}°. The corresponding angle is ?°`,angle,'Corresponding angles in similar shapes are equal.');}
  if(t===7)return q('similarity','Congruent shapes always have scale factor 1. Enter 1=True or 0=False.',1,'Congruent shapes have equal corresponding lengths.');
  if(t===8)return q('similarity','Similar shapes must be the same size. Enter 1=True or 0=False.',0,'Similar shapes have the same shape but may differ in size.');
  if(t===9){const area1=pick([9,16,25]),scale=pick([2,3]);return q('similarity',`A similar shape has area ${area1}. Length scale factor is ${scale}. New area = ?`,area1*scale**2,'Multiply area by the square of the scale factor.');}
  const vol1=pick([8,16,27]),scale=pick([2,3]);return q('similarity',`A similar solid has volume ${vol1}. Length scale factor is ${scale}. New volume = ?`,vol1*scale**3,'Multiply volume by the cube of the scale factor.');
}

function y11GenCircleAngles() {
  const t=randInt(1,y11LevelCount(5,9,12));
  if(t===1){const angle=pick([25,32,38,45,55,68]);return q('circleAngles',`Angle at the circumference is ${angle}°. Angle at the centre subtending the same arc = ?°`,2*angle,'The centre angle is twice the circumference angle on the same arc.');}
  if(t===2){const centre=pick([60,80,100,120,140]);return q('circleAngles',`Angle at the centre is ${centre}°. Angle at the circumference on the same arc = ?°`,centre/2,'The circumference angle is half the centre angle.');}
  if(t===3)return q('circleAngles','Angle in a semicircle = ?°',90,'An angle subtended by a diameter is a right angle.');
  if(t===4){const a=pick([40,55,65,72,83]);return q('circleAngles',`A cyclic quadrilateral has one angle ${a}°. Opposite angle = ?°`,180-a,'Opposite angles in a cyclic quadrilateral sum to 180°.');}
  if(t===5){const a=pick([28,35,47,62]);return q('circleAngles',`Two angles stand on the same chord in the same segment. One is ${a}°. The other = ?°`,a,'Angles in the same segment are equal.');}
  if(t===6)return q('circleAngles','A radius meets a tangent at the point of contact. Angle between them = ?°',90,'Radius is perpendicular to tangent.');
  if(t===7){const a=pick([5,7,9,12]);return q('circleAngles',`Two tangents from the same external point have lengths ${a} and ?. Find ?.`,a,'Tangents from the same external point are equal.');}
  if(t===8){const base=pick([25,35,45,55]);return q('circleAngles',`A triangle formed by two radii has equal base angles ${base}°. Angle at the centre = ?°`,180-2*base,'Angles in a triangle sum to 180°.');}
  if(t===9){const tangentChord=pick([30,40,50,60]);return q('circleAngles',`By the alternate segment theorem, an angle between a tangent and chord is ${tangentChord}°. The angle in the opposite segment = ?°`,tangentChord,'The alternate segment angles are equal.');}
  if(t===10){const minor=pick([40,60,80,100,120]);return q('circleAngles',`The minor angle at the centre is ${minor}°. The reflex angle at the centre = ?°`,360-minor,'Angles around the centre total 360°.');}
  if(t===11)return q('circleAngles','A diameter is also a chord. Enter 1=True or 0=False.',1,'A diameter joins two points on the circle and passes through the centre.');
  return q('circleAngles','Every chord passes through the centre. Enter 1=True or 0=False.',0,'Only a diameter must pass through the centre.');
}

function y11GenLoci() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1)return q('loci','Points exactly 5 cm from point A form: enter 1=circle, 2=straight line.',1,'Fixed distance from one point gives a circle.');
  if(t===2)return q('loci','Points equidistant from points A and B lie on: enter 1=AB, 2=perpendicular bisector of AB.',2,'The perpendicular bisector is the equal-distance locus.');
  if(t===3)return q('loci','Points a fixed distance from a straight line form: enter 1=two parallel lines, 2=one circle.',1,'There is one parallel locus on each side.');
  if(t===4)return q('loci','Points equidistant from two intersecting lines lie on their angle bisectors. Enter 1=True or 0=False.',1,'Angle bisectors are equally distant from both lines.');
  if(t===5)return q('loci','A locus is a set of points satisfying a condition. Enter 1=True or 0=False.',1,'That is the definition of a locus.');
  if(t===6)return q('loci','Which locus has a centre and radius? Enter 1=circle, 2=perpendicular bisector.',1,'A circle is defined by centre and fixed radius.');
  if(t===7)return q('loci','A point must be within 3 m of A. The boundary is a circle of radius ? m.',3,'The boundary is exactly 3 m from A.');
  if(t===8)return q('loci','Points equidistant from A and B lie on the perpendicular bisector of AB. Enter 1=True or 0=False.',1,'Every point on the perpendicular bisector is the same distance from A and B.');
  if(t===9)return q('loci','Points closer to A than B lie on one side of the perpendicular bisector of AB. Enter 1=True or 0=False.',1,'The perpendicular bisector separates points closer to A from points closer to B.');
  return q('loci','A locus requiring distance ≤ 4 from A includes the inside of a circle. Enter 1=True or 0=False.',1,'The inequality includes all points on or inside the boundary.');
}

function y11GenTransformations() {
  const t=randInt(1,y11LevelCount(5,8,11));
  const x=y11NonZeroInt(-6,6),y=y11NonZeroInt(-6,6);
  if(t===1)return q('transformations',`Reflect (${x}, ${y}) in the x-axis. New y-coordinate = ?`,-y,'Reflection in x-axis changes y to −y.');
  if(t===2)return q('transformations',`Reflect (${x}, ${y}) in the y-axis. New x-coordinate = ?`,-x,'Reflection in y-axis changes x to −x.');
  if(t===3)return q('transformations',`Rotate (${x}, ${y}) 180° about the origin. New x-coordinate = ?`,-x,'A 180° rotation sends (x,y) to (−x,−y).');
  if(t===4)return q('transformations',`Rotate (${x}, ${y}) 90° anticlockwise about the origin. New x-coordinate = ?`,-y,'(x,y) becomes (−y,x).');
  if(t===5){const dx=y11NonZeroInt(-5,5),dy=y11NonZeroInt(-5,5);return q('transformations',`Translate (${x}, ${y}) by vector (${dx}, ${dy}). New y-coordinate = ?`,y+dy,'Add the translation vector.');}
  if(t===6){const k=pick([0.5,1.5,2,3]);const xx=pick([2,4,6,8]);return q('transformations',`Enlarge point (${xx}, ${y}) by scale factor ${k} about the origin. New x-coordinate = ?`,xx*k,'Multiply coordinates by the scale factor.');}
  if(t===7){const line=pick([-2,-1,1,2,3]);const xx=line+pick([2,3,4]);return q('transformations',`Reflect x=${xx} across vertical line x=${line}. New x-coordinate = ?`,2*line-xx,'The mirror line is the midpoint of the original and image x-values.');}
  if(t===8){const cx=pick([-2,-1,1,2]),cy=pick([-2,-1,1,2]);const px=cx+pick([2,3,4]),py=cy+pick([2,3,4]);return q('transformations',`Rotate point (${px}, ${py}) 180° about (${cx}, ${cy}). New x-coordinate = ?`,2*cx-px,'The centre is the midpoint of a point and its 180° image.');}
  if(t===9)return q('transformations','Which transformation always preserves lengths? Enter 1=reflection, 2=enlargement scale factor 2.',1,'Reflections are isometries.');
  if(t===10)return q('transformations','An enlargement with scale factor 1 leaves the shape unchanged in size. Enter 1=True or 0=False.',1,'Scale factor 1 preserves all lengths.');
  return q('transformations','A translation changes orientation. Enter 1=True or 0=False.',0,'Translations preserve orientation.');
}

/* ===== STATISTICS ===== */
function y11GenCentreSpread() {
  const t=randInt(1,y11LevelCount(5,8,11));
  if(t===1){const arr=pick([[4,6,8,10],[5,7,9,11],[3,6,9,12],[10,12,14,16]]);return q('centreSpread',`Mean of ${arr.join(', ')} = ?`,arr.reduce((a,b)=>a+b,0)/arr.length,'Add values and divide by the count.');}
  if(t===2){const arr=pick([[3,5,7,9,11],[4,6,8,10,12],[2,3,9,14,20]]);return q('centreSpread',`Median of ${arr.join(', ')} = ?`,median(arr),'The median is the middle ordered value.');}
  if(t===3){const arr=pick([[4,6,7,9,12],[2,5,8,13,17],[10,11,15,18,24]]);return q('centreSpread',`Range of ${arr.join(', ')} = ?`,Math.max(...arr)-Math.min(...arr),'Range = maximum − minimum.');}
  if(t===4){const [q1,q3]=pick([[5,13],[8,20],[12,27],[15,31]]);return q('centreSpread',`Q1=${q1}, Q3=${q3}. IQR = ?`,q3-q1,'IQR = Q3 − Q1.');}
  if(t===5){const arr=pick([[2,4,6,8,10,12,14],[3,5,7,9,11,13,15],[4,6,8,10,12,14,16]]);return q('centreSpread',`Data: ${arr.join(', ')}. Median = ?`,median(arr),'Take the middle value.');}
  if(t===6){const arr=pick([[2,4,6,8,10,12,14],[4,6,8,10,12,14,16],[6,8,10,12,14,16,18]]);return q('centreSpread',`Data: ${arr.join(', ')}. Using the lower half excluding the median, Q1 = ?`,median(arr.slice(0,3)),'Find the median of the lower half.');}
  if(t===7){const arr=pick([[2,4,6,8,10,12,14],[4,6,8,10,12,14,16],[6,8,10,12,14,16,18]]);return q('centreSpread',`Data: ${arr.join(', ')}. Using the upper half excluding the median, Q3 = ?`,median(arr.slice(4)),'Find the median of the upper half.');}
  if(t===8)return q('centreSpread','Which measure is usually less affected by an extreme outlier? Enter 1=mean, 2=median.',2,'The median is resistant to extreme values.');
  if(t===9){const arr=[8,9,10,10,11,12,45];return q('centreSpread',`Data: ${arr.join(', ')}. Obvious outlier = ?`,45,'Look for a value far from the main cluster.');}
  if(t===10){const mean=pick([8,10,12]),n=pick([5,6,8]);return q('centreSpread',`${n} values have mean ${mean}. Total of all values = ?`,mean*n,'Total = mean × number of values.');}
  const arr=[4,6,8,10,12,14,16];return q('centreSpread',`Five-number summary begins minimum=4, Q1=6, median=10, Q3=14. Maximum = ?`,16,'The maximum is the largest data value.');
}

function y11GenCompareDist() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const [a,b]=pick([[18,24],[20,27],[35,31],[42,50]]);return q('compareDist',`Group A median=${a}, Group B median=${b}. Which has the higher centre? Enter 1=A, 2=B.`,a>b?1:2,'Compare the medians.');}
  if(t===2){const [a,b]=pick([[6,10],[12,8],[5,9],[14,7]]);return q('compareDist',`Group A IQR=${a}, Group B IQR=${b}. Which has less middle-50% spread? Enter 1=A, 2=B.`,a<b?1:2,'Smaller IQR means less spread.');}
  if(t===3){const [q3A,medB]=pick([[18,22],[25,30],[14,19]]);return q('compareDist',`Group A Q3=${q3A}; Group B median=${medB}. Does the 75%-to-50% rule support B tending higher? Enter 1=yes, 0=no.`,medB>q3A?1:0,'If B median is above A Q3, at least half of B exceeds at least three quarters of A.');}
  if(t===4){const [q3A,medB]=pick([[22,18],[30,25],[19,16]]);return q('compareDist',`Group A Q3=${q3A}; Group B median=${medB}. Does the 75%-to-50% rule support B tending higher? Enter 1=yes, 0=no.`,0,'B median is not above A Q3.');}
  if(t===5)return q('compareDist','Two groups have the same median but different IQRs. Can their spread differ? Enter 1=yes, 0=no.',1,'Centre and spread describe different features.');
  if(t===6)return q('compareDist','A smaller IQR means the middle 50% is more tightly clustered. Enter 1=True or 0=False.',1,'IQR measures the spread of the middle half.');
  if(t===7){const [a,b]=pick([[0.62,0.48],[0.35,0.55],[0.71,0.69]]);return q('compareDist',`Proportion meeting a condition: A=${a}, B=${b}. Which is higher? Enter 1=A, 2=B.`,a>b?1:2,'Compare the proportions directly.');}
  if(t===8)return q('compareDist','If two box plots overlap heavily, is evidence of a difference in centre usually stronger or weaker? Enter 1=stronger, 2=weaker.',2,'Heavy overlap generally weakens evidence of separation.');
  if(t===9)return q('compareDist','When comparing two groups with strong outliers, median and IQR are often useful. Enter 1=True or 0=False.',1,'They are resistant summaries.');
  return q('compareDist','A higher median guarantees every value in that group is higher. Enter 1=True or 0=False.',0,'Distributions can overlap.');
}

function y11GenSamplingBias() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1)return q('samplingBias','A school asks only basketball-team members about favourite sports. Is the sample likely biased? Enter 1=yes, 0=no.',1,'The sample over-represents one interest group.');
  if(t===2)return q('samplingBias','Randomly selecting names from the full school roll is usually less biased than asking volunteers. Enter 1=True or 0=False.',1,'Random selection reduces self-selection bias.');
  if(t===3)return q('samplingBias','Surveying every member of a population is called: enter 1=sample, 2=census.',2,'A census includes the whole population.');
  if(t===4)return q('samplingBias','Data collected directly for your investigation is: enter 1=primary, 2=secondary.',1,'Primary data is collected first-hand.');
  if(t===5)return q('samplingBias','Data taken from an existing government report is: enter 1=primary, 2=secondary.',2,'Existing published data is secondary data.');
  if(t===6)return q('samplingBias','Which sample usually gives more stable numerical estimates? Enter 1=n=10, 2=n=50.',2,'Larger random samples generally have less sampling variation.');
  if(t===7)return q('samplingBias','A convenience sample is always representative. Enter 1=True or 0=False.',0,'Convenience samples can be systematically biased.');
  if(t===8)return q('samplingBias','Population means the whole group the investigation wants to learn about. Enter 1=True or 0=False.',1,'That is the statistical population.');
  if(t===9)return q('samplingBias','A leading survey question can create response bias. Enter 1=True or 0=False.',1,'Question wording can influence answers.');
  return q('samplingBias','Random sampling completely removes all sampling variation. Enter 1=True or 0=False.',0,'Random samples still vary by chance.');
}

function y11GenInference() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1)return q('inference','A random sample shows a clear difference between groups. Can it be used to make a cautious statement about the population? Enter 1=yes, 0=no.',1,'Informal inference uses sample patterns to make cautious population statements.');
  if(t===2)return q('inference','A biased sample gives strong evidence about the full population. Enter 1=True or 0=False.',0,'Bias limits generalisation.');
  if(t===3){const [q3A,medB]=pick([[18,23],[25,31],[12,17]]);return q('inference',`A Q3=${q3A}, B median=${medB}. Using the 75%-to-50% rule, is evidence that B tends higher reasonably strong? Enter 1=yes, 0=no.`,1,'B median exceeds A Q3.');}
  if(t===4){const [q3A,medB]=pick([[23,20],[31,28],[17,14]]);return q('inference',`A Q3=${q3A}, B median=${medB}. Using the 75%-to-50% rule, is evidence that B tends higher reasonably strong? Enter 1=yes, 0=no.`,0,'B median does not exceed A Q3.');}
  if(t===5)return q('inference','If repeated random samples give similar group differences, confidence in the pattern generally increases. Enter 1=True or 0=False.',1,'Consistency across samples supports the inference.');
  if(t===6)return q('inference','A sample result proves the population parameter exactly. Enter 1=True or 0=False.',0,'Samples contain uncertainty.');
  if(t===7)return q('inference','Which is more relevant for generalising to a population? Enter 1=random sampling, 2=choosing only easy-to-reach people.',1,'Random sampling better supports generalisation.');
  if(t===8)return q('inference','Large overlap between two sample distributions usually weakens evidence of a difference. Enter 1=True or 0=False.',1,'Overlap makes group separation less convincing.');
  if(t===9)return q('inference','A statistically noticeable association automatically proves a causal mechanism. Enter 1=True or 0=False.',0,'Association alone does not establish causation.');
  return q('inference','Informal inference should acknowledge sampling variation. Enter 1=True or 0=False.',1,'Variation is part of sample-to-population reasoning.');
}

function y11GenStatLiteracy() {
  const t=randInt(1,y11LevelCount(5,8,13));
  if(t===1)return q('statLiteracy','A bar chart vertical axis starts at 95 instead of 0, making small differences look huge. Could this be misleading? Enter 1=yes, 0=no.',1,'Truncated scales can exaggerate differences.');
  if(t===2)return q('statLiteracy','“Sales doubled from 1 to 2” is a 100% increase. Enter 1=True or 0=False.',1,'The increase equals the original amount.');
  if(t===3)return q('statLiteracy','A strong correlation proves one variable causes the other. Enter 1=True or 0=False.',0,'Correlation does not by itself prove causation.');
  if(t===4)return q('statLiteracy','A report gives a percentage but not the sample size. Is sample size useful context? Enter 1=yes, 0=no.',1,'The same percentage can have very different reliability at different sample sizes.');
  if(t===5)return q('statLiteracy','If one extreme outlier pulls the mean upward, median may better represent a typical value. Enter 1=True or 0=False.',1,'Median is more resistant to extreme values.');
  if(t===6)return q('statLiteracy','A graph with no labelled units can still support precise numerical interpretation. Enter 1=True or 0=False.',0,'Units are essential context.');
  if(t===7)return q('statLiteracy','A survey headline says “90% agree” from a sample of 10 volunteers. Should you question representativeness? Enter 1=yes, 0=no.',1,'Small volunteer samples may be unrepresentative.');
  if(t===8)return q('statLiteracy','Changing from 20% to 30% is an increase of 10 percentage points. Enter 1=True or 0=False.',1,'Percentage points compare percentages directly.');
  if(t===9)return q('statLiteracy','Changing from 20% to 30% is a 50% relative increase. Enter 1=True or 0=False.',1,'The increase 10 is half of the original 20.');
  if(t===10)return q('statLiteracy','Extrapolating far beyond observed data is generally less reliable than interpolation. Enter 1=True or 0=False.',1,'The trend may not continue outside the data range.');
  if(t===11)return q('statLiteracy','A claim based on a non-random sample should be generalised cautiously. Enter 1=True or 0=False.',1,'Sampling method affects the strength of a claim.');
  if(t===12)return q('statLiteracy','As temperature increases, ice-cream sales generally increase. Association: enter 1=positive, 2=negative, 3=no association.',1,'Both variables tend to increase together.');
  return q('statLiteracy','For a fixed distance, as speed increases, travel time decreases. Association: enter 1=positive, 2=negative, 3=no association.',2,'One variable increases while the other decreases.');
}

/* ===== PROBABILITY ===== */
function y11GenExperimentalProb() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1){const [s,n]=pick([[18,30],[24,40],[35,50],[54,90],[72,120]]);return qFrac('experimentalProb',`An event occurred ${s} times in ${n} trials. Experimental probability = ?`,s/n,'Successes ÷ trials.');}
  if(t===2){const [s,n]=pick([[18,120],[24,80],[35,140],[45,150],[72,160]]);return q('experimentalProb',`An event occurred ${s} times in ${n} trials. Relative frequency = ?%`,s/n*100,'Convert the experimental proportion to a percentage.');}
  if(t===3){const p=pick([0.2,0.25,0.4,0.5,0.75]),n=pick([40,80,100,120,200]);if(!Number.isInteger(p*n))return y11GenExperimentalProb();return q('experimentalProb',`Theoretical probability=${p}. Expected successes in ${n} trials ≈ ?`,p*n,'Multiply probability by the number of trials.');}
  if(t===4)return q('experimentalProb','Which usually gives a more stable estimate? Enter 1=25 trials, 2=2500 trials.',2,'Larger trial counts reduce proportional random fluctuation.');
  if(t===5)return q('experimentalProb','As fair-coin tosses become very numerous, the heads proportion tends toward ?',0.5,'Law of large numbers.');
  if(t===6){const [observed,total,p]=pick([[42,80,0.5],[28,50,0.5],[18,60,1/3]]);return q('experimentalProb',`Observed successes=${observed} in ${total} trials. Theoretical expected successes=${fmt(p*total)}. Difference observed−expected = ?`,observed-p*total,'Compare observed and expected counts.');}
  if(t===7)return q('experimentalProb','Experimental probability must equal theoretical probability exactly in every experiment. Enter 1=True or 0=False.',0,'Random variation causes differences.');
  if(t===8)return q('experimentalProb','A simulation can estimate a probability that is hard to calculate exactly. Enter 1=True or 0=False.',1,'Simulation approximates long-run behaviour.');
  if(t===9){const [s,n]=pick([[30,50],[45,75],[72,120]]);return q('experimentalProb',`${s} successes in ${n} trials. Failures = ?`,n-s,'Successes + failures = total trials.');}
  return q('experimentalProb','Increasing trial count usually makes relative frequency less variable. Enter 1=True or 0=False.',1,'Long-run relative frequencies stabilise.');
}

function y11GenIndepDep() {
  const t=randInt(1,y11LevelCount(5,8,10));
  if(t===1)return q('indepDep','A coin is tossed twice. Is the second toss independent of the first? Enter 1=yes, 0=no.',1,'One toss does not change the next toss probability.');
  if(t===2)return q('indepDep','Two cards are drawn without replacement. Are the draw events independent? Enter 1=yes, 0=no.',0,'The first draw changes the second-draw probabilities.');
  if(t===3)return q('indepDep','Two cards are drawn with replacement. Are the draw events independent? Enter 1=yes, 0=no.',1,'Replacement restores the original probabilities.');
  if(t===4){const [pA,pB]=pick([[0.5,0.4],[0.25,0.6],[0.3,0.5]]);return q('indepDep',`Independent events: P(A)=${pA}, P(B)=${pB}. P(A and B)=?`,pA*pB,'Multiply independent probabilities.');}
  if(t===5){const [pA,pB,pBoth]=pick([[0.5,0.4,0.2],[0.3,0.5,0.15],[0.25,0.8,0.2]]);return q('indepDep',`P(A)=${pA}, P(B)=${pB}, P(A and B)=${pBoth}. Are A and B independent? Enter 1=yes, 0=no.`,Math.abs(pA*pB-pBoth)<1e-9?1:0,'Check whether P(A and B)=P(A)P(B).');}
  if(t===6){const [pA,pB,pBoth]=pick([[0.5,0.4,0.1],[0.3,0.5,0.2],[0.25,0.8,0.1]]);return q('indepDep',`P(A)=${pA}, P(B)=${pB}, P(A and B)=${pBoth}. Are A and B independent? Enter 1=yes, 0=no.`,0,'Compare the intersection with the product of the individual probabilities.');}
  if(t===7)return q('indepDep','Mutually exclusive non-zero events are independent. Enter 1=True or 0=False.',0,'If one occurs, the other cannot, so occurrence changes probability.');
  if(t===8){const red=pick([3,4,5]),blue=pick([2,3,4]),total=red+blue;return qFrac('indepDep',`Bag: ${red} red, ${blue} blue. Without replacement, P(red then red)=?`,red/total*(red-1)/(total-1),'The second probability changes after the first red.');}
  if(t===9){const red=pick([3,4,5]),blue=pick([2,3,4]),total=red+blue;return qFrac('indepDep',`Bag: ${red} red, ${blue} blue. With replacement, P(red then red)=?`,(red/total)**2,'Replacement makes the two draws independent.');}
  return q('indepDep','If P(A|B)=P(A), this supports A and B being independent. Enter 1=True or 0=False.',1,'Independence means knowing B does not change A probability.');
}

function y11GenCombinedProb() {
  const t=randInt(1,y11LevelCount(5,9,12));
  if(t===1){const [pA,pB]=pick([[0.2,0.3],[0.25,0.5],[0.4,0.2]]);return q('combinedProb',`Mutually exclusive events: P(A)=${pA}, P(B)=${pB}. P(A or B)=?`,pA+pB,'Add probabilities when there is no overlap.');}
  if(t===2){const [pA,pB,pBoth]=pick([[0.5,0.4,0.2],[0.6,0.3,0.1],[0.4,0.5,0.15]]);return q('combinedProb',`P(A)=${pA}, P(B)=${pB}, P(A and B)=${pBoth}. P(A or B)=?`,pA+pB-pBoth,'Add the two probabilities and subtract overlap once.');}
  if(t===3){const p=pick([0.2,0.25,0.4,0.5]);return q('combinedProb',`P(A)=${p}. P(not A)=?`,1-p,'Complement probabilities sum to 1.');}
  if(t===4){const p=pick([0.2,0.25,0.5]);return q('combinedProb',`Independent success probability=${p}, tried twice. P(no successes)=?`,(1-p)**2,'Multiply the failure probability twice.');}
  if(t===5){const p=pick([0.2,0.25,0.5]);return q('combinedProb',`Independent success probability=${p}, tried twice. P(at least one success)=?`,1-(1-p)**2,'Use the complement of no successes.');}
  if(t===6){const p=pick([0.25,0.5]);return q('combinedProb',`Independent success probability=${p}, two trials. P(exactly one success)=?`,2*p*(1-p),'There are two orders: success-failure or failure-success.');}
  if(t===7)return qFrac('combinedProb','Two fair coins are tossed. P(exactly one head)=?',1/2,'HT and TH are two of four equally likely outcomes.');
  if(t===8)return qFrac('combinedProb','Two fair six-sided dice are rolled. P(both are 6)=?',1/36,'Multiply 1/6 by 1/6.');
  if(t===9)return qFrac('combinedProb','Two fair six-sided dice are rolled. P(sum is 7)=?',1/6,'There are six ordered outcomes out of 36.');
  if(t===10){const red=3,blue=2,total=5;return qFrac('combinedProb','Bag has 3 red and 2 blue. Without replacement, P(red then blue)=?',red/total*blue/(total-1),'After a red is removed, 4 counters remain.');}
  if(t===11)return q('combinedProb','On one die roll, events “even” and “greater than 3” overlap. Enter 1=True or 0=False.',1,'Outcomes 4 and 6 belong to both events.');
  return q('combinedProb','For overlapping events, P(A or B)=P(A)+P(B) without any adjustment. Enter 1=True or 0=False.',0,'Subtract the intersection to avoid double-counting.');
}

/* ===== MATHEMATICAL REASONING ===== */
function y11GenReasoning() {
  const t=randInt(1,y11LevelCount(5,8,14));
  if(t===1){const price=pick([80,120,160,200]),discount=pick([25,50]);return q('reasoning',`An item costing $${price} is discounted by ${discount}%. Sale price = $?`,price*(1-discount/100),'Find the discount or use the remaining multiplier.');}
  if(t===2){const x=pick([2,3,4,5]),a=pick([2,3,4]),b=pick([1,2,3]);return q('reasoning',`If ${a}x + ${b} = ${a*x+b}, x = ?`,x,'Reverse the linear operations.');}
  if(t===3){const [a,b,c]=pick([[3,4,5],[5,12,13],[8,15,17]]);return q('reasoning',`A rectangular field is ${a} by ${b}. Straight-line diagonal distance = ?`,c,'Use Pythagoras.');}
  if(t===4){const p=pick([0.2,0.25,0.5]),n=pick([40,80,100]);return q('reasoning',`A probability is ${p}. Expected successes in ${n} trials = ?`,p*n,'Multiply probability by number of trials.');}
  if(t===5){const r=pick([2,3,4]),h=pick([3,6,9]);if(r*r*h%3!==0)return y11GenReasoning();return q('reasoning',`A cone has radius ${r}, height ${h}. Volume coefficient in ?π is ?`,r*r*h/3,'Use V=πr²h/3.');}
  if(t===6){const a=pick([2,3,4]),b=pick([3,4,5]);return q('reasoning',`(x + ${a})(x + ${b}) has x-coefficient ?`,a+b,'Add the two constants.');}
  if(t===7){const k=pick([2,3,4]),x=pick([4,5,6]);return q('reasoning',`y is directly proportional to x with k=${k}. If x=${x}, y = ?`,k*x,'Use y=kx.');}
  if(t===8){const base=pick([24,36,48]),h=pick([6,9,12]);return q('reasoning',`Pyramid base area=${base}, height=${h}. Volume = ?`,base*h/3,'Use one third of base area times height.');}
  if(t===9){const [q3A,medB]=pick([[18,23],[25,31],[14,19]]);return q('reasoning',`A Q3=${q3A}; B median=${medB}. Does the 75%-to-50% rule support B tending higher? Enter 1=yes, 0=no.`,1,'B median is above A Q3.');}
  if(t===10){const b=pick([2,3]),x=pick([3,4,5]);return q('reasoning',`${b}ˣ=${b**x}. x = ?`,x,'Recognise the power.');}
  if(t===11){const angle=pick([30,35,40,50]);return q('reasoning',`A circle angle at circumference is ${angle}°. Centre angle on the same arc = ?°`,2*angle,'Centre angle is twice the circumference angle.');}
  if(t===12)return q('reasoning','A sample is large but chosen only from volunteers. Does large size alone remove selection bias? Enter 1=yes, 0=no.',0,'A large biased sample can still be biased.');
  if(t===13){const [perim,opt1,opt2,opt3,ans]=pick([[20,'1 × 9','3 × 7','5 × 5',3],[24,'1 × 11','4 × 8','6 × 6',3]]);return q('reasoning',`A rectangle has perimeter ${perim}. Which integer dimensions give the largest area? Enter 1=${opt1}, 2=${opt2}, 3=${opt3}.`,ans,'Compare the candidate areas; for a fixed perimeter, dimensions closer together give a larger area.');}
  return q('reasoning','Plan A costs $30 + $4 per use. Plan B costs $10 + $6 per use. For 8 uses, which is cheaper? Enter 1=Plan A, 2=Plan B.',2,'Compare total costs: A=$62 and B=$58.');
}

YEAR_BANKS[11] = {
  rational: y11GenRational,
  indices: y11GenIndices,
  fractionalIndices: y11GenFractionalIndices,
  surds: y11GenSurds,
  scientific: y11GenScientific,
  accuracy: y11GenAccuracy,
  proportion: y11GenProportion,
  finance: y11GenFinance,
  algebraSimplify: y11GenAlgebraSimplify,
  expand: y11GenExpand,
  factorise: y11GenFactorise,
  algebraFractions: y11GenAlgebraFractions,
  linearEq: y11GenLinearEq,
  inequalities: y11GenInequalities,
  simultaneous: y11GenSimultaneous,
  quadratics: y11GenQuadratics,
  exponentialEq: y11GenExponentialEq,
  formula: y11GenFormula,
  linearRel: y11GenLinearRel,
  quadraticRel: y11GenQuadraticRel,
  exponentialRel: y11GenExponentialRel,
  metric: y11GenMetric,
  prismPyramid: y11GenPrismPyramid,
  coneSphere: y11GenConeSphere,
  surfaceArea: y11GenSurfaceArea,
  compositeMeasurement: y11GenCompositeMeasurement,
  pythagoras2d: y11GenPythagoras2D,
  pythagoras3d: y11GenPythagoras3D,
  trig: y11GenTrig,
  similarity: y11GenSimilarity,
  circleAngles: y11GenCircleAngles,
  loci: y11GenLoci,
  transformations: y11GenTransformations,
  centreSpread: y11GenCentreSpread,
  compareDist: y11GenCompareDist,
  samplingBias: y11GenSamplingBias,
  inference: y11GenInference,
  statLiteracy: y11GenStatLiteracy,
  experimentalProb: y11GenExperimentalProb,
  indepDep: y11GenIndepDep,
  combinedProb: y11GenCombinedProb,
  reasoning: y11GenReasoning
};
