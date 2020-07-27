'use strict';

const config = {
	local: {
		mode: 'local',
		port: 3000,
		mysql: {
			host: 'localhost',
			driver: 'mysql',
			user: 'root',
			database: 'facemash',
			password: 'Frazile@0511',
		}
	},
	staging: {
		mode: 'staging',
		port: 4000,
		mysql: {
			host: 'localhost',
			driver: 'mysql',
			user: 'USER_NAME',
			database: 'DB_NAME',
			password: 'Frazile@0511',
		}
	},
	production: {
		mode: 'production',
		port: 5000,
		mysql: {
			host: 'localhost',
			driver: 'mysql',
			user: 'USER_NAME',
			database: 'DB_NAME',
			password: 'Frazile@0511',
		}
	}
};

module.exports = function (mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
};