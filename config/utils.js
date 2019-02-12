import { resolve } from 'path';
import { realpathSync } from 'fs';

const ROOT_DIR = realpathSync(process.cwd());
const resolvePath = /**
 * @param {string} relativePath
 */
 (relativePath) => resolve(ROOT_DIR, relativePath);

export default {
  resolvePath,
  ROOT_DIR,
};
