'use strict';

/* Year 7 configuration and question bank. */
YEAR_CONFIGS[7] = {"title":"Year 7 Rapid Fire Mental Maths","skillLabel":"Year 7 Skill","mixed":"Mixed Year 7 Skills","labels":{"integers":"Integers & Negative Numbers","order":"Order of Operations","powers":"Powers, Squares & Roots","factors":"Factors, Multiples & Primes","fractions":"Fractions","decimals":"Decimals","percentages":"Percentages","ratio":"Ratio & Rates","algebra":"Algebra Expressions","writingAlgebra":"Words to Algebra: Expressions & Equations","equations":"Simple Equations","sequences":"Sequences","estimation":"Estimation & Rounding","units":"Units, Time & Speed","geometry":"Geometry","mixed":"Mixed Year 7 Skills","review":"Mistake Review","fdpConversions":"Fraction–Decimal–Percentage Conversion","percentageChange":"Percentage Change","directProportion":"Direct Proportion & Unit Rates","simplifyExpand":"Simplifying & Expanding Expressions","twoStepEquations":"Two-Step Equations","inequalities":"Basic Inequalities","coordinates":"Coordinates & Straight Lines","pythagoras":"Pythagoras","statistics":"Statistics","probability":"Probability","fdpComparison":"Fraction–Decimal–Percentage Comparison","fdpOperations":"Mixed Fraction, Decimal & Percentage Operations","fractionProblemSolving":"Fraction Problem Solving","angleRelationships":"Angle Relationships","mentalStrategies":"Mental Calculation Strategies","remaindersPatterns":"Remainders & Repeating Patterns","directionsScale":"Compass Directions & Map Scale","financialMaths":"Financial Mathematics","areaVolumeUnits":"Area & Volume Unit Relationships"},"skills":["integers","order","mentalStrategies","powers","factors","remaindersPatterns","fractions","fractionProblemSolving","decimals","percentages","fdpConversions","fdpComparison","fdpOperations","ratio","algebra","writingAlgebra","equations","sequences","estimation","units","directionsScale","areaVolumeUnits","geometry","angleRelationships","percentageChange","financialMaths","directProportion","simplifyExpand","twoStepEquations","inequalities","coordinates","pythagoras","statistics","probability"],"levels":[["starter","Starter"],["core","Core"],["challenge","Challenge"]],"teacher":"Year 7 includes short, calculator-free practice across number, fractions, algebra, geometry, probability, compass directions, map scale, financial mathematics and area-volume unit relationships."};
BASE_STORAGE_BY_YEAR[7] = {"stars":"dyaaY7Stars","hero":"dyaaY7Hero","best":"dyaaY7Best","mistakes":"dyaaY7Mistakes"};

/* ===== YEAR 7 QUESTION GENERATORS ===== */

function y7Superscript(value) {
  const digits = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
  return String(value).split('').map(ch => digits[ch] || ch).join('');
}


function y7GenIntegers() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 3): L === 'core' ? randInt(1, 5): randInt(1, 7);
  if (t === 1) {
    const a = randInt( - 15, 15),
    b = randInt( - 15, 15);
    return q('integers', `${a} + (${b}) = ?`, a + b, 'Add signed integers carefully.')
  }
  if (t === 2) {
    const a = randInt( - 12, 18),
    b = randInt( - 12, 18);
    return q('integers', `${a} − (${b}) = ?`, a - b, 'Subtracting a negative means adding.')
  }
  if (t === 3) {
    const a = randInt( - 10, - 2),
    b = randInt(2, 9);
    return q('integers', `${a} × ${b} = ?`, a * b, 'A negative times a positive is negative.')
  }
  if (t === 4) {
    const a = randInt( - 9, - 2),
    b = randInt( - 9, - 2);
    return q('integers', `(${a}) × (${b}) = ?`, a * b, 'A negative times a negative is positive.')
  }
  if (t === 5) {
    const b = randInt(2, 10),
    ans = randInt( - 12, 12),
    a = b * ans;
    return q('integers', `${a} ÷ ${b} = ?`, ans, 'Use multiplication facts with signs.')
  }
  if (t === 6) {
    const a = randInt( - 20, 20);
    return q('integers', `|${a}| = ?`, Math.abs(a), 'Absolute value is distance from zero.')
  }
  const a = randInt( - 12, 8),
  b = randInt( - 8, 12),
  c = randInt(2, 6);
  return q('integers', `${a} − (${b}) × ${c} = ?`, a - b * c, 'Multiply before subtracting.')
}


function y7GenOrder() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 3) : L === 'core' ? randInt(1, 5) : randInt(1, 7);

  if (t === 1) {
    const a = randInt(8, 30), b = randInt(2, 9), c = randInt(2, 9);
    return q('order', `${a} + ${b} × ${c} = ?`, a + b * c, 'Multiply before adding.');
  }
  if (t === 2) {
    const a = randInt(2, 8), b = randInt(8, 18), c = randInt(2, 7);
    return q('order', `${a} × (${b} − ${c}) = ?`, a * (b - c), 'Brackets first.');
  }
  if (t === 3) {
    const d = randInt(2, 8), ans = randInt(4, 14), add = randInt(4, 20);
    return q('order', `${d * ans} ÷ ${d} + ${add} = ?`, ans + add, 'Division before addition.');
  }
  if (t === 4) {
    const a = randInt(-8, 12), b = randInt(2, 7), c = randInt(-5, 8);
    return q('order', `${a} + ${b} × (${c}) = ?`, a + b * c, 'Multiply first, including the sign.');
  }
  if (t === 5) {
    const [a, d] = pick([[2, 2], [4, 2], [6, 2], [4, 4], [8, 4]]);
    const b = randInt(4, 10), c = randInt(2, 8);
    return q('order', `${a} × (${b} + ${c}) ÷ ${d} = ?`, a * (b + c) / d, 'Brackets, then multiply and divide left to right.');
  }
  if (t === 6) {
    const a = randInt(20, 50), b = randInt(-6, -2), c = randInt(2, 7);
    return q('order', `${a} − (${b}) × ${c} = ?`, a - b * c, 'Multiply first; subtracting a negative product adds.');
  }
  const a = randInt(2, 6), b = randInt(4, 9), c = randInt(2, 5), d = randInt(1, 8);
  return q('order', `${a} × (${b} + ${c}) − ${d}² = ?`, a * (b + c) - d * d, 'Brackets and powers before other operations.');
}

function y7GenPowers() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 8) : randInt(1, 10);

  if (t === 1) {
    const n = randInt(2, L === 'challenge' ? 18 : 14);
    return q('powers', `${n}² = ?`, n * n, 'Square means multiply the number by itself.');
  }
  if (t === 2) {
    const n = randInt(2, L === 'starter' ? 5 : 8);
    return q('powers', `${n}³ = ?`, n * n * n, 'Cube means multiply three equal factors.');
  }
  if (t === 3) {
    const n = pick([4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]);
    return q('powers', `√${n} = ?`, Math.sqrt(n), 'Find the positive square root.');
  }
  if (t === 4) {
    const b = pick([2, 3, 4, 5]), e = randInt(2, L === 'challenge' ? 5 : 4);
    return q('powers', `${b}${y7Superscript(e)} = ?`, b ** e, 'Write the power as repeated multiplication.');
  }
  if (t === 5) {
    const a = randInt(2, 8), b = randInt(2, 8);
    return q('powers', `${a}² + ${b}² = ?`, a * a + b * b, 'Calculate each square first.');
  }
  if (t === 6) {
    const b = pick([2, 3, 5]), a = randInt(1, 3), c = randInt(1, 3);
    return q('powers', `${b}${y7Superscript(a)} × ${b}${y7Superscript(c)} = ?`, b ** (a + c), 'Same base: add the exponents.');
  }
  if (t === 7) {
    const n = randInt(3, 9);
    return q('powers', `${n}³ − ${n}² = ?`, n ** 3 - n ** 2, 'Calculate powers first.');
  }
  if (t === 8) {
    const n = pick([8, 27, 64, 125, 216]);
    return q('powers', `Cube root of ${n} = ?`, Math.round(Math.cbrt(n)), 'Find the number whose cube is the given value.');
  }
  if (t === 9) {
    const [number, value] = pick([[3704218, 700000], [6405281, 5000], [9052146, 2000], [4827035, 7000]]);
    const digit = String(value)[0];
    return q('powers', `Value of the ${digit} in ${number.toLocaleString('en-NZ')} = ?`, value, 'Use the digit’s place value.');
  }
  const [a, p, b, qv, c, r] = pick([[6, 5, 3, 3, 4, 2], [4, 6, 5, 3, 2, 1], [7, 5, 2, 4, 6, 2]]);
  const answer = a * 10 ** p + b * 10 ** qv + c * 10 ** r;
  return q('powers', `${a} × 10${y7Superscript(p)} + ${b} × 10${y7Superscript(qv)} + ${c} × 10${y7Superscript(r)} = ?`, answer, 'Evaluate each place-value term, then add.');
}

function y7GenFactors() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 6) : L === 'core' ? randInt(1, 9) : randInt(1, 10);

  if (t === 1) {
    const a = pick([12, 18, 24, 30, 36, 42, 48]), b = pick([16, 20, 24, 28, 32, 40, 54]);
    return q('factors', `HCF of ${a} and ${b} = ?`, gcd(a, b), 'Find the greatest common factor.');
  }
  if (t === 2) {
    const a = pick([3, 4, 5, 6, 8, 9, 10, 12]), b = pick([4, 5, 6, 8, 10, 12, 15]);
    return q('factors', `LCM of ${a} and ${b} = ?`, lcm(a, b), 'Find the first common multiple.');
  }
  if (t === 3) {
    const n = pick([19, 23, 29, 31, 37, 41, 43, 47, 53]);
    return q('factors', `Next prime after ${n} = ?`, nextPrime(n), 'Test each next number for divisibility.');
  }
  if (t === 4) {
    const n = pick([18, 20, 24, 28, 30, 36, 40, 42]);
    return q('factors', `How many factors does ${n} have?`, countFactors(n), 'List factor pairs.');
  }
  if (t === 5) {
    const divisor = pick([2, 3, 4, 5, 6, 8, 9, 10]);
    const yes = chance(0.5);
    let n;
    if (yes) {
      n = divisor * randInt(12, 120);
    } else {
      const remainder = randInt(1, divisor - 1);
      n = divisor * randInt(12, 120) + remainder;
    }
    return q('factors', `Is ${n.toLocaleString('en-NZ')} divisible by ${divisor}? Enter 1 for Yes, 0 for No.`, yes ? 1 : 0, 'Use the divisibility rule or divide mentally.');
  }
  if (t === 6) {
    const n = pick([42, 54, 66, 70, 78, 84, 90, 98]);
    let sp = 2;
    while (n % sp !== 0) sp++;
    return q('factors', `Smallest prime factor of ${n} = ?`, sp, 'Test 2, then 3, then 5, then 7.');
  }
  if (t === 7) {
    const n = pick([12, 18, 20, 24, 27, 30, 36, 45]);
    const primes = primeFactors(n);
    return q('factors', `How many prime factors, including repeats, are in ${n}?`, primes.length, 'Use a factor tree and count the prime leaves.');
  }
  if (t === 8) {
    const a = pick([2, 3, 5, 7]), b = pick([2, 3, 5]), n = a * a * b;
    return q('factors', `Largest prime factor of ${n} = ?`, Math.max(a, b), 'Use prime factorisation.');
  }
  if (t === 9) {
    const n = pick([60, 72, 84, 90, 96]);
    return q('factors', `How many distinct prime factors does ${n} have?`, new Set(primeFactors(n)).size, 'Count different primes, not repeats.');
  }
  let a, b, missing;
  do {
    a = randInt(1, 9);
    b = randInt(0, 9);
    missing = (9 - ((a + b) % 9)) % 9;
  } while (missing === 0 || missing === 9);
  return q('factors', `Which digit makes ${a}${b}? divisible by 9?`, missing, 'The sum of the digits must be divisible by 9.');
}

function y7GenFractions() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 6) : randInt(1, 8);

  if (t === 1) {
    const [a, b, c, d] = pick([[1, 2, 1, 4], [2, 3, 1, 6], [3, 4, 1, 8], [2, 5, 1, 10]]);
    return qFrac('fractions', `${a}/${b} + ${c}/${d} = ?`, a / b + c / d, 'Find a common denominator.');
  }
  if (t === 2) {
    const [a, b, c, d] = pick([[5, 6, 1, 3], [7, 8, 1, 4], [4, 5, 3, 10], [3, 4, 1, 6]]);
    return qFrac('fractions', `${a}/${b} − ${c}/${d} = ?`, a / b - c / d, 'Find a common denominator before subtracting.');
  }
  if (t === 3) {
    const [a, b, c, d] = pick([[2, 3, 3, 4], [3, 5, 5, 6], [4, 7, 7, 8], [3, 4, 2, 5]]);
    return qFrac('fractions', `${a}/${b} × ${c}/${d} = ?`, a / b * c / d, 'Multiply numerators and denominators, then simplify.');
  }
  if (t === 4) {
    const [n, d] = pick([[3, 4], [2, 5], [5, 6], [3, 8], [7, 10]]), k = randInt(3, 12), whole = d * k;
    return q('fractions', `${n}/${d} of ${whole} = ?`, n * k, 'Divide by the denominator, then multiply by the numerator.');
  }
  if (t === 5) {
    const whole = randInt(1, 3), [n, d] = pick([[1, 2], [1, 3], [2, 3], [3, 4], [5, 6]]);
    return qFrac('fractions', `${whole} + ${n}/${d} = ?`, whole + n / d, 'Write the result as an improper fraction.');
  }
  if (t === 6) {
    const [n, d] = pick([[12, 18], [15, 25], [21, 28], [24, 36], [35, 49]]);
    return qFrac('fractions', `Simplify ${n}/${d}`, n / d, 'Divide numerator and denominator by their HCF.');
  }
  if (t === 7) {
    const [a, b, c, d] = pick([[3, 4, 1, 2], [5, 6, 5, 12], [2, 3, 4, 9], [3, 5, 3, 10], [3, 4, 3, 8], [4, 5, 2, 5]]);
    return qFrac('fractions', `${a}/${b} ÷ ${c}/${d} = ?`, (a / b) / (c / d), 'Multiply by the reciprocal.');
  }
  const [a, b, c, d] = pick([[1, 2, 3, 4], [2, 3, 5, 6], [3, 5, 7, 10]]);
  return q('fractions', `Which is larger? Enter 1 for ${a}/${b}, or 2 for ${c}/${d}.`, a / b > c / d ? 1 : 2, 'Compare using a common denominator or decimals.');
}

