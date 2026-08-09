'use strict';

/* Year 5 configuration and question bank. */
YEAR_CONFIGS[5] = {"title":"Year 5 Rapid Fire Mental Maths","skillLabel":"Year 5 Skill","mixed":"Mixed Year 5 Skills","labels":{"addition":"Addition","subtraction":"Subtraction","multiplication":"Multiplication","twoDigitMultiplication":"Two-Digit × Two-Digit","division":"Division","placevalue":"×/÷ 10, 100, 1000, 0.1, 0.01 & 0.001","doubles":"Doubles & Halves","fractions":"Fractions of Quantities","decimals":"Decimal Mental Maths","decimalShift":"Decimal Multiplication & Division","rounding":"Place Value & Rounding","missing":"Missing Numbers & Inverse Operations","factorsDivisibility":"Factors, Multiples & Divisibility","fractionCompare":"Fraction Equivalence & Comparison","fractionAddSub":"Fraction Addition & Subtraction","basicPercentages":"Basic Percentages","time":"Time","measurements":"Measurement Conversions","perimeterArea":"Perimeter, Area & Volume","sequences":"Sequences","mixed":"Mixed Year 5 Skills","review":"Mistake Review","fractionWordProblems":"Fraction Addition & Subtraction Word Problems","anglesLinePoint":"Angles on Lines & Around a Point","mentalStrategies":"Mental Calculation Strategies","moneyChange":"Money & Change","calendarDates":"Calendar & Dates","remaindersPatterns":"Remainders & Repeating Patterns","probability":"Simple Probability","numberBalance":"Number Sentences & Balance","shapesSymmetry":"Shapes, Symmetry & 3D Objects"},"skills":["addition","subtraction","multiplication","twoDigitMultiplication","division","placevalue","doubles","mentalStrategies","fractions","decimals","decimalShift","rounding","missing","numberBalance","factorsDivisibility","remaindersPatterns","fractionCompare","fractionAddSub","fractionWordProblems","probability","basicPercentages","moneyChange","time","calendarDates","anglesLinePoint","shapesSymmetry","measurements","perimeterArea","sequences"],"levels":[["starter","Starter — Year 4 Review"],["core","Core — Year 5"],["challenge","Challenge — Year 5+"]],"teacher":"Year 5 includes short, mental-friendly banks across number, fraction operations and applications, money, time, measurement, angles, probability, number sentences, shapes and symmetry."};
BASE_STORAGE_BY_YEAR[5] = {"stars":"dyaaY5RapidStars","hero":"dyaaY5RapidHero","best":"dyaaY5RapidBest","mistakes":"dyaaY5RapidMistakes"};

/* ===== YEAR 5 QUESTION GENERATORS ===== */

function y5GenAdd() {
  const L = state.level;

  if (L !== 'starter' && chance(L === 'core' ? 0.2 : 0.35)) {
    const aThousands = randInt(L === 'core' ? 120 : 180, L === 'core' ? 720 : 850);
    const bThousands = randInt(2, Math.min(L === 'core' ? 80 : 140, 999 - aThousands));
    const a = aThousands * 1000;
    const b = bThousands * 1000;
    const total = a + b;

    if (L === 'challenge' && chance(0.25)) {
      return q('addition', `□ + ${b.toLocaleString('en-NZ')} = ${total.toLocaleString('en-NZ')}`, a, 'Subtract the known addend from the total.');
    }

    return q('addition', `${a.toLocaleString('en-NZ')} + ${b.toLocaleString('en-NZ')} = ?`, total, 'Add the thousands, then write the three zeros.');
  }

  let a;
  let b;

  if (L === 'starter') {
    a = randInt(25, 99);
    b = randInt(6, Math.min(55, 150 - a));
  } else if (L === 'core') {
    if (chance(0.55)) {
      a = randInt(120, 780);
      b = randInt(2, 18) * 10;
      if (a + b > 999) b = 990 - a;
    } else {
      a = randInt(45, 189);
      b = randInt(25, 110);
    }
  } else {
    a = randInt(145, 699);
    b = randInt(105, Math.min(300, 999 - a));
  }

  const total = a + b;

  if (L === 'challenge' && chance(0.22)) {
    return q('addition', `□ + ${b} = ${total}`, a, `Work backwards: ${total} − ${b}.`);
  }

  return q('addition', `${a} + ${b} = ?`, total, 'Partition hundreds, tens and ones.');
}

function y5GenSub() {
  const L = state.level;

  if (L !== 'starter' && chance(L === 'core' ? 0.2 : 0.35)) {
    const aThousands = randInt(L === 'core' ? 260 : 420, L === 'core' ? 900 : 999);
    const bThousands = randInt(20, Math.min(L === 'core' ? 220 : 380, aThousands - 40));
    const a = aThousands * 1000;
    const b = bThousands * 1000;
    const answer = a - b;

    if (L === 'challenge' && chance(0.25)) {
      return q('subtraction', `${a.toLocaleString('en-NZ')} − □ = ${answer.toLocaleString('en-NZ')}`, b, 'Find the difference between the starting number and the result.');
    }

    return q('subtraction', `${a.toLocaleString('en-NZ')} − ${b.toLocaleString('en-NZ')} = ?`, answer, 'Subtract the thousands, then write the three zeros.');
  }

  let a;
  let b;

  if (L === 'starter') {
    a = randInt(55, 150);
    b = randInt(6, Math.min(60, a - 1));
  } else if (L === 'core') {
    a = randInt(180, 899);
    b = chance(0.55) ? randInt(2, 18) * 10 : randInt(25, 160);
    if (b >= a) b = a - randInt(10, 60);
  } else {
    a = randInt(420, 999);
    b = randInt(120, a - 40);
  }

  if (L === 'challenge' && chance(0.2)) {
    const answer = a - b;
    return q('subtraction', `${a} − □ = ${answer}`, b, `Find the difference between ${answer} and ${a}.`);
  }

  return q('subtraction', `${a} − ${b} = ?`, a - b, 'Subtract in parts or count up.');
}

function y5BaseFacts(){return state.level==='starter'?[2,3,4,5,6,8,10]:[2,3,4,5,6,7,8,9,10,11,12]}


function y5GenMul() {
  const L = state.level;

  if (L === 'starter') {
    const a = pick(y5BaseFacts());
    const b = randInt(2, 12);
    return q('multiplication', `${a} × ${b} = ?`, a * b, `Recall the ${a} times table.`);
  }

  if (chance(L === 'core' ? 0.25 : 0.4)) {
    const friendlyNumbers = L === 'core'
      ? [120, 140, 160, 180, 210, 240, 250, 320, 400, 450, 600, 750]
      : [1025, 1200, 1250, 1500, 2025, 2040, 2250, 2500, 3000, 3200];
    const a = pick(friendlyNumbers);
    const b = pick(L === 'core' ? [2, 3, 4, 5, 6] : [2, 3, 4]);

    return q('multiplication', `${a.toLocaleString('en-NZ')} × ${b} = ?`, a * b, 'Partition the larger number into easy place-value parts.');
  }

  let a;
  let b;

  if (L === 'core') {
    if (chance(0.25)) {
      a = pick([20, 30, 40, 50, 60, 70, 80, 90]);
      b = randInt(3, 9);
    } else {
      a = randInt(11, 29);
      b = randInt(2, 9);
    }
  } else {
    a = randInt(16, 49);
    b = randInt(3, 9);
  }

  const product = a * b;

  if (chance(L === 'challenge' ? 0.28 : 0.12)) {
    return q('multiplication', `${a} × □ = ${product}`, b, `Use division: ${product} ÷ ${a}.`);
  }

  return q('multiplication', `${a} × ${b} = ?`, product, `Partition ${a} into tens and ones.`);
}

function y5GenTwoDigitMultiplication() {
  const L = state.level;
  let first;
  let second;

  if (L === 'starter') {
    first = randInt(11, 25);
    second = pick([10, 11, 12, 15, 20]);
  } else if (L === 'core') {
    first = randInt(11, 29);
    second = randInt(11, 19);
  } else {
    first = randInt(12, 39);
    second = randInt(12, 29);

    while (first * second > 999) {
      first = randInt(12, 35);
      second = randInt(12, 27);
    }
  }

  if (chance(0.5)) {
    [first, second] = [second, first];
  }

  return q(
    'twoDigitMultiplication',
    `${first} × ${second} = ?`,
    first * second,
    `Partition ${second} into tens and ones, then add the two partial products.`
  );
}


function y5GenDiv() {
  const L = state.level;

  if (L !== 'starter' && chance(L === 'core' ? 0.25 : 0.4)) {
    if (chance(0.45)) {
      const divisor = pick([3, 4, 5, 6, 8]);
      const quotient = pick(L === 'core' ? [125, 150, 200, 225, 250, 300] : [125, 160, 200, 225, 250, 300, 400, 500]);
      const dividend = divisor * quotient;
      return q('division', `${dividend.toLocaleString('en-NZ')} ÷ ${divisor} = ?`, quotient, 'Use place value and the related multiplication fact.');
    }

    const divisor = pick([3, 4, 5, 6, 7, 8, 9]);
    const quotient = randInt(L === 'core' ? 120 : 160, L === 'core' ? 350 : 700);
    const remainder = randInt(1, divisor - 1);
    const dividend = divisor * quotient + remainder;

    return q('division', `${dividend.toLocaleString('en-NZ')} ÷ ${divisor}: remainder = ?`, remainder, 'Find the nearest lower multiple of the divisor.');
  }

  let divisor;
  let quotient;

  if (L === 'starter') {
    divisor = pick(y5BaseFacts());
    quotient = randInt(2, 12);
  } else if (L === 'core') {
    divisor = randInt(2, 10);
    quotient = randInt(11, 39);
  } else {
    divisor = randInt(3, 12);
    quotient = randInt(14, 75);
    while (divisor * quotient > 900) quotient = randInt(14, 60);
  }

  const dividend = divisor * quotient;

  if (L === 'challenge' && chance(0.22)) {
    return q('division', `□ ÷ ${divisor} = ${quotient}`, dividend, `Multiply ${divisor} by ${quotient}.`);
  }

  return q('division', `${dividend} ÷ ${divisor} = ?`, quotient, 'Use multiplication to check the quotient.');
}

function y5GenPlaceValue() {
  const L = state.level;
  const operationType = randInt(1, 4);
  const places = randInt(1, 3);
  const wholeFactor = 10 ** places;
  const decimalFactor = 1 / wholeFactor;

  function makePracticeNumber() {
    if (L === 'starter') {
      return randInt(1, 99);
    }

    if (L === 'core') {
      const decimalPlaces = pick([0, 1]);
      return randInt(1, 999) / (10 ** decimalPlaces);
    }

    const decimalPlaces = pick([0, 1, 2]);
    return randInt(1, 9999) / (10 ** decimalPlaces);
  }

  if (operationType === 1) {
    const number = makePracticeNumber();

    return q(
      'placevalue',
      `${fmt(number)} × ${wholeFactor} = ?`,
      number * wholeFactor,
      `Multiplying by ${wholeFactor} moves every digit ${places} place${places === 1 ? '' : 's'} to the left.`
    );
  }

  if (operationType === 2) {
    const number = makePracticeNumber();

    return q(
      'placevalue',
      `${fmt(number)} ÷ ${wholeFactor} = ?`,
      number / wholeFactor,
      `Dividing by ${wholeFactor} moves every digit ${places} place${places === 1 ? '' : 's'} to the right.`
    );
  }

  if (operationType === 3) {
    const number = makePracticeNumber();

    return q(
      'placevalue',
      `${fmt(number)} × ${fmt(decimalFactor)} = ?`,
      number * decimalFactor,
      `Multiplying by ${fmt(decimalFactor)} is the same as dividing by ${wholeFactor}. Move every digit ${places} place${places === 1 ? '' : 's'} to the right.`
    );
  }

  let number;

  if (L === 'starter') {
    number = randInt(1, 99) / wholeFactor;
  } else if (L === 'core') {
    number = randInt(1, 999) / wholeFactor;
  } else {
    const extraDecimalPlaces = pick([0, 1, 2]);
    number = randInt(1, 9999) / (wholeFactor * (10 ** extraDecimalPlaces));
  }

  return q(
    'placevalue',
    `${fmt(number)} ÷ ${fmt(decimalFactor)} = ?`,
    number / decimalFactor,
    `Dividing by ${fmt(decimalFactor)} is the same as multiplying by ${wholeFactor}. Move every digit ${places} place${places === 1 ? '' : 's'} to the left.`
  );
}

