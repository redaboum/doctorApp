front-start:
	cd front && yarn start

back-start:
	cd back && yarn start

database-start:
	sudo docker run -p 27017:27017 -v /../database:/data/db -d mongo mongod --auth

database-stop:
	sudo docker stop $(sudo docker ps -a -q)

deploy:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com "cd doctorApp && git pull -f && pm2 stop all && cd front && pm2 start npm -- start && cd .. && cd back/server && pm2 start server.js"