function y7GenDecimals() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 9) : randInt(1, 11);

  if (t === 1) {
    const a = randInt(120, 850) / 100, b = randInt(15, 250) / 100;
    return q('decimals', `${fmt(a)} + ${fmt(b)} = ?`, roundTo(a + b), 'Line up decimal place values.');
  }
  if (t === 2) {
    const a = randInt(450, 999) / 100, b = randInt(10, Math.floor(a * 100) - 10) / 100;
    return q('decimals', `${fmt(a)} − ${fmt(b)} = ?`, roundTo(a - b), 'Subtract using place value.');
  }
  if (t === 3) {
    const a = randInt(12, 99) / 10, b = randInt(2, 9);
    return q('decimals', `${fmt(a)} × ${b} = ?`, roundTo(a * b), 'Multiply the whole-number facts, then use place value.');
  }
  if (t === 4) {
    const b = pick([2, 4, 5, 8]), ans = randInt(5, 50) / 10, a = roundTo(ans * b);
    return q('decimals', `${fmt(a)} ÷ ${b} = ?`, ans, 'Use a related multiplication fact.');
  }
  if (t === 5) {
    const n = randInt(12, 999) / 100, m = pick([10, 100, 1000]);
    return q('decimals', `${fmt(n)} × ${m} = ?`, roundTo(n * m), 'Use place value.');
  }
  if (t === 6) {
    const n = randInt(12, 9999), m = pick([10, 100, 1000]);
    return q('decimals', `${n} ÷ ${m} = ?`, roundTo(n / m), 'Use place value.');
  }
  if (t === 7) {
    const a = randInt(10, 90) / 100;
    return q('decimals', `${fmt(a)} + □ = 1`, roundTo(1 - a), 'Find the complement to 1.');
  }
  if (t === 8) {
    const a = pick([3.6, 4.8, 7.2, 8.4]), b = pick([0.5, 0.25, 0.2, 0.1]);
    return q('decimals', `${fmt(a)} × ${fmt(b)} = ?`, roundTo(a * b), 'Use half, quarter, fifth or tenth.');
  }
  if (t === 9) {
    const [a, b, operation] = pick([[1.250, 0.375, '+'], [2.500, 0.625, '−'], [3.600, 1.825, '−'], [0.875, 0.125, '+'], [4.250, 1.375, '+']]);
    const answer = operation === '+' ? a + b : a - b;
    return q('decimals', `${a.toFixed(3)} ${operation} ${b.toFixed(3)} = ?`, roundTo(answer, 3), 'Line up thousandths, hundredths and tenths.');
  }
  if (t === 10) {
    const [a, b, answer] = pick([[0.405, 0.450, 2], [0.720, 0.702, 1], [1.205, 1.250, 2], [3.080, 3.008, 1]]);
    return q('decimals', `Which is larger? Enter 1 for ${a.toFixed(3)}, or 2 for ${b.toFixed(3)}.`, answer, 'Compare digits from left to right by place value.');
  }
  const [dividend, divisor, answer] = pick([[168, 12, 14], [156, 12, 13], [225, 15, 15], [144, 16, 9], [7, 20, 0.35], [9, 20, 0.45]]);
  return q('decimals', `${dividend} ÷ ${divisor} = ?`, answer, 'Use a known multiplication fact or convert the fraction to a decimal.');
}

function y7GenPercentages() {
  const L = state.level,
  t = L === 'starter' ? randInt(1, 4): L === 'core' ? randInt(1, 6): randInt(1, 8);
  if (t === 1) {
    const p = pick([10, 20, 25, 50, 75]),
    base = pick([40, 60, 80, 100, 120, 160, 200, 240, 300]);
    return q('percentages', `${p}% of ${base} = ?`, base * p / 100, 'Build from 10%, 25% or 50%.')
  }
  if (t === 2) {
    const p = pick([5, 15, 30, 35, 60, 70]),
    base = pick([40, 60, 80, 100, 120, 160, 200, 240]);
    return q('percentages', `${p}% of ${base} = ?`, base * p / 100, 'Split the percentage into easy parts.')
  }
  if (t === 3) {
    const price = pick([60, 80, 120, 160, 200]),
    p = pick([10, 15, 20, 25, 30]);
    return q('percentages', `Original $${price}，after ${p}% off = $?`, roundTo(price * (1 - p / 100)), 'Find the discount, then subtract.')
  }
  if (t === 4) {
    const n = pick([40, 60, 80, 120, 160, 200]),
    p = pick([10, 20, 25]);
    return q('percentages', `Increase ${n} by ${p}%`, n * (1 + p / 100), 'Find the increase, then add it.')
  }
  if (t === 5) {
    const d = pick([.125, .2, .25, .35, .4, .6, .625, .75]);
    return q('percentages', `${fmt(d)} = ?%`, d * 100, 'Multiply by 100.')
  }
  if (t === 6) {
    const [n,
    d] = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 8], [5, 8]]);
    return q('percentages', `${n}/${d} = ?%`, n / d * 100, 'Convert the fraction to a decimal or denominator 100.')
  }
  if (t === 7) {
    const whole = pick([50, 75, 90, 120, 150]),
    p = pick([10, 20, 25, 30]);
    const part = whole * p / 100;
    return q('percentages', `${p}% of a number is ${part}. The number is ?`, whole, 'Divide the part by the percentage as a decimal.')
  }
  const old = pick([40, 50, 80, 100]),
  inc = pick([10, 20, 25, 50]);
  const neu = old * (1 + inc / 100);
  return q('percentages', `${old} increases to ${neu}. Percentage increase = ?%`, inc, 'Increase ÷ original × 100.')
}


function y7GenRatio() {
  const L = state.level,
  t = L === 'starter' ? randInt(1, 3): L === 'core' ? randInt(1, 5): randInt(1, 7);

  if (t === 1) {
    const a = randInt(2, 8),
    b = randInt(2, 9);

    let k;

    do {
      k = randInt(2, 6);
    } while (k === b);

    return qRatio('ratio', `Simplify ${a*k}:${b*k}`, simplifyRatio(a, b), 'Divide both parts by their HCF.')
  }

  if (t === 2) {
    const a = randInt(2, 7),
    b = randInt(3, 9);

    let k;

    do {
      k = randInt(2, 6);
    } while (k === b);

    return q('ratio', `${a}:${b} = ${a*k}:?`, b * k, 'Multiply both parts by the same scale factor.')
  }

  if (t === 3) {
    const a = randInt(2, 6),
    b = randInt(3, 8),
    total = (a + b) * randInt(3, 8);
    return q('ratio', `Share ${total} in the ratio ${a}:${b}. Smaller share = ?`, total * Math.min(a, b) / (a + b), 'Find one ratio part first.')
  }

  if (t === 4) {
    const items = randInt(3, 8),
    cost = items * randInt(3, 12);
    return q('ratio', `${items} books cost $${cost}. Cost per book = $?`, cost / items, 'Divide total cost by number of books.')
  }

  if (t === 5) {
    const speed = pick([40, 50, 60, 70, 80]),
    time = pick([1.5, 2, 2.5, 3]);
    return q('ratio', `${speed} km/h for ${time} h. Distance = ? km`, speed * time, 'Distance = speed × time.')
  }

  if (t === 6) {
    const a = randInt(2, 5),
    b = randInt(3, 7),
    red = a * randInt(3, 8);
    return q('ratio', `Red:Blue = ${a}:${b}. If red = ${red}, blue = ?`, red / a * b, 'Find the scale factor.')
  }

  const a = randInt(2, 6),
  b = randInt(3, 8);

  let k;

  do {
    k = randInt(2, 6);
  } while (k === b);

  const c = a * k;

  return q('ratio', `${a}:${b} = ${c}:?`, b * k, 'Use equivalent ratios or cross multiplication.')
}
function y7GenAlgebra() {
  const L = state.level,
  t = L === 'starter' ? randInt(1, 4): L === 'core' ? randInt(1, 6): randInt(1, 8);
  if (t === 1) {
    const x = randInt( - 5, 12),
    a = randInt(2, 7),
    b = randInt( - 9, 12);
    return q('algebra', `If x = ${x}, find ${a}x ${b>=0?'+':'−'} ${Math.abs(b)}.`, a * x + b, 'Substitute the value of x.')
  }
  if (t === 2) {
    const x = randInt(2, 10),
    a = randInt(2, 6),
    b = randInt(2, 6);
    return q('algebra', `If x = ${x}, find ${a}x + ${b}x.`, (a + b) * x, 'Combine like terms, then substitute.')
  }
  if (t === 3) {
    const x = randInt(2, 10),
    a = randInt(2, 6),
    b = randInt(2, 9);
    return q('algebra', `If x = ${x}, find ${a}(x + ${b}).`, a * (x + b), 'Calculate inside the brackets first.')
  }
  if (t === 4) {
    const a = randInt(2, 8),
    b = randInt(2, 8);
    return q('algebra', `Coefficient of x in ${a}x + ${b} + 3x = ?`, a + 3, 'Combine the x terms.')
  }
  if (t === 5) {
    const a = randInt(2, 6),
    b = randInt(2, 9),
    x = randInt(2, 10);
    return q('algebra', `If x = ${x}, find ${a}x² + ${b}.`, a * x * x + b, 'Square x before multiplying.')
  }
  if (t === 6) {
    const a = randInt(2, 5),
    b = randInt(2, 5),
    x = randInt(2, 8),
    y = randInt(2, 8);
    return q('algebra', `If x=${x}, y=${y}, find ${a}x + ${b}y.`, a * x + b * y, 'Substitute both values.')
  }
  if (t === 7) {
    const n = randInt(3, 12),
    a = randInt(2, 6),
    b = randInt( - 5, 10);
    return q('algebra', `For T = ${a}n ${b>=0?'+':'−'} ${Math.abs(b)}, find T when n=${n}.`, a * n + b, 'Substitute n into the rule.')
  }
  const x = randInt( - 5, 8),
  a = randInt(2, 5),
  b = randInt(1, 6),
  c = randInt( - 8, 8);
  return q('algebra', `If x=${x}, find ${a}(x − ${b}) ${c>=0?'+':'−'} ${Math.abs(c)}.`, a * (x - b) + c, 'Brackets first, then simplify.')
}