function y5GenDoubles(){
  if(state.level==='starter'){
    if(chance(.5)){const n=randInt(12,60);return{operation:'doubles',text:`Double ${n}`,answer:n*2,hint:`Add ${n} to itself.`}}
    const half=randInt(10,70),n=half*2;return{operation:'doubles',text:`Half of ${n}`,answer:half,hint:'Split the number into two equal parts.'}
  }
  if(state.level==='core'){
    if(chance(.5)){const n=randInt(35,250);return{operation:'doubles',text:`Double ${n}`,answer:n*2,hint:'Double the hundreds, tens and ones.'}}
    const half=randInt(30,250),n=half*2;return{operation:'doubles',text:`Half of ${n}`,answer:half,hint:'Halve each place-value part.'}
  }
  if(chance(.5)){const n=randInt(45,180),add=randInt(5,30);return{operation:'doubles',text:`Double ${n}, then add ${add}`,answer:n*2+add,hint:'Double first, then add.'}}
  const half=randInt(60,300),n=half*2,sub=randInt(5,35);return{operation:'doubles',text:`Half of ${n}, then subtract ${sub}`,answer:half-sub,hint:'Find half first, then subtract.'}
}


function y5GenFractions() {
  const L = state.level;
  const sets = {
    starter: [[1, 2], [1, 4], [1, 5], [1, 10]],
    core: [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [1, 10]],
    challenge: [[2, 3], [3, 4], [2, 5], [3, 5], [5, 6], [3, 8], [5, 8], [7, 10]]
  };
  const [num, den] = pick(sets[L]);
  const maxK = L === 'starter' ? 12 : L === 'core' ? 20 : 25;
  const k = randInt(L === 'starter' ? 2 : 4, maxK);
  const quantity = den * k;

  if (chance(L === 'starter' ? 0 : L === 'core' ? 0.35 : 0.42)) {
    const part = num * k;
    return q('fractions', `${num}/${den} of a number is ${part}. The whole number is ?`, quantity, `First find 1/${den}, then multiply by ${den}.`);
  }

  return q('fractions', `${num}/${den} of ${quantity} = ?`, num * k, `Find 1/${den} first, then multiply by ${num}.`);
}

function y5GenDecimals() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 8) : randInt(1, 10);

  if (type === 1) {
    const a = randInt(11, L === 'starter' ? 89 : 150) / 10;
    const b = L === 'starter' ? randInt(1, 6) : randInt(11, 70) / 10;
    return q('decimals', `${fmt(a)} + ${fmt(b)} = ?`, round2(a + b), 'Line up the decimal places mentally.');
  }

  if (type === 2) {
    const a = randInt(L === 'starter' ? 25 : 45, L === 'starter' ? 99 : 180) / 10;
    const b = L === 'starter' ? randInt(1, Math.max(1, Math.floor(a))) : randInt(11, Math.max(12, Math.floor(a * 10) - 5)) / 10;
    const adjusted = b >= a ? round2(a - 0.5) : b;
    return q('decimals', `${fmt(a)} − ${fmt(adjusted)} = ?`, round2(a - adjusted), 'Line up the decimal places mentally.');
  }

  if (type === 3) {
    const pairs = [
      [0.45, 0.405], [0.7, 0.67], [1.08, 1.8], [2.35, 2.305],
      [0.54, 0.504], [3.09, 3.9], [4.25, 4.205]
    ];
    const [a, b] = pick(pairs);
    return q('decimals', `Which is larger? Enter 1 for ${fmt(a)}, or 2 for ${fmt(b)}.`, a > b ? 1 : 2, 'Write both numbers with the same number of decimal places.');
  }

  if (type === 4) {
    const [number, digit, value] = pick([
      [3.64, 6, 0.6], [5.27, 7, 0.07], [8.43, 4, 0.4],
      [2.09, 9, 0.09], [7.15, 5, 0.05]
    ]);
    return q('decimals', `What is the value of the digit ${digit} in ${fmt(number)}?`, value, 'Use tenths and hundredths place value.');
  }

  if (type === 5) {
    const tenths = randInt(1, 9);
    return q('decimals', `${fmt(tenths / 10)} = ?/10`, tenths, 'The tenths digit is the numerator over 10.');
  }

  if (type === 6) {
    const hundredths = pick([12, 15, 20, 25, 30, 35, 40, 45, 50, 60, 75, 80, 90]);
    return q('decimals', `${fmt(hundredths / 100)} = ?/100`, hundredths, 'Write the decimal as hundredths.');
  }

  if (type === 7) {
    const a = randInt(25, 999) / 100;
    const b = randInt(15, 500) / 100;
    return q('decimals', `${fmt(a)} + ${fmt(b)} = ?`, round2(a + b), 'Add hundredths, tenths and whole numbers.');
  }

  if (type === 8) {
    const a = randInt(300, 1500) / 100;
    let b = randInt(25, Math.max(30, Math.floor(a * 100) - 10)) / 100;
    if (b >= a) b = round2(a - 0.25);
    return q('decimals', `${fmt(a)} − ${fmt(b)} = ?`, round2(a - b), 'Subtract hundredths, tenths and whole numbers.');
  }

  if (type === 9) {
    const values = pick([
      [0.4, 0.45, 0.405], [1.2, 1.02, 1.12], [2.5, 2.05, 2.15], [0.75, 0.705, 0.57]
    ]);
    const largest = Math.max(...values);
    return q('decimals', `Which is largest? Enter 1 for ${fmt(values[0])}, 2 for ${fmt(values[1])}, or 3 for ${fmt(values[2])}.`, values.indexOf(largest) + 1, 'Compare whole numbers, then tenths, then hundredths.');
  }

  const number = pick([1.25, 2.5, 3.75, 4.2, 5.05, 6.4]);
  return q('decimals', `${fmt(number)} + 0.5 = ?`, round2(number + 0.5), 'Add five tenths.');
}

function y5GenDecimalShift() {
  const L = state.level;
  const type = L === 'starter'
    ? randInt(1, 6)
    : L === 'core'
      ? randInt(1, 10)
      : randInt(1, 12);

  if (type === 1) {
    const number = randInt(1, L === 'starter' ? 99 : 999) / 10;

    return q(
      'decimalShift',
      `${fmt(number)} × 10 = ?`,
      number * 10,
      'Move every digit 1 place to the left.'
    );
  }

  if (type === 2) {
    const number = randInt(1, L === 'starter' ? 999 : 9999);

    return q(
      'decimalShift',
      `${number} ÷ 10 = ?`,
      number / 10,
      'Move every digit 1 place to the right.'
    );
  }

  if (type === 3) {
    const number = randInt(1, L === 'starter' ? 9 : 999) / 10;

    return q(
      'decimalShift',
      `${fmt(number)} × 100 = ?`,
      number * 100,
      'Move every digit 2 places to the left.'
    );
  }

  if (type === 4) {
    const number = randInt(1, L === 'starter' ? 99 : 999) * 10;

    return q(
      'decimalShift',
      `${number} ÷ 100 = ?`,
      number / 100,
      'Move every digit 2 places to the right.'
    );
  }

  if (type === 5) {
    const number = randInt(1, 99) / 10;

    return q(
      'decimalShift',
      `${fmt(number)} × 0.1 = ?`,
      number / 10,
      'Multiplying by 0.1 is the same as dividing by 10.'
    );
  }

  if (type === 6) {
    const number = randInt(1, 99) / 10;

    return q(
      'decimalShift',
      `${fmt(number)} ÷ 0.1 = ?`,
      number * 10,
      'Dividing by 0.1 is the same as multiplying by 10.'
    );
  }

  if (type === 7) {
    const first = randInt(11, 99) / 10;
    const second = randInt(2, 9) / 10;

    return q(
      'decimalShift',
      `${fmt(first)} × ${fmt(second)} = ?`,
      first * second,
      'Multiply as whole numbers, then place 2 decimal digits in the answer.'
    );
  }

  if (type === 8) {
    const divisorTenths = randInt(2, 9);
    const quotient = randInt(2, 12);
    const divisor = divisorTenths / 10;
    const dividend = divisorTenths * quotient / 10;

    return q(
      'decimalShift',
      `${fmt(dividend)} ÷ ${fmt(divisor)} = ?`,
      quotient,
      'Multiply both numbers by 10 to make the divisor a whole number.'
    );
  }

  if (type === 9) {
    const first = randInt(1, 99) / 100;
    const second = pick([0.2, 0.3, 0.4, 0.5]);

    return q(
      'decimalShift',
      `${fmt(first)} × ${fmt(second)} = ?`,
      first * second,
      'Multiply the whole-number digits, then count all decimal places.'
    );
  }

  if (type === 10) {
    const divisorHundredths = randInt(2, 9);
    const quotient = randInt(2, 15);
    const divisor = divisorHundredths / 100;
    const dividend = divisorHundredths * quotient / 100;

    return q(
      'decimalShift',
      `${fmt(dividend)} ÷ ${fmt(divisor)} = ?`,
      quotient,
      'Multiply both numbers by 100 to make the divisor a whole number.'
    );
  }

  if (type === 11) {
    const number = randInt(1, 999) / 1000;

    return q(
      'decimalShift',
      `${fmt(number)} × 1000 = ?`,
      number * 1000,
      'Move every digit 3 places to the left.'
    );
  }

  const number = randInt(1, 9999);

  return q(
    'decimalShift',
    `${number} ÷ 1000 = ?`,
    number / 1000,
    'Move every digit 3 places to the right.'
  );
}

