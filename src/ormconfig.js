// conn to db

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'app',
    password: 'jz30Fv8735N4f3XRaf5qC7fC',
    database: 'legends_travel',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Set to false in production
  };
  