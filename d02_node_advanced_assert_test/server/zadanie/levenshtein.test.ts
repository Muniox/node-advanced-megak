import {strict as assert} from 'assert';
import {levenshteinDistance} from './levenshtein';


assert.doesNotThrow(() => levenshteinDistance('',''), 'no Error Thrown.');
assert.doesNotThrow(() => levenshteinDistance('122334','3232445'), 'no Error Thrown.');
assert.strictEqual(levenshteinDistance("Paweł", "Gaweł"), 0.8);
assert.strictEqual(levenshteinDistance("Trasa", "Prasa"), 0.8);
assert.equal(levenshteinDistance("mars", "sram"), 0);
