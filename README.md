# node-project-setup

This project contains the intial files to startup a Node project.

## Set-up

- Copy files to your project workspace
```
cd ~/jfrflabs
wget https://github.com/jffalcao/node-project-setup/archive/master.zip
unzip master.zip
rm master.zip
ls -l
mv node-project-setup-master/ node-project-setup-test
cd node-project-setup-test/
code .
```
- Generate a random port for the app from:  
https://www.random.org/integers/?num=1&min=5001&max=49151&col=5&base=10&format=html&rnd=new
- Modify MOTD File replacing placeholder **node-project** with your projects name
- Modify Dockerfile replacing placeholder **Node Project** with your project name.
- Modify Dockerfile replacing placeholder **ramdomPort** with the generated port.
- Modify server.js replacing placeholder **ramdomPort** with the generated port.

## Working with Docker

- Building the container and running the container
```
docker build --rm -t <Node-project>:latest .
docker images
docker run -v $(pwd):/jfrflabs -it <node-project>
npm start
```
- Navigate to the displayed lin in the terminal
- <ctrl><c> to stop the server

- If needed use this command to attach or restart the container
```
docker ps -a
docker attach <containerID>
docker restart <containerID>
```

