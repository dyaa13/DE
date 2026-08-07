'use strict';

/* Year 10 configuration and question bank. */
YEAR_CONFIGS[10] = {
  title: 'Year 10 Rapid Fire Mental Maths',
  skillLabel: 'Year 10 Skill',
  mixed: 'Mixed Year 10 Skills',
  labels: {
    rational: 'Rational Number Operations',
    scientific: 'Scientific Notation',
    indices: 'Integer Exponents',
    numberTypes: 'Rational & Irrational Numbers',
    surds: 'Roots & Surds',
    sigfig: 'Significant Figures & Estimation',
    percentages: 'Percentage Change',
    ratioRate: 'Ratio, Rate & Proportion',
    financial: 'Financial Mathematics',
    order: 'Order of Operations',
    collect: 'Collecting Like Terms',
    expandSingle: 'Expanding Single Brackets',
    expandDouble: 'Expanding Two Brackets',
    factorCommon: 'Factorising Common Factors',
    factorQuadratic: 'Factorising Quadratics',
    linear: 'Linear Equations',
    inequalities: 'Linear Inequalities',
    formula: 'Formula Substitution & Rearrangement',
    quadratics: 'Quadratic Equations & Relationships',
    straightLines: 'Straight-Line Relationships',
    linearPatterns: 'Linear Patterns',
    metric: 'Metric Units & Prefixes',
    circle: 'Circle Measurement & Vocabulary',
    compositeArea: 'Composite Area',
    surfaceArea: 'Surface Area',
    volume: 'Volume & Capacity',
    pythagoras: 'Pythagoras',
    speedTime: 'Speed, Distance & Time',
    scale: 'Scale Factors',
    parallelAngles: 'Parallel-Line Angles',
    similarity: 'Similarity & Congruence',
    transformations: 'Coordinate Transformations',
    statsTypes: 'Statistical Investigation Types',
    sampling: 'Sampling & Bias',
    centreSpread: 'Centre & Spread',
    multivariate: 'Multivariate Data',
    scatter: 'Scatter Plots & Predictions',
    experimentalProb: 'Experimental Probability',
    sampleSpaces: 'Sample Spaces',
    jointEvents: 'Joint Events',
    mixed: 'Mixed Year 10 Skills',
    review: 'Mistake Review'
  },
  skills: [
    'rational','scientific','indices','numberTypes','surds','sigfig',
    'percentages','ratioRate','financial','order','collect','expandSingle',
    'expandDouble','factorCommon','factorQuadratic','linear','inequalities',
    'formula','quadratics','straightLines','linearPatterns','metric','circle',
    'compositeArea','surfaceArea','volume','pythagoras','speedTime','scale',
    'parallelAngles','similarity','transformations','statsTypes','sampling',
    'centreSpread','multivariate','scatter','experimentalProb','sampleSpaces',
    'jointEvents'
  ],
  levels: [['starter','Starter'],['core','Core'],['challenge','Challenge']],
  teacher: 'Year 10 focuses on fluent number, algebra, measurement, geometry, statistics and probability, with short questions designed for rapid mental practice.'
};

BASE_STORAGE_BY_YEAR[10] = {
  stars: 'dyaaY10Stars',
  hero: 'dyaaY10Hero',
  best: 'dyaaY10Best',
  mistakes: 'dyaaY10Mistakes'
};

/* ===== YEAR 10 HELPERS ===== */
function y10Superscript(value) {
  const map = {'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
  return String(value).split('').map(ch => map[ch] || ch).join('');
}

function y10Power(base, exponent) {
  return `${base}${y10Superscript(exponent)}`;
}

function y10ClockText(totalMinutes) {
  const day = 24 * 60;
  const value = ((totalMinutes % day) + day) % day;
  const h = Math.floor(value / 60);
  const m = value % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
}

function y10HHMMValue(totalMinutes) {
  const day = 24 * 60;
  const value = ((totalMinutes % day) + day) % day;
  return Math.floor(value / 60) * 100 + value % 60;
}

function y10Signed(value) {
  if (Number(value) === 0) return '';
  return value > 0 ? `+ ${fmt(value)}` : `− ${fmt(Math.abs(value))}`;
}

function y10NonZeroInt(min, max) {
  let value = 0;
  while (value === 0) value = randInt(min, max);
  return value;
}

function y10VarTerm(coef, variable='x', first=true) {
  const c = Number(coef);
  if (c === 0) return '';
  const body = `${Math.abs(c) === 1 ? '' : fmt(Math.abs(c))}${variable}`;
  if (first) return c < 0 ? `−${body}` : body;
  return c < 0 ? `− ${body}` : `+ ${body}`;
}

function y10LinearText(m, c) {
  const constant = y10Signed(c);
  return `y = ${y10VarTerm(m, 'x', true)}${constant ? ` ${constant}` : ''}`;
}

function y10MiddleX(coef) {
  const term = y10VarTerm(coef, 'x', false);
  return term ? ` ${term}` : '';
}

function y10LevelCount(starter, core, challenge) {
  return state.level === 'starter' ? starter : state.level === 'core' ? core : challenge;
}

/* ===== NUMBER ===== */
function y10GenRational() {
  const t = randInt(1, y10LevelCount(5,8,10));
  if (t===1) { const a=randInt(-15,15),b=y10NonZeroInt(-12,12); return q('rational',`${a} − (${b}) = ?`,a-b,'Subtracting a negative is addition.'); }
  if (t===2) { const a=pick([-12,-9,-6,6,9,12]),b=pick([-4,-3,2,3,4]); return q('rational',`${a} ÷ (${b}) = ?`,a/b,'Use the sign rules for division.'); }
  if (t===3) { const [a,b,c,d]=pick([[3,4,1,2],[5,6,1,3],[7,8,3,4],[-3,5,1,2]]); return qFrac('rational',`${a}/${b} + ${c}/${d} = ?`,a/b+c/d,'Use a common denominator.'); }
  if (t===4) { const [a,b,c,d]=pick([[3,4,2,5],[5,6,3,10],[-2,3,3,4],[7,8,-2,3]]); return qFrac('rational',`${a}/${b} × ${c}/${d} = ?`,a/b*c/d,'Multiply numerators and denominators, then simplify.'); }
  if (t===5) { const [a,b,c,d]=pick([[3,4,1,2],[5,6,5,12],[2,3,4,9],[-3,5,6,5]]); return qFrac('rational',`${a}/${b} ÷ ${c}/${d} = ?`,(a/b)/(c/d),'Multiply by the reciprocal.'); }
  if (t===6) { const [n,d,ans]=pick([[17,4,4.25],[23,5,4.6],[29,8,3.625],[31,4,7.75]]); return q('rational',`${n} ÷ ${d} as a decimal = ?`,ans,'Write the remainder as a fraction of the divisor.'); }
  if (t===7) { const [a,b]=pick([[2,3],[3,5],[5,8],[-4,7]]); return qFrac('rational',`Reciprocal of ${a}/${b} = ?`,b/a,'Swap numerator and denominator, keeping the sign.'); }
  if (t===8) { const a=pick([1.2,1.5,2.4,3.6,4.8]),b=pick([0.5,0.25,1.5,2.5]); return q('rational',`${fmt(a)} ÷ ${fmt(b)} = ?`,a/b,'Use equivalent whole-number division or a simple reciprocal.'); }
  if (t===9) { const a=randInt(-8,8),b=randInt(-6,6),c=y10NonZeroInt(-5,5); return q('rational',`${a} − [${b} − (${c})] = ?`,a-(b-c),'Work from the innermost brackets.'); }
  const [a,b,c,d]=pick([[-3,4,-2,3],[-5,8,-3,4],[-7,10,-2,5],[1,3,0.4,1]]); return q('rational',`Which is greater? Enter 1 for ${a}/${b}, or 2 for ${fmt(c/d)}.`,a/b>c/d?1:2,'Compare using decimals or a common denominator.');
}

function y10GenScientific() {
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const [n,c,e]=pick([[56000,5.6,4],[720000,7.2,5],[4300,4.3,3],[9100000,9.1,6]]);return q('scientific',`${n} = ${c} × 10ⁿ. Find n.`,e,'Move the decimal point until the coefficient is between 1 and 10.');}
  if(t===2){const [n,c,e]=pick([[0.0042,4.2,-3],[0.00056,5.6,-4],[0.072,7.2,-2],[0.0000091,9.1,-6]]);return q('scientific',`${n} = ${c} × 10ⁿ. Find n.`,e,'A small number uses a negative exponent.');}
  if(t===3){const c=pick([2,3,4,5,6,7,8,9]),e=pick([2,3,4,5]);return q('scientific',`${c} × 10${y10Superscript(e)} = ?`,c*10**e,'Move the decimal point right for a positive exponent.');}
  if(t===4){const c=pick([2,3,4,5,6,7,8,9]),e=pick([-1,-2,-3,-4]);return q('scientific',`${c} × 10${y10Superscript(e)} = ?`,c*10**e,'Move the decimal point left for a negative exponent.');}
  if(t===5){const [a,b,ea,eb]=pick([[3,2,4,3],[4,5,3,2],[6,3,5,2],[2,4,6,1]]);const raw=a*b,shift=raw>=10?1:0,coeff=raw/(10**shift),exp=ea+eb+shift;return q('scientific',`(${a} × 10${y10Superscript(ea)})(${b} × 10${y10Superscript(eb)}) = ${fmt(coeff)} × 10ⁿ. Find n.`,exp,'Multiply coefficients and add exponents, then rewrite in standard form.');}
  if(t===6){const [a,b,ea,eb]=pick([[8,2,6,2],[9,3,5,2],[6,2,4,1],[4,2,7,3]]);return q('scientific',`(${a} × 10${y10Superscript(ea)}) ÷ (${b} × 10${y10Superscript(eb)}) = ${a/b} × 10ⁿ. Find n.`,ea-eb,'Divide coefficients and subtract exponents.');}
  if(t===7){const [a,b,e,coeff,exp]=pick([[8,9,4,7.2,9],[6,5,3,3,7],[4,8,2,3.2,5],[9,6,1,5.4,3]]);return q('scientific',`(${a} × 10${y10Superscript(e)})(${b} × 10${y10Superscript(e)}) = ${coeff} × 10ⁿ. Find n.`,exp,'Multiply first, then rewrite the coefficient in standard form.');}
  if(t===8){const [a,e,b,f,answer]=pick([[3,5,2,4,1],[4,6,7,5,1],[5,3,8,4,2],[9,2,2,5,2]]);return q('scientific',`Which is larger? Enter 1 for ${a} × 10${y10Superscript(e)}, or 2 for ${b} × 10${y10Superscript(f)}.`,answer,'Compare exponents first.');}
  if(t===9){const [c,e,newC,newE]=pick([[24,3,2.4,4],[36,-4,3.6,-3],[72,5,7.2,6],[45,-2,4.5,-1]]);return q('scientific',`${c} × 10${y10Superscript(e)} = ${newC} × 10ⁿ. Find n.`,newE,'Adjust the power of ten when the coefficient moves one place.');}
  const [c,e,places,answer]=pick([[4.786,-3,3,4.79],[7.946,-5,2,7.9],[3.145,6,3,3.15],[8.364,4,2,8.4]]);return q('scientific',`Coefficient ${c} in ${c} × 10${y10Superscript(e)} rounded to ${places} significant figures = ?`,answer,'Round the coefficient while keeping it between 1 and 10.');
}


function y10GenIndices(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const b=pick([2,3,5,7]),a=randInt(2,6),c=randInt(1,5);return q('indices',`${y10Power(b,a)} × ${y10Power(b,c)} = ${b}ⁿ. Find n.`,a+c,'Add exponents for the same base.');}
  if(t===2){const b=pick([2,3,5]),a=randInt(5,10),c=randInt(1,a-1);return q('indices',`${y10Power(b,a)} ÷ ${y10Power(b,c)} = ${b}ⁿ. Find n.`,a-c,'Subtract exponents for the same base.');}
  if(t===3){const b=pick([2,3,4,5]),a=randInt(2,4),c=randInt(2,4);return q('indices',`(${y10Power(b,a)})${y10Superscript(c)} = ${b}ⁿ. Find n.`,a*c,'Multiply the exponents.');}
  if(t===4){const b=randInt(2,20);return q('indices',`${y10Power(b,0)} = ?`,1,'Any non-zero number to power zero is 1.');}
  if(t===5){const b=pick([2,3,4,5,10]),p=randInt(1,3);return qFrac('indices',`${y10Power(b,-p)} = ?`,1/(b**p),'A negative exponent gives a reciprocal.');}
  if(t===6){const n=pick([2,3,4,5,6]);return q('indices',`(-${n})${y10Superscript(2)} = ?`,n*n,'An even power gives a positive result.');}
  if(t===7){const n=pick([2,3,4,5]),p=pick([3,5]);return q('indices',`(-${n})${y10Superscript(p)} = ?`,-(n**p),'An odd power keeps the negative sign.');}
  if(t===8){const b=pick([2,3,5]),a=randInt(2,5),answer=randInt(-3,5);const c=a-answer;return q('indices',`${y10Power(b,a)} ÷ ${y10Power(b,c)} = ${b}ⁿ. Find n.`,answer,'Subtract the exponents, even when the result is negative.');}
  if(t===9){const [a,b]=pick([[2,3],[3,2],[4,2],[5,2]]);return q('indices',`${a}${y10Superscript(b)} × ${a}${y10Superscript(-b)} = ?`,1,'The exponents add to zero.');}
  const [a,b,c]=pick([[2,3,4],[3,2,5],[5,2,3]]);return q('indices',`${a}${y10Superscript(b)} × ${c}${y10Superscript(b)} = ?`,(a*c)**b,'With the same exponent, multiply the bases first.');
}

