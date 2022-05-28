const { UserList, MovieList } = require('../data');
const _ = require('lodash');

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      // args is an object with the properties that were passed in the query as arguments
      const user = _.find(UserList, { id: Number(id) });
      // Bcz id comes as a string from args
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favouriteMovies: () => {
      return _.filter(MovieList, (movie) => movie.year === 2022);
    },
  },
};

module.exports = { resolvers };
