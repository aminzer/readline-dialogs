export function getFullTitle({
  title,
  possibleAnswers,
}: {
  title: string;
  possibleAnswers?: string[];
}): string {
  let fullTitle = title;

  if (!fullTitle.endsWith(' ')) {
    fullTitle = `${fullTitle} `;
  }

  if (Array.isArray(possibleAnswers)) {
    fullTitle += `(${possibleAnswers.join('/')}) `;
  }

  return fullTitle;
}
