export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const ret = mathFunction();
    queue.push(ret, 'Guardrail was processed');
  } catch (e) {
    queue.push(`${e}`, 'Guardrail was processed');
  }
  return queue;
}
