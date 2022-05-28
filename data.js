const UserList = [
  {
    id: 1,
    name: 'John',
    username: 'john',
    age: 20,
    nationality: 'CANADA',
    friends: [
      {
        id: 2,
        name: 'Tom',
        username: 'tom',
        age: 21,
        nationality: 'USA',
      },
      {
        id: 3,
        name: 'Peter',
        username: 'peter',
        age: 22,
        nationality: 'UK',
      },
    ],
  },
  {
    id: 2,
    name: 'Tom',
    username: 'tom',
    age: 21,
    nationality: 'USA',
  },
  {
    id: 3,
    name: 'Peter',
    username: 'peter',
    age: 22,
    nationality: 'UK',
  },
  {
    id: 4,
    name: 'Sarah',
    username: 'sarah',
    age: 23,
    nationality: 'USA',
    friends: [
      {
        id: 3,
        name: 'Peter',
        username: 'peter',
        age: 22,
        nationality: 'UK',
      },
    ],
  },
  {
    id: 5,
    name: 'Karen',
    username: 'karen',
    age: 20,
    nationality: 'UK',
    friends: [
      {
        id: 2,
        name: 'Tom',
        username: 'tom',
        age: 21,
        nationality: 'USA',
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: 'Batman',
    year: 2022,
    isInTheaters: true,
  },
  {
    id: 2,
    name: 'Something else',
    year: 2021,
    isInTheaters: false,
  },
  {
    id: 3,
    name: 'Thor',
    year: 2023,
    isInTheaters: true,
  },
];

module.exports = { UserList, MovieList };
