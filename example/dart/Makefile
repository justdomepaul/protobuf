.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

HOST = $(abspath .)
GRPC_SRC = $(notdir ${wildcard *.proto})
GRPC_DIST_DART = ./generated
GRPC_DOCKER = docker run --rm -u 1000 -v $(HOST):/generate -w /generate justdomepaul/protobuf-dart:vanilla-v22.3 $(1)
GRPC_GOOGLE_PROTOBUF_PLUGIN = google/protobuf/timestamp.proto google/api/visibility.proto google/api/annotations.proto

clean: clean-grpc ## clean all generated files

clean-grpc: ## clean GRPC generated files
	@rm -rf ./$(GRPC_DIST_DART)

build: build-grpc-dart ## build all

build-grpc-dart: ## build gRPC dart
	$(info build gRPC Dart)
	@mkdir -p ./$(GRPC_DIST_DART)
	$(eval INCLUDE :=  --plugin=protoc-gen-dart=/home/.pub-cache/bin/protoc-gen-dart --descriptor_set_out=./generate/descriptor.protoset --include_source_info --include_imports -I/usr/local/include -I=. $(GRPC_GOOGLE_PROTOBUF_PLUGIN))
	$(eval OUT_DART := --dart_out=grpc:$(GRPC_DIST_DART))
	$(eval CMD := protoc $(INCLUDE) $(OUT_DART) $(GRPC_SRC))
	@$(call GRPC_DOCKER, $(CMD))
