import {strict as assert} from 'assert';
import {levenshteinDistance} from './levenshtein';


assert.doesNotThrow(() => levenshteinDistance('',''), 'no Error Thrown.');
assert.doesNotThrow(() => levenshteinDistance('122334','3232445'), 'no Error Thrown.');
assert.strictEqual(levenshteinDistance("Paweł", "Gaweł"), "These two string pairs have different Levenshtein distance");
assert.strictEqual(levenshteinDistance("Trasa", "Prasa"), "These two string pairs have different Levenshtein distance");