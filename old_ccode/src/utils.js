export const sortAZ = () =>
  state.data.sort((a, b) => (a.text > b.text ? 1 : -1));

export const sortZA = () =>
  state.data.sort((a, b) => (b.text > a.text ? 1 : -1));
