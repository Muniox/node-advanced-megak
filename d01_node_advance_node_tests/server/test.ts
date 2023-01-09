import {strict as assert} from 'assert';
import {handlebarsHelpers} from './utils/handlebars-helpers';

assert(2 === 2); //najprostszy przykład

assert(handlebarsHelpers.equals(2,2), 'Numbers comparison does not work.');

assert(handlebarsHelpers.equals('abc','abc'), 'String comparison does not work.');

assert(handlebarsHelpers.equals(false,false), 'Bools comparison does not work.');