front-start:
	cd front && yarn start

back-start:
	cd back && yarn start

database-start:
	sudo docker run -p 27017:27017 -v /../database:/data/db -d mongo mongod --auth

database-stop:
	sudo docker kill $(sudo docker ps -q)

deploy:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com "cd doctorApp && git pull -f && pm2 stop all && cd front && yarn install && pm2 start npm -- start && cd .. && cd back && yarn install && cd server && pm2 start server.js"

connect-server:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com
