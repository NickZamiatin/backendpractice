// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/awsbackstore'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-awsbackstore'
  }



};
