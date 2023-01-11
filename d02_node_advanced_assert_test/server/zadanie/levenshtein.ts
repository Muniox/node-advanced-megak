/** Compares the similarity between 2 strings using Levenshtein distance.
 * @param {string} s1 The first string.
 * @param {string} s2 The second string.
 * @returns {number} Similarity between the 2 strings.
 */
 export function levenshteinDistance(s1: string, s2: string): number {
    let longerString = s1;
    let shorterString = s2;
    if (s1.length < s2.length) {
        longerString = s2;
        shorterString = s1;
    }
    const longerLength = longerString.length;
    if (longerLength === 0) {
        // both strings are "", so perfect match (1.0)
        return 1.0;
    }

    // standardize edit distance and return
    return (longerLength - editDistance(longerString, shorterString)) / longerLength;
}

/** A helper function for `levenshteinDistance()`.
 * @param {string} s1 The longer string.
 * @param {string} s2 The shorter (or equal length) string.
 * @returns {number} The distance (or 'cost') to edit s1 into s2. */
function editDistance(s1: string, s2: string): number {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs: number[] = [];

    for (let i = 0, len = s1.length; i <= len; i++) {
        let lastValue = i;

        for (let j = 0, jLen = s2.length; j <= jLen; j++) {
            // since we look at (i - 1) and (j - 1) later,
            // these checks make sure they're both > 0;
            if (i == 0) costs[j] = j;
            else if (j > 0) {
                let newValue = costs[j - 1];

                if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }

        if (i > 0) costs[s2.length] = lastValue;
    }

    return costs[s2.length];
}