function y7GenWritingAlgebra() {
  const L = state.level;
  const t = L === 'starter'
    ? randInt(1, 5)
    : L === 'core'
      ? randInt(1, 11)
      : randInt(1, 16);

  function multipleChoice(prompt, correct, distractors, clue) {
    const options = shuffleCopy([correct, ...distractors]);
    const answer = options.indexOf(correct) + 1;
    const optionText = options
      .map((option, index) => `(${index + 1}) ${option}`)
      .join('   ');

    const question = q(
      'writingAlgebra',
      `${prompt} ${optionText} Enter 1, 2, 3 or 4.`,
      answer,
      clue
    );

    question.choicePrompt = prompt;
    question.choiceOptions = options;

    return question;
  }

  if (t === 1) {
    const extra = randInt(5, 24);
    return multipleChoice(
      `A train travels ${extra} km more than twice a bus route. If the bus route is x km, which expression represents the train distance?`,
      `2x + ${extra}`,
      [`2(x + ${extra})`, `${extra}x + 2`, `x + ${extra}`],
      '“Twice x” is 2x. “More than” means add.'
    );
  }

  if (t === 2) {
    const perimeter = pick([24, 28, 32, 36, 40, 44, 48]);
    return multipleChoice(
      `A square has perimeter ${perimeter} cm. If each side is x cm, which equation is correct?`,
      `4x = ${perimeter}`,
      [`x + 4 = ${perimeter}`, `x² = ${perimeter}`, `x ÷ 4 = ${perimeter}`],
      'A square has four equal sides, so its perimeter is 4x.'
    );
  }

  if (t === 3) {
    const fixed = pick([4, 5, 6, 8, 10]);
    const rate = pick([1.5, 2, 2.5, 3, 3.5]);
    return multipleChoice(
      `A taxi fare has a fixed charge of $${fixed} plus $${fmt(rate)} per kilometre. If the trip is x km, which expression gives the total fare?`,
      `${fixed} + ${fmt(rate)}x`,
      [`${fixed}x + ${fmt(rate)}`, `${fmt(rate)}(x + ${fixed})`, `x ÷ ${fmt(rate)} + ${fixed}`],
      'Total cost = fixed charge + cost per kilometre × number of kilometres.'
    );
  }

  if (t === 4) {
    const hours = randInt(2, 5);
    const extra = randInt(3, 12);
    return multipleChoice(
      `A runner travels at x km/h for ${hours} hours, then walks another ${extra} km. Which expression gives the total distance?`,
      `${hours}x + ${extra}`,
      [`x + ${hours} + ${extra}`, `${extra}x − ${hours}`, `${hours}(x + ${extra})`],
      'Distance travelled at x km/h for h hours is hx, then add the extra distance.'
    );
  }

  if (t === 5) {
    const width = randInt(3, 9);
    const length = randInt(7, 16);
    const area = width * length;
    return multipleChoice(
      `A rectangle has area ${area} cm² and width ${width} cm. If its length is x cm, which equation is correct?`,
      `${width}x = ${area}`,
      [`x + ${width} = ${area}`, `2x + ${2 * width} = ${area}`, `x ÷ ${width} = ${area}`],
      'Area of a rectangle = length × width.'
    );
  }

  if (t === 6) {
    const hours = randInt(2, 6);
    return multipleChoice(
      `A cyclist travels x km in ${hours} hours. Which expression represents the average speed in km/h?`,
      `x ÷ ${hours}`,
      [`${hours}x`, `x + ${hours}`, `${hours} ÷ x`],
      'Average speed = distance ÷ time.'
    );
  }

  if (t === 7) {
    const increase = randInt(2, 8);
    return multipleChoice(
      `A triangle has sides x cm, x + ${increase} cm and 2x cm. Which simplified expression gives its perimeter?`,
      `4x + ${increase}`,
      [`3x + ${increase}`, `4x + ${2 * increase}`, `2x + ${increase}`],
      'Add all three side lengths, then combine the x-terms.'
    );
  }

  if (t === 8) {
    const carHours = randInt(2, 5);
    const busSpeed = pick([35, 40, 45, 50, 60]);
    let busHours;
    do {
      busHours = randInt(2, 6);
    } while (busHours === carHours);
    return multipleChoice(
      `A car and a bus travel the same distance. The car travels at x km/h for ${carHours} hours. The bus travels at ${busSpeed} km/h for ${busHours} hours. Which equation is correct?`,
      `${carHours}x = ${busSpeed} × ${busHours}`,
      [`${busHours}x = ${busSpeed} × ${carHours}`, `x + ${carHours} = ${busSpeed} + ${busHours}`, `x ÷ ${carHours} = ${busSpeed} ÷ ${busHours}`],
      'For equal distances, set speed × time for the car equal to speed × time for the bus.'
    );
  }

  if (t === 9) {
    const multiplier = randInt(2, 6);
    const less = randInt(3, 12);
    return multipleChoice(
      `Which expression means “${less} less than ${multiplier} times x”?`,
      `${multiplier}x − ${less}`,
      [`${multiplier}(x − ${less})`, `${less} − ${multiplier}x`, `x ÷ ${multiplier} − ${less}`],
      '“Times x” gives the product first. “Less than” means subtract afterward.'
    );
  }

  if (t === 10) {
    const add = pick([4, 6, 8, 10, 12]);
    return multipleChoice(
      `Which expression means “half the sum of x and ${add}”?`,
      `(x + ${add}) ÷ 2`,
      [`x + ${add} ÷ 2`, `2(x + ${add})`, `x ÷ 2 + ${add}`],
      'Find the sum first, so the addition must be grouped before dividing by 2.'
    );
  }

  if (t === 11) {
    const older = randInt(2, 8);
    const multiplier = randInt(2, 4);
    return multipleChoice(
      `Lena is x years old. Her brother is ${older} years older. Which expression represents ${multiplier} times her brother’s age?`,
      `${multiplier}(x + ${older})`,
      [`${multiplier}x + ${older}`, `x + ${multiplier * older}`, `${multiplier}(x − ${older})`],
      'Write the brother’s age first, x + the extra years, then multiply the whole expression.'
    );
  }

  if (t === 12) {
    const total = pick([24, 30, 33, 36, 42, 45, 48]);
    return multipleChoice(
      `Three consecutive integers are x, x + 1 and x + 2. Their sum is ${total}. Which simplified equation represents this?`,
      `3x + 3 = ${total}`,
      [`3x + 2 = ${total}`, `x + 3 = ${total}`, `3(x + 3) = ${total}`],
      'Add x + (x + 1) + (x + 2), then combine like terms.'
    );
  }

  if (t === 13) {
    const longer = randInt(2, 6);
    const shorter = randInt(1, 4);
    return multipleChoice(
      `A rectangle has length x + ${longer} and width x − ${shorter}. Which expression gives its perimeter?`,
      `2(x + ${longer}) + 2(x − ${shorter})`,
      [`(x + ${longer})(x − ${shorter})`, `2x + ${longer - shorter}`, `(x + ${longer}) + (x − ${shorter})`],
      'Perimeter is twice the length plus twice the width.'
    );
  }

  if (t === 14) {
    const percent = pick([10, 20, 25, 50]);
    const multiplier = fmt(1 + percent / 100);
    const decreaseMultiplier = fmt(1 - percent / 100);
    return multipleChoice(
      `A price of $x is increased by ${percent}%. Which expression gives the new price?`,
      `${multiplier}x`,
      [`${decreaseMultiplier}x`, `x + ${percent}`, `${percent}x`],
      'An increase by p% means multiply by 1 + p/100.'
    );
  }

  if (t === 15) {
    const divisor = randInt(2, 6);
    const add = randInt(3, 10);
    const result = randInt(10, 24);
    return multipleChoice(
      `A number x is divided by ${divisor}, then ${add} is added. The result is ${result}. Which equation represents this?`,
      `x ÷ ${divisor} + ${add} = ${result}`,
      [`(x + ${add}) ÷ ${divisor} = ${result}`, `${divisor}x + ${add} = ${result}`, `x ÷ (${divisor} + ${add}) = ${result}`],
      'Translate the operations in the order they happen: divide first, then add.'
    );
  }

  const add = randInt(2, 8);
  const subtract = randInt(2, 7);
  return multipleChoice(
    `Which expression means “${subtract} less than twice the sum of x and ${add}”?`,
    `2(x + ${add}) − ${subtract}`,
    [`2x + ${add} − ${subtract}`, `2(x + ${add - subtract})`, `2x + ${add}`],
    '“The sum of x and a” must stay inside brackets before multiplying by 2 and subtracting.'
  );
}


function y7GenEquations() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 8) : randInt(1, 10);
  const x = randInt(L === 'challenge' ? -8 : 1, 15);

  if (t === 1) {
    const b = randInt(3, 20);
    return q('equations', `x + ${b} = ${x + b}. Then x = ?`, x, 'Undo addition by subtracting.');
  }
  if (t === 2) {
    const b = randInt(3, 20);
    return q('equations', `x − ${b} = ${x - b}. Then x = ?`, x, 'Undo subtraction by adding.');
  }
  if (t === 3) {
    const a = randInt(2, 9);
    return q('equations', `${a}x = ${a * x}. Then x = ?`, x, 'Divide both sides by the coefficient.');
  }
  if (t === 4) {
    const divisor = randInt(2, 9), quotient = randInt(L === 'challenge' ? -8 : 1, 15), dividend = divisor * quotient;
    return q('equations', `x ÷ ${divisor} = ${quotient}. Then x = ?`, dividend, 'Multiply both sides by the divisor.');
  }
  if (t === 5) {
    const a = randInt(2, 7), b = randInt(2, 15);
    return q('equations', `${a}x + ${b} = ${a * x + b}. Then x = ?`, x, 'Undo addition, then divide.');
  }
  if (t === 6) {
    const a = randInt(2, 7), b = randInt(2, 15);
    return q('equations', `${a}x − ${b} = ${a * x - b}. Then x = ?`, x, 'Undo subtraction, then divide.');
  }
  if (t === 7) {
    const a = randInt(2, 6), b = randInt(1, 8);
    return q('equations', `${a}(x − ${b}) = ${a * (x - b)}. Then x = ?`, x, 'Divide first, then add.');
  }
  if (t === 8) {
    const a = randInt(2, 6), b = randInt(2, 9), c = randInt(-8, 8);
    return q('equations', `${a}x + ${b} = ${a * x + b}. Find ${a}x ${c >= 0 ? '+' : '−'} ${Math.abs(c)}.`, a * x + c, 'Solve x, then evaluate the requested expression.');
  }
  if (t === 9) {
    const length = randInt(4, 12), width = randInt(3, 10), area = length * width;
    return q('equations', `A = l × w. A = ${area} and l = ${length}. Find w.`, width, 'Divide the area by the known length.');
  }
  const type = pick(['speed', 'volume']);
  if (type === 'speed') {
    const speed = pick([30, 40, 50, 60, 75]), time = pick([2, 3, 4, 5]), distance = speed * time;
    return q('equations', `d = s × t. d = ${distance} and s = ${speed}. Find t.`, time, 'Divide distance by speed.');
  }
  const l = randInt(3, 8), w = randInt(2, 6), h = randInt(2, 5), volume = l * w * h;
  return q('equations', `V = l × w × h. V = ${volume}, l = ${l}, w = ${w}. Find h.`, h, 'Divide volume by length × width.');
}

function y7GenSequences() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 8) : randInt(1, 9);

  if (t === 1) {
    const a = randInt(-10, 20), d = randInt(2, 9);
    return q('sequences', `${a}, ${a + d}, ${a + 2 * d}, ${a + 3 * d}, ... next = ?`, a + 4 * d, 'Add the common difference.');
  }
  if (t === 2) {
    const a = randInt(1, 6), r = pick([2, 3, 4]);
    return q('sequences', `${a}, ${a * r}, ${a * r * r}, ${a * r * r * r}, ... next = ?`, a * r ** 4, 'Multiply by the common ratio.');
  }
  if (t === 3) {
    const a = randInt(1, 10), d = randInt(2, 8), n = randInt(5, 12);
    return q('sequences', `Sequence starts ${a} and increases by ${d}. Term ${n} = ?`, a + (n - 1) * d, 'Use first term + (n−1) × difference.');
  }
  if (t === 4) {
    const n = randInt(3, 10), a = randInt(2, 6), b = randInt(-5, 8);
    return q('sequences', `Tₙ = ${a}n ${b >= 0 ? '+' : '−'} ${Math.abs(b)}. T${n} = ?`, a * n + b, 'Substitute the term number.');
  }
  if (t === 5) {
    const a = randInt(-15, 5), d = randInt(3, 9);
    return q('sequences', `${a}, ${a + d}, □, ${a + 3 * d}. Missing term = ?`, a + 2 * d, 'The difference is constant.');
  }
  if (t === 6) {
    const a = randInt(2, 6), r = pick([-2, -3, 2, 3]);
    return q('sequences', `${a}, ${a * r}, ${a * r * r}, ${a * r * r * r}, ... next = ?`, a * r ** 4, 'Multiply by the same number, including its sign.');
  }
  if (t === 7) {
    const a = randInt(1, 8), d = randInt(2, 7), index = randInt(5, 11), term = a + (index - 1) * d;
    return q('sequences', `In ${a}, ${a + d}, ${a + 2 * d}, ... which term equals ${term}?`, index, 'Solve a + (n−1)d = given term.');
  }
  if (t === 8) {
    const multiplier = randInt(2, 5), add = randInt(1, 8), inputs = [2, 3, 4], outputs = inputs.map(v => multiplier * v + add);
    return q('sequences', `Input: ${inputs.join(', ')}. Output: ${outputs.join(', ')}. The rule is multiply by ? then add ${add}.`, multiplier, 'Compare how the output changes when the input increases by 1.');
  }
  const multiplier = pick([2, 3, 4]), add = randInt(1, 9), inputs = [3, 5, 7], outputs = inputs.map(v => multiplier * v + add);
  return q('sequences', `Input: ${inputs.join(', ')}. Output: ${outputs.join(', ')}. The rule is multiply by ${multiplier} then add ?.`, add, 'Multiply each input first, then compare with its output.');
}

function y7GenEstimation() {
  const L = state.level,
  t = L === 'starter' ? randInt(1, 3): L === 'core' ? randInt(1, 5): randInt(1, 7);
  if (t === 1) {
    const n = randInt(100, 999);
    return q('estimation', `Round ${n} to nearest 10`, Math.round(n / 10) * 10, 'Look at the ones digit.')
  }
  if (t === 2) {
    const n = randInt(100, 9999);
    return q('estimation', `Round ${n} to nearest 100`, Math.round(n / 100) * 100, 'Look at the tens digit.')
  }
  if (t === 3) {
    const n = randInt(1000, 9999);
    return q('estimation', `Round ${n} to nearest 1000`, Math.round(n / 1000) * 1000, 'Look at the hundreds digit.')
  }
  if (t === 4) {
    const a = randInt(320, 480),
    b = randInt(150, 280);
    const ans = Math.round(a / 100) * 100 + Math.round(b / 100) * 100;
    return q('estimation', `Estimate ${a} + ${b} by rounding each to nearest 100`, ans, 'Round both numbers before adding.')
  }
  if (t === 5) {
    const a = randInt(42, 58),
    b = randInt(17, 23);
    const ans = Math.round(a / 10) * 10 * Math.round(b / 10) * 10;
    return q('estimation', `Estimate ${a} × ${b} by rounding each to nearest 10`, ans, 'Round both factors, then multiply.')
  }
  if (t === 6) {
    const n = randInt(1001, 9999) / 1000,
    dp = pick([1, 2]);
    return q('estimation', `Round ${fmt(n)} to ${dp} decimal place${dp===1?'':'s'}`, roundTo(n, dp), 'Check the next digit.')
  }
  const b = randInt(3, 7),
  ans = randInt(25, 65),
  friendly = b * ans,
  a = friendly + pick([ - 4, - 3, - 2, 2, 3, 4]);
  return q('estimation', `Estimate ${a} ÷ ${b} using ${friendly} ÷ ${b}`, ans, 'Use the friendly number shown.')
}