function y10GenNumberTypes(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const [item,code]=pick([['0.75',1],['7/8',1],['√2',2],['π',2],['0.333...',1],['∛10',2]]);return q('numberTypes',`${item} is: enter 1 for rational or 2 for irrational.`,code,'Rational numbers can be written as a fraction of integers.');}
  if(t===2){const [n,d,code]=pick([[1,8,1],[3,20,1],[7,25,1],[1,3,0],[1,6,0],[2,7,0]]);return q('numberTypes',`${n}/${d} gives a terminating decimal. Enter 1 for True or 0 for False.`,code,'After simplification, terminating denominators contain only factors 2 and 5.');}
  if(t===3){const [n,d,code]=pick([[1,3,1],[1,6,1],[2,9,1],[1,4,0],[3,20,0],[7,25,0]]);return q('numberTypes',`${n}/${d} gives a recurring decimal. Enter 1 for True or 0 for False.`,code,'Recurring decimals repeat forever.');}
  if(t===4){const n=pick([2,3,5,6,7,8,10,11,12,13]);return q('numberTypes',`√${n} is: enter 1 for rational or 2 for irrational.`,2,'A non-square whole number has an irrational square root.');}
  if(t===5){const n=pick([1,4,9,16,25,36,49,64,81,100,121,144]);return q('numberTypes',`√${n} is: enter 1 for rational or 2 for irrational.`,1,'A perfect square has a whole-number square root.');}
  if(t===6){const r=pick([2,3,4,5,6,7,8,9,10]),n=r*r+pick([1,2,3]);return q('numberTypes',`√${n} lies between ${r} and ?`,r+1,'Compare with consecutive perfect squares.');}
  if(t===7){const r=pick([2,3,4,5,6,7,8,9]);return q('numberTypes',`∛${r**3} = ?`,r,'Find the number whose cube gives the value.');}
  if(t===8){const [n,code]=pick([[8,1],[27,1],[64,1],[125,1],[10,2],[20,2],[50,2]]);return q('numberTypes',`∛${n} is: enter 1 for rational or 2 for irrational.`,code,'Perfect cubes have rational cube roots.');}
  if(t===9){const [a,b]=pick([[35,6],[50,7],[70,8],[90,9]]);return q('numberTypes',`Which is larger? Enter 1 for √${a}, or 2 for ${b}.`,Math.sqrt(a)>b?1:2,'Compare with nearby square numbers.');}
  return q('numberTypes','Which is irrational? Enter 1 for 0.125, 2 for √5, or 3 for 11/20.',2,'√5 cannot be written as a fraction of integers.');
}

function y10GenSurds(){
  const t=randInt(1,y10LevelCount(4,7,12));
  if(t===1){const r=pick([2,3,5,6,7,10]),a=randInt(2,6),b=randInt(1,a-1);return q('surds',`${a}√${r} − ${b}√${r} = ?√${r}. Enter the coefficient.`,a-b,'Subtract coefficients of like roots.');}
  if(t===2){const r=pick([2,3,5,6,7,10]),a=randInt(1,4),b=randInt(1,4);return q('surds',`${a}√${r} + ${b}√${r} = ?√${r}. Enter the coefficient.`,a+b,'Add coefficients of like roots.');}
  if(t===3){const r=pick([2,3,5,6,7,10,11]);return q('surds',`√${r} × √${r} = ?`,r,'A square root multiplied by itself gives the number under the root.');}
  if(t===4){const [a,b,ans]=pick([[4,9,6],[9,16,12],[16,25,20],[25,36,30]]);return q('surds',`√${a} × √${b} = ?`,ans,'Evaluate the perfect square roots first.');}
  if(t===5){const [n,k,r]=pick([[8,2,2],[12,2,3],[18,3,2],[20,2,5],[27,3,3],[32,4,2],[45,3,5],[50,5,2]]);return q('surds',`√${n} = ?√${r}. Enter the coefficient.`,k,'Take the largest perfect-square factor out of the root.');}
  if(t===6){const [a,r,b,ans]=pick([[2,3,3,18],[3,2,2,18],[2,5,4,40],[4,3,2,48]]);return q('surds',`(${a}√${r})(${b}√${r}) = ?`,ans,'Multiply coefficients, then use √r × √r = r.');}
  if(t===7){const [r,n,ans]=pick([[8,2,2],[18,2,3],[12,3,2],[20,5,2],[45,5,3]]);return q('surds',`√${r} ÷ √${n} = ?`,ans,'Simplify the quotient inside the square root when possible.');}
  if(t===8){const [a,r,b,ans]=pick([[5,2,2,3],[7,3,3,4],[8,5,5,3],[9,2,2,7]]);return q('surds',`${a}√${r} − ${b}√${r} = ?√${r}. Enter the coefficient.`,ans,'Combine like roots.');}
  if(t===9){const [n,ans]=pick([[72,6],[98,7],[200,10]]);return q('surds',`√${n} = ?√2. Enter the coefficient.`,ans,'Factor out the largest perfect square.');}
  if(t===10){const [n,d,ans]=pick([[2,2,1],[8,2,2],[18,2,3],[12,3,2]]);return q('surds',`√${n} ÷ √${d} = ?`,ans,'Combine the quotient inside one square root, then simplify.');}
  if(t===11){const r=pick([2,3,5,7]);return q('surds',`1/√${r} = √${r}/?. Find the denominator after rationalising.`,r,'Multiply top and bottom by the same square root.');}
  const [k,r]=pick([[2,2],[3,3],[2,5],[4,2]]);return q('surds',`${k*r}/√${r} = ?√${r}. Enter the coefficient.`,k,'Rationalise by multiplying by √r/√r.');
}


function y10GenSigFig(){
  const t=randInt(1,y10LevelCount(5,7,10));
  if(t===1){const [n,s,ans]=pick([[3847,2,3800],[7462,3,7460],[0.07846,2,0.078],[12.764,3,12.8],[4.876,2,4.9]]);return q('sigfig',`${n} to ${s} significant figures = ?`,ans,'Count significant figures from the first non-zero digit.');}
  if(t===2){const [n,p,ans]=pick([[12.764,2,12.76],[0.07846,3,0.078],[5.994,2,5.99],[3.14159,3,3.142]]);return q('sigfig',`${n} to ${p} decimal places = ?`,ans,'Count places after the decimal point.');}
  if(t===3){const [a,b,ans]=pick([[49.8,6.1,300],[19.7,4.9,100],[81.2,2.9,240],[39.6,7.8,320]]);return q('sigfig',`Estimate ${a} × ${b} using convenient whole numbers.`,ans,'Round to easy nearby whole numbers.');}
  if(t===4){const [a,b,ans]=pick([[198,4.1,50],[398,8.2,50],[603,20.2,30],[248,5.1,50]]);return q('sigfig',`Estimate ${a} ÷ ${b} using convenient numbers.`,ans,'Round to numbers that divide easily.');}
  if(t===5){const [n,place,ans]=pick([[647250,100000,600000],[3847,100,3800],[7462,1000,7000],[0.746,0.1,0.7]]);return q('sigfig',`${n} rounded to the nearest ${place} = ?`,ans,'Look at the next place value.');}
  if(t===6){const [exact,a,b,ans]=pick([[198,200,300,1],[302,300,400,1],[399,400,500,1],[501,500,600,1]]);return q('sigfig',`Which is the better estimate of ${exact}? Enter 1 for ${a}, or 2 for ${b}.`,ans,'Choose the closer rounded value.');}
  if(t===7){const [n,s,ans]=pick([[0.004962,3,0.00496],[12.746,3,12.7],[0.07846,3,0.0785],[4.962,3,4.96]]);return q('sigfig',`${n} to ${s} significant figures = ?`,ans,'Zeros before the first non-zero digit are not significant.');}
  if(t===8){const [a,b,ans]=pick([[3.98,19.9,80],[6.02,49.8,300],[0.49,202,100]]);return q('sigfig',`Estimate ${a} × ${b}.`,ans,'Round each factor to one convenient significant figure.');}
  if(t===9){const [display,count]=pick([['0.00450',3],['12.30',4],['700.5',4],['0.0802',3]]);return q('sigfig',`How many significant figures are in ${display}?`,count,'Leading zeros are not significant; zeros between or after significant digits can be significant.');}
  return q('sigfig','A measurement is 7.46 cm to the nearest 0.01 cm. How many decimal places were used?',2,'Count the digits after the decimal point.');
}


function y10GenPercentages(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const start=pick([40,60,80,100,120,160,200]),p=pick([10,20,25,50]);return q('percentages',`${start} increased by ${p}% = ?`,start*(1+p/100),'Find the percentage increase and add it.');}
  if(t===2){const start=pick([40,60,80,100,120,160,200]),p=pick([10,20,25,50]);return q('percentages',`${start} decreased by ${p}% = ?`,start*(1-p/100),'Find the percentage decrease and subtract it.');}
  if(t===3){const [old,newValue,p]=pick([[80,100,25],[50,60,20],[40,50,25],[120,150,25]]);return q('percentages',`A value rises from ${old} to ${newValue}. Percentage increase = ?%`,p,'Increase ÷ original × 100.');}
  if(t===4){const [old,newValue,p]=pick([[100,80,20],[80,60,25],[200,150,25],[60,54,10]]);return q('percentages',`A value falls from ${old} to ${newValue}. Percentage decrease = ?%`,p,'Decrease ÷ original × 100.');}
  if(t===5){const [p,part,whole]=pick([[25,15,60],[50,24,48],[20,18,90],[10,12,120],[75,30,40]]);return q('percentages',`${p}% of a number is ${part}. The number is ?`,whole,'Divide the part by the percentage as a decimal.');}
  if(t===6){const [start,p1,p2,ans]=pick([[100,20,10,108],[200,10,10,198],[80,25,20,80],[100,50,20,120]]);return q('percentages',`${start} increases by ${p1}%, then decreases by ${p2}%. Final value = ?`,ans,'Apply each percentage change to the new value.');}
  if(t===7){const [p,m]=pick([[15,1.15],[20,1.2],[25,1.25],[10,1.1],[30,1.3]]);return q('percentages',`Multiplier for a ${p}% increase = ?`,m,'Add the percentage decimal to 1.');}
  if(t===8){const [p,m]=pick([[15,0.85],[20,0.8],[25,0.75],[10,0.9],[30,0.7]]);return q('percentages',`Multiplier for a ${p}% decrease = ?`,m,'Subtract the percentage decimal from 1.');}
  if(t===9){const [final,m,original]=pick([[90,0.9,100],[120,1.2,100],[150,0.75,200],[132,1.1,120]]);return q('percentages',`After multiplying by ${m}, a value is ${final}. Original value = ?`,original,'Reverse the change by dividing by the multiplier.');}
  const [a,b,p]=pick([[30,45,50],[40,60,50],[50,75,50],[80,100,25]]);return q('percentages',`${b} is what percentage greater than ${a}?`,p,'Difference ÷ original × 100.');
}

function y10GenRatioRate(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const a=randInt(2,8),b=randInt(2,9),k=randInt(2,6);return qRatio('ratioRate',`Simplify ${a*k}:${b*k}`,`${a/gcd(a,b)}:${b/gcd(a,b)}`,'Divide both parts by their HCF.');}
  if(t===2){const a=randInt(2,7),b=randInt(3,9),k=randInt(2,6);return q('ratioRate',`${a}:${b} = ${a*k}:?`,b*k,'Multiply both parts by the same scale factor.');}
  if(t===3){const a=pick([2,3,4,5]),b=pick([2,3,4,5]),unit=pick([4,5,6,8,10]),total=(a+b)*unit;return q('ratioRate',`${total} is shared in ratio ${a}:${b}. First share = ?`,a*unit,'Find one ratio part, then multiply.');}
  if(t===4){const [cost,n,unit]=pick([[24,6,4],[35,5,7],[48,8,6],[60,12,5]]);return q('ratioRate',`${n} items cost $${cost}. Cost per item = $?`,unit,'Divide total cost by number of items.');}
  if(t===5){const [d,t,s]=pick([[180,3,60],[240,4,60],[150,2.5,60],[210,3.5,60]]);return q('ratioRate',`${d} km in ${t} h. Average speed = ? km/h`,s,'Speed = distance ÷ time.');}
  if(t===6){const scale=pick([2,3,4,5]),old=pick([4,6,8,10]);return q('ratioRate',`A recipe for ${old} people uses 3 cups. For ${old*scale} people, cups needed = ?`,3*scale,'Scale every quantity by the same factor.');}
  if(t===7){const [cm,km,dist]=pick([[1,5,35],[2,10,40],[1,4,28],[3,15,45]]);return q('ratioRate',`Map scale: ${cm} cm represents ${km} km. ${dist} km is ? cm on the map.`,dist/(km/cm),'Use the scale rate.');}
  if(t===8){const [hours,workers,total]=pick([[6,4,24],[8,3,24],[5,6,30],[10,3,30]]);return q('ratioRate',`${workers} workers take ${hours} h for a job. At the same total work rate, worker-hours = ?`,total,'Multiply workers by hours.');}
  if(t===9){const [rate,amount,time]=pick([[12,60,5],[15,90,6],[8,56,7],[20,100,5]]);return q('ratioRate',`At ${rate} units per hour, how many hours for ${amount} units?`,time,'Time = amount ÷ rate.');}
  const [a,b,total,first]=pick([[2,3,50,20],[3,5,64,24],[4,7,77,28],[5,3,64,40]]);return q('ratioRate',`A total of ${total} is split in ratio ${a}:${b}. First part = ?`,first,'Divide by total ratio parts, then multiply.');
}

