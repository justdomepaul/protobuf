.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

HOST = $(abspath .)
GRPC_SRC = $(notdir ${wildcard *.proto})
GRPC_DIST_GO = ./generated
GRPC_DIST_SWAGGER = ./third_party/OpenAPI
GRPC_DOCKER = docker run --rm -u 1000 -v $(HOST):/generate -w /generate justdomepaul/protobuf:vanilla-v26.1 $(1)
GRPC_GATEWAY_VERSION = 2.19.1

clean: clean-grpc ## clean all generated files

clean-grpc: ## clean GRPC generated files
	@rm -rf ./$(GRPC_DIST_GO)

build: build-grpc-go ## build all

build-grpc-go: ## build gRPC GO
	$(info build gRPC GO)
	@mkdir -p ./$(GRPC_DIST_GO)
	$(eval INCLUDE := --descriptor_set_out=./generated/descriptor.protoset --include_source_info --include_imports -I/usr/local/include -I=. -I=/go/pkg/mod -I=/go/pkg/mod/github.com/grpc-ecosystem/grpc-gateway/v2@v$(GRPC_GATEWAY_VERSION)/)
	$(eval OUT_GO := --go_opt=paths=source_relative --go_out=$(GRPC_DIST_GO))
	$(eval OUT_GO_GRPC := --go-grpc_opt=paths=source_relative --go-grpc_out=$(GRPC_DIST_GO))
	$(eval OUT_GATEWAY_GO := --grpc-gateway_opt=logtostderr=true --grpc-gateway_opt=allow_patch_feature=false --grpc-gateway_opt=paths=source_relative --grpc-gateway_opt=generate_unbound_methods=true --grpc-gateway_out=$(GRPC_DIST_GO))
	$(eval OUT_SWAGGER := --openapiv2_opt=logtostderr=true --openapiv2_opt=openapi_configuration=./hello.swagger.yaml  --openapiv2_out=$(GRPC_DIST_SWAGGER))
	$(eval CMD := protoc $(INCLUDE) $(OUT_GO) $(OUT_GO_GRPC) $(OUT_GATEWAY_GO) $(OUT_SWAGGER) $(GRPC_SRC))
	@$(call GRPC_DOCKER, $(CMD))

run-gateway-api-doc-server: ## run gateway api server
	go run ./
