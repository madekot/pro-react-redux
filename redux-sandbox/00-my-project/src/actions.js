const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (payload) => {
  return { 
    type: 'RND', 
    payload: Math.floor(Math.random()*10),
  }
};

export {inc, dec, rnd}