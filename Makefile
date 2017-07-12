front-start:
	cd front && yarn start

back-start:
	cd back && yarn start

database-start:
	docker run -p 27017:27017 -v /../database:/data/db --name my-mongo-dev -d mongo mongod --auth

deploy:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com && cd doctorApp && git pull
