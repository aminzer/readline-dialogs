import { resolve } from 'path';
import { createReadStream } from 'fs';
import { prompt } from '../../src';

describe('prompt', () => {
  describe('when only "title" option is passed', () => {
    it('returns answer entered into stdin', async () => {
      const title = 'Enter you name:';

      const promptPromise = prompt(title);

      process.stdin.emit('data', 'John\n');

      expect(await promptPromise).toBe('John');
    });
  });

  describe('when "possibleAnswers" option is passed', () => {
    describe('no custom input is passed', () => {
      it('returns allowed answer entered into stdin', async () => {
        const title = 'Enter you answer:';

        const promptPromise = prompt(title, {
          possibleAnswers: ['a', 'b', 'c'],
        });

        process.stdin.emit('data', 'd\n');
        process.stdin.emit('data', 'e\n');
        process.stdin.emit('data', 'a\n');

        expect(await promptPromise).toBe('a');
      });
    });

    describe('when custom input is passed', () => {
      it('returns allowed answer fetched from passed input', async () => {
        const title = 'Enter you answer:';

        const promptPromise = prompt(title, {
          possibleAnswers: ['a', 'b', 'c'],
          input: createReadStream(resolve(__dirname, '../resources/prompt_input.txt')),
        });

        expect(await promptPromise).toBe('a');
      });
    });
  });
});