function y5GenPlaceValueRounding() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 10) : randInt(1, 13);

  if (type === 1) {
    const number = L === 'starter' ? randInt(1000, 99999) : randInt(10000, 999999);
    const places = number < 10000
      ? [[1000, 'thousands'], [100, 'hundreds'], [10, 'tens'], [1, 'ones']]
      : number < 100000
        ? [[10000, 'ten-thousands'], [1000, 'thousands'], [100, 'hundreds'], [10, 'tens']]
        : [[100000, 'hundred-thousands'], [10000, 'ten-thousands'], [1000, 'thousands'], [100, 'hundreds']];
    const [place, placeName] = pick(places);
    const digit = Math.floor(number / place) % 10;
    return q('rounding', `What is the value of the ${placeName} digit in ${number.toLocaleString('en-NZ')}?`, digit * place, `Find the digit in the ${placeName} place, then write its value.`);
  }

  if (type === 2) {
    const number = randInt(100, L === 'starter' ? 9999 : 99999);
    return q('rounding', `Round ${number.toLocaleString('en-NZ')} to the nearest 10.`, Math.round(number / 10) * 10, 'Look at the ones digit.');
  }

  if (type === 3) {
    const number = randInt(100, L === 'starter' ? 9999 : 99999);
    return q('rounding', `Round ${number.toLocaleString('en-NZ')} to the nearest 100.`, Math.round(number / 100) * 100, 'Look at the tens digit.');
  }

  if (type === 4) {
    const number = randInt(1000, L === 'starter' ? 99999 : 999999);
    return q('rounding', `Round ${number.toLocaleString('en-NZ')} to the nearest 1000.`, Math.round(number / 1000) * 1000, 'Look at the hundreds digit.');
  }

  if (type === 5) {
    const number = randInt(10000, 999999);
    return q('rounding', `Round ${number.toLocaleString('en-NZ')} to the nearest 10,000.`, Math.round(number / 10000) * 10000, 'Look at the thousands digit.');
  }

  if (type === 6) {
    const number = randInt(100000, 999999);
    return q('rounding', `Round ${number.toLocaleString('en-NZ')} to the nearest 100,000.`, Math.round(number / 100000) * 100000, 'Look at the ten-thousands digit.');
  }

  if (type === 7) {
    let number = randInt(11, 999) / 10;
    while (Number.isInteger(number)) number = randInt(11, 999) / 10;
    return q('rounding', `Round ${fmt(number)} to the nearest whole number.`, Math.round(number), 'Look at the tenths digit.');
  }

  if (type === 8) {
    const a = randInt(145, 849);
    const b = randInt(125, 649);
    return q('rounding', `Estimate ${a} + ${b} by rounding each number to the nearest 100.`, Math.round(a / 100) * 100 + Math.round(b / 100) * 100, 'Round both numbers first, then add.');
  }

  if (type === 9) {
    const a = randInt(240, 950);
    const b = randInt(110, Math.min(750, a - 20));
    return q('rounding', `Estimate ${a} − ${b} by rounding each number to the nearest 100.`, Math.round(a / 100) * 100 - Math.round(b / 100) * 100, 'Round both numbers first, then subtract.');
  }

  if (type === 10) {
    const a = randInt(21, 69);
    const b = randInt(3, 9);
    return q('rounding', `Estimate ${a} × ${b} by rounding ${a} to the nearest 10.`, Math.round(a / 10) * 10 * b, 'Round the two-digit number first, then multiply.');
  }

  if (type === 11) {
    const [a, b] = pick([[405090, 405900], [618205, 618025], [720040, 702400], [530600, 536000]]);
    return q('rounding', `Which is larger? Enter 1 for ${a.toLocaleString('en-NZ')}, or 2 for ${b.toLocaleString('en-NZ')}.`, a > b ? 1 : 2, 'Compare from the highest place value first.');
  }

  if (type === 12) {
    const values = pick([[245000, 254000, 240500], [610090, 601900, 619000], [807050, 870500, 805700]]);
    const largest = Math.max(...values);
    return q('rounding', `Which is largest? Enter 1 for ${values[0].toLocaleString('en-NZ')}, 2 for ${values[1].toLocaleString('en-NZ')}, or 3 for ${values[2].toLocaleString('en-NZ')}.`, values.indexOf(largest) + 1, 'Compare hundred-thousands, then ten-thousands, then thousands.');
  }

  const number = pick([305040, 407005, 620300, 804070]);
  const place = pick([100000, 10000, 1000, 100]);
  const placeName = place === 100000 ? 'hundred-thousands' : place === 10000 ? 'ten-thousands' : place === 1000 ? 'thousands' : 'hundreds';
  return q('rounding', `What digit is in the ${placeName} place in ${number.toLocaleString('en-NZ')}?`, Math.floor(number / place) % 10, 'Locate the named place value.');
}

function y5GenMissingNumbers() {
  const L = state.level;
  const type = L === 'starter'
    ? randInt(1, 4)
    : L === 'core'
      ? randInt(1, 7)
      : randInt(1, 9);

  if (type === 1) {
    const missing = randInt(5, L === 'starter' ? 80 : 250);
    const known = randInt(5, L === 'starter' ? 60 : 180);

    return q(
      'missing',
      `□ + ${known} = ${missing + known}. Find □.`,
      missing,
      'Use subtraction to undo addition.'
    );
  }

  if (type === 2) {
    const missing = randInt(5, L === 'starter' ? 80 : 250);
    const subtract = randInt(3, Math.min(60, missing - 1));

    return q(
      'missing',
      `□ − ${subtract} = ${missing - subtract}. Find □.`,
      missing,
      'Use addition to undo subtraction.'
    );
  }

  if (type === 3) {
    const factor = randInt(2, L === 'starter' ? 10 : 12);
    const missing = randInt(2, L === 'starter' ? 12 : 25);

    return q(
      'missing',
      `${factor} × □ = ${factor * missing}. Find □.`,
      missing,
      'Use division to undo multiplication.'
    );
  }

  if (type === 4) {
    const divisor = randInt(2, L === 'starter' ? 10 : 12);
    const quotient = randInt(2, L === 'starter' ? 12 : 30);

    return q(
      'missing',
      `□ ÷ ${divisor} = ${quotient}. Find □.`,
      divisor * quotient,
      'Use multiplication to undo division.'
    );
  }

  if (type === 5) {
    const start = randInt(60, 300);
    const result = randInt(10, start - 10);

    return q(
      'missing',
      `${start} − □ = ${result}. Find □.`,
      start - result,
      'Find the difference between the starting number and the result.'
    );
  }

  if (type === 6) {
    const dividend = randInt(2, 12) * randInt(3, 20);
    const quotient = pick(primeFactors(dividend).filter(value => value <= 12));

    return q(
      'missing',
      `${dividend} ÷ □ = ${dividend / quotient}. Find □.`,
      quotient,
      'Use divisor × quotient = dividend.'
    );
  }

  if (type === 7) {
    const missing = randInt(3, 30);
    const multiplier = randInt(2, 9);
    const add = randInt(2, 20);

    return q(
      'missing',
      `□ × ${multiplier} + ${add} = ${missing * multiplier + add}. Find □.`,
      missing,
      'Undo the addition first, then divide.'
    );
  }

  if (type === 8) {
    const missing = randInt(5, 40);
    const add = randInt(2, 15);
    const multiplier = randInt(2, 6);

    return q(
      'missing',
      `(□ + ${add}) × ${multiplier} = ${(missing + add) * multiplier}. Find □.`,
      missing,
      'Divide first, then subtract.'
    );
  }

  const missing = randInt(5, 50);
  const double = missing * 2;
  const subtract = randInt(3, 20);

  return q(
    'missing',
    `Double □, then subtract ${subtract}, gives ${double - subtract}. Find □.`,
    missing,
    'Add back the subtraction, then halve.'
  );
}


function y5GenFactorsDivisibility() {
  const L = state.level;
  const type = L === 'starter'
    ? randInt(1, 4)
    : L === 'core'
      ? randInt(1, 7)
      : randInt(1, 9);

  if (type === 1) {
    const divisor = randInt(2, 12);
    const start = randInt(10, 90);
    const next = (Math.floor(start / divisor) + 1) * divisor;

    return q(
      'factorsDivisibility',
      `What is the first multiple of ${divisor} greater than ${start}?`,
      next,
      'Continue the multiples until you pass the given number.'
    );
  }

  if (type === 2) {
    const number = pick([12, 18, 20, 24, 28, 30, 32, 36, 40, 42, 48, 50, 54, 60]);

    return q(
      'factorsDivisibility',
      `How many positive factors does ${number} have?`,
      countFactors(number),
      'List factor pairs and count every factor.'
    );
  }

  if (type === 3) {
    const number = pick([18, 21, 25, 27, 33, 35, 39, 45, 49, 55, 63, 75]);

    return q(
      'factorsDivisibility',
      `Smallest factor of ${number} greater than 1 = ?`,
      smallestPrimeFactor(number),
      'Test 2, then 3, then 5, then 7.'
    );
  }

  if (type === 4) {
    const divisor = pick([2, 3, 4, 5, 6, 8, 9, 10]);
    const shouldDivide = chance(0.5);
    let number;

    if (shouldDivide) {
      number = divisor * randInt(3, 30);
    } else {
      number = divisor * randInt(3, 30) + randInt(1, divisor - 1);
    }

    return q(
      'factorsDivisibility',
      `Is ${number} divisible by ${divisor}? Enter 1 for Yes, 0 for No.`,
      shouldDivide ? 1 : 0,
      'Use a divisibility rule or divide to check.'
    );
  }

  if (type === 5) {
    const a = pick([12, 18, 20, 24, 30, 36, 40, 42, 48]);
    const b = pick([16, 20, 24, 28, 30, 32, 36, 40, 54]);

    return q(
      'factorsDivisibility',
      `HCF of ${a} and ${b} = ?`,
      gcd(a, b),
      'List common factors and choose the greatest.'
    );
  }

  if (type === 6) {
    const a = pick([3, 4, 5, 6, 8, 9, 10, 12]);
    const b = pick([4, 5, 6, 8, 10, 12]);

    return q(
      'factorsDivisibility',
      `LCM of ${a} and ${b} = ?`,
      lcm(a, b),
      'Find the first number in both multiple lists.'
    );
  }

  if (type === 7) {
    const first = pick([3, 4, 5, 6]);
    const second = pick([4, 5, 6, 8]);
    const start = randInt(15, 90);
    const common = lcm(first, second);
    const next = Math.ceil((start + 1) / common) * common;

    return q(
      'factorsDivisibility',
      `First number greater than ${start} divisible by both ${first} and ${second} = ?`,
      next,
      'Find a common multiple greater than the starting number.'
    );
  }

  if (type === 8) {
    const number = randInt(100, 999);
    const options = [2, 3, 5, 9, 10];
    const divisibleCount = options.filter(divisor => number % divisor === 0).length;

    return q(
      'factorsDivisibility',
      `How many of 2, 3, 5, 9 and 10 divide ${number} exactly?`,
      divisibleCount,
      'Apply each divisibility rule separately.'
    );
  }

  const base = pick([6, 8, 10, 12, 15]);
  const factor = randInt(2, 8);
  const number = base * factor;

  return q(
    'factorsDivisibility',
    `${number} is the ${factor}th positive multiple of ${base}. What is the previous positive multiple?`,
    number - base,
    'Subtract one group of the base number.'
  );
}


