import { getFullTitle } from '../../src/utils';

describe('utils > getFullTitle', () => {
  describe('when only "title" option is passed', () => {
    describe('when "title" doesn\'t end with space', () => {
      it('adds space to the end of "title"', () => {
        expect(getFullTitle({
          title: 'Enter you answer:',
        })).toBe('Enter you answer: ');
      });
    });

    describe('when "title" ends with space', () => {
      it('returns title unchanged', () => {
        expect(getFullTitle({
          title: 'Enter you answer: ',
        })).toBe('Enter you answer: ');
      });
    });
  });

  describe('when "possibleAnswers" option is passed', () => {
    it('adds possible answers to the title', () => {
      expect(getFullTitle({
        title: 'Enter you answer:',
        possibleAnswers: ['a', 'b', 'c'],
      })).toBe('Enter you answer: (a/b/c) ');
    });
  });
});