function y7GenUnits() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 6) : L === 'core' ? randInt(1, 10) : randInt(1, 12);
  const toHHMM = totalMinutes => Math.floor(totalMinutes / 60) * 100 + totalMinutes % 60;

  if (t === 1) {
    const km = randInt(12, 89) / 10;
    return q('units', `${fmt(km)} km = ? m`, km * 1000, 'Multiply kilometres by 1000.');
  }
  if (t === 2) {
    const g = randInt(1200, 9500);
    return q('units', `${g} g = ? kg`, g / 1000, 'Divide grams by 1000.');
  }
  if (t === 3) {
    const l = randInt(12, 89) / 10;
    return q('units', `${fmt(l)} L = ? mL`, l * 1000, 'Multiply litres by 1000.');
  }
  if (t === 4) {
    const startH = randInt(1, 4), startM = pick([0, 10, 15, 20, 25, 30, 35, 40, 45]), mins = pick([35, 45, 50, 65, 75, 85]);
    const total = startH * 60 + startM + mins;
    return q('units', `${startH}:${String(startM).padStart(2, '0')} plus ${mins} min. Enter the answer as HHMM.`, toHHMM(total), 'Add minutes and regroup 60 minutes as 1 hour.');
  }
  if (t === 5) {
    const speed = pick([40, 50, 60, 70, 80, 90]), time = pick([1.5, 2, 2.5, 3]);
    return q('units', `${speed} km/h for ${time} h = ? km`, speed * time, 'Distance = speed × time.');
  }
  if (t === 6) {
    const hour = randInt(1, 11), minute = pick([0, 5, 10, 15, 20, 25, 30, 40, 45, 50, 55]), pm = chance(0.5);
    const hour24 = pm ? hour + 12 : hour;
    return q('units', `${hour}:${String(minute).padStart(2, '0')} ${pm ? 'pm' : 'am'} in 24-hour time = ? Enter as HHMM.`, hour24 * 100 + minute, 'Add 12 to the hour for pm times after noon.');
  }
  if (t === 7) {
    const distance = pick([120, 150, 180, 210, 240, 300]), time = pick([2, 3, 4, 5]);
    return q('units', `${distance} km in ${time} h. Speed = ? km/h`, distance / time, 'Speed = distance ÷ time.');
  }
  if (t === 8) {
    const m = randInt(120, 950) / 100;
    return q('units', `${fmt(m)} m = ? cm`, m * 100, 'Multiply metres by 100.');
  }
  if (t === 9) {
    const start = pick([8 * 60 + 20, 9 * 60 + 35, 11 * 60 + 10, 13 * 60 + 25, 15 * 60 + 40]);
    const duration = pick([35, 45, 55, 70, 85]);
    const end = start + duration;
    return q('units', `A bus leaves at ${String(toHHMM(start)).padStart(4, '0')} and arrives at ${String(toHHMM(end)).padStart(4, '0')}. Journey time = ? minutes`, duration, 'Subtract the departure time from the arrival time.');
  }
  if (t === 10) {
    const start = pick([8 * 60 + 15, 9 * 60 + 40, 12 * 60 + 20, 14 * 60 + 35, 16 * 60 + 10]);
    const duration = pick([40, 55, 65, 75, 85]);
    return q('units', `A train leaves at ${String(toHHMM(start)).padStart(4, '0')}. The journey takes ${duration} minutes. Arrival time = ? Enter as HHMM.`, toHHMM(start + duration), 'Add the journey time to the departure time.');
  }
  if (t === 11) {
    const duration = pick([35, 45, 60, 75, 90]), start = pick([8 * 60 + 20, 10 * 60 + 15, 13 * 60 + 30, 15 * 60 + 10]);
    const arrival = start + duration;
    return q('units', `A journey ends at ${String(toHHMM(arrival)).padStart(4, '0')} and takes ${duration} minutes. Departure time = ? Enter as HHMM.`, toHHMM(start), 'Subtract the journey time from the arrival time.');
  }
  const area = pick([1.5, 2.4, 3.2, 4.5]);
  return q('units', `${fmt(area)} m² = ? cm²`, area * 10000, 'Square-unit conversion: 1 m² = 10,000 cm².');
}

function y7GenGeometry() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 8) : L === 'core' ? randInt(1, 10) : randInt(1, 12);

  if (t === 1) {
    const l = randInt(5, 20), w = randInt(3, 15);
    return q('geometry', `Rectangle ${l} cm by ${w} cm. Perimeter = ? cm`, 2 * (l + w), 'Perimeter = 2(length + width).');
  }
  if (t === 2) {
    const l = randInt(5, 20), w = randInt(3, 15);
    return q('geometry', `Rectangle ${l} cm by ${w} cm. Area = ? cm²`, l * w, 'Area = length × width.');
  }
  if (t === 3) {
    let b = randInt(4, 20), h = randInt(3, 16);
    if ((b * h) % 2 !== 0) b += 1;
    return q('geometry', `Triangle base ${b} cm, height ${h} cm. Area = ? cm²`, b * h / 2, 'Area = 1/2 × base × height.');
  }
  if (t === 4) {
    const [a, b] = pick([[35, 65], [40, 75], [45, 80], [50, 60], [55, 70]]);
    return q('geometry', `Triangle angles ${a}° and ${b}°. Third angle = ?°`, 180 - a - b, 'Angles in a triangle sum to 180°.');
  }
  if (t === 5) {
    const a = randInt(20, 160);
    return q('geometry', `Supplement of ${a}° = ?°`, 180 - a, 'Angles on a straight line sum to 180°.');
  }
  if (t === 6) {
    const a = randInt(5, 85);
    return q('geometry', `Complement of ${a}° = ?°`, 90 - a, 'Complementary angles sum to 90°.');
  }
  if (t === 7) {
    const side = randInt(3, 18);
    return q('geometry', `Square area ${side * side} cm². Side length = ? cm`, side, 'Find the square root of the area.');
  }
  if (t === 8) {
    const [sides, answer] = pick([[[6, 6, 6], 1], [[6, 6, 9], 2], [[5, 7, 9], 3], [[8, 10, 8], 2]]);
    return q('geometry', `A triangle has sides ${sides.join(', ')}. Enter 1 for equilateral, 2 for isosceles, or 3 for scalene.`, answer, 'Classify by the number of equal sides.');
  }
  if (t === 9) {
    const [angles, answer] = pick([[[60, 60, 60], 1], [[90, 35, 55], 2], [[110, 30, 40], 3], [[70, 50, 60], 1]]);
    return q('geometry', `A triangle has angles ${angles.join('°, ')}°. Enter 1 for acute, 2 for right, or 3 for obtuse.`, answer, 'Classify by the largest angle.');
  }
  if (t === 10) {
    const side = randInt(4, 25), perimeter = 4 * side;
    return q('geometry', `A square has perimeter ${perimeter} cm. Side length = ? cm`, side, 'Divide the perimeter by 4.');
  }
  if (t === 11) {
    const width = randInt(6, 25), length = randInt(width + 3, width + 20), perimeter = 2 * (length + width);
    return q('geometry', `A rectangle has perimeter ${perimeter} cm and length ${length} cm. Width = ? cm`, width, 'Width = perimeter ÷ 2 − length.');
  }
  const l = randInt(6, 20), w = randInt(3, 15), scale = pick([2, 3]);
  return q('geometry', `A ${l} × ${w} rectangle is enlarged by scale factor ${scale}. New area = ?`, l * w * scale * scale, 'Area scales by the square of the scale factor.');
}

function y7GenFDPConversions() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 8) : randInt(1, 10);

  if (t === 1) {
    const [n, d] = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 8], [3, 8], [5, 8], [7, 8]]);
    return q('fdpConversions', `${n}/${d} as a decimal = ?`, n / d, 'Divide numerator by denominator.');
  }
  if (t === 2) {
    const [n, d] = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 8], [3, 8], [5, 8], [7, 8]]);
    return q('fdpConversions', `${n}/${d} as a percentage = ?%`, n / d * 100, 'Convert to a decimal, then multiply by 100.');
  }
  if (t === 3) {
    const v = pick([0.125, 0.2, 0.25, 0.3, 0.375, 0.4, 0.5, 0.625, 0.75, 0.8, 0.875]);
    return qFrac('fdpConversions', `${fmt(v)} as a simplest fraction = ?`, v, 'Write over 10, 100 or 1000 and simplify.');
  }
  if (t === 4) {
    const p = pick([12.5, 20, 25, 30, 37.5, 40, 50, 62.5, 75, 80, 87.5]);
    return q('fdpConversions', `${fmt(p)}% as a decimal = ?`, p / 100, 'Divide by 100.');
  }
  if (t === 5) {
    const [n, d, answer] = pick([[1, 2, 1], [1, 4, 1], [1, 5, 1], [1, 8, 1], [3, 20, 1], [1, 3, 2], [1, 6, 2], [2, 9, 2], [5, 6, 2]]);
    return q('fdpConversions', `${n}/${d} gives which type of decimal? Enter 1 for terminating or 2 for recurring.`, answer, 'In simplest form, denominators with only factors 2 and 5 terminate.');
  }
  if (t === 6) {
    const p = pick([12.5, 20, 25, 30, 37.5, 40, 50, 62.5, 75, 80, 87.5]);
    return qFrac('fdpConversions', `${fmt(p)}% as a simplest fraction = ?`, p / 100, 'Write over 100 and simplify.');
  }
  if (t === 7) {
    const a = pick([0.35, 0.45, 0.55, 0.65, 0.72, 0.85]), [n, d] = pick([[1, 3], [2, 5], [1, 2], [3, 5], [2, 3], [3, 4]]);
    return q('fdpConversions', `Which is larger? Enter 1 for ${fmt(a)}, or 2 for ${n}/${d}.`, a > n / d ? 1 : 2, 'Convert both to decimals.');
  }
  if (t === 8) {
    const vals = pick([[0.375, 40], [0.625, 60], [0.72, 75], [0.48, 50], [0.85, 80]]);
    return q('fdpConversions', `Which is larger? Enter 1 for ${fmt(vals[0])}, or 2 for ${vals[1]}%.`, vals[0] > vals[1] / 100 ? 1 : 2, 'Convert the percentage to a decimal.');
  }
  if (t === 9) {
    const a = pick([0.25, 0.4, 0.6, 0.75]), b = pick([20, 35, 50, 65, 80]);
    return q('fdpConversions', `${fmt(a)} + ${b}% = ?`, a + b / 100, 'Convert the percentage to a decimal before adding.');
  }
  const [n, d] = pick([[7, 20], [9, 20], [11, 20], [13, 20], [17, 20], [19, 20]]);
  return q('fdpConversions', `${n}/${d} as a percentage = ?%`, n / d * 100, 'Convert the denominator to 100.');
}

function y7GenPercentageChange(){
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,9);
  if(t===1){const n=pick([40,60,80,100,120,160,200,240]),p=pick([10,20,25,50]);return q('percentageChange',`Increase ${n} by ${p}%.`,n*(1+p/100),'Find the increase, then add it.');}
  if(t===2){const n=pick([40,60,80,100,120,160,200,240]),p=pick([10,20,25,50]);return q('percentageChange',`Decrease ${n} by ${p}%.`,n*(1-p/100),'Find the decrease, then subtract it.');}
  if(t===3){const price=pick([40,60,80,100,120,160,200]),p=pick([10,15,20,25,30]);return q('percentageChange',`original price $${price} after ${p}% off = $?`,roundTo(price*(1-p/100)),'Multiply by the percentage remaining.');}
  if(t===4){const old=pick([40,50,60,80,100,120]),p=pick([10,20,25,50]),neu=roundTo(old*(1+p/100));return q('percentageChange',`${old} increases to ${neu}. Percentage increase = ?%`,p,'Change ÷ original × 100.');}
  if(t===5){const old=pick([40,50,60,80,100,120]),p=pick([10,20,25]),neu=roundTo(old*(1-p/100));return q('percentageChange',`${old} decreases to ${neu}. Percentage decrease = ?%`,p,'Decrease ÷ original × 100.');}
  if(t===6){const cost=pick([40,50,60,80,100]),p=pick([10,20,25,30]);return q('percentageChange',`An item costs $${cost} and is sold for ${p}% profit. Selling price = $?`,cost*(1+p/100),'Profit is a percentage of cost price.');}
  if(t===7){const original=pick([40,50,60,80,100,120]),p=pick([10,20,25,50]),final=roundTo(original*(1+p/100));return q('percentageChange',`A number increases by ${p}% to ${final}. Original number = ?`,original,'Divide by the increase multiplier.');}
  if(t===8){const original=pick([60,80,100,120,160,200]),p=pick([10,20,25]),sale=roundTo(original*(1-p/100));return q('percentageChange',`After a ${p}% discount, a price is $${sale}. Original price = $?`,original,'Divide by the percentage remaining.');}
  const n=pick([80,100,120,160,200]),p1=pick([10,20,25]),p2=pick([10,20]);return q('percentageChange',`Increase ${n} by ${p1}%, then decrease the result by ${p2}%. Final value = ?`,roundTo(n*(1+p1/100)*(1-p2/100)),'Apply the two multipliers in order.');
}

