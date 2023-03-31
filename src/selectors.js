const sortAZ = (data) => data.sort((a, b) => (a.text > b.text ? 1 : -1));

const sortZA = (data) => data.sort((a, b) => (b.text > a.text ? 1 : -1));

export const sortingMethod = (target, data) => {
  if (target.innerText === 'A-Z') {
    sortAZ(data);
    target.innerText = 'Z-A';
  } else {
    sortZA(data);
    target.innerText = 'A-Z';
  }
};