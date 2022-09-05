import { Readable, Writable } from 'stream';
import prompt from './prompt';

export default async function alert(title: string, {
  input = process.stdin,
  output = process.stdout,
}: {
  input?: Readable;
  output?: Writable;
} = {}): Promise<void> {
  await prompt(title, {
    input,
    output,
  });
}
