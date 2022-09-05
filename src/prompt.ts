import { createInterface } from 'readline';
import { Readable, Writable } from 'stream';
import { getFullTitle } from './utils';

export default function prompt(title: string, {
  possibleAnswers,
  input = process.stdin,
  output = process.stdout,
}: {
  possibleAnswers?: string[];
  input?: Readable;
  output?: Writable;
} = {}): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({ input, output });

    const fullTitle = getFullTitle({ title, possibleAnswers });

    const waitForAnswer = () => {
      rl.question(fullTitle, (answer: string): void => {
        if (Array.isArray(possibleAnswers) && !possibleAnswers.includes(answer)) {
          waitForAnswer();
          return;
        }

        rl.close();

        resolve(answer);
      });
    };

    waitForAnswer();
  });
}