function y7GenDirectProportion(){
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,9);
  if(t===1){const items=randInt(2,8),unit=randInt(3,15),target=randInt(2,12);return q('directProportion',`${items} books cost $${items*unit}. ${target} books cost $?`,target*unit,'Find the unit cost, then multiply.');}
  if(t===2){const kg=randInt(2,8),unit=randInt(3,12);return q('directProportion',`${kg} kg costs $${kg*unit}. Cost per kg = $?`,unit,'Divide cost by kilograms.');}
  if(t===3){const x1=randInt(2,8),k=randInt(2,10),x2=randInt(2,12);return q('directProportion',`y is directly proportional to x. When x=${x1}, y=${k*x1}. Find y when x=${x2}.`,k*x2,'Find the constant multiplier y ÷ x.');}
  if(t===4){const people=randInt(2,6),serves=randInt(2,6),target=people*randInt(2,4);return q('directProportion',`A recipe for ${people} people uses ${serves} cups. For ${target} people, cups needed = ?`,serves*target/people,'Scale both quantities by the same factor.');}
  if(t===5){const scale=pick([2,5,10,20,50]),cm=randInt(2,12);return q('directProportion',`Map scale: 1 cm represents ${scale} km. ${cm} cm represents ? km`,scale*cm,'Multiply map length by the scale rate.');}
  if(t===6){const workers=randInt(2,8),output=randInt(3,12),factor=randInt(2,4);return q('directProportion',`${workers} workers make ${output} units in a fixed time. ${workers*factor} workers make ? units at the same rate.`,output*factor,'Direct proportion: multiply by the same scale factor.');}
  if(t===7){const distance=pick([60,80,90,120,150]),time=pick([2,3,4,5]);return q('directProportion',`${distance} km in ${time} hours. Unit rate = ? km/h`,distance/time,'Divide by the number of hours.');}
  if(t===8){const a=randInt(2,7),b=randInt(3,9),x=a*randInt(2,8);return q('directProportion',`${a}:${b} = ${x}:?`,x/a*b,'Use the same scale factor in both ratio parts.');}
  const rate=pick([1.5,2.5,3.5,4.5]),count=randInt(4,12);return q('directProportion',`${count} metres at $${fmt(rate)} per metre cost $?`,count*rate,'Cost = quantity × unit rate.');
}

function y7GenSimplifyExpand(){
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,9);
  if(t===1){const a=randInt(2,9),b=randInt(2,9),c=randInt(1,7);return q('simplifyExpand',`Coefficient of x after simplifying ${a}x + ${b}x − ${c}x = ?`,a+b-c,'Combine like terms.');}
  if(t===2){const a=randInt(2,9),b=randInt(2,9),c=randInt(1,7);return q('simplifyExpand',`Coefficient of y after simplifying ${a}y − ${b} + ${c}y = ?`,a+c,'Only combine y-terms with y-terms.');}
  if(t===3){const a=randInt(2,8),b=randInt(2,9);return q('simplifyExpand',`Coefficient of x after expanding ${a}(x + ${b}) = ?`,a,'Multiply x by the outside factor.');}
  if(t===4){const a=randInt(2,8),b=randInt(2,9);return q('simplifyExpand',`Constant term after expanding ${a}(x + ${b}) = ?`,a*b,'Multiply the constant by the outside factor.');}
  if(t===5){const a=randInt(2,7),b=randInt(2,8),c=randInt(1,8);return q('simplifyExpand',`Coefficient of x after simplifying ${a}(x + ${b}) + ${c}x = ?`,a+c,'Expand, then combine x-terms.');}
  if(t===6){const a=randInt(2,7),b=randInt(2,8),c=randInt(-8,8);return q('simplifyExpand',`Constant term after simplifying ${a}(x − ${b}) ${c>=0?'+':'−'} ${Math.abs(c)} = ?`,-a*b+c,'Expand the bracket, then combine constants.');}
  if(t===7){const a=randInt(2,6),b=randInt(2,6),c=randInt(2,6);return q('simplifyExpand',`Coefficient of x after simplifying ${a}(x + ${b}) + ${c}(x − 1) = ?`,a+c,'Expand both brackets and combine x-terms.');}
  if(t===8){const a=randInt(2,7),b=randInt(2,8);return q('simplifyExpand',`Coefficient of x² in ${a}x(${b}x − 3) = ?`,a*b,'Multiply the coefficients and x × x.');}
  const g=randInt(2,8),a=randInt(2,7),b=randInt(2,9);return q('simplifyExpand',`Greatest numerical factor of ${g*a}x + ${g*b} = ?`,g*gcd(a,b),'Find the HCF of the coefficients.');
}

function y7GenTwoStepEquations() {
  const L = state.level;
  const t = L === 'starter'
    ? randInt(1, 4)
    : L === 'core'
      ? randInt(1, 7)
      : randInt(1, 9);
  const x = randInt(L === 'challenge' ? -8 : 1, 15);

  if (t === 1) {
    const a = randInt(2, 8);
    const b = randInt(2, 15);
    return q('twoStepEquations', `${a}x + ${b} = ${a * x + b}. Find x.`, x, 'Subtract the constant, then divide.');
  }

  if (t === 2) {
    const a = randInt(2, 8);
    const b = randInt(2, 15);
    return q('twoStepEquations', `${a}x − ${b} = ${a * x - b}. Find x.`, x, 'Add the constant, then divide.');
  }

  if (t === 3) {
    const a = randInt(2, 7);
    const b = randInt(1, 8);
    return q('twoStepEquations', `${a}(x − ${b}) = ${a * (x - b)}. Find x.`, x, 'Divide first, then add.');
  }

  if (t === 4) {
    const a = randInt(2, 7);
    const b = randInt(1, 8);
    return q('twoStepEquations', `${a}(x + ${b}) = ${a * (x + b)}. Find x.`, x, 'Divide first, then subtract.');
  }

  if (t === 5) {
    const divisor = randInt(2, 8);
    const quotient = randInt(L === 'challenge' ? -8 : 1, 15);
    const b = randInt(1, 10);
    const dividend = divisor * quotient;
    return q(
      'twoStepEquations',
      `x ÷ ${divisor} + ${b} = ${quotient + b}. Find x.`,
      dividend,
      'Subtract, then multiply by the divisor.'
    );
  }

  if (t === 6) {
    const divisor = randInt(2, 8);
    const quotient = randInt(L === 'challenge' ? -8 : 1, 15);
    const b = randInt(1, 10);
    const dividend = divisor * quotient;
    return q(
      'twoStepEquations',
      `x ÷ ${divisor} − ${b} = ${quotient - b}. Find x.`,
      dividend,
      'Add, then multiply by the divisor.'
    );
  }

  if (t === 7) {
    const a = randInt(2, 6);
    const b = randInt(1, 8);
    const c = randInt(1, 8);
    return q('twoStepEquations', `${a}(x + ${b}) − ${c} = ${a * (x + b) - c}. Find x.`, x, 'Undo the outside constant, divide, then undo the bracket constant.');
  }

  if (t === 8) {
    const a = randInt(2, 6);
    const b = randInt(1, 8);
    const c = randInt(1, 8);
    return q('twoStepEquations', `${a}(x − ${b}) + ${c} = ${a * (x - b) + c}. Find x.`, x, 'Subtract the outside constant, divide, then add.');
  }

  const a = randInt(2, 7);
  const b = randInt(1, 9);
  const c = randInt(1, a - 1);
  const rhs = (a - c) * x + b;
  return q('twoStepEquations', `${a}x + ${b} = ${c}x + ${rhs}. Find x.`, x, 'Collect x-terms on one side.');
}

function y7GenInequalities(){
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,9);
  if(t===1){const a=randInt(2,12),boundary=randInt(-5,15);return q('inequalities',`x + ${a} > ${boundary+a}. Boundary value = ?`,boundary,'Subtract the constant from both sides.');}
  if(t===2){const a=randInt(2,8),limit=randInt(2,12);return q('inequalities',`${a}x ≤ ${a*limit}. Greatest integer solution = ?`,limit,'Divide by the positive coefficient.');}
  if(t===3){const a=randInt(2,8),limit=randInt(-5,12),b=randInt(1,12);return q('inequalities',`${a}x + ${b} ≥ ${a*limit+b}. Smallest integer solution = ?`,limit,'Subtract, then divide.');}
  if(t===4){const boundary=randInt(2,8);return q('inequalities',`How many integers from 0 to 10 satisfy x ≥ ${boundary}?`,11-boundary,'Count from the boundary through 10.');}
  if(t===5){const low=randInt(-6,0),high=randInt(2,9);return q('inequalities',`How many integers satisfy ${low} ≤ x < ${high}?`,high-low,'List from the lower bound to one below the upper bound.');}
  if(t===6){const a=-randInt(2,6),boundary=randInt(-5,10);return q('inequalities',`${a}x < ${a*boundary}. Smallest integer solution = ?`,boundary+1,'Dividing by a negative reverses the inequality.');}
  if(t===7){const a=randInt(2,6),b=randInt(-8,8),test=randInt(-6,12),boundary=randInt(-4,10),rhs=a*boundary+b,ok=a*test+b>=rhs;return q('inequalities',`Does x=${test} satisfy ${a}x ${b>=0?'+':'−'} ${Math.abs(b)} ≥ ${rhs}? Enter 1 for Yes, 0 for No.`,ok?1:0,'Substitute and compare.');}
  if(t===8){const a=-randInt(2,5),b=randInt(-6,6),boundary=randInt(-5,8),rhs=a*boundary+b;return q('inequalities',`${a}x ${b>=0?'+':'−'} ${Math.abs(b)} ≥ ${rhs}. Boundary value = ?`,boundary,'Solve the matching equation; reverse the inequality direction.');}
  const low=randInt(-8,2),high=randInt(low+3,10);return q('inequalities',`How many integers satisfy ${low} < x < ${high}?`,high-low-1,'Count the integers strictly between the endpoints.');
}

function y7GenCoordinates() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 6) : L === 'core' ? randInt(1, 10) : randInt(1, 12);

  if (t === 1) {
    const x = pick([-6, -5, -4, -3, 3, 4, 5, 6]), y = pick([-7, -5, -3, 3, 5, 7]);
    const quad = x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
    return q('coordinates', `Point (${x}, ${y}) is in which quadrant? Enter 1, 2, 3 or 4.`, quad, 'Use the signs of x and y.');
  }
  if (t === 2) {
    const horizontal = chance(0.5), a = randInt(-8, 4), b = randInt(a + 2, 10), fixed = randInt(-6, 6);
    return q('coordinates', horizontal ? `Distance between (${a}, ${fixed}) and (${b}, ${fixed}) = ?` : `Distance between (${fixed}, ${a}) and (${fixed}, ${b}) = ?`, b - a, 'Subtract the changing coordinates.');
  }
  if (t === 3) {
    const x1 = randInt(-8, 4), x2 = x1 + 2 * randInt(1, 6), y1 = randInt(-8, 4), y2 = y1 + 2 * randInt(1, 6), ask = chance(0.5);
    return q('coordinates', `Midpoint of (${x1}, ${y1}) and (${x2}, ${y2}). ${ask ? 'x' : 'y'}-coordinate = ?`, ask ? (x1 + x2) / 2 : (y1 + y2) / 2, 'Average the matching coordinates.');
  }
  if (t === 4) {
    const x = randInt(-8, 8), y = randInt(-8, 8), dx = randInt(-5, 5), dy = randInt(-5, 5), ask = chance(0.5);
    return q('coordinates', `Translate (${x}, ${y}) by (${dx}, ${dy}). New ${ask ? 'x' : 'y'}-coordinate = ?`, ask ? x + dx : y + dy, 'Add the translation vector.');
  }
  if (t === 5) {
    const x = randInt(-8, 8), y = randInt(-8, 8);
    return q('coordinates', `Reflect (${x}, ${y}) across the x-axis. New y-coordinate = ?`, -y, 'Reflection across the x-axis changes the sign of y.');
  }
  if (t === 6) {
    const x = randInt(-8, 8), y = randInt(-8, 8);
    return q('coordinates', `Reflect (${x}, ${y}) across the y-axis. New x-coordinate = ?`, -x, 'Reflection across the y-axis changes the sign of x.');
  }
  if (t === 7) {
    const m = pick([-3, -2, -1, 1, 2, 3, 4]), x1 = randInt(-4, 4), y1 = randInt(-5, 5), dx = pick([1, 2, 3]), x2 = x1 + dx, y2 = y1 + m * dx;
    return q('coordinates', `Slope through (${x1}, ${y1}) and (${x2}, ${y2}) = ?`, m, 'Slope = change in y ÷ change in x.');
  }
  if (t === 8) {
    const m = pick([-4, -3, -2, 2, 3, 4]), c = randInt(-8, 8), x = randInt(-5, 7);
    return q('coordinates', `For y = ${m}x ${c >= 0 ? '+' : '−'} ${Math.abs(c)}, find y when x = ${x}.`, m * x + c, 'Substitute x.');
  }
  if (t === 9) {
    const m = pick([-5, -3, -2, 2, 3, 5]), c = randInt(-12, 12);
    return q('coordinates', `y = ${m}x ${c >= 0 ? '+' : '−'} ${Math.abs(c)}. y-intercept = ?`, c, 'The y-intercept is the constant term.');
  }
  if (t === 10) {
    const x = randInt(-8, 8), y = randInt(-8, 8), ask = chance(0.5);
    return q('coordinates', `Rotate (${x}, ${y}) by 180° about the origin. New ${ask ? 'x' : 'y'}-coordinate = ?`, ask ? -x : -y, 'A 180° rotation maps (x, y) to (−x, −y).');
  }
  if (t === 11) {
    const x = randInt(-8, 8), y = randInt(-8, 8), ask = chance(0.5);
    return q('coordinates', `Rotate (${x}, ${y}) by 90° anticlockwise about the origin. New ${ask ? 'x' : 'y'}-coordinate = ?`, ask ? -y : x, 'A 90° anticlockwise rotation maps (x, y) to (−y, x).');
  }
  const m = pick([-4, -3, -2, -1, 1, 2, 3, 4]);
  return q('coordinates', `A line is parallel to a line with slope ${m}. Its slope = ?`, m, 'Parallel lines have equal slopes.');
}

