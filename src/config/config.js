module.exports = {
 port:8081,
 db: {
  database: process.env.DB_NAME || 'kpopdata',
  user: process.env.DB_USER || 'kpopdata',
  password:process.env.DB_PASS || 'kpopdata',
  options: {
   dialect: process.env.DIALECT || 'sqlite',
   host: process.env.HOST || 'localhost',
   storage: './kpopdata.sqlite'
  }
 },
 authentication: {
  jwtSecret: 'secret' || process.env.JWT_SECRET
 }

}