function y5GenFractionCompare() {
  const L = state.level;
  const type = L === 'starter'
    ? randInt(1, 4)
    : L === 'core'
      ? randInt(1, 6)
      : randInt(1, 8);

  if (type === 1) {
    const denominator = pick([2, 3, 4, 5, 6, 8, 10]);
    const numerator = randInt(1, denominator - 1);
    const scale = randInt(2, L === 'starter' ? 5 : 9);

    return q(
      'fractionCompare',
      `${numerator}/${denominator} = ?/${denominator * scale}`,
      numerator * scale,
      'Multiply numerator and denominator by the same number.'
    );
  }

  if (type === 2) {
    const denominator = pick([2, 3, 4, 5, 6, 8]);
    const numerator = randInt(1, denominator - 1);
    const scale = randInt(2, L === 'starter' ? 5 : 9);

    return q(
      'fractionCompare',
      `${numerator}/${denominator} = ${numerator * scale}/?`,
      denominator * scale,
      'Use the same scale factor in the denominator.'
    );
  }

  if (type === 3) {
    const denominator = pick([4, 5, 6, 8, 10, 12]);
    const numerator = randInt(1, denominator - 1);
    const scale = randInt(2, 5);
    const top = numerator * scale;
    const bottom = denominator * scale;

    return qFrac(
      'fractionCompare',
      `Simplify ${top}/${bottom}.`,
      numerator / denominator,
      'Divide numerator and denominator by their common factor.'
    );
  }

  if (type === 4) {
    const pair = pick([
      [1, 2, 2, 5],
      [2, 3, 3, 5],
      [3, 4, 5, 8],
      [2, 5, 3, 8],
      [4, 5, 7, 10],
      [3, 8, 2, 5]
    ]);
    const [a, b, c, d] = pair;

    return q(
      'fractionCompare',
      `Which is larger? Enter 1 for ${a}/${b}, or 2 for ${c}/${d}.`,
      a / b > c / d ? 1 : 2,
      'Use a common denominator or compare with a benchmark such as 1/2.'
    );
  }

  if (type === 5) {
    const denominator = pick([4, 5, 8, 10, 12, 20]);
    const numerator = randInt(1, denominator - 1);
    const target = pick([20, 40, 60]);
    const adjustedTarget = target % denominator === 0
      ? target
      : denominator * randInt(2, 6);

    return q(
      'fractionCompare',
      `How many ${adjustedTarget}ths are equal to ${numerator}/${denominator}?`,
      numerator * adjustedTarget / denominator,
      'Find the factor used to change the denominator.'
    );
  }

  if (type === 6) {
    const denominator = pick([4, 5, 6, 8, 10, 12]);
    const numerator = randInt(1, denominator - 1);

    return q(
      'fractionCompare',
      `${numerator}/${denominator} + □/${denominator} = 1. Find the missing numerator.`,
      denominator - numerator,
      'The numerators must add to the denominator.'
    );
  }

  if (type === 7) {
    const [a, b, c, d, e, f] = pick([
      [1, 2, 2, 3, 3, 4],
      [2, 5, 1, 2, 3, 5],
      [1, 4, 3, 8, 1, 2],
      [3, 10, 2, 5, 7, 10]
    ]);
    const values = [a / b, c / d, e / f];
    const largestIndex = values.indexOf(Math.max(...values)) + 1;

    return q(
      'fractionCompare',
      `Which is largest? Enter 1 for ${a}/${b}, 2 for ${c}/${d}, or 3 for ${e}/${f}.`,
      largestIndex,
      'Compare all three fractions using common denominators or benchmarks.'
    );
  }

  const [a, b] = pick([[1, 2], [1, 5], [2, 5], [3, 5], [4, 5], [3, 10], [7, 10]]);

  return q(
    'fractionCompare',
    `${a}/${b} = ? tenths`,
    a * 10 / b,
    'Write the equivalent fraction with denominator 10.'
  );
}


function y5GenFractionAddSub() {
  const L = state.level;
  const type = L === 'starter'
    ? randInt(1, 3)
    : L === 'core'
      ? randInt(1, 6)
      : randInt(1, 8);

  if (type === 1) {
    const denominator = pick([4, 5, 6, 7, 8, 9, 10, 12]);
    const a = randInt(1, denominator - 2);
    const b = randInt(1, denominator - a - 1);

    return qFrac(
      'fractionAddSub',
      `${a}/${denominator} + ${b}/${denominator} = ?`,
      (a + b) / denominator,
      'The denominators are equal, so add the numerators.'
    );
  }

  if (type === 2) {
    const denominator = pick([4, 5, 6, 7, 8, 9, 10, 12]);
    const a = randInt(2, denominator - 1);
    const b = randInt(1, a - 1);

    return qFrac(
      'fractionAddSub',
      `${a}/${denominator} − ${b}/${denominator} = ?`,
      (a - b) / denominator,
      'The denominators are equal, so subtract the numerators.'
    );
  }

  if (type === 3) {
    const denominator = pick([4, 5, 6, 8, 10, 12]);
    const numerator = randInt(1, denominator - 1);

    return qFrac(
      'fractionAddSub',
      `1 − ${numerator}/${denominator} = ?`,
      1 - numerator / denominator,
      `Write 1 as ${denominator}/${denominator}.`
    );
  }

  if (type === 4) {
    const [a, b, c, d] = pick([
      [1, 2, 1, 4],
      [1, 3, 1, 6],
      [1, 4, 3, 8],
      [2, 3, 1, 6],
      [2, 5, 1, 10]
    ]);

    return qFrac(
      'fractionAddSub',
      `${a}/${b} + ${c}/${d} = ?`,
      a / b + c / d,
      'Convert to a common denominator before adding.'
    );
  }

  if (type === 5) {
    const [a, b, c, d] = pick([
      [3, 4, 1, 2],
      [5, 6, 1, 3],
      [7, 8, 1, 4],
      [4, 5, 3, 10],
      [2, 3, 1, 6]
    ]);

    return qFrac(
      'fractionAddSub',
      `${a}/${b} − ${c}/${d} = ?`,
      a / b - c / d,
      'Convert to a common denominator before subtracting.'
    );
  }

  if (type === 6) {
    const [a, b] = pick([[1, 2], [1, 3], [1, 4], [2, 5], [3, 5]]);
    const whole = randInt(2, 4);

    return qFrac(
      'fractionAddSub',
      `${whole} − ${a}/${b} = ?`,
      whole - a / b,
      'Regroup one whole into fractional parts.'
    );
  }

  if (type === 7) {
    const [a, b, c, d] = pick([
      [1, 2, 1, 4],
      [2, 3, 1, 6],
      [3, 4, 1, 8],
      [2, 5, 3, 10]
    ]);

    return qFrac(
      'fractionAddSub',
      `1 ${a}/${b} + ${c}/${d} = ?`,
      1 + a / b + c / d,
      'Add the fractional parts, then include the whole number.'
    );
  }

  const [a, b, c, d] = pick([
    [2, 3, 1, 4],
    [3, 4, 1, 3],
    [2, 5, 1, 4],
    [5, 6, 1, 4]
  ]);

  return qFrac(
    'fractionAddSub',
    `${a}/${b} + ${c}/${d} = ?`,
    a / b + c / d,
    'Find the lowest common denominator, then add and simplify.'
  );
}


function y5GenBasicPercentages() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 3) : L === 'core' ? randInt(1, 8) : randInt(1, 10);

  if (type === 1) {
    const base = randInt(2, L === 'starter' ? 20 : 40) * 10;
    return q('basicPercentages', `10% of ${base} = ?`, base / 10, 'Divide by 10.');
  }

  if (type === 2) {
    const base = randInt(2, L === 'starter' ? 30 : 60) * 2;
    return q('basicPercentages', `50% of ${base} = ?`, base / 2, '50% means one half.');
  }

  if (type === 3) {
    const base = randInt(2, L === 'starter' ? 25 : 50) * 4;
    return q('basicPercentages', `25% of ${base} = ?`, base / 4, '25% means one quarter.');
  }

  if (type === 4) {
    const part = randInt(4, 40);
    return q('basicPercentages', `50% of a number is ${part}. The whole number is ?`, part * 2, 'If one half is known, double it to find the whole.');
  }

  if (type === 5) {
    const part = randInt(3, 25);
    return q('basicPercentages', `25% of a number is ${part}. The whole number is ?`, part * 4, '25% is one quarter, so multiply by 4.');
  }

  if (type === 6) {
    const base = randInt(2, 30) * 4;
    return q('basicPercentages', `75% of ${base} = ?`, base * 3 / 4, '75% means three quarters.');
  }

  if (type === 7) {
    const [numerator, denominator] = pick([[1,2],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5]]);
    return q('basicPercentages', `${numerator}/${denominator} = ?%`, numerator / denominator * 100, 'Convert the fraction to an equivalent fraction out of 100.');
  }

  if (type === 8) {
    const decimal = pick([0.1, 0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8]);
    return q('basicPercentages', `${fmt(decimal)} = ?%`, decimal * 100, 'Multiply the decimal by 100.');
  }

  if (type === 9) {
    const percent = pick([20, 40, 60, 80]);
    const base = randInt(2, 20) * 5;
    return q('basicPercentages', `${percent}% of ${base} = ?`, base * percent / 100, 'Use 10%, 20% or an equivalent fraction.');
  }

  const whole = pick([40, 60, 80, 100, 120, 160, 200]);
  const percent = pick([10, 20, 25, 50, 75]);
  const part = whole * percent / 100;
  return q('basicPercentages', `${part} is what percentage of ${whole}?`, percent, 'Compare the part with the whole using a familiar fraction.');
}

function y5ClockText(totalMinutes) {
  const minutesInDay = 24 * 60;
  const normalised = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay;
  const hour24 = Math.floor(normalised / 60);
  const minute = normalised % 60;
  const suffix = hour24 < 12 ? 'am' : 'pm';
  const hour12 = hour24 % 12 || 12;

  return `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`;
}


function y5GenTime() {
  const L = state.level;
  const type = L === 'starter'
    ? randInt(1, 4)
    : L === 'core'
      ? randInt(1, 7)
      : randInt(1, 9);

  if (type === 1) {
    const hours = randInt(2, 8);

    return q(
      'time',
      `${hours} hours = ? minutes`,
      hours * 60,
      'Each hour contains 60 minutes.'
    );
  }

  if (type === 2) {
    const halfHours = randInt(3, 12);
    const minutes = halfHours * 30;

    return q(
      'time',
      `${minutes} minutes = ? hours`,
      minutes / 60,
      'Divide the minutes by 60.'
    );
  }

  if (type === 3) {
    const startHour = randInt(8, 18);
    const startMinute = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    const duration = pick([10, 15, 20, 25, 30, 35, 40, 45]);
    const start = startHour * 60 + startMinute;
    const end = start + duration;

    return q(
      'time',
      `${y5ClockText(start)} plus ${duration} minutes. Enter 24-hour time as HHMM without a colon (for example 0730); a colon is also accepted.`,
      (Math.floor(end / 60) % 24) * 100 + end % 60,
      'Add the minutes and regroup 60 minutes as one hour.'
    );
  }

  if (type === 4) {
    const startHour = randInt(8, 16);
    const startMinute = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45]);
    const duration = pick([20, 25, 30, 35, 40, 45, 50, 55, 60]);
    const start = startHour * 60 + startMinute;
    const end = start + duration;

    return q(
      'time',
      `How many minutes from ${y5ClockText(start)} to ${y5ClockText(end)}?`,
      duration,
      'Count to the next hour, then add the remaining minutes.'
    );
  }

  if (type === 5) {
    const hour24 = randInt(13, 23);
    const minute = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);

    return q(
      'time',
      `${String(hour24).padStart(2, '0')}:${String(minute).padStart(2, '0')} in 12-hour time. Enter as HHMM without a colon (for example 0730); a colon is also accepted.`,
      (hour24 - 12) * 100 + minute,
      'Subtract 12 from an afternoon or evening hour.'
    );
  }

  if (type === 6) {
    const hour12 = randInt(1, 11);
    const minute = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);

    return q(
      'time',
      `${hour12}:${String(minute).padStart(2, '0')} pm in 24-hour time. Enter as HHMM without a colon (for example 0730); a colon is also accepted.`,
      (hour12 + 12) * 100 + minute,
      'Add 12 to the hour for a pm time, except 12 pm.'
    );
  }

  if (type === 7) {
    const startHour = randInt(7, 15);
    const startMinute = pick([5, 10, 15, 20, 25, 35, 40, 45, 50]);
    const duration = pick([65, 70, 75, 80, 85, 90, 95, 105]);
    const start = startHour * 60 + startMinute;
    const end = start + duration;

    return q(
      'time',
      `A lesson starts at ${y5ClockText(start)} and lasts ${duration} minutes. Enter 24-hour time as HHMM without a colon (for example 0730); a colon is also accepted.`,
      (Math.floor(end / 60) % 24) * 100 + end % 60,
      'Add one hour first, then add the remaining minutes.'
    );
  }

  if (type === 8) {
    const startHour = randInt(7, 14);
    const startMinute = pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    const duration = pick([70, 80, 90, 100, 110, 125]);
    const start = startHour * 60 + startMinute;
    const end = start + duration;

    return q(
      'time',
      `How many minutes from ${y5ClockText(start)} to ${y5ClockText(end)}?`,
      duration,
      'Break the interval into full hours and remaining minutes.'
    );
  }

  const hours = randInt(1, 5);
  const minutes = pick([10, 15, 20, 25, 30, 35, 40, 45, 50]);

  return q(
    'time',
    `${hours} hours ${minutes} minutes = ? minutes`,
    hours * 60 + minutes,
    'Convert the hours to minutes, then add the extra minutes.'
  );
}