function y10GenFinancial(){
  const t=randInt(1,y10LevelCount(5,8,12));
  if(t===1){const price=pick([20,40,60,80,100,120,160,200]);return q('financial',`GST is 15%. GST on $${price} = $?`,price*0.15,'Find 10% and 5%, then add.');}
  if(t===2){const price=pick([20,40,60,80,100,120,160,200]);return q('financial',`Price before GST is $${price}. Price including 15% GST = $?`,price*1.15,'Multiply by 1.15.');}
  if(t===3){const price=pick([40,60,80,100,120,160,200]),p=pick([10,20,25,50]);return q('financial',`A $${price} item has ${p}% off. Sale price = $?`,price*(1-p/100),'Subtract the discount from the original price.');}
  if(t===4){const cost=pick([40,50,60,80,100]),p=pick([10,20,25,50]);return q('financial',`An item costs $${cost} and is marked up by ${p}%. Selling price = $?`,cost*(1+p/100),'Add the mark-up to cost.');}
  if(t===5){const principal=pick([100,200,300,400,500,800,1000]),rate=pick([2,5,10]),years=pick([1,2,3,4]);return q('financial',`$${principal} earns ${rate}% simple interest per year for ${years} years. Interest = $?`,principal*rate/100*years,'Simple interest = principal × rate × time.');}
  if(t===6){const principal=pick([100,200,400,500]),rate=pick([10,20]),years=2;return q('financial',`$${principal} grows by ${rate}% per year for ${years} years, compounded yearly. Final amount = $?`,principal*(1+rate/100)**years,'Apply the percentage multiplier each year.');}
  if(t===7){const nz=pick([50,100,150,200]),rate=pick([0.5,0.8,1.2,1.5,2]);return q('financial',`At ${fmt(rate)} foreign units per NZ$1, NZ$${nz} buys ? foreign units`,nz*rate,'Multiply by the exchange rate.');}
  if(t===8){const perKg=pick([4,6,8,10,12,16]),grams=pick([250,500,750]);return q('financial',`A product costs $${perKg} per kg. Cost of ${grams} g = $?`,perKg*grams/1000,'Convert grams to a fraction of a kilogram.');}
  if(t===9){const monthly=pick([10,12,15,20]),annual=monthly*12-pick([10,20,30]);return q('financial',`Plan A costs $${monthly} per month. Plan B costs $${annual} per year. Annual saving with Plan B = $?`,monthly*12-annual,'Compare both plans over 12 months.');}
  if(t===10){const [inclusive,exclusive]=pick([[115,100],[230,200],[345,300],[575,500]]);return q('financial',`A GST-inclusive price is $${inclusive}. Price before 15% GST = $?`,exclusive,'Divide the GST-inclusive price by 1.15.');}
  if(t===11){const [rate,foreign,nz]=pick([[1.5,150,100],[2,200,100],[0.8,80,100],[1.2,240,200]]);return q('financial',`At ${rate} foreign units per NZ$1, ${foreign} foreign units = NZ$?`,nz,'Divide the foreign amount by the exchange rate.');}
  const [principal,rate,months,amount]=pick([[100,10,2,121],[200,10,2,242],[400,5,2,441],[800,5,2,882]]);return q('financial',`$${principal} grows by ${rate}% per month for ${months} months, compounded monthly. Final amount = $?`,amount,'Apply the monthly percentage multiplier once per month.');
}


function y10GenOrder(){
  const t=randInt(1,y10LevelCount(4,6,8));
  if(t===1){const a=randInt(2,7),b=randInt(2,8),c=randInt(1,5);return q('order',`${a}² + ${b} × ${c} = ?`,a*a+b*c,'Powers before multiplication and addition.');}
  if(t===2){const a=randInt(2,6),b=randInt(3,9),c=randInt(1,5);return q('order',`${a} × [${b} − (${c} − ${c+2})] = ?`,a*(b-(c-(c+2))),'Work from the innermost brackets.');}
  if(t===3){const a=randInt(2,6),b=randInt(2,6),c=randInt(2,8);return q('order',`−${a}² + ${b} × ${c} = ?`,-a*a+b*c,'The square is evaluated before the leading negative.');}
  if(t===4){const a=randInt(2,6),b=randInt(2,6),c=randInt(2,8);return q('order',`(−${a})² + ${b} × ${c} = ?`,a*a+b*c,'The brackets make the negative number the base.');}
  if(t===5){const d=pick([2,3,4,5]),k=randInt(4,14),a=randInt(2,d*k-2),b=d*k-a,c=y10NonZeroInt(-8,10);return q('order',`(${a} + ${b}) ÷ ${d} ${c>0?'+':'−'} ${Math.abs(c)} = ?`,k+c,'Brackets, division, then addition or subtraction.');}
  if(t===6){const [a,b,c,d]=pick([[3,4,1,2],[5,6,1,3],[7,8,1,4]]);return qFrac('order',`${a}/${b} + ${c}/${d} × 2 = ?`,a/b+c/d*2,'Multiply before adding.');}
  if(t===7){const a=randInt(2,5),b=randInt(2,5),c=randInt(2,6),d=randInt(1,c);return q('order',`${a}³ ÷ ${a} + ${b} × (${c} − ${d}) = ?`,a*a+b*(c-d),'Powers first, then division and multiplication.');}
  const a=randInt(-6,6),b=randInt(2,5),c=randInt(-5,5),d=randInt(1,4);return q('order',`${a} − ${b} × [${c} − (${d})] = ?`,a-b*(c-d),'Evaluate brackets before multiplying.');
}


/* ===== ALGEBRA ===== */
function y10GenCollect(){
  const t=randInt(1,y10LevelCount(4,6,8));
  if(t===1){const a=randInt(2,9),b=randInt(1,8);return q('collect',`${y10VarTerm(a,'x',true)} ${y10VarTerm(b,'x',false)} = ?x. Enter the coefficient.`,a+b,'Add coefficients of like terms.');}
  if(t===2){const a=randInt(3,10),b=randInt(1,a-1);return q('collect',`${y10VarTerm(a,'x',true)} ${y10VarTerm(-b,'x',false)} = ?x. Enter the coefficient.`,a-b,'Subtract coefficients of like terms.');}
  if(t===3){const a=y10NonZeroInt(-8,8),b=y10NonZeroInt(-8,8),c=y10NonZeroInt(-8,8);const expr=[y10VarTerm(a,'x',true),y10VarTerm(b,'x',false),y10VarTerm(c,'x',false)].join(' ');return q('collect',`${expr} = ?x. Enter the coefficient.`,a+b+c,'Combine all x-coefficients.');}
  if(t===4){const a=randInt(2,8),b=randInt(2,8),c=y10NonZeroInt(-6,6),d=y10NonZeroInt(-6,6);return q('collect',`${a}x ${y10Signed(c)} + ${b}x ${y10Signed(d)}. Coefficient of x after simplifying = ?`,a+b,'Constants do not combine with x-terms.');}
  if(t===5){const a=y10NonZeroInt(-6,6),b=y10NonZeroInt(-6,6),c=y10NonZeroInt(-6,6);const expr=[y10VarTerm(a,'a',true),y10VarTerm(b,'b',false),y10VarTerm(c,'a',false)].join(' ');return q('collect',`${expr}. Coefficient of a = ?`,a+c,'Only like variable terms combine.');}
  if(t===6){const a=randInt(2,6),b=randInt(2,6),x=randInt(-4,6);return q('collect',`If x=${x}, find ${a}x + ${b}x.`,(a+b)*x,'Combine like terms first, then substitute.');}
  if(t===7){const a=randInt(2,6),b=y10NonZeroInt(-5,5),c=randInt(2,6),d=y10NonZeroInt(-5,5);return q('collect',`${a}x ${y10Signed(b)} + ${c}x ${y10Signed(d)}. Constant term after simplifying = ?`,b+d,'Combine the constant terms separately.');}
  const a=y10NonZeroInt(-6,6),b=y10NonZeroInt(-6,6),c=y10NonZeroInt(-6,6),d=y10NonZeroInt(-6,6);const expr=[y10VarTerm(a,'x',true),y10VarTerm(b,'y',false),y10VarTerm(c,'x',false),y10VarTerm(d,'y',false)].join(' ');return q('collect',`${expr}. Coefficient of y = ?`,b+d,'Collect y-terms only.');
}


function y10GenExpandSingle(){
  const t=randInt(1,y10LevelCount(4,6,8));
  if(t===1){const a=randInt(2,7),b=randInt(1,9);return q('expandSingle',`${a}(x + ${b}). Constant term after expanding = ?`,a*b,'Multiply every term inside the bracket.');}
  if(t===2){const a=randInt(2,7),b=randInt(1,9);return q('expandSingle',`${a}(x − ${b}). Constant term after expanding = ?`,-a*b,'Distribute the positive coefficient.');}
  if(t===3){const a=-randInt(2,6),b=randInt(1,8);return q('expandSingle',`${a}(x + ${b}). Constant term after expanding = ?`,a*b,'A negative multiplier changes the sign of every term.');}
  if(t===4){const a=randInt(2,6),b=randInt(2,5),c=y10NonZeroInt(-6,6);return q('expandSingle',`${a}(${b}x ${y10Signed(c)}). Coefficient of x = ?`,a*b,'Multiply the outside coefficient by the x-coefficient.');}
  if(t===5){const a=randInt(2,5),b=randInt(2,5),c=randInt(1,6);return q('expandSingle',`${a}(x + ${c}) + ${b}x. Coefficient of x after simplifying = ?`,a+b,'Expand first, then collect x-terms.');}
  if(t===6){const a=randInt(2,5),b=randInt(2,5),c=randInt(1,6);return q('expandSingle',`${a}(${b}x − ${c}) − ${b}x. Coefficient of x after simplifying = ?`,a*b-b,'Expand, then combine x-terms.');}
  if(t===7){const a=-randInt(2,5),b=randInt(2,5),c=randInt(1,6);return q('expandSingle',`${a}(${b}x − ${c}). Constant term after expanding = ?`,-a*c,'Negative times negative gives a positive constant.');}
  const a=randInt(2,5),b=randInt(2,5),c=randInt(1,6),d=randInt(1,6);return q('expandSingle',`${a}(${b}x + ${c}) ${y10VarTerm(-d,'x',false)}. Coefficient of x = ?`,a*b-d,'Expand and collect x-terms.');
}


function y10GenExpandDouble(){
  const t=randInt(1,y10LevelCount(3,6,8));
  if(t===1){const a=randInt(1,6),b=randInt(1,6);return q('expandDouble',`(x + ${a})(x + ${b}). Coefficient of x = ?`,a+b,'The middle coefficient is the sum of the constants.');}
  if(t===2){const a=randInt(1,6),b=randInt(1,6);return q('expandDouble',`(x + ${a})(x + ${b}). Constant term = ?`,a*b,'Multiply the constant terms.');}
  if(t===3){const a=randInt(1,6),b=randInt(1,6);return q('expandDouble',`(x − ${a})(x − ${b}). Coefficient of x = ?`,-a-b,'The middle terms are both negative.');}
  if(t===4){const a=randInt(1,6),b=randInt(1,6);return q('expandDouble',`(x + ${a})(x − ${b}). Constant term = ?`,-a*b,'Multiply the constants with their signs.');}
  if(t===5){const a=randInt(2,4),b=randInt(1,5),c=randInt(2,4),d=randInt(1,5);return q('expandDouble',`(${a}x + ${b})(${c}x + ${d}). Coefficient of x² = ?`,a*c,'Multiply the x-coefficients.');}
  if(t===6){const a=randInt(2,4),b=randInt(1,5),c=randInt(2,4),d=randInt(1,5);return q('expandDouble',`(${a}x + ${b})(${c}x + ${d}). Coefficient of x = ?`,a*d+b*c,'Add the two cross-product coefficients.');}
  if(t===7){const a=randInt(1,8);return q('expandDouble',`(x + ${a})(x − ${a}). Constant term = ?`,-a*a,'This is a difference of squares.');}
  const a=randInt(1,6);return q('expandDouble',`(x + ${a})². Coefficient of x = ?`,2*a,'Use (x+a)² = x² + 2ax + a².');
}

function y10GenFactorCommon(){
  const t=randInt(1,y10LevelCount(4,6,8));
  if(t===1){const g=randInt(2,8),a=randInt(2,8),b=randInt(1,8);return q('factorCommon',`Greatest numerical common factor of ${g*a}x and ${g*b} = ?`,g*gcd(a,b),'Find the greatest common factor of the coefficients.');}
  if(t===2){const g=randInt(2,8),a=randInt(2,8),b=randInt(1,8);return q('factorCommon',`${g*a}x + ${g*b} = ${g}(?x + ${b}). Find ?.`,a,'Divide the x-coefficient by the common factor.');}
  if(t===3){const g=randInt(2,6),a=randInt(2,6),b=randInt(1,6);return q('factorCommon',`${g*a}x² + ${g*b}x = ${g}x(?x + ${b}). Find ?.`,a,'Factor out the common number and x.');}
  if(t===4){const a=randInt(2,7),b=randInt(1,7);return q('factorCommon',`Common variable factor of ${y10VarTerm(a,'x²',true)} and ${y10VarTerm(b,'x³',true)} is x to what power?`,2,'Use the smaller exponent.');}
  if(t===5){const g=randInt(2,6),a=randInt(2,6),b=randInt(1,6);return q('factorCommon',`Factor ${g*a}x − ${g*b} by ${g}. Coefficient of x inside the bracket = ?`,a,'Divide each term by the common factor.');}
  if(t===6){const g=randInt(2,6),a=randInt(2,6),b=randInt(1,6);return q('factorCommon',`${g*a}x² − ${g*b}x = ${g}x(?x − ${b}). Find ?.`,a,'Take out the common factor gx.');}
  if(t===7){const a=randInt(2,6),b=randInt(2,6);return q('factorCommon',`Greatest common factor of ${a*b}x²y and ${a}xy² includes x to what power?`,1,'Use the minimum power of x.');}
  const g=randInt(2,5),a=randInt(2,5),b=randInt(2,5);return q('factorCommon',`Greatest numerical common factor of ${g*a}x and ${g*b}y = ?`,g*gcd(a,b),'Find the HCF of the coefficients.');
}

