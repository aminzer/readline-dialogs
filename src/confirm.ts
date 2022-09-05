import { Readable, Writable } from 'stream';
import prompt from './prompt';

export default async function confirm(title: string, {
  input = process.stdin,
  output = process.stdout,
}: {
  input?: Readable;
  output?: Writable;
} = {}): Promise<boolean> {
  const answer = await prompt(title, {
    possibleAnswers: ['y', 'n'],
    input,
    output,
  });

  return answer === 'y';
}