function y5GenMeasurements() {
  const L = state.level;

  if (chance(L === 'starter' ? 0.22 : 0.28)) {
    const special = randInt(1, L === 'starter' ? 2 : 4);

    if (special === 1) {
      const centimetres = randInt(2, 40);
      return q('measurements', `${centimetres} cm = ? mm`, centimetres * 10, '1 cm = 10 mm.');
    }

    if (special === 2) {
      const centimetres = randInt(2, 40);
      return q('measurements', `${centimetres * 10} mm = ? cm`, centimetres, 'Divide millimetres by 10.');
    }

    if (special === 3) {
      const start = randInt(1, 12);
      const increase = randInt(3, 12);
      return q('measurements', `The temperature rises from ${start}°C to ${start + increase}°C. Increase = ?°C`, increase, 'Subtract the starting temperature from the final temperature.');
    }

    const start = -randInt(1, 8);
    const end = randInt(1, 10);
    return q('measurements', `The temperature rises from ${start}°C to ${end}°C. Increase = ?°C`, end - start, 'Count from the negative temperature to 0, then from 0 to the positive temperature.');
  }

  const type = L === 'starter'
    ? randInt(1, 5)
    : L === 'core'
      ? randInt(1, 8)
      : randInt(1, 18);

  if (type === 1) {
    const metres = randInt(2, L === 'starter' ? 20 : 80);

    return q('measurements', `${metres} m = ? cm`, metres * 100, '1 m = 100 cm.');
  }

  if (type === 2) {
    const kilometres = randInt(2, L === 'starter' ? 12 : 30);

    return q('measurements', `${kilometres} km = ? m`, kilometres * 1000, '1 km = 1000 m.');
  }

  if (type === 3) {
    const kilograms = randInt(2, L === 'starter' ? 12 : 30);

    return q('measurements', `${kilograms} kg = ? g`, kilograms * 1000, '1 kg = 1000 g.');
  }

  if (type === 4) {
    const litres = randInt(2, L === 'starter' ? 12 : 30);

    return q('measurements', `${litres} L = ? mL`, litres * 1000, '1 L = 1000 mL.');
  }

  if (type === 5) {
    const centimetres = randInt(2, 30) * 10;

    return q('measurements', `${centimetres} cm = ? m`, centimetres / 100, 'Divide centimetres by 100.');
  }

  if (type === 6) {
    const metres = randInt(12, 95) / 10;

    return q('measurements', `${fmt(metres)} m = ? cm`, metres * 100, 'Multiply metres by 100.');
  }

  if (type === 7) {
    const grams = pick([1250, 1500, 1750, 2250, 2500, 3250, 4500, 5750]);

    return q('measurements', `${grams} g = ? kg`, grams / 1000, 'Divide grams by 1000.');
  }

  if (type === 8) {
    const millilitres = pick([1250, 1500, 1750, 2250, 2500, 3250, 4500, 5750]);

    return q('measurements', `${millilitres} mL = ? L`, millilitres / 1000, 'Divide millilitres by 1000.');
  }

  if (type === 9) {
    const metres = randInt(1, 8);
    const centimetres = randInt(1, 9) * 10;

    return q(
      'measurements',
      `${metres} m ${centimetres} cm = ? cm`,
      metres * 100 + centimetres,
      'Convert the metres to centimetres, then add.'
    );
  }

  if (type === 10) {
    const litres = randInt(1, 5);
    const extra = pick([125, 250, 375, 500, 750]);

    return q(
      'measurements',
      `${litres} L + ${extra} mL = ? mL`,
      litres * 1000 + extra,
      'Convert litres to millilitres before adding.'
    );
  }

  if (type === 11) {
    const wholeMetres = randInt(1, 8);
    const extraCentimetres = pick([10, 20, 25, 40, 50, 60, 75, 80, 90]);
    const metres = wholeMetres + extraCentimetres / 100;

    return q(
      'measurements',
      `${fmt(metres)} m = ${wholeMetres} m + ? cm`,
      extraCentimetres,
      'The whole-number part is metres. Convert the decimal part to centimetres by multiplying by 100.'
    );
  }

  if (type === 12) {
    const wholeLitres = randInt(1, 8);
    const extraMillilitres = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);
    const litres = wholeLitres + extraMillilitres / 1000;

    return q(
      'measurements',
      `${fmt(litres)} L = ${wholeLitres} L + ? mL`,
      extraMillilitres,
      'The whole-number part is litres. Convert the decimal part to millilitres by multiplying by 1000.'
    );
  }

  if (type === 13) {
    const wholeKilograms = randInt(1, 8);
    const extraGrams = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);
    const kilograms = wholeKilograms + extraGrams / 1000;

    return q(
      'measurements',
      `${fmt(kilograms)} kg = ${wholeKilograms} kg + ? g`,
      extraGrams,
      'The whole-number part is kilograms. Convert the decimal part to grams by multiplying by 1000.'
    );
  }

  if (type === 14) {
    const wholeKilograms = randInt(1, 8);
    const extraGrams = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);
    const kilograms = wholeKilograms + extraGrams / 1000;

    return q(
      'measurements',
      `${fmt(kilograms)} kg = ? kg + ${extraGrams} g`,
      wholeKilograms,
      'The whole-number part of the decimal measurement gives the kilograms.'
    );
  }

  if (type === 15) {
    const wholeKilograms = randInt(1, 8);
    const extraGrams = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);

    return q(
      'measurements',
      `${wholeKilograms} kg ${extraGrams} g = ${wholeKilograms} kg + ? g`,
      extraGrams,
      'The mixed measurement already shows the number of grams.'
    );
  }

  if (type === 16) {
    const wholeKilograms = randInt(1, 8);
    const extraGrams = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);

    return q(
      'measurements',
      `${wholeKilograms} kg ${extraGrams} g = ? kg + ${extraGrams} g`,
      wholeKilograms,
      'The mixed measurement already shows the number of whole kilograms.'
    );
  }

  if (type === 17) {
    const wholeKilograms = randInt(1, 8);
    const extraGrams = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);

    return q(
      'measurements',
      `${wholeKilograms} kg + ${extraGrams} g = ? kg`,
      wholeKilograms + extraGrams / 1000,
      'Convert grams to kilograms by dividing by 1000, then add.'
    );
  }

  const wholeKilograms = randInt(1, 8);
  const extraGrams = pick([100, 125, 200, 250, 375, 500, 600, 750, 800, 900]);

  return q(
    'measurements',
    `${wholeKilograms} kg + ${extraGrams} g = ? g`,
    wholeKilograms * 1000 + extraGrams,
    'Convert kilograms to grams by multiplying by 1000, then add.'
  );
}


function y5GenPerimeterArea() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 10) : randInt(1, 12);

  if (type === 1) {
    const length = randInt(4, L === 'starter' ? 15 : 30);
    const width = randInt(2, Math.min(length - 1, L === 'starter' ? 10 : 20));
    return q('perimeterArea', `Rectangle ${length} cm by ${width} cm. Perimeter = ? cm`, 2 * (length + width), 'Perimeter = 2 × (length + width).');
  }

  if (type === 2) {
    const length = randInt(4, L === 'starter' ? 15 : 30);
    const width = randInt(2, Math.min(length - 1, L === 'starter' ? 10 : 20));
    return q('perimeterArea', `Rectangle ${length} cm by ${width} cm. Area = ? cm²`, length * width, 'Area = length × width.');
  }

  if (type === 3) {
    const side = randInt(3, L === 'starter' ? 15 : 30);
    return q('perimeterArea', `Square side ${side} cm. Perimeter = ? cm`, side * 4, 'A square has four equal sides.');
  }

  if (type === 4) {
    const side = randInt(3, L === 'starter' ? 15 : 25);
    return q('perimeterArea', `Square side ${side} cm. Area = ? cm²`, side * side, 'Area of a square = side × side.');
  }

  if (type === 5) {
    const cubesPerLayer = pick([6, 8, 10, 12, 15, 18, 20, 24]);
    const layers = randInt(2, L === 'starter' ? 5 : 8);
    return q('perimeterArea', `A box has ${cubesPerLayer} cubes in each layer and ${layers} layers. Total cubes = ?`, cubesPerLayer * layers, 'Multiply cubes per layer by the number of layers.');
  }

  if (type === 6) {
    const length = randInt(2, L === 'starter' ? 6 : 10);
    const width = randInt(2, L === 'starter' ? 5 : 8);
    const height = randInt(2, L === 'starter' ? 4 : 6);
    return q('perimeterArea', `A cuboid is ${length} cubes long, ${width} cubes wide and ${height} cubes high. Volume = ? cubes`, length * width * height, 'Volume = length × width × height.');
  }

  if (type === 7) {
    const side = randInt(4, 30);
    return q('perimeterArea', `A square has perimeter ${side * 4} cm. Side length = ? cm`, side, 'Divide the perimeter by 4.');
  }

  if (type === 8) {
    const length = randInt(5, 25);
    const width = randInt(3, 18);
    return q('perimeterArea', `A rectangle has area ${length * width} cm² and length ${length} cm. Width = ? cm`, width, 'Width = area ÷ length.');
  }

  if (type === 9) {
    const length = randInt(6, 30);
    const width = randInt(3, Math.min(20, length - 1));
    const perimeter = 2 * (length + width);
    return q('perimeterArea', `A rectangle has perimeter ${perimeter} cm and length ${length} cm. Width = ? cm`, width, 'Width = perimeter ÷ 2 − length.');
  }

  if (type === 10) {
    const side = randInt(4, 25);
    return q('perimeterArea', `A square has area ${side * side} cm². Side length = ? cm`, side, 'Find the number multiplied by itself to make the area.');
  }

  if (type === 11) {
    const length = randInt(2, 8);
    const width = randInt(2, 6);
    const height = randInt(2, 5);
    const volume = length * width * height;
    return q('perimeterArea', `A cuboid has volume ${volume} cm³, length ${length} cm and width ${width} cm. Height = ? cm`, height, 'Height = volume ÷ (length × width).');
  }

  const length = randInt(8, 25);
  const width = randInt(4, length - 2);
  const increase = randInt(2, 6);
  return q('perimeterArea', `A ${length} cm by ${width} cm rectangle has its length increased by ${increase} cm. New area = ? cm²`, (length + increase) * width, 'Find the new length, then multiply by the unchanged width.');
}

