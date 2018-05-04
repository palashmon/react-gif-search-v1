/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/
module.exports = {
  // Create UUID for each todo
  // Ex: 3659c108-2121-48d1-8bbc-c6ab5aeac6d0
  uuid() {
    let i, random;
    let uuid = '';

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
    }

    return uuid;
  },

  pluralize(count, word) {
    return count === 1 ? word : word + 's';
  },

  items() {
    return [
      {
        id: 1,
        url: 'https://picsum.photos/300'
      },
      {
        id: 2,
        url: 'https://picsum.photos/300?image=1067'
      },
      {
        id: 3,
        url: 'https://picsum.photos/300?image?image=1051'
      }
    ];
  }
};
