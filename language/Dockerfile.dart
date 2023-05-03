FROM google/dart

ARG PROTOC_VERSION=22.3

ENV PUB_CACHE /home/.pub-cache
RUN apt-get update && \
    apt-get -y install unzip

ADD https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip /usr/local/protoc.zip
RUN unzip /usr/local/protoc.zip -d /usr/local/
RUN rm /usr/local/protoc.zip

RUN pub global activate protoc_plugin
ENV PATH /home/.pub-cache/bin:$PATH
ENV PROTO_DIR /usr/local/include

# googleapi proto
ADD https://github.com/googleapis/googleapis/archive/refs/heads/master.zip /tmp/master.zip
RUN unzip /tmp/master.zip -d /tmp
RUN mv /tmp/googleapis-master/google/* /usr/local/include/google/
RUN rm -rf /tmp/master.zip
RUN rm -rf /tmp/googleapis-master

CMD ["/bin/bash", "-l"]