function y5GenSequences() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 10) : randInt(1, 12);

  if (type === 1) {
    const first = randInt(1, 30);
    const difference = randInt(2, L === 'starter' ? 8 : 15);
    return q('sequences', `${first}, ${first + difference}, ${first + 2 * difference}, ${first + 3 * difference}, ... next = ?`, first + 4 * difference, 'Add the same difference again.');
  }

  if (type === 2) {
    const first = randInt(40, 120);
    const difference = randInt(2, L === 'starter' ? 8 : 15);
    return q('sequences', `${first}, ${first - difference}, ${first - 2 * difference}, ${first - 3 * difference}, ... next = ?`, first - 4 * difference, 'Subtract the same difference again.');
  }

  if (type === 3) {
    const first = randInt(1, 25);
    const difference = randInt(2, 10);
    return q('sequences', `${first}, ${first + difference}, □, ${first + 3 * difference}, ${first + 4 * difference}. Missing term = ?`, first + 2 * difference, 'The difference between consecutive terms stays the same.');
  }

  if (type === 4) {
    const first = randInt(1, 8);
    const ratio = pick([2, 3]);
    return q('sequences', `${first}, ${first * ratio}, ${first * ratio ** 2}, ${first * ratio ** 3}, ... next = ?`, first * ratio ** 4, 'Multiply by the same number each time.');
  }

  if (type === 5) {
    const start = pick([6, 8, 10, 12]);
    const difference = pick([3, 4, 5]);
    return q('sequences', `${start}, ${start - difference}, ${start - 2 * difference}, ${start - 3 * difference}, ... next = ?`, start - 4 * difference, 'Continue subtracting through zero into negative numbers.');
  }

  if (type === 6) {
    const start = pick([-6, -5, -4, -3]);
    const increase = randInt(5, 10);
    return q('sequences', `Start at ${start} and add ${increase}. Answer = ?`, start + increase, 'Move right on the number line.');
  }

  if (type === 7) {
    const [first, difference] = pick([[3,1.5],[2.5,1.5],[1.2,0.5],[4.5,1.5]]);
    return q('sequences', `${fmt(first)}, ${fmt(first + difference)}, ${fmt(first + 2 * difference)}, ${fmt(first + 3 * difference)}, ... next = ?`, round2(first + 4 * difference), 'Add the same decimal difference again.');
  }

  if (type === 8) {
    const [first, difference] = pick([[8.2,0.5],[7.5,1.5],[9.4,0.5],[12.5,2.5]]);
    return q('sequences', `${fmt(first)}, ${fmt(first - difference)}, ${fmt(first - 2 * difference)}, ${fmt(first - 3 * difference)}, ... next = ?`, round2(first - 4 * difference), 'Subtract the same decimal difference again.');
  }

  if (type === 9) {
    const first = randInt(1, 20);
    const difference = randInt(2, 10);
    const termNumber = randInt(5, 12);
    return q('sequences', `A sequence starts at ${first} and increases by ${difference}. Term ${termNumber} = ?`, first + (termNumber - 1) * difference, 'There are term number minus one jumps from the first term.');
  }

  if (type === 10) {
    const [first, difference] = pick([[2.5,1.5],[1.5,0.5],[3.5,2.5]]);
    const termNumber = randInt(4, 8);
    return q('sequences', `A sequence starts at ${fmt(first)} and increases by ${fmt(difference)}. Term ${termNumber} = ?`, round2(first + (termNumber - 1) * difference), 'Make term number minus one equal jumps.');
  }

  if (type === 11) {
    const input = randInt(2, 15);
    const multiply = randInt(2, 5);
    const add = randInt(1, 10);
    return q('sequences', `Rule: multiply by ${multiply}, then add ${add}. Input ${input} gives output ?`, input * multiply + add, 'Follow the operations in the stated order.');
  }

  const first = randInt(2, 12);
  const difference = randInt(3, 10);
  const termNumber = randInt(8, 15);
  return q('sequences', `Term rule: ${difference}n + ${first - difference}. Find term ${termNumber}.`, difference * termNumber + first - difference, 'Substitute the term number for n.');
}

function y5GenFractionWordProblems() {
  const L = state.level;
  const type = L === 'starter' ? randInt(1, 5) : L === 'core' ? randInt(1, 7) : randInt(1, 10);

  if (type === 1) {
    const [a, b, c] = pick([[2, 5, 1], [3, 8, 2], [1, 6, 4], [4, 10, 3]]);
    return qFrac('fractionWordProblems', `Mia drank ${a}/${b} L of water in the morning and ${c}/${b} L in the afternoon. How much did she drink altogether?`, (a + c) / b, 'Add the numerators because the denominators are the same.');
  }

  if (type === 2) {
    const [whole, used, d] = pick([[7, 3, 8], [9, 4, 10], [5, 2, 6], [11, 5, 12]]);
    return qFrac('fractionWordProblems', `A ribbon was ${whole}/${d} m long. Ella used ${used}/${d} m. How much ribbon remained?`, (whole - used) / d, 'Subtract the used part from the starting length.');
  }

  if (type === 3) {
    const [a, b, c, d] = pick([[1, 2, 1, 4], [1, 3, 1, 6], [2, 5, 1, 10], [3, 4, 1, 8]]);
    return qFrac('fractionWordProblems', `Ben walked ${a}/${b} km before lunch and ${c}/${d} km after lunch. How far did he walk altogether?`, a / b + c / d, 'Use a common denominator, then add.');
  }

  if (type === 4) {
    const [a, b, c, d] = pick([[5, 6, 1, 3], [7, 8, 1, 4], [4, 5, 3, 10], [3, 4, 1, 2]]);
    return qFrac('fractionWordProblems', `A bottle contained ${a}/${b} L of juice. After ${c}/${d} L was used, how much remained?`, a / b - c / d, 'Use a common denominator, then subtract.');
  }

  if (type === 5) {
    const [read1, read2, d] = pick([[2, 3, 8], [1, 4, 6], [3, 2, 10], [2, 5, 12]]);
    return qFrac('fractionWordProblems', `Noah read ${read1}/${d} of a book on Monday and ${read2}/${d} on Tuesday. What fraction of the book did he read in total?`, (read1 + read2) / d, 'Add the two fractions of the same whole.');
  }

  if (type === 6) {
    const [start, used1, used2, d] = pick([[7, 2, 1, 8], [11, 3, 2, 12], [9, 2, 3, 10], [5, 1, 2, 6]]);
    return qFrac('fractionWordProblems', `A container held ${start}/${d} L. First ${used1}/${d} L was used, then another ${used2}/${d} L. How much remained?`, (start - used1 - used2) / d, 'Subtract both amounts from the starting amount.');
  }

  if (type === 7) {
    const [start, d, used1, d1, used2, d2] = pick([[3, 2, 1, 4, 1, 2], [7, 4, 1, 2, 1, 4], [5, 3, 1, 3, 2, 3]]);
    return qFrac('fractionWordProblems', `A jug contained ${start}/${d} L. Sam used ${used1}/${d1} L and then ${used2}/${d2} L. How much remained?`, start / d - used1 / d1 - used2 / d2, 'Use a common denominator and subtract the two amounts.');
  }

  if (type === 8) {
    const [start, d, used1, d1, added, d2] = pick([[3, 4, 1, 4, 1, 8], [5, 6, 1, 3, 1, 6], [7, 8, 1, 2, 1, 4]]);
    return qFrac('fractionWordProblems', `A bowl contained ${start}/${d} kg of fruit. ${used1}/${d1} kg was used, then ${added}/${d2} kg was added. How much fruit is in the bowl now?`, start / d - used1 / d1 + added / d2, 'Subtract the used amount, then add the new amount.');
  }

  if (type === 9) {
    const [full, first, second] = pick([[12, 4, 3], [10, 2, 3], [8, 2, 1], [6, 1, 2]]);
    return qFrac('fractionWordProblems', `A 1 m strip was used in two pieces: ${first}/${full} m and ${second}/${full} m. How much strip remained?`, 1 - first / full - second / full, 'Start with one whole and subtract both pieces.');
  }

  const [a, b, c, d, e, f] = pick([[1, 2, 1, 4, 1, 8], [2, 3, 1, 6, 1, 3], [3, 4, 1, 8, 1, 4]]);
  return qFrac('fractionWordProblems', `A trail is ${a}/${b} km long. Ava walked ${c}/${d} km, rested, then walked another ${e}/${f} km. How much farther must she walk?`, a / b - c / d - e / f, 'Subtract both distances walked from the total trail length.');
}


function y5GenAnglesLinePoint() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 10) : randInt(1, 12);

  if (t === 1) {
    const angle = pick([15,20,25,30,35,40,45,50,55,60,65,70,75]);
    return q('anglesLinePoint', `An angle of ${angle}° and another angle make a right angle. The other angle is ?°`, 90 - angle, 'Complementary angles total 90°.');
  }

  if (t === 2) {
    const angle = pick([25,35,45,55,65,75,85,95,105,115,125,135,145]);
    return q('anglesLinePoint', `One angle on a straight line is ${angle}°. The other angle is ?°`, 180 - angle, 'Angles on a straight line total 180°.');
  }

  if (t === 3) {
    const angle = pick([35,45,55,65,75,85,105,115,125,135,145]);
    return q('anglesLinePoint', `One of two vertically opposite angles is ${angle}°. The opposite angle is ?°`, angle, 'Vertically opposite angles are equal.');
  }

  if (t === 4) {
    const [angle, answer] = pick([[35,1],[65,1],[89,1],[90,2],[105,3],[135,3],[175,3]]);
    return q('anglesLinePoint', `An angle is ${angle}°. Enter 1 for acute, 2 for right, or 3 for obtuse.`, answer, 'Acute is less than 90°, right is 90°, and obtuse is between 90° and 180°.');
  }

  if (t === 5) {
    const [angle, answer] = pick([[180,1],[200,2],[240,2],[270,2],[315,2]]);
    return q('anglesLinePoint', `An angle is ${angle}°. Enter 1 for straight or 2 for reflex.`, answer, 'A straight angle is 180°. A reflex angle is greater than 180° and less than 360°.');
  }

  if (t === 6) {
    const angle = pick([15,20,25,30,35,40,45,50,55,60,65,70,75]);
    return q('anglesLinePoint', `A right angle is split into ${angle}° and ?°. Find the missing angle.`, 90 - angle, 'A right angle totals 90°.');
  }

  if (t === 7) {
    const [a, b, answer] = pick([[90,120,150],[80,130,150],[100,140,120],[60,160,140],[110,120,130]]);
    return q('anglesLinePoint', `Angles around a point are ${a}°, ${b}° and ?°. Find the missing angle.`, answer, 'Angles around a point total 360°.');
  }

  if (t === 8) {
    const hour = pick([1,2,3,4,5,7,8,9,10,11]);
    const difference = Math.min(hour, 12 - hour);
    return q('anglesLinePoint', `At ${hour}:00, the smaller angle between the clock hands is ?°`, difference * 30, 'Each hour mark represents 30°.');
  }

  if (t === 9) {
    const [a, b, answer] = pick([[30,60,90],[40,70,70],[50,80,50],[25,65,90],[45,55,80]]);
    return q('anglesLinePoint', `Three adjacent angles on a straight line are ${a}°, ${b}° and ?°. Find the missing angle.`, answer, 'The three angles total 180°.');
  }

  if (t === 10) {
    const known = pick([80,100,120,140,160]);
    return q('anglesLinePoint', `Two equal angles and an angle of ${known}° meet at a point. Each equal angle is ?°`, (360 - known) / 2, 'Subtract from 360°, then divide the remainder by 2.');
  }

  if (t === 11) {
    const angle = pick([190,210,225,250,300]);
    return q('anglesLinePoint', `How many degrees more than a straight angle is ${angle}°?`, angle - 180, 'Subtract 180° from the reflex angle.');
  }

  const [first, second] = pick([[40,50],[50,60],[60,70],[70,80],[80,60]]);
  return q('anglesLinePoint', `A full turn is split into ${first}°, ${second}°, 90° and one missing angle. The missing angle is ?°`, 360 - first - second - 90, 'Subtract all known angles from 360°.');
}

