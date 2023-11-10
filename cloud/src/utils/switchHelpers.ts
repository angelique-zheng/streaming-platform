// eslint-disable-next-line @typescript-eslint/no-unused-vars
const throwSwitchError = (impossibleValue: never): never => {
    throw new Error();
};

export const SwitchHelpers = {
    throwSwitchError
};
