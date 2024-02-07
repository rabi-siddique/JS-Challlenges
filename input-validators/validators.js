function checkStringNotEmpty(input) {
  if (typeof input !== 'string') {
    return { error: true, message: 'Input must be a string' };
  }

  if (input.trim().length === 0) {
    return { error: true, message: 'Input cannot be an empty string' };
  }

  return { error: false, message: 'All clear' };
}

function checkNumeric(input) {
  if (isNaN(parseInt(input))) {
    return { error: true, message: 'Input must be a number' };
  }

  return { error: false, message: 'All clear' };
}

function checkMaxValue(input, maxValue = 20) {
  if (parseInt(input) > maxValue) {
    return {
      error: true,
      message: `Input must be less than or equal to ${maxValue}`,
    };
  }
  return { error: false, message: 'All clear' };
}

function checkMinValue(input, minValue = 10) {
  if (parseInt(input) < minValue) {
    return {
      error: true,
      message: `Input must be greater than or equal to ${minValue}`,
    };
  }
  return { error: false, message: 'All clear' };
}

function checkMaxLength(input, maxLength = 20) {
  if (input.length > maxLength) {
    return {
      error: true,
      message: `Input length must be less than or equal to ${maxLength}`,
    };
  }
  return { error: false, message: 'All clear' };
}

function checkMinLength(input, minLength = 10) {
  if (input.length < minLength) {
    return {
      error: true,
      message: `Input length must be greater than or equal to ${minLength}`,
    };
  }
  return { error: false, message: 'All clear' };
}

function checkMatchesRegex(input, regex) {
  if (regex.test(input)) {
    return { error: false, message: 'All clear' };
  }
  return { error: true, message: 'Input did not match the required pattern' };
}

function checkValidDate(dateString) {
  const timestamp = Date.parse(dateString);

  if (isNaN(timestamp)) {
    return { error: true, message: 'Invalid date format' };
  }

  return { error: false, message: 'All clear' };
}

function checkLaterThan(input, comparisonDate) {
  if (Date.parse(input) >= Date.parse(comparisonDate)) {
    return { error: false, message: 'All clear' };
  }
  return {
    error: true,
    message: 'Input must be later than the comparison date',
  };
}

function checkEarlierThan(input, comparisonDate) {
  if (Date.parse(input) <= Date.parse(comparisonDate)) {
    return { error: false, message: 'All clear' };
  }
  return {
    error: true,
    message: 'Input must be earlier than the comparison date',
  };
}


// Test checkStringNotEmpty
console.log(checkStringNotEmpty('Hello')); 
console.log(checkStringNotEmpty('')); 
console.log(checkStringNotEmpty(123)); 

// Test checkNumeric
console.log(checkNumeric(42)); 
console.log(checkNumeric('abc'));

// Test checkMaxValue
console.log(checkMaxValue(15)); 
console.log(checkMaxValue(25)); 

// Test checkMinValue
console.log(checkMinValue(5)); 
console.log(checkMinValue(15)); 

// Test checkMaxLength
console.log(checkMaxLength('abcdef')); 
console.log(checkMaxLength('abcdefghijklmnopqrstuvwxyz')); 

// Test checkMinLength
console.log(checkMinLength('abc')); 
console.log(checkMinLength('abcdefghijklmnopqrstuvwxyz')); 

// Test checkMatchesRegex
console.log(checkMatchesRegex('hello123', /^[a-zA-Z0-9]+$/)); 
console.log(checkMatchesRegex('hello@123', /^[a-zA-Z0-9]+$/)); 

// Test checkValidDate
console.log(checkValidDate('2024-02-07')); 
console.log(checkValidDate('invalid date')); 

// Test checkLaterThan
console.log(checkLaterThan('2024-02-08', '2024-02-07'));
console.log(checkLaterThan('2024-02-06', '2024-02-07')); 

// Test checkEarlierThan
console.log(checkEarlierThan('2024-02-06', '2024-02-07')); 
console.log(checkEarlierThan('2024-02-08', '2024-02-07')); 