function y5GenCommutativeAssociative(forceRecognition = null) {
  const L = state.level;
  const recognition = forceRecognition === null ? randInt(1, 5) === 1 : forceRecognition;

  if (recognition) {
    const r = randInt(1, 4);
    if (r === 1) {
      const a = randInt(10, 60), b = randInt(10, 60);
      return q('mentalStrategies', `${a} + ${b} = ${b} + ${a}. Which property is shown? Enter 1=Commutative, 2=Associative.`, 1, 'Commutative changes the order of the addends.');
    }
    if (r === 2) {
      const a = randInt(2, 12), b = randInt(2, 12);
      return q('mentalStrategies', `${a} × ${b} = ${b} × ${a}. Which property is shown? Enter 1=Commutative, 2=Associative.`, 1, 'Commutative changes the order of the factors.');
    }
    if (r === 3) {
      const a = randInt(3, 15), b = randInt(3, 15), c = randInt(3, 15);
      return q('mentalStrategies', `(${a} + ${b}) + ${c} = ${a} + (${b} + ${c}). Which property is shown? Enter 1=Commutative, 2=Associative.`, 2, 'Associative changes the grouping, not the order.');
    }
    const a = randInt(2, 8), b = randInt(2, 8), c = randInt(2, 8);
    return q('mentalStrategies', `(${a} × ${b}) × ${c} = ${a} × (${b} × ${c}). Which property is shown? Enter 1=Commutative, 2=Associative.`, 2, 'Associative changes the grouping, not the order.');
  }

  const r = randInt(1, 8);
  if (r <= 2) {
    const a = pick([23, 36, 47, 58, 64, 72]), c = 100 - a;
    const b = L === 'starter' ? randInt(5, 30) : randInt(20, 80);
    return q('mentalStrategies', `${a} + ${b} + ${c} = ?`, a + b + c, `Reorder and regroup: (${a} + ${c}) + ${b} = 100 + ${b}.`);
  }
  if (r <= 4) {
    const a = pick([16, 24, 32, 45, 55, 68, 76, 84]), c = 100 - a;
    const b = pick([10, 20, 30, 40, 50]), d = 100 - b;
    return q('mentalStrategies', `${a} + ${b} + ${c} + ${d} = ?`, 200, `Pair numbers that make 100: (${a} + ${c}) + (${b} + ${d}).`);
  }
  if (r <= 6) {
    const middle = L === 'starter' ? randInt(2, 9) : randInt(4, 16);
    return q('mentalStrategies', `4 × ${middle} × 25 = ?`, middle * 100, `Reorder and regroup: (4 × 25) × ${middle} = 100 × ${middle}.`);
  }
  const middle = L === 'starter' ? randInt(2, 10) : randInt(3, 20);
  return q('mentalStrategies', `2 × ${middle} × 50 = ?`, middle * 100, `Reorder and regroup: (2 × 50) × ${middle} = 100 × ${middle}.`);
}

function y5GenMentalStrategies() {
  const strategyRoll = randInt(1, 10);
  if (strategyRoll <= 2) return y5GenCommutativeAssociative(true);   // ~20% property recognition
  if (strategyRoll <= 5) return y5GenCommutativeAssociative(false);  // ~30% practical regrouping
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 6) : randInt(1, 8);

  if (t === 1) {
    const n = randInt(1, 12) * 4;
    return q('mentalStrategies', `${n} × 25 = ?`, n * 25, 'A group of four 25s makes 100.');
  }
  if (t === 2) {
    const n = randInt(2, 20);
    return q('mentalStrategies', `${n} × 50 = ?`, n * 50, 'Multiply by 100, then halve.');
  }
  if (t === 3) {
    const answer = randInt(4, 30);
    return q('mentalStrategies', `${answer * 5} ÷ 5 = ?`, answer, 'Dividing by 5 is the inverse of multiplying by 5.');
  }
  if (t === 4) {
    const answer = randInt(2, 20);
    return q('mentalStrategies', `${answer * 25} ÷ 25 = ?`, answer, 'Use groups of 25.');
  }
  if (t === 5) {
    const n = randInt(4, 40);
    return q('mentalStrategies', `${n} × 99 = ?`, n * 99, 'Multiply by 100, then subtract the number once.');
  }
  if (t === 6) {
    const n = randInt(15, 85);
    return q('mentalStrategies', `${n} + 99 = ?`, n + 99, 'Add 100, then subtract 1.');
  }
  if (t === 7) {
    const n = randInt(5, 40) * 4;
    return q('mentalStrategies', `Quarter of ${n} = ?`, n / 4, 'Divide by 2 twice.');
  }
  const n = randInt(30, 99);
  return q('mentalStrategies', `${n} − 29 = ?`, n - 29, 'Subtract 30, then add 1.');
}

function y5Money(cents) {
  return (cents / 100).toFixed(2);
}

function y5GenMoneyChange() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 6) : randInt(1, 8);

  if (t === 1) {
    const [a, b] = pick([[225,275],[350,450],[475,525],[625,375],[740,260],[875,125]]);
    return q('moneyChange', `An item costs $${y5Money(a)} and another costs $${y5Money(b)}. Total = $?`, (a + b) / 100, 'Add the two prices.');
  }

  if (t === 2) {
    const pay = pick([1000, 2000, 5000]);
    const cost = pick(pay === 1000 ? [250,375,450,625,750,875] : pay === 2000 ? [650,875,1050,1250,1450,1750] : [1250,1750,2250,2750,3250,3750]);
    return q('moneyChange', `You pay $${y5Money(pay)} for something costing $${y5Money(cost)}. Change = $?`, (pay - cost) / 100, 'Subtract the cost from the amount paid.');
  }

  if (t === 3) {
    const quantity = randInt(2, 8);
    const unit = pick([125,150,200,250,300,350]);
    return q('moneyChange', `${quantity} items cost $${y5Money(unit)} each. Total = $?`, quantity * unit / 100, 'Multiply quantity by unit price.');
  }

  if (t === 4) {
    const quantity = randInt(2, 8);
    const unit = pick([150,200,250,300,400,500]);
    return q('moneyChange', `${quantity} identical items cost $${y5Money(quantity * unit)}. Cost per item = $?`, unit / 100, 'Divide total cost by the number of items.');
  }

  if (t === 5) {
    const [a, b] = pick([[240,360],[275,425],[350,650],[475,525],[625,875]]);
    return q('moneyChange', `How much more is $${y5Money(Math.max(a, b))} than $${y5Money(Math.min(a, b))}?`, Math.abs(a - b) / 100, 'Subtract the smaller price from the larger price.');
  }

  if (t === 6) {
    const [a, b] = pick([[275,225],[340,160],[425,575],[650,350]]);
    const pay = pick([1000, 2000]);
    const total = a + b;
    const actualPay = pay >= total ? pay : 2000;
    return q('moneyChange', `Items cost $${y5Money(a)} and $${y5Money(b)}. You pay $${y5Money(actualPay)}. Change = $?`, (actualPay - total) / 100, 'Add the prices, then subtract from the amount paid.');
  }

  if (t === 7) {
    const quantity = randInt(2, 5);
    const unit = pick([150,200,250,300]);
    const extra = pick([100,150,200,250]);
    return q('moneyChange', `${quantity} notebooks cost $${y5Money(unit)} each and a pen costs $${y5Money(extra)}. Total = $?`, (quantity * unit + extra) / 100, 'Find the notebook cost, then add the pen.');
  }

  const people = randInt(2, 6);
  const each = pick([250,300,400,500,600]);
  return q('moneyChange', `A bill of $${y5Money(people * each)} is shared equally by ${people} people. Each pays $?`, each / 100, 'Divide the total bill equally.');
}

function y5GenCalendarDates() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 6) : randInt(1, 8);

  if (t === 1) {
    const weeks = randInt(2, 10);
    return q('calendarDates', `${weeks} weeks = ? days`, weeks * 7, 'Multiply the number of weeks by 7.');
  }

  if (t === 2) {
    const monthDays = pick([28,30,31]);
    const date = randInt(8, monthDays - 4);
    return q('calendarDates', `A month has ${monthDays} days. How many days remain after day ${date}?`, monthDays - date, 'Subtract the date from the month length.');
  }

  if (t === 3) {
    const start = randInt(1, 18);
    const gap = randInt(4, 12);
    return q('calendarDates', `How many days are there from day ${start} to day ${start + gap}?`, gap, 'Subtract the earlier date from the later date.');
  }

  if (t === 4) {
    const weeks = randInt(3, 12);
    return q('calendarDates', `A club meets once every week for ${weeks} weeks. How many meetings are held?`, weeks, 'There is one meeting per week.');
  }

  if (t === 5) {
    const startCode = randInt(1, 7);
    const add = randInt(8, 30);
    const answer = ((startCode - 1 + add) % 7) + 1;
    return q('calendarDates', `Today is weekday ${startCode}. What weekday number is it ${add} days later? Use 1=Monday, ..., 7=Sunday.`, answer, 'Use the repeating 7-day cycle.');
  }

  if (t === 6) {
    const [first, second] = pick([[30,31],[31,30],[31,31],[28,31]]);
    return q('calendarDates', `Two consecutive months have ${first} days and ${second} days. Total days = ?`, first + second, 'Add the days in the two months.');
  }

  if (t === 7) {
    const firstMonthDays = pick([30, 31]);
    const start = firstMonthDays - randInt(2, 6);
    const end = randInt(2, 8);
    return q('calendarDates', `A trip starts at the end of day ${start} of a ${firstMonthDays}-day month and ends at the end of day ${end} of the next month. How many days does the trip last?`, firstMonthDays - start + end, 'Count the remaining days in the first month, then add the days in the next month.');
  }

  const weeks = randInt(2, 8);
  const extraDays = randInt(1, 6);
  return q('calendarDates', `${weeks} weeks and ${extraDays} days = ? days`, weeks * 7 + extraDays, 'Convert weeks to days, then add the extra days.');
}