function y10GenFactorQuadratic(){
  const t=randInt(1,y10LevelCount(3,6,9));
  if(t===1){const p=randInt(1,8),r=randInt(1,8);return q('factorQuadratic',`x² + ${p+r}x + ${p*r} = (x + ${p})(x + ?). Find ?.`,r,'Find two numbers that add to the middle coefficient and multiply to the constant.');}
  if(t===2){const p=randInt(1,8),r=randInt(1,8);return q('factorQuadratic',`x² − ${p+r}x + ${p*r} = (x − ${p})(x − ?). Find ?.`,r,'Both factors are negative.');}
  if(t===3){const p=randInt(1,8),r=randInt(1,8);if(p===r)return y10GenFactorQuadratic();const middle=p-r;return q('factorQuadratic',`x²${y10MiddleX(middle)} − ${p*r} = (x + ${p})(x − ?). Find ?.`,r,'Opposite signs give a negative constant.');}
  if(t===4){const a=randInt(2,10);return q('factorQuadratic',`x² − ${a*a} = (x − ${a})(x + ?). Find ?.`,a,'Use difference of squares.');}
  if(t===5){const a=randInt(1,8);return q('factorQuadratic',`x² + ${2*a}x + ${a*a} = (x + ?)². Find ?.`,a,'Recognise a perfect-square trinomial.');}
  if(t===6){const a=randInt(1,8);return q('factorQuadratic',`x² − ${2*a}x + ${a*a} = (x − ?)². Find ?.`,a,'Recognise a perfect-square trinomial.');}
  if(t===7){const p=randInt(1,7),r=randInt(1,7);return q('factorQuadratic',`For x² + ${p+r}x + ${p*r}, one factor is (x + ${p}). Constant in the other factor = ?`,r,'Use the factor pair of the constant.');}
  if(t===8){const p=randInt(2,8),r=randInt(1,p-1);const middle=-(p-r);return q('factorQuadratic',`x²${y10MiddleX(middle)} − ${p*r} = (x − ${p})(x + ?). Find ?.`,r,'Choose factors whose product is negative and sum matches the middle term.');}
  const [p,r,sign]=pick([[2,5,1],[3,4,1],[2,6,-1],[3,5,-1]]);if(sign>0)return q('factorQuadratic',`x² + ${p}x + ${r}x + ${p*r} = (x + ${p})(x + ?). Find ?.`,r,'Group the first two and last two terms, then factor the common binomial.');return q('factorQuadratic',`x² − ${p}x − ${r}x + ${p*r} = (x − ${p})(x − ?). Find ?.`,r,'Factor by grouping to reveal the common binomial.');
}


function y10GenLinear(){
  const t=randInt(1,y10LevelCount(4,7,10));
  const x=randInt(-6,12);
  if(t===1){const a=randInt(2,8),b=y10NonZeroInt(-9,9);return q('linear',`${a}x ${y10Signed(b)} = ${a*x+b}. Find x.`,x,'Undo addition or subtraction, then divide.');}
  if(t===2){const a=randInt(2,7),b=randInt(1,9),rhs=a*(x+b);return q('linear',`${a}(x + ${b}) = ${rhs}. Find x.`,x,'Divide first or expand, then solve.');}
  if(t===3){const a=randInt(2,7),b=randInt(1,9),rhs=a*(x-b);return q('linear',`${a}(x − ${b}) = ${rhs}. Find x.`,x,'Divide by the coefficient, then add.');}
  if(t===4){const a=randInt(2,7),c=randInt(1,a-1),b=y10NonZeroInt(-8,8),d=(a-c)*x+b;return q('linear',`${a}x ${y10Signed(b)} = ${y10VarTerm(c,'x',true)}${y10Signed(d)?` ${y10Signed(d)}`:''}. Find x.`,x,'Collect x-terms on one side.');}
  if(t===5){const a=pick([0.5,1.5,2.5]),b=pick([2,4,6,8]),rhs=a*x+b;return q('linear',`${fmt(a)}x + ${b} = ${fmt(rhs)}. Find x.`,x,'Subtract the constant, then divide by the decimal coefficient.');}
  if(t===6){const d=pick([2,3,4,5]),solution=d*randInt(-4,8),b=y10NonZeroInt(-5,8),rhs=solution/d+b;return q('linear',`x/${d} ${y10Signed(b)} = ${fmt(rhs)}. Find x.`,solution,'Undo the constant, then multiply by the denominator.');}
  if(t===7){const a=randInt(2,6),b=y10NonZeroInt(-5,5),c=randInt(1,a-1),d=a*(x+b)-c*x;return q('linear',`${a}(x ${b>0?'+':'−'} ${Math.abs(b)}) = ${y10VarTerm(c,'x',true)}${y10Signed(d)?` ${y10Signed(d)}`:''}. Find x.`,x,'Expand and collect like terms.');}
  if(t===8){const a=randInt(2,6),b=randInt(1,6),rhs=a*x+b;return q('linear',`A number is multiplied by ${a} and then increased by ${b}, giving ${rhs}. Find the number.`,x,'Translate the words into a linear equation.');}
  if(t===9){const a=pick([2,3,4,5]),b=pick([2,3,4]),solution=b*randInt(-4,8),rhs=a*solution/b;return q('linear',`${a}x/${b} = ${fmt(rhs)}. Find x.`,solution,'Multiply by the denominator, then divide by the coefficient.');}
  const a=randInt(2,5),b=randInt(1,5),c=randInt(1,4),rhs=a*(x+b)-c;return q('linear',`${a}(x + ${b}) − ${c} = ${rhs}. Find x.`,x,'Undo the outside subtraction, divide, then subtract inside the bracket.');
}


function y10GenInequalities(){
  const t=randInt(1,y10LevelCount(4,7,9));
  if(t===1){const b=y10NonZeroInt(-8,10),boundary=randInt(-5,15),rhs=boundary+b;return q('inequalities',`x ${y10Signed(b)} > ${rhs}. Boundary value = ?`,boundary,'Solve the matching equation.');}
  if(t===2){const a=randInt(2,7),boundary=randInt(-5,12);return q('inequalities',`${a}x ≤ ${a*boundary}. Greatest integer solution = ?`,boundary,'Divide by the positive coefficient.');}
  if(t===3){const a=randInt(2,6),boundary=randInt(-4,10),b=y10NonZeroInt(-8,8),rhs=a*boundary+b;return q('inequalities',`${a}x ${y10Signed(b)} ≥ ${rhs}. Smallest integer solution = ?`,boundary,'Solve as a linear inequality.');}
  if(t===4){const a=-randInt(2,6),boundary=randInt(-5,10);return q('inequalities',`${y10VarTerm(a,'x',true)} < ${a*boundary}. Smallest integer solution = ?`,boundary+1,'Dividing by a negative reverses the sign.');}
  if(t===5){const boundary=randInt(-4,10),a=randInt(3,8),c=randInt(1,a-1),b=y10NonZeroInt(-8,8),d=(a-c)*boundary+b;return q('inequalities',`${a}x ${y10Signed(b)} ≤ ${y10VarTerm(c,'x',true)}${y10Signed(d)?` ${y10Signed(d)}`:''}. Greatest integer solution = ?`,boundary,'Collect x-terms and solve.');}
  if(t===6){const boundary=randInt(-5,8),test=randInt(-7,10),b=y10NonZeroInt(-5,5),rhs=boundary+b;return q('inequalities',`Does x=${test} satisfy x ${y10Signed(b)} > ${rhs}? Enter 1 for yes, 0 for no.`,test+b>rhs?1:0,'Substitute and compare.');}
  if(t===7){const a=pick([0.5,1.5,2.5]),boundary=pick([2,4,6,8]),rhs=a*boundary;return q('inequalities',`${fmt(a)}x ≤ ${fmt(rhs)}. Greatest integer solution = ?`,boundary,'Divide by the positive decimal coefficient.');}
  if(t===8){const low=randInt(-8,2),high=randInt(low+3,10);return q('inequalities',`How many integers satisfy ${low} < x < ${high}?`,high-low-1,'Count integers strictly between the boundaries.');}
  const a=-pick([0.5,1,2]),boundary=pick([-4,-2,2,4,6]),rhs=a*boundary;return q('inequalities',`${y10VarTerm(a,'x',true)} ≥ ${fmt(rhs)}. Boundary value = ?`,boundary,'The boundary comes from equality; dividing by a negative reverses direction.');
}


function y10GenFormula(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const l=pick([4,5,6,7,8,9,10]),w=pick([3,4,5,6,8]);return q('formula',`A = lw. A=${l*w} and l=${l}. Find w.`,w,'Rearrange to w=A÷l.');}
  if(t===2){const l=pick([5,6,7,8,9,10]),w=pick([3,4,5,6,7]),p=2*(l+w);return q('formula',`P = 2l + 2w. P=${p} and l=${l}. Find w.`,w,'Subtract 2l, then divide by 2.');}
  if(t===3){const s=pick([20,30,40,50,60,80]),tt=pick([2,3,4,5]),d=s*tt;return q('formula',`d = st. d=${d} and t=${tt}. Find s.`,s,'Rearrange to s=d÷t.');}
  if(t===4){const l=pick([4,5,6,8]),w=pick([3,4,5]),h=pick([2,3,4]),v=l*w*h;return q('formula',`V = lwh. V=${v}, l=${l}, w=${w}. Find h.`,h,'Divide volume by lw.');}
  if(t===5){const r=pick([2,3,4,5,6,7,8,9,10]);return q('formula',`A = πr². A=${r*r}π. Find r.`,r,'Divide by π, then take the positive square root.');}
  if(t===6){const a=pick([3,4,5,6]),b=pick([4,5,6,8]),c=Math.sqrt(a*a+b*b);if(!Number.isInteger(c))return y10GenFormula();return q('formula',`c² = a² + b². a=${a}, b=${b}. Find c.`,c,'Substitute and take the positive square root.');}
  if(t===7){const a=pick([2,3,4]),x=pick([2,3,4,5]),b=pick([1,2,3]),y=a*x+b;return q('formula',`y = ax + b. y=${y}, a=${a}, b=${b}. Find x.`,x,'Subtract b, then divide by a.');}
  if(t===8){const b1=pick([4,6,8,10]),b2=pick([6,8,10,12]),h=pick([2,4,6]),area=(b1+b2)*h/2;return q('formula',`A = (a+b)h/2. A=${area}, a=${b1}, b=${b2}. Find h.`,h,'Multiply area by 2, then divide by a+b.');}
  if(t===9){const r=pick([2,3,4,5]),h=pick([2,3,4,5]),v=r*r*h;return q('formula',`V = πr²h. V=${v}π and r=${r}. Find h.`,h,'Divide by πr².');}
  const p=pick([20,24,28,32,36]),w=pick([3,4,5,6]),l=p/2-w;return q('formula',`P = 2(l+w). P=${p} and w=${w}. Find l.`,l,'Divide P by 2, then subtract w.');
}

function y10GenQuadratics(){
  const t=randInt(1,y10LevelCount(4,7,10));
  if(t===1){const r=pick([2,3,4,5,6,7,8]);return q('quadratics',`x² = ${r*r}. Positive solution x = ?`,r,'Take the positive square root.');}
  if(t===2){const a=randInt(1,8),b=randInt(1,8);return q('quadratics',`(x − ${a})(x + ${b}) = 0. Positive solution = ?`,a,'Use the zero-product rule.');}
  if(t===3){const a=randInt(1,8),b=randInt(1,8);return q('quadratics',`(x − ${a})(x − ${b}) = 0. Larger solution = ?`,Math.max(a,b),'Set each factor equal to zero.');}
  if(t===4){const a=pick([1,2,3,4]),x=pick([-3,-2,-1,1,2,3]);return q('quadratics',`For y = ${a===1?'x²':`${a}x²`}, when x=${x}, y = ?`,a*x*x,'Square x first, then multiply by a.');}
  if(t===5){const a=randInt(1,7),b=randInt(1,7);return q('quadratics',`x² − ${a+b}x + ${a*b} = 0. Larger root = ?`,Math.max(a,b),'Find the factor pair.');}
  if(t===6){const a=randInt(2,10);return q('quadratics',`x² − ${a*a} = 0. Positive root = ?`,a,'Use difference of squares.');}
  if(t===7){const c=y10NonZeroInt(-8,8);return q('quadratics',`For y = x² ${y10Signed(c)}, when x=0, y = ?`,c,'At x=0, the x² term is zero.');}
  if(t===8){const a=randInt(1,6),b=randInt(1,6);return q('quadratics',`The roots are ${a} and −${b}. Product of the roots = ?`,-a*b,'Multiply the two roots.');}
  if(t===9){const a=pick([2,3,4,5]),b=pick([2,3,4,5]);if(a===b)return y10GenQuadratics();return q('quadratics',`Which parabola is narrower? Enter 1 for y=${a}x² or 2 for y=${b}x².`,a>b?1:2,'For positive a, larger |a| makes y=ax² narrower.');}
  const c=y10NonZeroInt(-9,9);return q('quadratics',`For y = x² ${y10Signed(c)}, minimum y-value = ?`,c,'x² is smallest at x=0.');
}


