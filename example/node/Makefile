.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

HOST = $(abspath .)
GRPC_SRC = $(notdir ${wildcard *.proto})
GPRC_DIST_DART = ./dist
GRPC_DOCKER = docker run --rm -u 1000 -v $(HOST):/hello -w /hello justdomepaul/protobuf-dart:vanilla-v22.3 $(1)
GRPC_GOOGLE_PROTOBUF_PLUGIN = google/protobuf/timestamp.proto

clean: clean-grpc ## clean all generated files

clean-grpc: ## clean GRPC generated files
	@rm -rf grpc/$(GPRC_DIST_DART)

build: build-grpc-dart ## build all

build-grpc-dart: ## build gRPC dart
	$(info build gRPC Dart)
	@mkdir -p ./$(GPRC_DIST_DART)
	$(eval INCLUDE := --dart_out=grpc:$(GPRC_DIST_DART) --plugin=protoc-gen-dart=/home/.pub-cache/bin/protoc-gen-dart --descriptor_set_out=./dist/descriptor.protoset --include_source_info --include_imports -I/usr/local/include -I=. $(GRPC_GOOGLE_PROTOBUF_PLUGIN))
	$(eval CMD := protoc $(INCLUDE) $(GRPC_SRC))
	@$(call GRPC_DOCKER, $(CMD))
