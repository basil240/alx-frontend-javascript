function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
function sampleMathFunction() {
  // Some computation that may or may not throw an error
  if (Math.random() < 0.5) {
    throw new Error('An error occurred.');
  }
  return Math.random();
}

const resultQueue = guardrail(sampleMathFunction);
console.log(resultQueue);
