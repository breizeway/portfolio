import { wrapPageElement as _wrapPageElement } from "./gatsby-browser";

// recommended to export from both browser and ssr to make sure layout
// is not duplicated anywhere due to hydration
export const wrapPageElement = _wrapPageElement;
