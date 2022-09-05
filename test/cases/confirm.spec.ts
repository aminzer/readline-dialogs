import { resolve } from 'path';
import { createReadStream } from 'fs';
import { confirm } from '../../src';

describe('confirm', () => {
  describe('no custom input is passed', () => {
    describe('when "y" is entered into stdin', () => {
      it('returns true', async () => {
        const confirmPromise = confirm('Do you agree:');

        process.stdin.emit('data', 'a\n');
        process.stdin.emit('data', 'b\n');
        process.stdin.emit('data', 'y\n');

        expect(await confirmPromise).toBe(true);
      });
    });

    describe('when "n" is entered into stdin', () => {
      it('returns false', async () => {
        const confirmPromise = confirm('Do you agree:');

        process.stdin.emit('data', 'a\n');
        process.stdin.emit('data', 'b\n');
        process.stdin.emit('data', 'n\n');

        expect(await confirmPromise).toBe(false);
      });
    });
  });

  describe('when custom input is passed', () => {
    describe('when line "y" is found first in input', () => {
      it('returns true', async () => {
        const confirmPromise = confirm('Do you agree:', {
          input: createReadStream(resolve(__dirname, '../resources/confirm_input_y.txt')),
        });

        expect(await confirmPromise).toBe(true);
      });
    });

    describe('when line "n" is found first in input', () => {
      it('returns false', async () => {
        const confirmPromise = confirm('Do you agree:', {
          input: createReadStream(resolve(__dirname, '../resources/confirm_input_n.txt')),
        });

        expect(await confirmPromise).toBe(false);
      });
    });
  });
});
