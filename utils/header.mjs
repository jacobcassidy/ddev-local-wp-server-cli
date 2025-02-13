/**
 * @module utils/header
 */

// External dependencies
import welcome from "cli-welcome";

// Internal dependencies
import { pkgJSON } from "./constants.mjs";

// CLI Header
export const header = () => {
  welcome({
    title: pkgJSON.name,
    tagLine: `by ${pkgJSON.author.name}`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
  });
};
