/// <reference lib="webworker" />
import * as mathjs from 'mathjs';

addEventListener('message', ({ data }) => {
  console.log(mathjs.evaluate('2+2'));
  const response = `worker response to ${data}`;
  postMessage(response);
});
