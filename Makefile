front-start:
	cd front && yarn start

back-start:
	cd back && yarn start

database-start:
	mongod --port 27017 --dbpath database