function y7GenPythagoras(){
  const L=state.level,t=L==='starter'?randInt(1,3):L==='core'?randInt(1,6):randInt(1,8),triple=pick([[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25],[9,12,15],[12,16,20]]);
  if(t===1){return q('pythagoras',`Right triangle legs ${triple[0]} cm and ${triple[1]} cm. Hypotenuse = ? cm`,triple[2],'Use a² + b² = c².');}
  if(t===2){return q('pythagoras',`Right triangle hypotenuse ${triple[2]} cm and one leg ${triple[0]} cm. Other leg = ? cm`,triple[1],'Use c² − a² = b².');}
  if(t===3){return q('pythagoras',`Right triangle hypotenuse ${triple[2]} cm and one leg ${triple[1]} cm. Other leg = ? cm`,triple[0],'Subtract the known square from the hypotenuse square.');}
  if(t===4){const scale=randInt(2,4);return q('pythagoras',`Right triangle legs ${triple[0]*scale} cm and ${triple[1]*scale} cm. Hypotenuse = ? cm`,triple[2]*scale,'Recognise the scaled Pythagorean triple.');}
  if(t===5){const yes=chance(.5),sides=yes?triple:[triple[0],triple[1],triple[2]+1];return q('pythagoras',`Do sides ${sides[0]}, ${sides[1]}, ${sides[2]} form a right triangle? Enter 1 for Yes, 0 for No.`,yes?1:0,'Check whether a² + b² = c².');}
  if(t===6){const l=triple[0],w=triple[1];return q('pythagoras',`A rectangle is ${l} cm by ${w} cm. Its diagonal = ? cm`,triple[2],'The diagonal is the hypotenuse.');}
  if(t===7){const scale=randInt(2,4);return q('pythagoras',`A ladder reaches ${triple[1]*scale} m up a wall and its foot is ${triple[0]*scale} m from the wall. Ladder length = ? m`,triple[2]*scale,'Wall and ground form a right angle.');}
  const a=pick([1,2,3,4]),b=pick([1,2,3,4]);return q('pythagoras',`A right triangle has legs ${a*3} and ${a*4}. Its hypotenuse = ?`,a*5,'Recognise a scaled 3–4–5 triangle.');
}

function y7GenStatistics() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 9) : randInt(1, 12);

  if (t === 1) {
    const count = pick([4, 5, 6]), meanValue = randInt(6, 18), vals = Array(count).fill(meanValue), change = randInt(1, Math.min(4, meanValue - 1));
    vals[0] -= change;
    vals[1] += change;
    return q('statistics', `Mean of ${vals.join(', ')} = ?`, meanValue, 'Add and divide by the count.');
  }
  if (t === 2) {
    const vals = Array.from({length: 7}, () => randInt(1, 30));
    return q('statistics', `Median of ${vals.join(', ')} = ?`, median(vals), 'Order the values and select the middle one.');
  }
  if (t === 3) {
    const mode = randInt(3, 15), vals = [mode, mode, mode, mode + 1, mode + 3, mode + 5, mode + 7];
    for (let i = vals.length - 1; i > 0; i--) {
      const j = randInt(0, i);
      [vals[i], vals[j]] = [vals[j], vals[i]];
    }
    return q('statistics', `Mode of ${vals.join(', ')} = ?`, mode, 'Find the most frequent value.');
  }
  if (t === 4) {
    const low = randInt(1, 15), high = randInt(low + 8, low + 30), vals = [low, randInt(low, high), randInt(low, high), randInt(low, high), high];
    return q('statistics', `Range of ${vals.join(', ')} = ?`, high - low, 'Maximum − minimum.');
  }
  if (t === 5) {
    const meanValue = randInt(8, 20), deviations = pick([[-4, -2, 0, 2, 4], [-3, -1, 0, 1, 3], [-4, -1, 0, 2, 3]]), values = deviations.map(d => meanValue + d);
    const missingIndex = randInt(0, values.length - 1), missing = values[missingIndex], known = values.filter((_, i) => i !== missingIndex);
    return q('statistics', `Five values have mean ${meanValue}. Known values: ${known.join(', ')}. Missing value = ?`, missing, 'Total = mean × 5, then subtract the known values.');
  }
  if (t === 6) {
    const add = randInt(1, 8), oldMedian = randInt(6, 20);
    return q('statistics', `Every value in a data set is increased by ${add}. If the old median is ${oldMedian}, new median = ?`, oldMedian + add, 'Adding the same amount to every value increases the median by the same amount.');
  }
  if (t === 7) {
    const add = randInt(1, 8);
    return q('statistics', `Every value in a data set is increased by ${add}. The mean increases by ?`, add, 'Adding the same amount to every value shifts the mean equally.');
  }
  if (t === 8) {
    const oldMean = randInt(6, 16), factor = randInt(2, 4);
    return q('statistics', `Every value in a data set is multiplied by ${factor}. If the old mean is ${oldMean}, new mean = ?`, oldMean * factor, 'Multiplying every value multiplies the mean.');
  }
  if (t === 9) {
    const a = randInt(4, 10), b = randInt(11, 16), c = randInt(17, 22), d = randInt(23, 28), vals = [a, b, c, d];
    return q('statistics', `Median of the ordered values ${vals.join(', ')} = ?`, (b + c) / 2, 'Average the two middle values.');
  }
  if (t === 10) {
    const centre = randInt(8, 20), outlier = centre + pick([25, 30, 35]), vals = [centre - 2, centre - 1, centre, centre, centre + 1, outlier];
    return q('statistics', `Data: ${vals.join(', ')}. Outlier = ?`, outlier, 'The outlier is far from the other values.');
  }
  if (t === 11) {
    return q('statistics', 'Which average is usually less affected by one very large outlier? Enter 1 for mean or 2 for median.', 2, 'The median depends on position rather than the size of the extreme value.');
  }
  const [values, suspicious] = pick([[[12, 13, 14, 140, 15], 140], [[28, 29, 30, 31, 300], 300], [[7, 8, 9, 90, 10], 90]]);
  return q('statistics', `Recorded data: ${values.join(', ')}. Which value should be checked?`, suspicious, 'Look for a value that may contain an extra zero or recording error.');
}

function y7GenProbability() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 9) : randInt(1, 12);

  if (t === 1) {
    const red = randInt(1, 8), blue = randInt(1, 8), green = randInt(1, 6);
    return qFrac('probability', `A bag has ${red} red, ${blue} blue and ${green} green counters. P(red) = ?`, red / (red + blue + green), 'Favourable outcomes ÷ total outcomes.');
  }
  if (t === 2) {
    const p = pick([0.15, 0.2, 0.25, 0.35, 0.4, 0.6, 0.65, 0.75, 0.8]);
    return q('probability', `P(A) = ${fmt(p)}. P(not A) = ?`, roundTo(1 - p), 'Complementary probabilities add to 1.');
  }
  if (t === 3) {
    return qFrac('probability', 'A fair coin is tossed twice. P(exactly one head) = ?', 1 / 2, 'Outcomes HT and TH are favourable.');
  }
  if (t === 4) {
    return qFrac('probability', 'A fair six-sided die is rolled twice. P(two sixes) = ?', 1 / 36, 'Multiply 1/6 × 1/6.');
  }
  if (t === 5) {
    const p1 = pick([1 / 2, 1 / 3, 1 / 4, 2 / 3]), p2 = pick([1 / 2, 1 / 3, 1 / 4, 3 / 4]);
    return qFrac('probability', `Independent events have probabilities ${toFraction(p1)} and ${toFraction(p2)}. P(both) = ?`, p1 * p2, 'Multiply independent probabilities.');
  }
  if (t === 6) {
    const red = randInt(2, 6), blue = randInt(2, 6), total = red + blue;
    return qFrac('probability', `Choose from ${red} red and ${blue} blue counters, replace it, then choose again. P(two blue) = ?`, (blue / total) ** 2, 'With replacement, multiply the same probability twice.');
  }
  if (t === 7) {
    const total = pick([20, 30, 40, 50]), successes = pick([5, 10, 15, 20]);
    if (successes >= total) return y7GenProbability();
    return qFrac('probability', `A coin landed heads ${successes} times in ${total} tosses. Experimental probability of heads = ?`, successes / total, 'Experimental probability = successes ÷ number of trials.');
  }
  if (t === 8) {
    const total = pick([40, 50, 80, 100]), percent = pick([10, 20, 25, 30, 40, 50]), successes = total * percent / 100;
    if (!Number.isInteger(successes)) return y7GenProbability();
    return q('probability', `A result occurred ${successes} times in ${total} trials. Relative frequency = ?%`, percent, 'Divide successes by trials, then multiply by 100.');
  }
  if (t === 9) {
    const [n, d] = pick([[1, 2], [1, 4], [1, 5], [3, 4]]), trials = pick([40, 60, 80, 100]);
    if ((trials * n) % d !== 0) return y7GenProbability();
    return q('probability', `The theoretical probability is ${n}/${d}. In ${trials} trials, expected successes = ?`, trials * n / d, 'Multiply the number of trials by the probability.');
  }
  if (t === 10) {
    const red = randInt(2, 6), blue = randInt(2, 6), total = red + blue;
    return qFrac('probability', `Choose from ${red} red and ${blue} blue counters without replacement. P(red then blue) = ?`, red / total * blue / (total - 1), 'The total decreases after the first choice.');
  }
  if (t === 11) {
    return qFrac('probability', 'A fair coin is tossed and a fair six-sided die is rolled. P(head and an even number) = ?', 1 / 4, 'Multiply 1/2 by 3/6.');
  }
  return qFrac('probability', 'Two fair six-sided dice are rolled. P(both results are even) = ?', 1 / 4, 'Each die has probability 3/6 of being even.');
}

function y7GenFractionProblemSolving() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 8) : randInt(1, 11);

  if (type === 1) {
    const [part, n, d] = pick([[18, 3, 5], [21, 3, 4], [24, 2, 3], [30, 5, 6], [32, 4, 5]]);
    return q('fractionProblemSolving', `${n}/${d} of a group is ${part} students. How many students are in the whole group?`, part / (n / d), 'Divide the known part by its fraction of the whole.');
  }

  if (type === 2) {
    const [remaining, usedN, usedD] = pick([[18, 1, 4], [24, 1, 3], [30, 2, 5], [30, 3, 8]]);
    return q('fractionProblemSolving', `After ${usedN}/${usedD} of a roll was used, ${remaining} m remained. How long was the roll originally?`, remaining / (1 - usedN / usedD), 'The remaining length is the fraction not used.');
  }

  if (type === 3) {
    const [used1N, used1D, used2N, used2D] = pick([[1, 3, 1, 4], [1, 2, 1, 3], [1, 4, 1, 2], [2, 5, 1, 3]]);
    return qFrac('fractionProblemSolving', `A container was full. ${used1N}/${used1D} was used, then ${used2N}/${used2D} of the remainder was used. What fraction of the original amount remained?`, (1 - used1N / used1D) * (1 - used2N / used2D), 'Find the first remainder, then keep the stated fraction of that remainder.');
  }

  if (type === 4) {
    const [a, b, c, d] = pick([[3, 5, 7, 10], [5, 8, 3, 4], [2, 3, 3, 4], [7, 10, 4, 5]]);
    return qFrac('fractionProblemSolving', `Mia completed ${a}/${b} of a task and Noah completed ${c}/${d}. What fraction more did the person who completed more finish?`, Math.abs(a / b - c / d), 'Subtract the smaller fraction from the larger fraction.');
  }

  if (type === 5) {
    const [rateN, rateD, hoursPer, totalHours] = pick([[1, 3, 2, 6], [1, 2, 3, 6], [3, 4, 3, 6], [2, 5, 2, 10]]);
    return qFrac('fractionProblemSolving', `A machine uses ${rateN}/${rateD} L of oil every ${hoursPer} hours. At the same rate, how much oil does it use in ${totalHours} hours?`, rateN / rateD * (totalHours / hoursPer), 'Find how many equal time blocks there are, then multiply.');
  }

  if (type === 6) {
    const [whole, n, d] = pick([[3, 1, 2], [6, 3, 4], [5, 1, 4], [6, 2, 3]]);
    return q('fractionProblemSolving', `A plank is ${whole} m long. Pieces of length ${n}/${d} m are cut from it. How many complete pieces are made?`, whole / (n / d), 'Divide the whole length by the length of one piece.');
  }

  if (type === 7) {
    const [total, n, d, extra] = pick([[120, 2, 5, 18], [90, 1, 3, 15], [80, 3, 8, 10], [150, 2, 5, 30]]);
    return q('fractionProblemSolving', `A library displayed ${total} books. ${n}/${d} were borrowed, then ${extra} more were borrowed. How many books remained?`, total - total * n / d - extra, 'Find the fraction borrowed, subtract it, then subtract the extra books.');
  }

  if (type === 8) {
    const [left, spentN, spentD, later] = pick([[24, 1, 3, 6], [30, 2, 5, 6], [36, 1, 4, 9], [40, 1, 5, 8]]);
    return q('fractionProblemSolving', `Lily spent ${spentN}/${spentD} of her money, then spent another $${later}. She had $${left} left. How much money did she have at the beginning?`, (left + later) / (1 - spentN / spentD), 'Add back the fixed amount, then use the remaining fraction to find the original amount.');
  }

  if (type === 9) {
    const [total, firstN, firstD, secondN, secondD] = pick([[60, 1, 3, 1, 4], [80, 1, 4, 1, 3], [90, 2, 5, 1, 3], [120, 1, 2, 1, 4]]);
    const afterFirst = total * (1 - firstN / firstD);
    return q('fractionProblemSolving', `A shop had ${total} items. ${firstN}/${firstD} were sold in the morning, then ${secondN}/${secondD} of the remainder were sold. How many items remained?`, afterFirst * (1 - secondN / secondD), 'Work with the remainder after the first sale.');
  }

  if (type === 10) {
    const [part, n, d, extra] = pick([[24, 2, 3, 6], [30, 3, 5, 8], [35, 5, 7, 5], [32, 4, 5, 4]]);
    return q('fractionProblemSolving', `${n}/${d} of a collection is ${part} items. After ${extra} more items are added, how many items are in the collection?`, part / (n / d) + extra, 'Find the original whole, then add the extra items.');
  }

  const [total, usedN, usedD, pieceN, pieceD] = pick([[24, 1, 4, 1, 2], [30, 1, 5, 2, 3], [36, 1, 3, 3, 4], [40, 1, 4, 1, 2]]);
  const remaining = total * (1 - usedN / usedD);
  return q('fractionProblemSolving', `A roll was ${total} m long. ${usedN}/${usedD} was used. The remainder was cut into pieces of ${pieceN}/${pieceD} m. How many pieces were made?`, remaining / (pieceN / pieceD), 'Find the remaining length, then divide by the piece length.');
}


