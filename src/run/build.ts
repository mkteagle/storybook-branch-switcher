export const cleanPreviousBundle = async (directory: string): Promise<void> => {
  fs.removeSync(directory);
};

export const checkoutCommit = async (commit: string): Promise<void> => {
  await $`git fetch origin`;
  await $`git checkout ${commit}`;
};

export const buildStorybook = async (scriptName?: string): Promise<void> => {
  await $`npm run ${scriptName ?? 'build-storybook'}`;
};

export const prepareStorybook = async (from: string, to: string): Promise<void> => {
  fs.cpSync(from, to, { recursive: true });
};