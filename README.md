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

- Modify **Dockerfile** replacing placeholder **NodeProject** with your project name.
- Modify **MOTD** File replacing placeholder **NodeProject** with your projects name

## Working with Docker

- Building the container and running the container
```
docker build --rm -t <Node-project>:latest .
docker images
docker run -v $(pwd):/jfrflabs -P -it <node-project>
npm start
```
- Get the exposed port number in the host terminal 
```
docker ps
```

- Navigate to http://localhost:<exposedPort>
- <ctrl><c> to stop the server in the container

- If needed use this command to attach or restart the container
```
docker ps -a
docker attach <containerID>
docker restart <containerID>
```

