const concatTwoStrings = (firstString: string, secondString: string, concatBy: string): string =>
    [firstString, secondString].join(concatBy);

const concatStrings = (strings: string[], concatBy: string): string => strings.join(concatBy);

export { concatTwoStrings, concatStrings };
