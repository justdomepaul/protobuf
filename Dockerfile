FROM golang:1.15.3-buster
LABEL maintainer="max.focker.shih@gmail.com"

ARG PROTOC_VERSION=3.12.4
ARG GRPC_WEB_VERSION=1.2.1

ENV GO111MODULE on

# protoc
RUN apt update -qqy && apt install -qy --no-install-recommends unzip \
  && rm -rf /var/lib/apt/lists/*
ADD https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip /usr/local/protoc.zip
RUN unzip /usr/local/protoc.zip -d /usr/local/
RUN rm /usr/local/protoc.zip

# grpc-web
ADD https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64 /usr/bin/protoc-gen-grpc-web
RUN chmod +x /usr/bin/protoc-gen-grpc-web

WORKDIR /workspace
RUN go mod init protoc

# protoc-gogo series
RUN go get github.com/gogo/protobuf/protoc-gen-gogo@v1.3.1
RUN go get github.com/gogo/protobuf/protoc-gen-gofast@v1.3.1
RUN go get github.com/gogo/protobuf/protoc-gen-gogofast@v1.3.1
RUN go get github.com/gogo/protobuf/protoc-gen-gogoslick@v1.3.1
# protoc-gogo dependencies
RUN go get github.com/gogo/protobuf/proto@v1.3.1
RUN go get github.com/gogo/protobuf/jsonpb@v1.3.1
RUN go get github.com/gogo/protobuf/gogoproto@v1.3.1
RUN go get github.com/gogo/googleapis/protoc-gen-gogogoogleapis@v1.4.0

# grpc-gateway
RUN go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@v1.15.2
RUN go get github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2

RUN go mod download

RUN chmod u=rwx,go=rx -R /go/pkg/mod

# protoc-go
#RUN go get -u google.golang.org/protobuf/cmd/protoc-gen-go
#RUN go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc

# ts-protoc-gen
RUN apt-get update -qqy && apt-get install -qy --no-install-recommends npm \
  && rm -rf /var/lib/apt/lists/*
RUN npm install ts-protoc-gen

CMD ["/bin/bash", "-l"]