function y5GenRemaindersPatterns() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 6) : randInt(1, 8);

  if (t === 1) {
    const divisor = randInt(3, 9);
    const quotient = randInt(4, 12);
    const remainder = randInt(1, divisor - 1);
    return q('remaindersPatterns', `Remainder when ${divisor * quotient + remainder} is divided by ${divisor} = ?`, remainder, 'Find the largest multiple of the divisor below the number.');
  }
  if (t === 2) {
    const group = randInt(3, 8);
    const full = randInt(4, 10);
    const left = randInt(1, group - 1);
    return q('remaindersPatterns', `${group * full + left} students form teams of ${group}. How many students are left over?`, left, 'Make as many full teams as possible.');
  }
  if (t === 3) {
    const group = randInt(3, 9);
    const full = randInt(4, 12);
    const left = randInt(1, group - 1);
    return q('remaindersPatterns', `${group * full + left} objects are packed in groups of ${group}. How many full groups are made?`, full, 'Ignore the leftover objects and count full groups.');
  }
  if (t === 4) {
    const divisor = randInt(3, 10);
    const quotient = randInt(4, 12);
    const remainder = randInt(1, divisor - 1);
    return q('remaindersPatterns', `Smallest number to add to ${divisor * quotient + remainder} to make it divisible by ${divisor} = ?`, divisor - remainder, 'Add enough to reach the next multiple.');
  }
  if (t === 5) {
    const cycle = pick([[2, 5, 8], [1, 4, 7, 10], [3, 6, 9, 12], [2, 4, 6, 8]]);
    const position = randInt(8, 30);
    return q('remaindersPatterns', `The pattern ${cycle.join(', ')} repeats. Term ${position} = ?`, cycle[(position - 1) % cycle.length], 'Use the remainder after dividing the position by the cycle length.');
  }
  if (t === 6) {
    const divisor = randInt(3, 10);
    const quotient = randInt(5, 14);
    const remainder = randInt(1, divisor - 1);
    return q('remaindersPatterns', `Smallest number to subtract from ${divisor * quotient + remainder} to make it divisible by ${divisor} = ?`, remainder, 'Subtract the remainder.');
  }
  if (t === 7) {
    const capacity = randInt(4, 9);
    const full = randInt(4, 10);
    const extra = randInt(1, capacity - 1);
    return q('remaindersPatterns', `A box holds ${capacity} items. How many boxes are needed for ${capacity * full + extra} items?`, full + 1, 'The leftover items need one more box.');
  }
  const divisor = randInt(3, 9);
  const target = divisor * randInt(6, 15);
  const amount = target - randInt(1, divisor - 1);
  return q('remaindersPatterns', `What is the next multiple of ${divisor} after ${amount}?`, target, 'Count forward to the next multiple.');
}

/* ===== YEAR 5 FINAL CURRICULUM ADDITIONS ===== */

function y5GenProbability() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 10) : randInt(1, 12);

  if (t === 1) return qFrac('probability', 'A fair coin is tossed. P(tails) = ?', 1 / 2, 'A fair coin has two equally likely outcomes.');

  if (t === 2) {
    const [eventText, answer] = pick([
      ['rolling a 7 on a normal six-sided die', 1],
      ['rolling an even number on a fair six-sided die', 3],
      ['rolling a number less than 6 on a fair six-sided die', 4],
      ['the sun rising tomorrow', 5],
      ['choosing a red counter from a bag with 1 red and 9 blue counters', 2]
    ]);
    return q('probability', `The event “${eventText}” is: 1=impossible, 2=unlikely, 3=even chance, 4=likely, 5=certain.`, answer, 'Think about how many favourable outcomes there are.');
  }

  if (t === 3) return q('probability', 'Which probability represents an even chance? Enter 1 for 0, 2 for 0.5, or 3 for 1.', 2, 'An even chance is one half.');

  if (t === 4) {
    const heads = randInt(6, 16);
    const total = 20;
    return q('probability', `A coin was tossed ${total} times and landed heads ${heads} times. How many tails were recorded?`, total - heads, 'Heads and tails counts add to the total number of tosses.');
  }

  if (t === 5) {
    const favourable = pick([1,2,3,4,5]);
    return qFrac('probability', `A fair six-sided die is rolled. ${favourable} faces are marked. P(marked) = ?`, favourable / 6, 'Marked faces ÷ 6 total faces.');
  }

  if (t === 6) {
    const red = randInt(1,5);
    const blue = randInt(1,5);
    return qFrac('probability', `A bag has ${red} red and ${blue} blue counters. P(red) = ?`, red / (red + blue), 'Use red counters ÷ total counters.');
  }

  if (t === 7) {
    const total = pick([8,10,12]);
    const shaded = randInt(1, total - 1);
    return qFrac('probability', `A fair spinner has ${total} equal sections and ${shaded} shaded. P(shaded) = ?`, shaded / total, 'Use shaded sections ÷ total sections.');
  }

  if (t === 8) return qFrac('probability', 'A fair six-sided die is rolled. P(rolling a number greater than 4) = ?', 1 / 3, 'The favourable faces are 5 and 6.');

  if (t === 9) {
    const p = pick([1/4,1/3,1/2,2/3,3/4]);
    return qFrac('probability', `P(A) = ${toFraction(p)}. P(not A) = ?`, 1 - p, 'Complementary probabilities add to 1.');
  }

  if (t === 10) return q('probability', 'A fair coin is tossed twice. How many possible outcomes are there?', 4, 'The outcomes are HH, HT, TH and TT.');
  if (t === 11) return qFrac('probability', 'A fair coin is tossed twice. P(exactly one head) = ?', 1 / 2, 'The favourable outcomes are HT and TH.');
  return qFrac('probability', 'A fair six-sided die is rolled. P(not rolling a 6) = ?', 5 / 6, 'Five of the six faces are not 6.');
}

function y5GenNumberBalance() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 4) : L === 'core' ? randInt(1, 7) : randInt(1, 9);

  if (t === 1) { const a = randInt(20,200), x = randInt(10,100); return q('numberBalance', `${a} + ? = ${a + x}`, x, 'Subtract the known addend.'); }
  if (t === 2) { const a = randInt(100,500), x = randInt(20,Math.min(200,a-10)); return q('numberBalance', `${a} − ? = ${a - x}`, x, 'Find the difference.'); }
  if (t === 3) { const a = randInt(2,12), b = randInt(2,12), c = pick([2,3,4,5,6]); const total = a*b; if(total%c!==0) return y5GenNumberBalance(); return q('numberBalance', `${a} × ${b} = ${c} × ?`, total/c, 'Both products must be equal.'); }
  if (t === 4) { const divisor = pick([2,4,5,8,10]), answer = randInt(3,20); return q('numberBalance', `? ÷ ${divisor} = ${answer}`, divisor*answer, 'Multiply to undo division.'); }
  if (t === 5) { const n = pick([60,80,100,120,160,200]), divisor = pick([2,4,5,10]); return q('numberBalance', `${n} ÷ ? = ${n/divisor}`, divisor, 'Use the related multiplication fact.'); }
  if (t === 6) { const a=randInt(20,80), b=randInt(10,40), correct=chance(.5); const shown=a+b+(correct?0:pick([-10,-1,1,10])); return q('numberBalance', `Is ${a} + ${b} = ${shown}? Enter 1 for True or 0 for False.`, correct?1:0, 'Calculate and compare.'); }
  if (t === 7) { const a=randInt(10,50), b=randInt(10,50), c=randInt(5,a+b-5); return q('numberBalance', `${a} + ${b} = ${c} + ?`, a+b-c, 'Keep both sides balanced.'); }
  if (t === 8) { const a=randInt(2,9), b=randInt(2,9), left=a*b, right=left+pick([-a,a]); return q('numberBalance', `Is ${a} × ${b} > ${right}? Enter 1 for True or 0 for False.`, left>right?1:0, 'Calculate the product, then compare.'); }
  const a=pick([3,4,5,6,8]), b=randInt(3,12), c=randInt(1,b-1); return q('numberBalance', `${a} × ${b} = ${a} × ${c} + ?`, a*(b-c), 'Split the multiplication into two parts.');
}

function y5GenShapesSymmetry() {
  const L = state.level;
  const t = L === 'starter' ? randInt(1, 7) : L === 'core' ? randInt(1, 12) : randInt(1, 15);

  if (t === 1) return q('shapesSymmetry', 'How many faces does a cube have?', 6, 'A cube has six square faces.');
  if (t === 2) return q('shapesSymmetry', 'How many edges does a cube have?', 12, 'Count 4 top, 4 bottom and 4 vertical edges.');
  if (t === 3) return q('shapesSymmetry', 'How many vertices does a cube have?', 8, 'A cube has eight corners.');
  if (t === 4) return q('shapesSymmetry', 'How many faces does a rectangular prism (cuboid) have?', 6, 'A rectangular prism has six rectangular faces.');
  if (t === 5) return q('shapesSymmetry', 'Lines that meet at 90° are called: enter 1 for parallel or 2 for perpendicular.', 2, 'Perpendicular lines meet at a right angle.');
  if (t === 6) return q('shapesSymmetry', 'Lines that stay the same distance apart are called: enter 1 for parallel or 2 for perpendicular.', 1, 'Parallel lines never meet.');
  if (t === 7) return q('shapesSymmetry', 'A polygon has all sides and all angles equal. Enter 1 for regular or 2 for irregular.', 1, 'A regular polygon has equal sides and equal angles.');
  if (t === 8) return q('shapesSymmetry', 'How many lines of symmetry does a regular hexagon have?', 6, 'A regular hexagon has six symmetry axes.');
  if (t === 9) return q('shapesSymmetry', 'How many faces does a triangular prism have?', 5, 'It has two triangular faces and three rectangular faces.');
  if (t === 10) return q('shapesSymmetry', 'How many vertices does a triangular prism have?', 6, 'Each triangular end has three vertices.');
  if (t === 11) return q('shapesSymmetry', 'How many edges does a triangular prism have?', 9, 'There are three edges on each triangular end and three joining edges.');
  if (t === 12) return q('shapesSymmetry', 'A quadrilateral has four equal sides and four right angles. Enter 1 for square, 2 for rhombus, or 3 for rectangle.', 1, 'A square has four equal sides and four right angles.');
  if (t === 13) return q('shapesSymmetry', 'A quadrilateral has four equal sides but does not need four right angles. Enter 1 for square, 2 for rhombus, or 3 for rectangle.', 2, 'A rhombus has four equal sides.');
  if (t === 14) return q('shapesSymmetry', 'What is the order of rotational symmetry of a non-square rectangle?', 2, 'A rectangle matches itself twice in one full turn.');
  return q('shapesSymmetry', 'A solid has two identical parallel ends and flat side faces. Enter 1 for prism or 2 for pyramid.', 1, 'A prism has two identical parallel ends.');
}

YEAR_BANKS[5] = {
  "probability": y5GenProbability,
  "numberBalance": y5GenNumberBalance,
  "shapesSymmetry": y5GenShapesSymmetry,

  "mentalStrategies": y5GenMentalStrategies,
  "moneyChange": y5GenMoneyChange,
  "calendarDates": y5GenCalendarDates,
  "remaindersPatterns": y5GenRemaindersPatterns,
  "anglesLinePoint": y5GenAnglesLinePoint,
  "addition": y5GenAdd,
  "subtraction": y5GenSub,
  "multiplication": y5GenMul,
  "twoDigitMultiplication": y5GenTwoDigitMultiplication,
  "division": y5GenDiv,
  "placevalue": y5GenPlaceValue,
  "doubles": y5GenDoubles,
  "fractions": y5GenFractions,
  "decimals": y5GenDecimals,
  "decimalShift": y5GenDecimalShift,
  "rounding": y5GenPlaceValueRounding,
  "missing": y5GenMissingNumbers,
  "factorsDivisibility": y5GenFactorsDivisibility,
  "fractionCompare": y5GenFractionCompare,
  "fractionAddSub": y5GenFractionAddSub,
    fractionWordProblems: y5GenFractionWordProblems,
  "basicPercentages": y5GenBasicPercentages,
  "time": y5GenTime,
  "measurements": y5GenMeasurements,
  "perimeterArea": y5GenPerimeterArea,
  "sequences": y5GenSequences
};
