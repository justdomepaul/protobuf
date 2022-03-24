FROM golang:1.18.0-buster
LABEL maintainer="max.focker.shih@gmail.com"

ARG PROTOC_VERSION=3.19.4
ARG GRPC_WEB_VERSION=1.3.1

ENV GO111MODULE on

# protoc
RUN apt update -qqy && apt install -qy --no-install-recommends unzip npm \
  && rm -rf /var/lib/apt/lists/*
ADD https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip /usr/local/protoc.zip
RUN unzip /usr/local/protoc.zip -d /usr/local/
RUN rm /usr/local/protoc.zip

# protoc-go
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

# grpc-go
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# grpc-web
ADD https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64 /usr/bin/protoc-gen-grpc-web
RUN chmod +x /usr/bin/protoc-gen-grpc-web

# grpc-gateway
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.10.0
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.10.0

ADD https://github.com/googleapis/googleapis/archive/refs/heads/master.zip /tmp/master.zip
RUN unzip /tmp/master.zip -d /tmp
RUN mv /tmp/googleapis-master/google/* /usr/local/include/google/
RUN rm -rf /tmp/master.zip
RUN rm -rf /tmp/googleapis-master

WORKDIR /workspace

# ts-protoc-gen
RUN npm install ts-protoc-gen

CMD ["/bin/bash", "-l"]