function y7GenAngleRelationships() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 8) : L === 'core' ? randInt(1, 12) : randInt(1, 16);

  if (t === 1) {
    const angle = pick([35, 45, 55, 65, 75, 85, 105, 115, 125, 135, 145]);
    return q('angleRelationships', `One of two vertically opposite angles is ${angle}°. The opposite angle is ?°`, angle, 'Vertically opposite angles are equal.');
  }

  if (t === 2) {
    const angle = pick([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]);
    return q('angleRelationships', `Two angles are complementary. One angle is ${angle}°. The other angle is ?°`, 90 - angle, 'Complementary angles total 90°.');
  }

  if (t === 3) {
    const angle = pick([35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145]);
    return q('angleRelationships', `Two angles are supplementary. One angle is ${angle}°. The other angle is ?°`, 180 - angle, 'Supplementary angles total 180°.');
  }

  if (t === 4) {
    const [a, b, c] = pick([[70, 90, 80], [100, 75, 95], [120, 80, 60], [65, 110, 85], [90, 125, 55]]);
    return q('angleRelationships', `Angles around a point are ${a}°, ${b}°, ${c}° and x°. Find x.`, 360 - a - b - c, 'Angles around a point total 360°.');
  }

  if (t === 5) {
    const angle = pick([40, 50, 60, 70, 80, 100, 110, 120, 130, 140]);
    return q('angleRelationships', `Two parallel lines are cut by a transversal. A corresponding angle is ${angle}°. The matching corresponding angle is ?°`, angle, 'Corresponding angles are equal.');
  }

  if (t === 6) {
    const angle = pick([35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145]);
    return q('angleRelationships', `Two parallel lines are cut by a transversal. An alternate interior angle is ${angle}°. The matching alternate interior angle is ?°`, angle, 'Alternate interior angles are equal.');
  }

  if (t === 7) {
    const angle = pick([40, 50, 60, 70, 80, 100, 110, 120, 130, 140]);
    return q('angleRelationships', `Two co-interior angles lie between parallel lines on the same side of a transversal. One is ${angle}°. The other is ?°`, 180 - angle, 'Co-interior angles total 180°.');
  }

  if (t === 8) {
    const relation = randInt(1, 3);
    if (relation === 1) return q('angleRelationships', 'Two parallel lines are cut by a transversal. Two angles are in the same relative corner at the two intersections. Enter 1=Corresponding, 2=Alternate interior, 3=Co-interior.', 1, 'Same relative position means corresponding angles.');
    if (relation === 2) return q('angleRelationships', 'Two parallel lines are cut by a transversal. Two angles lie between the parallel lines on opposite sides of the transversal. Enter 1=Corresponding, 2=Alternate interior, 3=Co-interior.', 2, 'Inside the lines and on opposite sides means alternate interior angles.');
    return q('angleRelationships', 'Two parallel lines are cut by a transversal. Two angles lie between the parallel lines on the same side of the transversal. Enter 1=Corresponding, 2=Alternate interior, 3=Co-interior.', 3, 'Inside the lines and on the same side means co-interior angles.');
  }

  if (t === 9) {
    const [a, b] = pick([[35, 65], [40, 75], [45, 80], [50, 60], [55, 70]]);
    return q('angleRelationships', `Two angles of a triangle are ${a}° and ${b}°. The third angle is ?°`, 180 - a - b, 'Angles in a triangle total 180°.');
  }

  if (t === 10) {
    const angle = pick([35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145]);
    return q('angleRelationships', `A corresponding angle between parallel lines is ${angle}°. The angle next to its matching angle on a straight line is ?°`, 180 - angle, 'Use corresponding angles first, then supplementary angles on a straight line.');
  }

  if (t === 11) {
    const x = pick([12, 15, 18, 20, 24, 25, 30]);
    const a = pick([2, 3, 4]);
    const b = pick([10, 20, 30]);
    const c = pick([a + 1, a + 2]);
    const d = (a - c) * x + b;
    return q('angleRelationships', `Vertically opposite angles are (${a}x + ${b})° and (${c}x ${d >= 0 ? '+' : '−'} ${Math.abs(d)})°. Find x.`, x, 'Vertically opposite angles are equal.');
  }

  if (t === 12) {
    const [x, a, c, b] = pick([[20, 2, 3, 20], [15, 3, 4, 15], [18, 2, 4, 18], [12, 4, 5, 24]]);
    const d = 180 - (a + c) * x - b;
    return q('angleRelationships', `Co-interior angles are (${a}x + ${b})° and (${c}x ${d >= 0 ? '+' : '−'} ${Math.abs(d)})°. Find x.`, x, 'Co-interior angles between parallel lines total 180°.');
  }

  if (t === 13) {
    const [exterior, interior] = pick([[110, 45], [120, 50], [125, 55], [130, 60], [140, 65], [150, 70]]);
    return q('angleRelationships', `A triangle has an exterior angle of ${exterior}°. One opposite interior angle is ${interior}°. The other opposite interior angle is ?°`, exterior - interior, 'An exterior angle equals the sum of the two opposite interior angles.');
  }

  if (t === 14) {
    const relation = chance(.5);
    return q('angleRelationships', relation ? 'Two angles total 90°. Enter 1=Complementary, 2=Supplementary.' : 'Two angles total 180°. Enter 1=Complementary, 2=Supplementary.', relation ? 1 : 2, relation ? 'Complementary angles total 90°.' : 'Supplementary angles total 180°.');
  }

  if (t === 15) {
    const x = pick([10, 12, 15, 18, 20]);
    const a = pick([2, 3, 4]);
    const b = pick([10, 20, 30]);
    const c = pick([a + 1, a + 2]);
    const d = (a - c) * x + b;
    return q('angleRelationships', `Two corresponding angles are (${a}x + ${b})° and (${c}x ${d >= 0 ? '+' : '−'} ${Math.abs(d)})°. Find x.`, x, 'Corresponding angles are equal when the lines are parallel.');
  }

  const x = pick([15, 20, 25, 30]);
  const a = pick([2, 3, 4]);
  const fixed = 90 - a * x;
  if (fixed <= 0) return y7GenAngleRelationships();
  return q('angleRelationships', `Angles ${a}x° and ${fixed}° are complementary. Find x.`, x, 'Complementary angles total 90°.');
}


/* ===== YEAR 7 EASY MENTAL-MATH ADDITIONS ===== */

function y7GenCommutativeAssociative(forceRecognition = null) {
  const L = state.level;
  const recognition = forceRecognition === null ? randInt(1, 5) === 1 : forceRecognition;

  if (recognition) {
    const r = randInt(1, 5);
    if (r === 1) {
      const a = randInt(20, 120), b = randInt(20, 120);
      return q('mentalStrategies', `${a} + ${b} = ${b} + ${a}. Which property is shown? Enter 1=Commutative, 2=Associative.`, 1, 'Commutative changes the order of the addends.');
    }
    if (r === 2) {
      const a = randInt(2, 15), b = randInt(2, 15);
      return q('mentalStrategies', `${a} × ${b} = ${b} × ${a}. Which property is shown? Enter 1=Commutative, 2=Associative.`, 1, 'Commutative changes the order of the factors.');
    }
    if (r === 3) {
      const a = randInt(5, 30), b = randInt(5, 30), c = randInt(5, 30);
      return q('mentalStrategies', `(${a} + ${b}) + ${c} = ${a} + (${b} + ${c}). Which property is shown? Enter 1=Commutative, 2=Associative.`, 2, 'Associative changes the grouping while the order stays the same.');
    }
    if (r === 4) {
      const a = randInt(2, 9), b = randInt(2, 9), c = randInt(2, 9);
      return q('mentalStrategies', `(${a} × ${b}) × ${c} = ${a} × (${b} × ${c}). Which property is shown? Enter 1=Commutative, 2=Associative.`, 2, 'Associative changes the grouping while the order stays the same.');
    }
    const useSubtraction = randInt(0, 1) === 0;
    if (useSubtraction) {
      const a = randInt(8, 20), b = randInt(2, 7);
      return q('mentalStrategies', `${a} − ${b} = ${b} − ${a}. Enter 1=True, 0=False.`, 0, 'Subtraction is not commutative: changing the order changes the answer.');
    }
    const a = randInt(2, 12), b = randInt(2, 12);
    return q('mentalStrategies', `${a * b} ÷ ${a} = ${a} ÷ ${a * b}. Enter 1=True, 0=False.`, 0, 'Division is not commutative: changing the order changes the answer.');
  }

  const r = randInt(1, 8);
  if (r <= 2) {
    const a = pick([38, 47, 56, 68, 73, 84]), c = 100 - a;
    const b = pick([19, 27, 36, 44, 58]), d = 100 - b;
    return q('mentalStrategies', `${a} + ${b} + ${c} + ${d} = ?`, 200, `Reorder and regroup into two hundreds: (${a} + ${c}) + (${b} + ${d}).`);
  }
  if (r <= 4) {
    const middle = L === 'starter' ? randInt(2, 8) : randInt(3, 20);
    return q('mentalStrategies', `2.5 × ${middle} × 4 = ?`, middle * 10, `Reorder and regroup: (2.5 × 4) × ${middle} = 10 × ${middle}.`);
  }
  if (r <= 6) {
    const middle = L === 'starter' ? randInt(2, 8) : randInt(3, 16);
    return q('mentalStrategies', `0.25 × ${middle} × 4 = ?`, middle, `Reorder and regroup: (0.25 × 4) × ${middle} = 1 × ${middle}.`);
  }
  const [num, den] = pick([[1,4],[1,2],[3,4]]);
  return qFrac('mentalStrategies', `3/5 + ${num}/${den} + 2/5 = ?`, 1 + num / den, 'Reorder the fractions first: 3/5 + 2/5 = 1, then add the remaining fraction.');
}

function y7GenMentalStrategies() {
  const strategyRoll = randInt(1, 10);
  if (strategyRoll <= 2) return y7GenCommutativeAssociative(true);   // ~20% property recognition
  if (strategyRoll <= 5) return y7GenCommutativeAssociative(false);  // ~30% practical regrouping
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 7) : randInt(1, 9);

  if (t === 1) {
    const n = randInt(2, 20) * 8;
    return q('mentalStrategies', `12.5% of ${n} = ?`, n / 8, '12.5% is one eighth.');
  }
  if (t === 2) {
    const n = randInt(4, 40) * 4;
    return q('mentalStrategies', `75% of ${n} = ?`, n * 3 / 4, '75% is three quarters.');
  }
  if (t === 3) {
    const n = randInt(2, 30);
    return q('mentalStrategies', `${n} ÷ 0.25 = ?`, n * 4, 'Dividing by one quarter multiplies by 4.');
  }
  if (t === 4) {
    const n = randInt(2, 30) * 2;
    return q('mentalStrategies', `${n} × 2.5 = ?`, n * 5 / 2, 'Multiply by 5, then halve.');
  }
  if (t === 5) {
    const n = randInt(2, 20) * 8;
    return q('mentalStrategies', `${n} × 0.125 = ?`, n / 8, '0.125 is one eighth.');
  }
  if (t === 6) {
    const n = randInt(5, 60);
    return q('mentalStrategies', `${n} × 99 = ?`, n * 99, 'Multiply by 100, then subtract the number once.');
  }
  if (t === 7) {
    const n = randInt(4, 40);
    return q('mentalStrategies', `${n} × 19 = ?`, n * 19, 'Multiply by 20, then subtract the number once.');
  }
  if (t === 8) {
    const n = randInt(2, 20) * 4;
    return q('mentalStrategies', `25% of ${n} + 50% of ${n} = ?`, n * 3 / 4, 'One quarter plus one half equals three quarters.');
  }
  const n = randInt(2, 20) * 8;
  return q('mentalStrategies', `${n} ÷ 0.125 = ?`, n * 8, 'Dividing by one eighth multiplies by 8.');
}

