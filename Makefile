front-start:
	cd front && yarn start

back-start:
	cd back && yarn start

database-start:
	mongod --port 27017 --dbpath database

deploy:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com && cd doctorApp && git pull
