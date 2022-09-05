import { resolve } from 'path';
import { createReadStream } from 'fs';
import { alert } from '../../src';

describe('alert', () => {
  describe('no custom input is passed', () => {
    it('waits util newline char is entered into stdin', async () => {
      const alertPromise = alert('Press Enter to continue:');

      process.stdin.emit('data', '\n');

      expect(await alertPromise).toBe(undefined);
    });
  });

  describe('when custom input is passed', () => {
    it('waits util newline is fetched', async () => {
      const alertPromise = alert('Press Enter to continue:', {
        input: createReadStream(resolve(__dirname, '../resources/alert_input.txt')),
      });

      expect(await alertPromise).toBe(undefined);
    });
  });
});