function y10GenStraightLines(){
  const t=randInt(1,y10LevelCount(5,9,12));
  if(t===1){const m=pick([-4,-3,-2,-1,1,2,3,4]),c=randInt(-8,8);return q('straightLines',`For ${y10LinearText(m,c)}, gradient = ?`,m,'In y=mx+c, m is the gradient.');}
  if(t===2){const m=pick([-4,-3,-2,-1,1,2,3,4]),c=randInt(-8,8);return q('straightLines',`For ${y10LinearText(m,c)}, y-intercept = ?`,c,'In y=mx+c, c is the y-intercept.');}
  if(t===3){const m=pick([-5,-3,-1,1,2,4]);return q('straightLines',`A line has gradient ${m}. Enter 1 for positive, 2 for negative, or 3 for zero.`,m>0?1:2,'The sign of the gradient gives the direction.');}
  if(t===4){const c=randInt(-10,10);return q('straightLines',`For y = ${c}, gradient = ?`,0,'A horizontal line has zero gradient.');}
  if(t===5){const x1=randInt(-5,3),run=pick([1,2,3,4]),m=pick([-3,-2,-1,1,2,3]),y1=randInt(-6,6),x2=x1+run,y2=y1+m*run;return q('straightLines',`Gradient through (${x1}, ${y1}) and (${x2}, ${y2}) = ?`,m,'Rise ÷ run.');}
  if(t===6){const m=pick([-3,-2,-1,1,2,3]),c=randInt(-6,6),x=randInt(-4,5);return q('straightLines',`On ${y10LinearText(m,c)}, when x=${x}, y = ?`,m*x+c,'Substitute x into the equation.');}
  if(t===7){const m=pick([-3,-2,-1,1,2,3]),c=randInt(-6,6),x=randInt(-4,5),y=m*x+c;return q('straightLines',`On ${y10LinearText(m,c)}, y=${y}. Find x.`,x,'Substitute y and solve the linear equation.');}
  if(t===8){const m=pick([-4,-3,-2,-1,1,2,3,4]),c=randInt(-8,8);return q('straightLines',`A line has gradient ${m} and passes through (0, ${c}). Its y-intercept = ?`,c,'A point with x=0 lies on the y-axis.');}
  if(t===9){const x=y10NonZeroInt(-8,8);return q('straightLines',`Vertical line x = ${x}. Its x-intercept = ?`,x,'The line crosses the x-axis at (x,0).');}
  if(t===10){const m=pick([-3,-2,-1,1,2,3]),x=randInt(-4,4),y=randInt(-6,6),c=y-m*x;return q('straightLines',`A line has gradient ${m} and passes through (${x}, ${y}). Its y-intercept = ?`,c,'Use c=y−mx.');}
  if(t===11){const m1=pick([-2,-3,-4,-5,2,3,4,5]),m2=pick([-1,1,2,-2]);if(Math.abs(m1)===Math.abs(m2))return y10GenStraightLines();return q('straightLines',`Which line is steeper? Enter 1 for gradient ${m1}, or 2 for gradient ${m2}.`,Math.abs(m1)>Math.abs(m2)?1:2,'Compare the absolute values of the gradients.');}
  const m=pick([-3,-2,-1,1,2,3]),c=y10NonZeroInt(-6,6),x1=pick([-2,-1,1,2]),x2=x1+pick([1,2,3]),y1=m*x1+c,y2=m*x2+c;return q('straightLines',`A line passes through (${x1}, ${y1}) and (${x2}, ${y2}). Its y-intercept = ?`,c,'Find the gradient from the two points, then use c=y−mx.');
}


function y10GenLinearPatterns(){
  const t=randInt(1,y10LevelCount(5,7,9));
  if(t===1){const a=randInt(1,8),d=randInt(2,8);return q('linearPatterns',`${a}, ${a+d}, ${a+2*d}, ${a+3*d}, ... next term = ?`,a+4*d,'Add the common difference.');}
  if(t===2){const a=randInt(10,30),d=randInt(2,7);return q('linearPatterns',`${a}, ${a-d}, ${a-2*d}, ${a-3*d}, ... next term = ?`,a-4*d,'Subtract the common difference.');}
  if(t===3){const m=randInt(2,6),c=randInt(-5,8),n=randInt(3,10);const ct=y10Signed(c);return q('linearPatterns',`Rule: Tₙ = ${m}n${ct?` ${ct}`:''}. Find term ${n}.`,m*n+c,'Substitute the term number for n.');}
  if(t===4){const m=randInt(2,6),c=randInt(-4,8),input=randInt(2,7);const ct=y10Signed(c);return q('linearPatterns',`Input ${input} gives output ${m*input+c}. Rule is y = ?x${ct?` ${ct}`:''}. Find the coefficient.`,m,'Use the constant rate of change.');}
  if(t===5){const m=randInt(2,6),c=randInt(-4,8);return q('linearPatterns',`Term numbers 1,2,3,4 give ${m+c}, ${2*m+c}, ${3*m+c}, ${4*m+c}. Coefficient of n in the rule = ?`,m,'The first differences give the coefficient of n.');}
  if(t===6){const a=randInt(-5,5),d=randInt(2,7),targetIndex=randInt(5,10);return q('linearPatterns',`Sequence starts ${a}, ${a+d}, ${a+2*d}, ... Term ${targetIndex} = ?`,a+(targetIndex-1)*d,'Use first term + (n−1)×difference.');}
  if(t===7){const m=randInt(2,6),c=randInt(-5,8),target=m*randInt(3,9)+c;const ct=y10Signed(c);return q('linearPatterns',`For Tₙ = ${m}n${ct?` ${ct}`:''}, Tₙ = ${target}. Find n.`,(target-c)/m,'Solve the linear equation for n.');}
  if(t===8){const m=randInt(2,6),c=randInt(-5,8),x1=randInt(1,4),x2=x1+1;return q('linearPatterns',`Outputs at x=${x1} and x=${x2} are ${m*x1+c} and ${m*x2+c}. Rate of change = ?`,m,'Rate of change is change in output for an increase of 1 in input.');}
  const m=pick([-5,-4,-3,-2,-1]),c=randInt(-4,8),n=randInt(2,6),ct=y10Signed(c);return q('linearPatterns',`Rule: Tₙ = ${y10VarTerm(m,'n',true)}${ct?` ${ct}`:''}. Find term ${n}.`,m*n+c,'Substitute n carefully with the negative coefficient.');
}


/* ===== MEASUREMENT & GEOMETRY ===== */
function y10GenMetric(){
  const t=randInt(1,y10LevelCount(5,9,12));
  if(t===1){const m=pick([2,3,4,5,8]);return q('metric',`${m} km = ? m`,m*1000,'kilo means 1000.');}
  if(t===2){const mm=pick([1200,2500,3000,4500,8000]);return q('metric',`${mm} mm = ? m`,mm/1000,'1000 mm = 1 m.');}
  if(t===3){const m=pick([2,3,5,8]);return q('metric',`${m} m² = ? cm²`,m*10000,'Square the length conversion: 100² = 10,000.');}
  if(t===4){const l=pick([1,2,3,4,5]);return q('metric',`${l} L = ? cm³`,l*1000,'1 mL = 1 cm³ and 1 L = 1000 mL.');}
  if(t===5){const m3=pick([1,2,3,4,5]);return q('metric',`${m3} m³ = ? L`,m3*1000,'1 m³ = 1000 L.');}
  if(t===6){const us=pick([2000,5000,8000]);return q('metric',`${us} microseconds = ? milliseconds`,us/1000,'1000 microseconds = 1 millisecond.');}
  if(t===7){const k=pick([2,3,4,5]);return q('metric',`${k} megabytes = ? kilobytes`,k*1000,'Use the decimal SI classroom conversion 1 MB = 1000 kB.');}
  if(t===8){const g=pick([1,2,3,4]);return q('metric',`${g} gigabytes = ? megabytes`,g*1000,'giga is 1000 mega.');}
  if(t===9){const n=pick([2000,5000,8000]);return q('metric',`${n} nanometres = ? micrometres`,n/1000,'1000 nanometres = 1 micrometre.');}
  if(t===10){const cm=pick([2,3,4,5,8,12]);return q('metric',`${cm} cm = ? mm`,cm*10,'centi to milli changes by a factor of 10.');}
  if(t===11){const tb=pick([1,2,3,4]);return q('metric',`${tb} terabytes = ? gigabytes`,tb*1000,'Use the decimal SI classroom conversion 1 TB = 1000 GB.');}
  return q('metric','Best unit for the thickness of a sheet of paper: enter 1 for km, 2 for mm, or 3 for m.',2,'Choose a unit that matches the size of the object.');
}


function y10GenCircle(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const r=pick([2,3,4,5,6,7,8,9,10]);return q('circle',`Circle radius = ${r} cm. Diameter = ? cm`,2*r,'Diameter is twice the radius.');}
  if(t===2){const d=pick([4,6,8,10,12,14,16,18,20]);return q('circle',`Circle diameter = ${d} cm. Radius = ? cm`,d/2,'Radius is half the diameter.');}
  if(t===3){const r=pick([2,3,4,5,6,7,8,9,10]);return q('circle',`Circle radius = ${r} cm. Circumference = ?π cm. Enter the coefficient.`,2*r,'C=2πr.');}
  if(t===4){const r=pick([2,3,4,5,6,7,8,9,10]);return q('circle',`Circle radius = ${r} cm. Area = ?π cm². Enter the coefficient.`,r*r,'A=πr².');}
  if(t===5){const r=pick([2,4,6,8,10]);return q('circle',`Semicircle radius = ${r} cm. Curved length = ?π cm. Enter the coefficient.`,r,'Half the circumference is πr.');}
  if(t===6){const r=pick([2,4,6,8,10,12]);return q('circle',`Quarter-circle radius = ${r} cm. Arc length = ?π cm. Enter the coefficient.`,r/2,'One quarter of 2πr is πr/2.');}
  if(t===7){return q('circle','A chord is: enter 1 for centre-to-circle distance, 2 for a segment joining two points on the circle, or 3 for distance around the circle.',2,'A chord joins two points on a circle.');}
  if(t===8){const r=pick([2,3,4,5,6]);return q('circle',`A semicircle has radius ${r} cm. Its full perimeter is ${r}π + ?. Find the non-π part.`,2*r,'Add the diameter to the curved semicircle length.');}
  if(t===9){const r=pick([2,4,6,8]);return q('circle',`A quarter-circle has radius ${r} cm. Full perimeter = ${r/2}π + ?. Find the non-π part.`,2*r,'Add the two radii to the arc length.');}
  const d=pick([4,6,8,10,12]);return q('circle',`A circle has diameter ${d} cm. Circumference = ?π cm. Enter the coefficient.`,d,'C=πd.');
}

function y10GenCompositeArea(){
  const t=randInt(1,y10LevelCount(4,7,9));
  if(t===1){const l=pick([6,8,10,12]),w=pick([3,4,5,6]),cut=pick([1,2]),cutH=pick([1,2,3]);if(cut>=l||cutH>=w)return y10GenCompositeArea();return q('compositeArea',`Rectangle ${l}×${w} has a ${cut}×${cutH} corner removed. Remaining area = ?`,l*w-cut*cutH,'Subtract the removed rectangle area.');}
  if(t===2){const b=pick([6,8,10,12]),h=pick([4,6,8]),rect=pick([10,20,30]);return q('compositeArea',`A rectangle has area ${rect} cm² and an attached triangle has base ${b} cm and height ${h} cm. Total area = ? cm²`,rect+b*h/2,'Add the two component areas.');}
  if(t===3){const a=pick([6,8,10]),b=pick([8,10,12]),h=pick([2,4,6]);return q('compositeArea',`Trapezium parallel sides ${a} cm and ${b} cm, height ${h} cm. Area = ? cm²`,(a+b)*h/2,'Area = (a+b)h/2.');}
  if(t===4){const d1=pick([6,8,10,12]),d2=pick([4,6,8,10]);return q('compositeArea',`Kite diagonals are ${d1} cm and ${d2} cm. Area = ? cm²`,d1*d2/2,'Kite area = half the product of diagonals.');}
  if(t===5){const l=pick([6,8,10]),w=pick([4,5,6]),b=pick([4,6,8]),h=pick([2,4,6]);return q('compositeArea',`Rectangle ${l}×${w} plus triangle base ${b}, height ${h}. Total area = ?`,l*w+b*h/2,'Add rectangle and triangle areas.');}
  if(t===6){const r=pick([2,3,4,5]),rect=pick([20,30,40,50]);return q('compositeArea',`A rectangle has area ${rect} cm² plus a circle of radius ${r} cm. Total area = ${rect} + ?π. Enter the coefficient.`,r*r,'Circle area coefficient is r².');}
  if(t===7){const r=pick([2,4,6]),rect=pick([20,30,40,50]);return q('compositeArea',`A rectangle has area ${rect} cm² plus a semicircle of radius ${r} cm. Total area = ${rect} + ?π. Enter the coefficient.`,r*r/2,'A semicircle has half the area of a circle.');}
  if(t===8){const a=pick([6,8,10]),b=pick([10,12,14]),area=pick([32,40,48,60]),h=2*area/(a+b);if(!Number.isInteger(h))return y10GenCompositeArea();return q('compositeArea',`A trapezium has area ${area} cm² and parallel sides ${a}, ${b} cm. Height = ? cm`,h,'Rearrange A=(a+b)h/2.');}
  const d1=pick([6,8,10,12]),area=pick([24,32,40,48,60]),d2=2*area/d1;if(!Number.isInteger(d2))return y10GenCompositeArea();return q('compositeArea',`A kite has area ${area} cm² and one diagonal ${d1} cm. Other diagonal = ? cm`,d2,'Use A=d₁d₂/2.');
}

