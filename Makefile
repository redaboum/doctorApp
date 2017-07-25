front-start:
	cd front && yarn start

back-start:
	 sudo docker run -it -p 3000:3000 -v ~/Desktop/doctorApp/:/home django bash -c "cd home && cd back && python manage.py runserver 0.0.0.0:3000"

back-start-daemon:
	 sudo docker run -itd -p 3000:3000 -v /home/ubuntu/doctorApp:/home django bash -c "cd home && cd back && python manage.py runserver 0.0.0.0:3000"

database-start:
	sudo docker run -p 27017:27017 -v /../database:/data/db -d mongo mongod --auth

database-stop:
	sudo docker kill $(sudo docker ps -q)

deploy:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com "cd doctorApp && git pull -f && pm2 stop all && cd front && yarn install && pm2 start npm -- start && cd .. && sudo make back-start-daemon "

connect-server:
	ssh -i "test_amazon.pem" ubuntu@ec2-54-200-64-111.us-west-2.compute.amazonaws.com
