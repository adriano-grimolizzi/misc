const winston = require('winston')
const expressWinston = require('express-winston')

const winstonOptions = expressWinston.logger({
	transports: [
		new winston.transports.Console()
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json()
	),
})

module.exports = winstonOptions