function y10GenSurfaceArea(){
  const t=randInt(1,y10LevelCount(4,7,9));
  if(t===1){const s=pick([2,3,4,5,6]);return q('surfaceArea',`Cube side ${s} cm. Surface area = ? cm²`,6*s*s,'A cube has 6 equal square faces.');}
  if(t===2){const l=pick([4,5,6,8,10]),w=pick([2,3,4,5]),h=pick([2,3,4]);return q('surfaceArea',`Cuboid ${l}×${w}×${h} cm. Surface area = ? cm²`,2*(l*w+l*h+w*h),'Add the areas of the three face pairs.');}
  if(t===3){const r=pick([2,3,4,5]),h=pick([2,3,4,5,6]);return q('surfaceArea',`Cylinder radius ${r}, height ${h}. Curved surface area = ?π. Enter the coefficient.`,2*r*h,'Curved area = 2πrh.');}
  if(t===4){const r=pick([2,3,4,5]),h=pick([2,3,4,5]);return q('surfaceArea',`Cylinder radius ${r}, height ${h}. Total surface area = ?π. Enter the coefficient.`,2*r*h+2*r*r,'Total area = curved area + two circular ends.');}
  if(t===5){const [a,b,c]=pick([[3,4,5],[6,8,10]]),length=pick([3,4,5,6]);const triArea=a*b/2,lateral=(a+b+c)*length;return q('surfaceArea',`A triangular prism has a ${a}-${b}-${c} right-triangle cross-section and length ${length} cm. Surface area = ? cm²`,2*triArea+lateral,'Add two triangular ends and the three rectangles formed by the triangle sides.');}
  if(t===6){const s=pick([2,3,4,5]),area=6*s*s;return q('surfaceArea',`A cube has surface area ${area} cm². Side length = ? cm`,s,'Divide by 6, then take the square root.');}
  if(t===7){const r=pick([2,3,4]),h=pick([2,3,4]),coeff=2*r*h+2*r*r;return q('surfaceArea',`A closed cylinder has total surface area ${coeff}π. Radius ${r}. Height = ?`,h,'Use 2πrh+2πr² and divide by 2πr.');}
  if(t===8){const l=pick([4,5,6]),w=pick([2,3,4]),h=pick([2,3]);const area=2*(l*w+l*h+w*h);return q('surfaceArea',`Cuboid surface area is ${area} cm² with length ${l} and width ${w}. Height = ? cm`,h,'Substitute known dimensions into 2(lw+lh+wh).');}
  const s=pick([2,3,4,5,6]);return q('surfaceArea',`Two cubes of side ${s} cm are glued together across one full face. Exposed surface area = ? cm²`,10*s*s,'Start with 12 square faces, then remove the two hidden glued faces.');
}


function y10GenVolume(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const l=pick([4,5,6,8,10]),w=pick([2,3,4,5]),h=pick([2,3,4]);return q('volume',`Cuboid ${l}×${w}×${h} cm. Volume = ? cm³`,l*w*h,'V=lwh.');}
  if(t===2){const b=pick([4,6,8,10]),triH=pick([2,4,6]),length=pick([3,4,5,6]);return q('volume',`Triangular prism: triangle base ${b}, triangle height ${triH}, length ${length}. Volume = ? cm³`,b*triH/2*length,'Find triangle area, then multiply by prism length.');}
  if(t===3){const r=pick([2,3,4,5]),h=pick([2,3,4,5,6]);return q('volume',`Cylinder radius ${r}, height ${h}. Volume = ?π cm³. Enter the coefficient.`,r*r*h,'V=πr²h.');}
  if(t===4){const base=pick([12,18,24,30,36]),h=pick([3,4,5,6]);return q('volume',`A prism has base area ${base} cm² and length ${h} cm. Volume = ? cm³`,base*h,'Prism volume = base area × length.');}
  if(t===5){const l=pick([4,5,6,8]),w=pick([2,3,4]),h=pick([2,3,4]),v=l*w*h;return q('volume',`Cuboid volume ${v} cm³, length ${l}, width ${w}. Height = ? cm`,h,'Height = volume ÷ base area.');}
  if(t===6){const ml=pick([250,500,750,1000,1500,2000]);return q('volume',`${ml} mL = ? cm³`,ml,'1 mL = 1 cm³.');}
  if(t===7){const l=pick([1,2,3,4,5]);return q('volume',`${l} L = ? cm³`,l*1000,'1 L = 1000 cm³.');}
  if(t===8){const base=pick([12,18,24,30]),h=pick([3,4,5]),v=base*h/3;return q('volume',`Pyramid base area ${base} cm², perpendicular height ${h} cm. Volume = ? cm³`,v,'Pyramid volume = one third of base area × height.');}
  if(t===9){const r=pick([2,3,4]),h=pick([2,3,4]),v=r*r*h;return q('volume',`Cylinder volume is ${v}π cm³ and radius ${r} cm. Height = ? cm`,h,'Divide the π coefficient by r².');}
  const v1=pick([40,60,80,100]),v2=pick([20,30,40,50]);return q('volume',`Two non-overlapping solids have volumes ${v1} cm³ and ${v2} cm³. Combined volume = ? cm³`,v1+v2,'Add the component volumes.');
}

function y10GenPythagoras(){
  const triples=[[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25],[9,12,15]];
  const t=randInt(1,y10LevelCount(4,7,10));
  if(t===1){const [a,b,c]=pick(triples);return q('pythagoras',`Right triangle legs ${a} and ${b}. Hypotenuse = ?`,c,'Use a²+b²=c².');}
  if(t===2){const [a,b,c]=pick(triples);return q('pythagoras',`Right triangle hypotenuse ${c}, one leg ${a}. Other leg = ?`,b,'Use b²=c²−a².');}
  if(t===3){const [a,b,c]=pick(triples);return q('pythagoras',`Do ${a}, ${b}, ${c} form a right triangle? Enter 1 for yes, 0 for no.`,1,'Check whether a²+b²=c².');}
  if(t===4){const [a,b,c]=pick([[3,4,6],[5,6,8],[6,7,10],[8,9,14]]);return q('pythagoras',`Do ${a}, ${b}, ${c} form a right triangle? Enter 1 for yes, 0 for no.`,0,'Check the Pythagorean relationship.');}
  if(t===5){const [dx,dy,d]=pick([[3,4,5],[5,12,13],[6,8,10]]);return q('pythagoras',`Points differ by ${dx} horizontally and ${dy} vertically. Distance = ?`,d,'Use the right triangle formed by the coordinate differences.');}
  if(t===6){const [a,b,c]=pick(triples);return q('pythagoras',`A ladder reaches ${b} m high and its base is ${a} m from the wall. Ladder length = ? m`,c,'The wall and ground form a right angle.');}
  if(t===7){const [a,b,c]=pick(triples);return q('pythagoras',`A rectangle is ${a} by ${b}. Diagonal = ?`,c,'The diagonal is the hypotenuse of a right triangle.');}
  if(t===8){const [a,b,c]=pick(triples);return q('pythagoras',`c²=${c*c}, a²=${a*a}. Then b² = ?`,b*b,'Subtract a² from c².');}
  if(t===9){const [a,b,c]=pick(triples);return q('pythagoras',`Right triangle has hypotenuse ${c}. If one leg is ${b}, missing leg = ?`,a,'Subtract squares, then take the square root.');}
  const k=pick([2,3,4,5]),[a,b,c]=pick([[3,4,5],[5,12,13]]);return q('pythagoras',`The Pythagorean triple ${a}, ${b}, ${c} is scaled by ${k}. The new hypotenuse = ?`,c*k,'Multiplying all three sides by the same factor gives another Pythagorean triple.');
}


function y10GenSpeedTime(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const d=pick([120,150,180,210,240,300]),tt=pick([2,3,4,5]);if(d%tt!==0)return y10GenSpeedTime();return q('speedTime',`${d} km in ${tt} h. Speed = ? km/h`,d/tt,'Speed = distance ÷ time.');}
  if(t===2){const s=pick([4,5,6,8,10,12]),tt=pick([20,30,40,50]);return q('speedTime',`${s} m/s for ${tt} s. Distance = ? m`,s*tt,'Distance = speed × time.');}
  if(t===3){const s=pick([40,50,60,80,100]),d=s*pick([2,3,4,5]);return q('speedTime',`${d} km at ${s} km/h. Time = ? h`,d/s,'Time = distance ÷ speed.');}
  if(t===4){const start=pick([8*60+15,9*60+40,13*60+25,14*60+50]),dur=pick([35,45,60,75,90,105]);return q('speedTime',`A trip starts at ${y10ClockText(start)} and lasts ${dur} minutes. Arrival time in HHMM = ?`,y10HHMMValue(start+dur),'Add the duration to the start time.');}
  if(t===5){const start=pick([8*60+15,9*60+40,13*60+25,14*60+50]),dur=pick([35,45,60,75,90,105]);return q('speedTime',`A trip starts at ${y10ClockText(start)} and ends at ${y10ClockText(start+dur)}. Duration = ? minutes`,dur,'Subtract start time from finish time.');}
  if(t===6){const kmh=pick([36,54,72,90]);return q('speedTime',`${kmh} km/h = ? m/s`,kmh/3.6,'Divide km/h by 3.6.');}
  if(t===7){const ms=pick([5,10,15,20,25]);return q('speedTime',`${ms} m/s = ? km/h`,ms*3.6,'Multiply m/s by 3.6.');}
  if(t===8){const d1=pick([60,80,100]),s1=pick([40,50]),d2=pick([60,100,120]),s2=pick([60,80]);const totalTime=d1/s1+d2/s2;if(!Number.isInteger(totalTime*2))return y10GenSpeedTime();return q('speedTime',`Travel ${d1} km at ${s1} km/h, then ${d2} km at ${s2} km/h. Total time = ? h`,totalTime,'Find each segment time and add.');}
  if(t===9){const s=pick([30,40,50,60]),tt=pick([2,3,4]),d=s*tt;return q('speedTime',`d=st. If d=${d} and s=${s}, t = ?`,tt,'Rearrange to t=d÷s.');}
  const seconds=pick([0.25,0.5,1.5,2.5]);return q('speedTime',`${seconds} seconds = ? milliseconds`,seconds*1000,'1 second = 1000 milliseconds.');
}

function y10GenScale(){
  const t=randInt(1,y10LevelCount(4,7,9));
  if(t===1){const k=pick([2,3,4,5]),length=pick([3,4,5,6,8]);return q('scale',`Length ${length} enlarged by scale factor ${k} becomes ?`,length*k,'Lengths multiply by the scale factor.');}
  if(t===2){const k=pick([2,3,4,5]);return q('scale',`Length scale factor = ${k}. Area scale factor = ?`,k*k,'Area changes by the square of the length scale factor.');}
  if(t===3){const k=pick([2,3,4]);return q('scale',`Length scale factor = ${k}. Volume scale factor = ?`,k**3,'Volume changes by the cube of the length scale factor.');}
  if(t===4){const k=pick([2,3,4]),area=pick([10,20,30]);return q('scale',`Area ${area} is enlarged by length scale factor ${k}. New area = ?`,area*k*k,'Multiply area by k².');}
  if(t===5){const k=pick([2,3,4]),vol=pick([5,10,20]);return q('scale',`Volume ${vol} is enlarged by length scale factor ${k}. New volume = ?`,vol*k**3,'Multiply volume by k³.');}
  if(t===6){const k=pick([2,3,4,5]);return q('scale',`Area scale factor is ${k*k}. Length scale factor = ?`,k,'Take the positive square root.');}
  if(t===7){const k=pick([2,3,4]);return q('scale',`Volume scale factor is ${k**3}. Length scale factor = ?`,k,'Take the positive cube root.');}
  if(t===8){const k=pick([2,3,4]),p=pick([12,18,20,24]);return q('scale',`Perimeter ${p} enlarged by scale factor ${k}. New perimeter = ?`,p*k,'Perimeter is a length measure.');}
  const k=pick([2,3,4]),area=pick([36,72,144]);return q('scale',`An enlarged shape has area ${area} with area scale factor ${k*k}. Original area = ?`,area/(k*k),'Divide by the area scale factor.');
}

