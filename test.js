import { config } from 'dotenv';
import { executeStudentCrudOperations } from './test-2.js';

config();
console.log('\n\nhere bitch:')
console.log(process.env.DB_URI);

console.log('\n\n\n\n');

await executeStudentCrudOperations();