function y7GenRemaindersPatterns() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 8) : randInt(1, 10);

  if (t === 1) {
    const divisor = randInt(3, 15);
    const quotient = randInt(6, 25);
    const remainder = randInt(1, divisor - 1);
    return q('remaindersPatterns', `Remainder when ${divisor * quotient + remainder} is divided by ${divisor} = ?`, remainder, 'Subtract the nearest lower multiple.');
  }
  if (t === 2) {
    const divisor = randInt(4, 15);
    const remainder = randInt(1, divisor - 1);
    const number = divisor * randInt(8, 24) + remainder;
    return q('remaindersPatterns', `Smallest number to add to ${number} to make it divisible by ${divisor} = ?`, divisor - remainder, 'Add enough to reach the next multiple.');
  }
  if (t === 3) {
    const [base, cycle] = pick([[2, [2, 4, 8, 6]], [3, [3, 9, 7, 1]], [7, [7, 9, 3, 1]], [8, [8, 4, 2, 6]]]);
    const exponent = randInt(5, 30);
    return q('remaindersPatterns', `Last digit of ${base}${y7Superscript(exponent)} = ?`, cycle[(exponent - 1) % cycle.length], 'The last digits repeat in a cycle of 4.');
  }
  if (t === 4) {
    const cycle = pick([[2, 5, 8], [1, 4, 7, 10], [3, 6, 9, 12, 15], [5, 10, 15, 20]]);
    const position = randInt(20, 100);
    return q('remaindersPatterns', `The pattern ${cycle.join(', ')} repeats. Term ${position} = ?`, cycle[(position - 1) % cycle.length], 'Use the position within the repeating cycle.');
  }
  if (t === 5) {
    const startCode = randInt(1, 7);
    const add = randInt(20, 120);
    return q('remaindersPatterns', `Starting on weekday ${startCode}, what weekday number is it ${add} days later? Use 1=Monday, ..., 7=Sunday.`, ((startCode - 1 + add) % 7) + 1, 'Use the remainder after dividing the number of days by 7.');
  }
  if (t === 6) {
    const a = pick([3, 4, 5, 6, 8]);
    const b = pick([4, 6, 8, 10, 12]);
    return q('remaindersPatterns', `Two events repeat every ${a} minutes and ${b} minutes. They occur together again after ? minutes`, lcm(a, b), 'Find the least common multiple.');
  }
  if (t === 7) {
    const interval = pick([3, 4, 5, 6, 8]);
    const count = randInt(5, 15);
    return q('remaindersPatterns', `How many complete ${interval}-second intervals fit into ${interval * count} seconds?`, count, 'Divide total time by the interval length.');
  }
  if (t === 8) {
    const divisor = randInt(4, 12);
    const remainder = randInt(0, divisor - 1);
    const add = randInt(5, 30);
    return q('remaindersPatterns', `A number leaves remainder ${remainder} when divided by ${divisor}. What remainder does the number plus ${add} leave?`, (remainder + add) % divisor, 'Add first, then remove full groups of the divisor.');
  }
  if (t === 9) {
    const capacity = randInt(6, 15);
    const full = randInt(8, 20);
    const extra = randInt(1, capacity - 1);
    return q('remaindersPatterns', `A container holds ${capacity} items. Containers needed for ${capacity * full + extra} items = ?`, full + 1, 'A non-zero remainder needs one extra container.');
  }
  const divisor = randInt(5, 15);
  const multiple = divisor * randInt(10, 30);
  const number = multiple - randInt(1, divisor - 1);
  return q('remaindersPatterns', `Next multiple of ${divisor} after ${number} = ?`, multiple, 'Count forward to the next multiple.');
}

/* ===== YEAR 7 FINAL CURRICULUM ADDITIONS ===== */

function y7GenDirectionsScale() {
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,10);
  const dirs=['North','North-East','East','South-East','South','South-West','West','North-West'];
  if(t<=5){const start=randInt(0,7),steps=pick([1,2,3,4,5,6,7]),clockwise=chance(.6),shift=clockwise?steps:-steps,answer=((start+shift)%8+8)%8+1;return q('directionsScale',`You face ${dirs[start]} and turn ${steps*45}° ${clockwise?'clockwise':'anticlockwise'}. Which direction do you face? Use 1=N, 2=NE, 3=E, 4=SE, 5=S, 6=SW, 7=W, 8=NW.`,answer,'Move around the eight compass directions in 45° steps.');}
  if(t===6){const scale=pick([2,3,4,5,10]),cm=randInt(2,12);return q('directionsScale',`Map scale: 1 cm represents ${scale} km. A route is ${cm} cm. Actual distance = ? km`,scale*cm,'Multiply by the scale.');}
  if(t===7){const scale=pick([2,4,5,10]),cm=randInt(2,10);return q('directionsScale',`Map scale: 1 cm represents ${scale} km. A real distance is ${scale*cm} km. Map distance = ? cm`,cm,'Divide by the scale.');}
  if(t===8){const start=randInt(0,7),first=pick([1,2,3]),second=pick([1,2,3]),answer=(start+first-second+8)%8+1;return q('directionsScale',`You face ${dirs[start]}, turn ${first*45}° clockwise, then ${second*45}° anticlockwise. Which direction do you face? Use 1=N, 2=NE, 3=E, 4=SE, 5=S, 6=SW, 7=W, 8=NW.`,answer,'Combine the two turns.');}
  if(t===9){const scale=pick([500,1000]),cm=randInt(2,10);return q('directionsScale',`On a map, 1 cm represents ${scale} m. ${cm} cm represents ? km`,cm*scale/1000,'Convert the map distance to metres, then to kilometres.');}
  const scale=pick([2,3,4,5]),a=randInt(2,6),b=randInt(2,6);return q('directionsScale',`A map route has sections ${a} cm and ${b} cm. If 1 cm represents ${scale} km, total real distance = ? km`,(a+b)*scale,'Add the map lengths, then multiply by the scale.');
}

function y7GenFinancialMaths() {
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,10);
  if(t===1){const dollars=randInt(5,40),cents=pick([1,2,3,4,6,7,8,9]);const amount=dollars+cents/100;const rounded=cents<5?dollars:(dollars+0.1);return q('financialMaths',`A New Zealand cash total is $${amount.toFixed(2)}. Amount paid after cash rounding = $?`,rounded,'Cash totals round to the nearest 10 cents.');}
  if(t===2){const price=pick([20,30,40,50,60,80,100]),p=pick([10,20,25,50]);return q('financialMaths',`A $${price} item has ${p}% off. Sale price = $?`,price*(1-p/100),'Find the percentage remaining.');}
  if(t===3){const qty=randInt(2,8),unit=pick([2,3,4,5,6,8,10,12]);return q('financialMaths',`${qty} items cost $${qty*unit}. Cost per item = $?`,unit,'Divide total cost by quantity.');}
  if(t===4){const first=pick([4.5,5.5,6.5,7.5]),second=pick([2.5,3.5,4.5]),pay=20;return q('financialMaths',`Two items cost $${fmt(first)} and $${fmt(second)}. You pay $${pay}. Change = $?`,pay-first-second,'Add the costs, then subtract from the amount paid.');}
  if(t===5){const weekly=pick([5,8,10,12,15]),weeks=pick([4,6,8,10]);return q('financialMaths',`You save $${weekly} each week for ${weeks} weeks. Total saved = $?`,weekly*weeks,'Multiply weekly saving by number of weeks.');}
  if(t===6){const budget=pick([40,50,60,80,100]),spent=pick([15,20,25,30,40]);if(spent>=budget)return y7GenFinancialMaths();return q('financialMaths',`A budget is $${budget}. After spending $${spent}, money left = $?`,budget-spent,'Subtract spending from the budget.');}
  if(t===7){const cost=pick([20,30,40,50,60]),profit=pick([5,10,15,20]);return q('financialMaths',`An item costs $${cost} and sells for $${cost+profit}. Profit = $?`,profit,'Profit = selling price − cost price.');}
  if(t===8){const people=randInt(2,8),each=pick([5,6,8,10,12]);return q('financialMaths',`A $${people*each} bill is shared equally by ${people} people. Each pays $?`,each,'Divide the bill equally.');}
  if(t===9){const price=pick([40,60,80,100,120]),p=pick([10,20,25]),pay=pick([100,150,200]);const sale=price*(1-p/100);if(pay<sale)return y7GenFinancialMaths();return q('financialMaths',`A $${price} item has ${p}% off. You pay $${pay}. Change = $?`,pay-sale,'Find the sale price, then the change.');}
  const packs=randInt(2,6),items=pick([4,5,6,8,10]),price=pick([2,3,4,5]);return q('financialMaths',`${packs} packs contain ${items} items each. Each item costs $${price}. Total cost = $?`,packs*items*price,'Find total items, then multiply by price.');
}

function y7GenAreaVolumeUnits() {
  const L=state.level,t=L==='starter'?randInt(1,4):L==='core'?randInt(1,7):randInt(1,10);
  if(t===1){const m2=pick([1,2,3,4,5]);return q('areaVolumeUnits',`${m2} m² = ? cm²`,m2*10000,'1 m² = 10,000 cm².');}
  if(t===2){const ml=pick([250,500,750,1000,1500,2000]);return q('areaVolumeUnits',`${ml} mL = ? cm³`,ml,'1 mL = 1 cm³.');}
  if(t===3){const litres=pick([1,1.5,2,2.5,3,4,5]);return q('areaVolumeUnits',`${fmt(litres)} L = ? cm³`,litres*1000,'1 L = 1000 cm³.');}
  if(t===4){const cm3=pick([500,1000,1500,2000,2500,3000]);return q('areaVolumeUnits',`${cm3} cm³ = ? L`,cm3/1000,'Divide cubic centimetres by 1000.');}
  if(t===5){const l=randInt(2,10),w=randInt(2,8),h=randInt(2,6);return q('areaVolumeUnits',`Cuboid ${l} cm × ${w} cm × ${h} cm. Volume = ? cm³`,l*w*h,'Volume = length × width × height.');}
  if(t===6){const l=randInt(2,10),w=randInt(2,8),h=randInt(2,6),v=l*w*h;return q('areaVolumeUnits',`A cuboid has volume ${v} cm³, length ${l} cm and width ${w} cm. Height = ? cm`,h,'Divide volume by length × width.');}
  if(t===7){const area=pick([0.25,0.5,0.75,1.5,2.5]);return q('areaVolumeUnits',`${fmt(area)} m² = ? cm²`,area*10000,'Multiply square metres by 10,000.');}
  if(t===8){const litres=pick([2,3,4,5]),cups=pick([4,5,8,10]);const each=litres*1000/cups;if(!Number.isInteger(each))return y7GenAreaVolumeUnits();return q('areaVolumeUnits',`${litres} L is shared equally into ${cups} containers. Each contains ? mL`,each,'Convert to millilitres, then divide.');}
  if(t===9){const side=pick([2,3,4,5,6,10]);return q('areaVolumeUnits',`A cube has side ${side} cm. Volume = ? cm³`,side**3,'Cube volume = side³.');}
  const base=pick([20,30,40,50]),height=pick([2,3,4,5]);return q('areaVolumeUnits',`A tank has base area ${base} cm² and height ${height} cm. Volume = ? cm³`,base*height,'Volume = base area × height.');
}

YEAR_BANKS[7] = {
  "directionsScale": y7GenDirectionsScale,
  "financialMaths": y7GenFinancialMaths,
  "areaVolumeUnits": y7GenAreaVolumeUnits,

  "mentalStrategies": y7GenMentalStrategies,
  "remaindersPatterns": y7GenRemaindersPatterns,
  "angleRelationships": y7GenAngleRelationships,
    integers: y7GenIntegers,
    order: y7GenOrder,
    powers: y7GenPowers,
    factors: y7GenFactors,
    fractions: y7GenFractions,
    fractionProblemSolving: y7GenFractionProblemSolving,
    decimals: y7GenDecimals,
    percentages: y7GenPercentages,
    ratio: y7GenRatio,
    algebra: y7GenAlgebra,
    writingAlgebra: y7GenWritingAlgebra,
    equations: y7GenEquations,
    sequences: y7GenSequences,
    estimation: y7GenEstimation,
    units: y7GenUnits,
    geometry: y7GenGeometry,
    fdpConversions: y7GenFDPConversions,
    fdpComparison: sharedGenFDPComparison,
    fdpOperations: sharedGenFDPOperations,
    percentageChange: y7GenPercentageChange,
    directProportion: y7GenDirectProportion,
    simplifyExpand: y7GenSimplifyExpand,
    twoStepEquations: y7GenTwoStepEquations,
    inequalities: y7GenInequalities,
    coordinates: y7GenCoordinates,
    pythagoras: y7GenPythagoras,
    statistics: y7GenStatistics,
    probability: y7GenProbability
  };
