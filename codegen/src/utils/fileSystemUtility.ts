import { existsSync, readdirSync, rmSync, mkdirSync, renameSync, statSync } from 'fs';
import { resolve } from 'path';

/**
 * Utility class for file system operations
 */
export class FileSystemUtility {
  static cleanDirectory(dirPath: string) {
    if (existsSync(dirPath)) {
      rmSync(dirPath, { recursive: true, force: true });
      mkdirSync(dirPath, { recursive: true });
    }
  }

  static ensureDirectories(dirs: string[]) {
    dirs.forEach((d) => {
      if (!existsSync(d)) mkdirSync(d, { recursive: true });
    });
  }

  static renameToCamelCase(dirs: string[]) {
    dirs.forEach((d) => {
      readdirSync(d).forEach((f) => {
        const fullPath = resolve(d, f);
        if (statSync(fullPath).isFile()) {
          const lower = f.charAt(0).toLowerCase() + f.slice(1);
          if (f !== lower) renameSync(fullPath, resolve(d, lower));
        }
      });
    });
  }
}
