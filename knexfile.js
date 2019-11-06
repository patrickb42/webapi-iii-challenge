module.exports = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './data/blog.db3',
        },
        pool: {
            afterCreate: function (conn, done) {
                conn.run('PRAGMA foreign_keys = ON', done);
            },
        },
        migrations: {
            directory: './data/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
    },
};
