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
- Modify MOTD File replacing placeholder with your projects name
- Modify Dockerfile and replacing value of PS1 with your projects idendtifier

## Working with Docker

- Building the container and running the container
```
docker build --rm -t <Node-project>:latest .
docker images
docker run -v $(pwd):/opt -p 3000:3000 -it <node-project>
node test-node.js
```
- Navigate to http://localhost:3000 in a browser
- <ctrl><c> to stop the server

- If needed use this command to attach or restart the container
```
docker ps -a
docker attach <containerID>
docker restart <containerID>
```

