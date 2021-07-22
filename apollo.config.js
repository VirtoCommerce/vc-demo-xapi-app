module.exports = {
  client: {
    name: "My Client Project",
    includes: ['./src/app/graphql/**/*.graphql'],
    service: {
      name: 'xapi',
      url: 'http://localhost:10645/graphql'
    }
  }
};