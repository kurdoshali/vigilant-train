# vigilant-train
GWU IOP Front End Development

node index.js to run the server
brew install postgresql
brew services start postgresql
psql postgres
//DO SOMETHING IN POSTGRES
node scripts/seedDatabase.js
change config.json to match your username and password in line 3&4
change scripts/seedDatabase line 2 to be:
const sequelize = new Sequelize('postgres://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/gwu_iop_db');
