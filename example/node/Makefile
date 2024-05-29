.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

HOST = $(abspath .)
GRPC_SRC = $(notdir ${wildcard *.proto})
GPRC_DIST_NODE = ./dist
GRPC_DOCKER = docker run --rm -u 1000 -v $(HOST):/generate -w /generate justdomepaul/protobuf-node:vanilla-v26.1 $(1)
GRPC_GOOGLE_PROTOBUF_PLUGIN = google/protobuf/timestamp.proto google/type/decimal.proto

clean: clean-grpc ## clean all generated files

clean-grpc: ## clean GRPC generated files
	@rm -rf grpc/$(GPRC_DIST_NODE)

build: build-grpc-node ## build all

build-grpc-node: ## build gRPC node
	$(info build gRPC Node)
	@mkdir -p ./$(GPRC_DIST_NODE)
	$(eval INCLUDE := --plugin=protoc-gen-js=/usr/local/bin/protoc-gen-js --plugin=protoc-gen-grpc=/usr/local/bin/grpc_tools_node_protoc_plugin --plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts --js_out=import_style=commonjs,binary:$(GPRC_DIST_NODE) --grpc_out=grpc_js:$(GPRC_DIST_NODE) --ts_out=service=true:$(GPRC_DIST_NODE) -I/usr/local/lib/node_modules/google-proto-files -I=. $(GRPC_GOOGLE_PROTOBUF_PLUGIN))
	$(eval CMD := grpc_tools_node_protoc $(INCLUDE) $(GRPC_SRC))
	@$(call GRPC_DOCKER, $(CMD))
