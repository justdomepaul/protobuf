FROM golang:1.17.7-buster
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
RUN go get -u google.golang.org/protobuf/cmd/protoc-gen-go

# grpc-go
RUN go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc

# grpc-web
ADD https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64 /usr/bin/protoc-gen-grpc-web
RUN chmod +x /usr/bin/protoc-gen-grpc-web

#WORKDIR /workspace
#RUN go mod init protoc

# protoc-gogo series
RUN go install github.com/gogo/protobuf/protoc-gen-gogo@v1.3.2
RUN go install github.com/gogo/protobuf/protoc-gen-gofast@v1.3.2
RUN go install github.com/gogo/protobuf/protoc-gen-gogofast@v1.3.2
RUN go install github.com/gogo/protobuf/protoc-gen-gogoslick@v1.3.2
# protoc-gogo dependencies
RUN go get -u github.com/gogo/protobuf/proto@v1.3.2
RUN go get -u github.com/gogo/protobuf/jsonpb@v1.3.2
RUN go get -u github.com/gogo/protobuf/gogoproto@v1.3.2
RUN go get -u github.com/gogo/googleapis@v1.4.1

# grpc-gateway
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.7.3
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.3

#RUN go mod download
#RUN chmod u=rwx,go=rx -R /go/pkg/mod

# googleapis common protos 1.3.1 and mapping to go package google.golang.org/genproto/googleapis
ADD https://github.com/googleapis/googleapis/archive/refs/tags/common-protos-1_3_1.zip /tmp/common-protos.zip
RUN unzip /tmp/common-protos.zip -d /tmp
RUN mv /tmp/googleapis-common-protos-1_3_1/google/* /usr/local/include/google/

WORKDIR /workspace

# ts-protoc-gen
RUN npm install ts-protoc-gen

CMD ["/bin/bash", "-l"]
