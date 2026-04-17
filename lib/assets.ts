const GITHUB_PAGES_REPOSITORY = "mayas-plushies";
const BASE_PATH = process.env.GITHUB_ACTIONS === "true"
  ? `/${GITHUB_PAGES_REPOSITORY}`
  : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return `${BASE_PATH}/${path}`;
  }

  return `${BASE_PATH}${path}`;
}