function y10GenParallelAngles(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const a=pick([35,45,55,65,75,85,95,105,115,125,135,145]);return q('parallelAngles',`A corresponding angle between parallel lines is ${a}°. Matching corresponding angle = ?°`,a,'Corresponding angles are equal.');}
  if(t===2){const a=pick([35,45,55,65,75,85,95,105,115,125,135,145]);return q('parallelAngles',`An alternate interior angle is ${a}°. Matching alternate angle = ?°`,a,'Alternate interior angles are equal.');}
  if(t===3){const a=pick([35,45,55,65,75,85,95,105,115,125,135,145]);return q('parallelAngles',`One co-interior angle is ${a}°. Other co-interior angle = ?°`,180-a,'Co-interior angles total 180°.');}
  if(t===4){const a=pick([35,45,55,65,75,85,95,105,115,125,135,145]);return q('parallelAngles',`One vertically opposite angle is ${a}°. Opposite angle = ?°`,a,'Vertically opposite angles are equal.');}
  if(t===5){const a=pick([35,45,55,65,75,85,95,105,115,125,135,145]);return q('parallelAngles',`An angle on a straight line is ${a}°. Adjacent angle = ?°`,180-a,'Angles on a straight line total 180°.');}
  if(t===6){const x=pick([10,12,15,18,20]),a=pick([2,3,4]),b=pick([10,20,30]),c=180-a*x-b;return q('parallelAngles',`Angles (${a}x + ${b})° and ${c}° form a straight line. Find x.`,x,'Set the sum equal to 180°.');}
  if(t===7){const x=pick([8,10,12,15]),a=pick([2,3]),b=pick([20,30,40]),c=pick([4,5]),d=(a-c)*x+b;return q('parallelAngles',`Vertically opposite angles are (${a}x + ${b})° and (${c}x ${y10Signed(d)})°. Find x.`,x,'Vertically opposite angles are equal.');}
  if(t===8){const a=pick([40,50,60,70,80,100,110,120,130,140]);return q('parallelAngles',`Two co-interior angles are ${a}° and ${180-a}°. Do these support parallel lines? Enter 1 for yes, 0 for no.`,1,'Co-interior angles on parallel lines total 180°.');}
  if(t===9){const a=pick([35,45,55,65,75]);return q('parallelAngles',`A corresponding angle is ${a}°. The angle adjacent to its matching angle = ?°`,180-a,'Use corresponding angles, then a straight line.');}
  return q('parallelAngles','If alternate interior angles are equal, this supports that the two lines are: enter 1 for parallel or 2 for perpendicular.',1,'Equal alternate interior angles are a parallel-line test.');
}

function y10GenSimilarity(){
  const t=randInt(1,y10LevelCount(5,8,11));
  if(t===1){const k=pick([2,3,4]),side=pick([3,4,5,6]);return q('similarity',`Similar shapes have length scale factor ${k}. A side of ${side} becomes ?`,side*k,'Corresponding lengths share the same scale factor.');}
  if(t===2){const k=pick([2,3,4]),small=pick([3,4,5,6]),large=small*k;return q('similarity',`Corresponding sides are ${small} and ${large}. Scale factor small→large = ?`,k,'Large ÷ small.');}
  if(t===3){const k=pick([2,3,4]),small=pick([3,4,5,6]),other=pick([4,5,6,8]);return q('similarity',`Similar triangles: ${small} corresponds to ${small*k}; ${other} corresponds to ?.`,other*k,'Use the same scale factor.');}
  if(t===4){return q('similarity','Congruent shapes have scale factor: enter 1 for 1, 2 for 2, or 3 for 0.5.',1,'Congruent shapes are the same size and shape.');}
  if(t===5){return q('similarity','Similar shapes must have: enter 1 for equal corresponding angles, 2 for equal areas, or 3 for equal perimeters.',1,'Similarity preserves corresponding angles.');}
  if(t===6){const k=pick([2,3,4]);return q('similarity',`Similar shapes have side ratio 1:${k}. Area ratio = 1:?`,k*k,'Area scale factor is the square of the length scale factor.');}
  if(t===7){const k=pick([2,3,4]);return q('similarity',`Similar solids have side ratio 1:${k}. Volume ratio = 1:?`,k**3,'Volume scale factor is the cube of the length scale factor.');}
  if(t===8){const k=pick([2,3,4]),big=pick([12,18,24,30]);if(big%k!==0)return y10GenSimilarity();return q('similarity',`Large corresponding side ${big}; scale factor small→large ${k}. Small side = ?`,big/k,'Divide by the scale factor.');}
  if(t===9){return q('similarity','Two triangles have all corresponding angles equal but different side lengths. Enter 1 for similar, 2 for congruent, or 3 for neither.',1,'Equal corresponding angles establish similarity.');}
  if(t===10){return q('similarity','Two shapes are congruent. Are they also similar? Enter 1 for yes or 0 for no.',1,'Congruent shapes are similar with scale factor 1.');}
  const angle=pick([35,40,45,50,60,70,80]);return q('similarity',`Two triangles are similar. An angle of ${angle}° in the first triangle corresponds to an angle in the second triangle. Corresponding angle = ?°`,angle,'Corresponding angles in similar shapes are equal.');
}


function y10GenTransformations(){
  const t=randInt(1,y10LevelCount(5,8,12));
  if(t===1){const x=randInt(-6,6),y=randInt(-6,6),dx=y10NonZeroInt(-5,5);return q('transformations',`Point (${x}, ${y}) translated by (${dx}, 0). New x-coordinate = ?`,x+dx,'Add the translation vector.');}
  if(t===2){const x=randInt(-6,6),y=randInt(-6,6),dy=y10NonZeroInt(-5,5);return q('transformations',`Point (${x}, ${y}) translated by (0, ${dy}). New y-coordinate = ?`,y+dy,'Add the translation vector.');}
  if(t===3){const x=randInt(-6,6),y=y10NonZeroInt(-6,6);return q('transformations',`Reflect (${x}, ${y}) across the x-axis. New y-coordinate = ?`,-y,'Reflection in the x-axis changes the sign of y.');}
  if(t===4){const x=y10NonZeroInt(-6,6),y=randInt(-6,6);return q('transformations',`Reflect (${x}, ${y}) across the y-axis. New x-coordinate = ?`,-x,'Reflection in the y-axis changes the sign of x.');}
  if(t===5){const x=y10NonZeroInt(-6,6),y=randInt(-6,6);return q('transformations',`Rotate (${x}, ${y}) by 180° about the origin. New x-coordinate = ?`,-x,'A 180° rotation maps (x,y) to (−x,−y).');}
  if(t===6){const x=randInt(-6,6),y=y10NonZeroInt(-6,6);return q('transformations',`Rotate (${x}, ${y}) 90° anticlockwise about the origin. New x-coordinate = ?`,-y,'90° anticlockwise maps (x,y) to (−y,x).');}
  if(t===7){const x=randInt(-5,5),y=y10NonZeroInt(-5,5),k=pick([2,3,4]);return q('transformations',`Enlarge (${x}, ${y}) by scale factor ${k} about the origin. New y-coordinate = ?`,y*k,'Multiply each coordinate by the scale factor.');}
  if(t===8){const x=y10NonZeroInt(-5,5),y=randInt(-5,5),k=pick([0.5,2]);return q('transformations',`Enlarge (${x*2}, ${y*2}) by scale factor ${k} about the origin. New x-coordinate = ?`,x*2*k,'Multiply each coordinate by the scale factor.');}
  if(t===9){const mirror=pick([-3,-2,-1,1,2,3]),x=mirror+y10NonZeroInt(-5,5);return q('transformations',`Reflect x=${x} across the vertical line x=${mirror}. New x-coordinate = ?`,2*mirror-x,'A mirror line is halfway between the original and reflected x-coordinates.');}
  if(t===10){const cx=pick([-2,-1,1,2]),cy=pick([-2,-1,1,2]),x=cx+y10NonZeroInt(-4,4),y=cy+y10NonZeroInt(-4,4);return q('transformations',`Rotate (${x}, ${y}) by 180° about (${cx}, ${cy}). New x-coordinate = ?`,2*cx-x,'A 180° rotation places the centre at the midpoint of original and image.');}
  if(t===11){const x=pick([-8,-6,-4,-2,2,4,6,8]),y=pick([-8,-6,-4,-2,2,4,6,8]),k=pick([0.5,1.5]);return q('transformations',`Enlarge (${x}, ${y}) by scale factor ${k} about the origin. New x-coordinate = ?`,x*k,'Multiply coordinates by the scale factor.');}
  return q('transformations','Which transformation can change the size of a shape? Enter 1=translation, 2=reflection, 3=enlargement.',3,'An enlargement changes lengths by a scale factor.');
}


/* ===== STATISTICS ===== */
function y10GenStatsTypes(){
  const t=randInt(1,y10LevelCount(5,7,9));
  if(t===1)return q('statsTypes','One class records its own heights. Investigation type: enter 1=summary, 2=comparison, 3=relationship, 4=time series.',1,'A summary investigation describes one group or variable.');
  if(t===2)return q('statsTypes','Compare travel times for students who walk and students who take the bus. Type: 1=summary, 2=comparison, 3=relationship, 4=time series.',2,'Two groups are being compared.');
  if(t===3)return q('statsTypes','Investigate whether study time is related to test score. Type: 1=summary, 2=comparison, 3=relationship, 4=time series.',3,'Two numerical variables are being related.');
  if(t===4)return q('statsTypes','Record monthly rainfall over two years to study change over time. Type: 1=summary, 2=comparison, 3=relationship, 4=time series.',4,'Time series data are ordered over time.');
  if(t===5)return q('statsTypes','Which question is statistical? Enter 1 for “How tall is Ana?” or 2 for “What are the heights of Year 10 students?”',2,'A statistical question anticipates variation in data.');
  if(t===6)return q('statsTypes','Favourite music genre is: enter 1=categorical, 2=discrete numerical, 3=continuous numerical.',1,'Genre is a category.');
  if(t===7)return q('statsTypes','Number of siblings is: enter 1=categorical, 2=discrete numerical, 3=continuous numerical.',2,'It is counted in whole numbers.');
  if(t===8)return q('statsTypes','Body mass is: enter 1=categorical, 2=discrete numerical, 3=continuous numerical.',3,'Mass can take any value in a measurement range.');
  return q('statsTypes','Data collected directly by the researcher are: enter 1=primary data or 2=secondary data.',1,'Primary data are collected first-hand.');
}

function y10GenSampling(){
  const t=randInt(1,y10LevelCount(5,8,11));
  if(t===1)return q('sampling','A school surveys only basketball-team members about favourite sports. Is the sample likely biased? Enter 1=yes, 0=no.',1,'The sample over-represents one group.');
  if(t===2)return q('sampling','Names are randomly selected from the full school roll. Is this a random sample? Enter 1=yes, 0=no.',1,'Every student has a chance of selection.');
  if(t===3)return q('sampling','Every person in a population is surveyed. Enter 1=sample or 2=census.',2,'A census includes the whole population.');
  if(t===4)return q('sampling','A subset of a population used for a study is called: enter 1=sample or 2=census.',1,'A sample is part of the population.');
  if(t===5)return q('sampling','A voluntary online poll about internet use may over-represent frequent internet users. Enter 1=biased or 2=unbiased.',1,'Self-selection can cause bias.');
  if(t===6)return q('sampling','For estimating all Year 10 students, which is better? Enter 1=10 friends of the researcher, 2=50 randomly chosen Year 10 students.',2,'Random selection and a larger sample improve representation.');
  if(t===7)return q('sampling','Data taken from a government report are: enter 1=primary or 2=secondary.',2,'The researcher did not collect the data first-hand.');
  if(t===8)return q('sampling','A sample is chosen by taking every 10th name from a randomly ordered list. Enter 1=systematic sample or 2=census.',1,'Selecting at a fixed interval is systematic sampling.');
  if(t===9)return q('sampling','Which usually reduces random sampling variation? Enter 1=larger sample or 2=smaller sample.',1,'Larger samples tend to be more stable.');
  if(t===10)return q('sampling','Two random samples use the same method. Which usually gives the more stable estimate? Enter 1=sample of 10 or 2=sample of 30.',2,'With the same sampling method, a larger sample usually has less random variation.');
  return q('sampling','A conclusion about all New Zealand teenagers is based on one small class. Is generalisation risky? Enter 1=yes, 0=no.',1,'The sample may not represent the wider population.');
}


function y10GenCentreSpread(){
  const t=randInt(1,y10LevelCount(5,8,12));
  if(t===1){const values=pick([[4,6,8],[5,7,9,11],[10,12,14,16,18]]);return q('centreSpread',`Mean of ${values.join(', ')} = ?`,values.reduce((a,b)=>a+b,0)/values.length,'Add the values and divide by how many there are.');}
  if(t===2){const values=pick([[3,5,7,9,11],[4,6,8,10,12],[2,3,5,8,13]]);return q('centreSpread',`Median of ${values.join(', ')} = ?`,median(values),'Order the data and find the middle.');}
  if(t===3){const values=pick([[3,4,4,6,8],[5,5,7,8,9],[2,3,3,3,8]]);const counts={};values.forEach(v=>counts[v]=(counts[v]||0)+1);const mode=Number(Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0]);return q('centreSpread',`Mode of ${values.join(', ')} = ?`,mode,'The mode occurs most often.');}
  if(t===4){const min=randInt(2,10),range=randInt(5,20);return q('centreSpread',`Minimum ${min}, maximum ${min+range}. Range = ?`,range,'Range = maximum − minimum.');}
  if(t===5){const q1=randInt(3,10),q3=q1+randInt(4,12);return q('centreSpread',`Q1=${q1}, Q3=${q3}. IQR = ?`,q3-q1,'IQR = Q3 − Q1.');}
  if(t===6){const mean=pick([8,10,12,15]),vals=[mean-3,mean-1,mean+1,mean+3],missingIndex=randInt(0,3),missing=vals[missingIndex],known=vals.filter((_,i)=>i!==missingIndex);return q('centreSpread',`Four numbers have mean ${mean}. Known values: ${known.join(', ')}. Missing value = ?`,missing,'Total = mean × 4, then subtract known values.');}
  if(t===7){return q('centreSpread','Which centre is more resistant to an outlier? Enter 1=mean or 2=median.',2,'The median depends on position, not the size of extreme values.');}
  if(t===8){const values=pick([[8,9,10,10,11,45],[14,15,16,16,17,60],[3,4,5,5,6,30]]);return q('centreSpread',`Data: ${values.join(', ')}. Outlier = ?`,values[values.length-1],'Identify the value far from the rest.');}
  if(t===9){const q1=pick([5,6,7,8]),medianValue=q1+pick([3,4]),q3=medianValue+pick([3,4]);return q('centreSpread',`Five-number summary has Q1=${q1}, median=${medianValue}, Q3=${q3}. Middle 50% spread = ?`,q3-q1,'The middle 50% spread is the IQR.');}
  if(t===10){const [values,q1]=pick([[[2,4,6,8,10,12,14],4],[[3,5,7,9,11,13,15],5],[[4,6,8,10,12,14,16],6]]);return q('centreSpread',`Data: ${values.join(', ')}. Using the median of the lower half, Q1 = ?`,q1,'Exclude the overall median, then find the median of the lower half.');}
  if(t===11){const [aQ3,bMed]=pick([[18,22],[20,25],[24,30]]);return q('centreSpread',`Group A has Q3=${aQ3}. Group B has median=${bMed}. Does the 75%-to-50% comparison support that Group B tends to be larger? Enter 1=yes, 0=no.`,1,'B\'s median is above A\'s upper quartile, giving strong separation in this informal comparison.');}
  return q('centreSpread','A data set has one very high outlier. Which is usually more affected? Enter 1=mean or 2=median.',1,'The mean uses every value directly.');
}


