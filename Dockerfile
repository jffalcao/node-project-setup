FROM node

LABEL maintainer="jfribeirofalcao@gmail.com" 

ADD . /jfrflabs
WORKDIR /jfrflabs

ADD ./MOTD /opt/MOTD
RUN echo "cat /opt/MOTD" >> /root/.bashrc && \
    echo "PS1='<Node Project>:\w >> '" >> /root/.bashrc && \
    echo "defshell -bash" > /root/.screenrc

EXPOSE <ramdomPort>

ENTRYPOINT ["/bin/bash"]