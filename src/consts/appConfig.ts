interface Config {
  debug: boolean;
  version: string | null;
}

const isDevMode = process?.env?.NODE_ENV === 'development';
const version = process?.env?.NEXT_PUBLIC_VERSION ?? null;

export const config: Config = Object.freeze({
  debug: isDevMode,
  version,
});