function y10GenMultivariate(){
  const t=randInt(1,y10LevelCount(5,7,9));
  if(t===1)return q('multivariate','Height and arm span recorded for each student gives how many variables per student?',2,'Two measurements are recorded for each individual.');
  if(t===2)return q('multivariate','In “Does study time affect test score?”, study time is: enter 1=explanatory or 2=response.',1,'The explanatory variable may help explain changes in the response.');
  if(t===3)return q('multivariate','In “Does study time affect test score?”, test score is: enter 1=explanatory or 2=response.',2,'The response is the outcome being explained.');
  if(t===4)return q('multivariate','Eye colour and favourite sport are both: enter 1=categorical or 2=numerical.',1,'Both variables are categories.');
  if(t===5)return q('multivariate','Height and mass are both: enter 1=categorical or 2=numerical.',2,'Both are measured numerical variables.');
  if(t===6)return q('multivariate','Number of absences and test score: number of absences is enter 1=discrete or 2=continuous.',1,'Absences are counted in whole numbers.');
  if(t===7)return q('multivariate','Travel time in minutes is usually treated as: enter 1=discrete or 2=continuous.',2,'Time is measured on a continuous scale.');
  if(t===8)return q('multivariate','A two-way table is especially useful for two: enter 1=categorical variables or 2=continuous variables.',1,'Two-way tables cross-classify categories.');
  return q('multivariate','A scatter plot is useful for two numerical variables. Enter 1=True or 0=False.',1,'Scatter plots show relationships between numerical variables.');
}

function y10GenScatter(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1)return q('scatter','As x increases, y usually increases. Enter 1=positive association, 2=negative association, 3=no association.',1,'Both variables tend to move in the same direction.');
  if(t===2)return q('scatter','As x increases, y usually decreases. Enter 1=positive association, 2=negative association, 3=no association.',2,'The variables tend to move in opposite directions.');
  if(t===3)return q('scatter','Points show no clear upward or downward pattern. Enter 1=positive, 2=negative, 3=no clear association.',3,'No consistent trend is visible.');
  if(t===4)return q('scatter','In a scatter plot, the explanatory variable is usually on: enter 1=x-axis or 2=y-axis.',1,'The explanatory variable is usually horizontal.');
  if(t===5)return q('scatter','In a scatter plot, the response variable is usually on: enter 1=x-axis or 2=y-axis.',2,'The response variable is usually vertical.');
  if(t===6)return q('scatter','Estimating within the observed x-range is: enter 1=interpolation or 2=extrapolation.',1,'Interpolation stays within the data range.');
  if(t===7)return q('scatter','Estimating beyond the observed x-range is: enter 1=interpolation or 2=extrapolation.',2,'Extrapolation goes beyond observed data.');
  if(t===8){const m=pick([2,3,4]),c=pick([0,2,5]),x=pick([5,10,15]);return q('scatter',`A trend line is ${y10LinearText(m,c)}. At x=${x}, predicted y = ?`,m*x+c,'Substitute x into the trend line.');}
  if(t===9)return q('scatter','Which prediction is usually less reliable? Enter 1=interpolation or 2=far extrapolation.',2,'Far extrapolation assumes the trend continues beyond known data.');
  return q('scatter','A strong association proves causation. Enter 1=True or 0=False.',0,'Association alone does not prove causation.');
}

/* ===== PROBABILITY ===== */
function y10GenExperimentalProb(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){const [s,n]=pick([[18,30],[24,40],[35,50],[42,60],[54,90]]);return qFrac('experimentalProb',`An event occurred ${s} times in ${n} trials. Experimental probability = ?`,s/n,'Experimental probability = successes ÷ trials.');}
  if(t===2){const [s,n]=pick([[15,100],[18,120],[24,80],[35,140],[45,150]]);return q('experimentalProb',`An event occurred ${s} times in ${n} trials. Relative frequency = ?%`,s/n*100,'Divide successes by trials, then multiply by 100.');}
  if(t===3){const p=pick([0.2,0.25,0.5,0.75]),n=pick([40,80,100,120]);if(!Number.isInteger(p*n))return y10GenExperimentalProb();return q('experimentalProb',`Theoretical probability is ${p}. In ${n} trials, expected successes ≈ ?`,p*n,'Multiply probability by number of trials.');}
  if(t===4)return q('experimentalProb','Which usually gives a more stable experimental estimate? Enter 1=20 trials or 2=2,000 trials.',2,'More trials usually reduce random variation.');
  if(t===5)return q('experimentalProb','As the number of fair-coin tosses becomes very large, the heads proportion tends to: enter 1=0, 2=0.5, 3=1.',2,'This is the law of large numbers.');
  if(t===6){const [heads,total]=pick([[12,20],[27,50],[48,80],[63,100]]);return q('experimentalProb',`A coin gives ${heads} heads in ${total} tosses. Tails = ?`,total-heads,'Heads + tails = total tosses.');}
  if(t===7){const [s,n]=pick([[24,40],[30,50],[48,80]]);return q('experimentalProb',`Experimental probability ${s}/${n}. Percentage = ?%`,s/n*100,'Convert the fraction to a percentage.');}
  if(t===8)return q('experimentalProb','An irregular spinner has unknown probabilities. Best way to estimate them: enter 1=repeat many spins, 2=assume all sectors are equally likely.',1,'Repeated trials can estimate an unknown probability.');
  if(t===9){const [p,n]=pick([[0.3,100],[0.4,50],[0.6,40],[0.75,80]]);return q('experimentalProb',`Relative frequency ${p} from ${n} trials corresponds to ? successes`,p*n,'Successes = relative frequency × trials.');}
  return q('experimentalProb','A simulation is repeated 10,000 times instead of 10 times. Is random fluctuation usually smaller proportionally? Enter 1=yes, 0=no.',1,'Large simulations tend to stabilise relative frequencies.');
}

function y10GenSampleSpaces(){
  const t=randInt(1,y10LevelCount(5,8,10));
  if(t===1){return q('sampleSpaces','Two fair coins are tossed. Number of outcomes in the sample space = ?',4,'HH, HT, TH, TT.');}
  if(t===2){return q('sampleSpaces','A fair six-sided die and a fair coin are used. Number of ordered outcomes = ?',12,'Multiply 6 die outcomes by 2 coin outcomes.');}
  if(t===3){const a=pick([3,4,5]),b=pick([2,3,4]);return q('sampleSpaces',`First choice has ${a} options and second choice has ${b} options. Total ordered outcomes = ?`,a*b,'Use the multiplication principle.');}
  if(t===4){return q('sampleSpaces','Two fair six-sided dice are rolled. Number of ordered outcomes = ?',36,'6×6 ordered pairs.');}
  if(t===5){return q('sampleSpaces','A coin is tossed three times. Number of outcomes = ?',8,'Each toss doubles the number of sequences: 2³.');}
  if(t===6){const [a,b]=pick([[2,3],[3,4],[4,5]]);return q('sampleSpaces',`A spinner has ${a} outcomes and a die-like object has ${b} outcomes. Two-stage sample space size = ?`,a*b,'Multiply stage counts.');}
  if(t===7){return q('sampleSpaces','For two dice, is (2,5) different from (5,2) in an ordered sample space? Enter 1=yes, 0=no.',1,'The first and second die positions matter.');}
  if(t===8){return q('sampleSpaces','A tree diagram with 2 first branches and 3 branches from each gives how many final outcomes?',6,'Multiply branches across stages.');}
  if(t===9){const n=pick([2,3,4,5]);return q('sampleSpaces',`${n} independent yes/no stages have how many possible outcome sequences?`,2**n,'Each stage has 2 outcomes, so use 2ⁿ.');}
  return q('sampleSpaces','A complete sample space should include every possible outcome exactly once. Enter 1=True or 0=False.',1,'A sample space lists all possible outcomes.');
}

function y10GenJointEvents(){
  const t=randInt(1,y10LevelCount(5,9,12));
  if(t===1){const [a,b]=pick([[1,2],[1,3],[1,4],[2,3]]);return qFrac('jointEvents',`Independent events have P(A)=${a}/${b} and P(B)=1/2. P(A and B) = ?`,a/b*0.5,'For independent events, multiply probabilities.');}
  if(t===2){const [p,r]=pick([[0.2,0.3],[0.25,0.5],[0.4,0.5]]);return q('jointEvents',`Independent events have probabilities ${p} and ${r}. P(both) = ?`,p*r,'Multiply independent probabilities.');}
  if(t===3){const p=pick([0.2,0.25,0.4,0.5,0.6]);return q('jointEvents',`P(A)=${p}. P(not A) = ?`,1-p,'Complement probabilities total 1.');}
  if(t===4)return q('jointEvents','On one die roll, events “roll a 2” and “roll a 5” are mutually exclusive. Enter 1=True or 0=False.',1,'They cannot occur on the same roll.');
  if(t===5)return q('jointEvents','On one die roll, events “even” and “greater than 3” can both occur. Enter 1=True or 0=False.',1,'4 and 6 satisfy both events.');
  if(t===6){const [p,r]=pick([[0.2,0.3],[0.25,0.5],[0.4,0.2]]);return q('jointEvents',`Mutually exclusive events have P(A)=${p}, P(B)=${r}. P(A or B) = ?`,p+r,'Add probabilities when events cannot overlap.');}
  if(t===7){const p=pick([0.2,0.25,0.5]);return q('jointEvents',`Independent event success probability ${p}. Tried twice. P(no successes) = ?`,(1-p)**2,'Multiply the failure probability for both trials.');}
  if(t===8){const p=pick([0.2,0.25,0.5]);return q('jointEvents',`Independent event success probability ${p}. Tried twice. P(at least one success) = ?`,1-(1-p)**2,'Use 1−P(no successes).');}
  if(t===9){const red=pick([3,4,5]),blue=pick([2,3,4]),total=red+blue;return qFrac('jointEvents',`Bag: ${red} red, ${blue} blue. Without replacement, P(red then red) = ?`,red/total*(red-1)/(total-1),'After the first red, both red count and total decrease.');}
  if(t===10){const red=pick([3,4,5]),blue=pick([2,3,4]),total=red+blue;return qFrac('jointEvents',`Bag: ${red} red, ${blue} blue. With replacement, P(red then blue) = ?`,red/total*blue/total,'Replacement keeps the denominator unchanged.');}
  if(t===11){const [pA,pB,pBoth,ans]=pick([[0.5,0.4,0.2,0.7],[0.6,0.3,0.1,0.8],[0.4,0.5,0.15,0.75]]);return q('jointEvents',`P(A)=${pA}, P(B)=${pB}, P(A and B)=${pBoth}. P(A or B) = ?`,ans,'Add P(A) and P(B), then subtract the overlap once.');}
  return q('jointEvents','Two cards are drawn without replacement. Are the two draw events independent or dependent? Enter 1=independent, 2=dependent.',2,'Without replacement, the first draw changes the probabilities on the second draw.');
}


YEAR_BANKS[10] = {
  rational: y10GenRational,
  scientific: y10GenScientific,
  indices: y10GenIndices,
  numberTypes: y10GenNumberTypes,
  surds: y10GenSurds,
  sigfig: y10GenSigFig,
  percentages: y10GenPercentages,
  ratioRate: y10GenRatioRate,
  financial: y10GenFinancial,
  order: y10GenOrder,
  collect: y10GenCollect,
  expandSingle: y10GenExpandSingle,
  expandDouble: y10GenExpandDouble,
  factorCommon: y10GenFactorCommon,
  factorQuadratic: y10GenFactorQuadratic,
  linear: y10GenLinear,
  inequalities: y10GenInequalities,
  formula: y10GenFormula,
  quadratics: y10GenQuadratics,
  straightLines: y10GenStraightLines,
  linearPatterns: y10GenLinearPatterns,
  metric: y10GenMetric,
  circle: y10GenCircle,
  compositeArea: y10GenCompositeArea,
  surfaceArea: y10GenSurfaceArea,
  volume: y10GenVolume,
  pythagoras: y10GenPythagoras,
  speedTime: y10GenSpeedTime,
  scale: y10GenScale,
  parallelAngles: y10GenParallelAngles,
  similarity: y10GenSimilarity,
  transformations: y10GenTransformations,
  statsTypes: y10GenStatsTypes,
  sampling: y10GenSampling,
  centreSpread: y10GenCentreSpread,
  multivariate: y10GenMultivariate,
  scatter: y10GenScatter,
  experimentalProb: y10GenExperimentalProb,
  sampleSpaces: y10GenSampleSpaces,
  jointEvents: y10GenJointEvents
};
