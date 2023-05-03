.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

HOST = $(abspath .)
GRPC_SRC = $(notdir ${wildcard *.proto})
GPRC_DIST_GO = ./dist/go
GPRC_DIST_WEB = ./dist/web
GPRC_DIST_SWAGGER = ./third_party/OpenAPI
GRPC_DOCKER = docker run --rm -u 1000 -v $(HOST):/hello -w /hello justdomepaul/protobuf:vanilla-v3.19.4 $(1)

clean: clean-grpc ## clean all generated files

clean-grpc: ## clean GRPC generated files
	@rm -rf grpc/$(GPRC_DIST_GO)
	@rm -rf grpc/$(GPRC_DIST_WEB)

build: build-grpc-go build-grpc-web ## build all

build-grpc-go: ## build gRPC GO
	$(info build gRPC GO)
	@mkdir -p ./$(GPRC_DIST_GO)
	$(eval INCLUDE := --descriptor_set_out=./dist/go/descriptor.protoset --include_source_info --include_imports -I/usr/local/include -I=. -I=/go/pkg/mod -I=/go/pkg/mod/github.com/grpc-ecosystem/grpc-gateway/v2@v2.10.0/)
	$(eval OUT_GO := --go_opt=paths=source_relative --go_out=$(GPRC_DIST_GO))
	$(eval OUT_GO_GRPC := --go-grpc_opt=paths=source_relative --go-grpc_out=$(GPRC_DIST_GO))
	$(eval OUT_GATEWAY_GO := --grpc-gateway_opt=logtostderr=true --grpc-gateway_opt=allow_patch_feature=false --grpc-gateway_opt=paths=source_relative --grpc-gateway_opt=generate_unbound_methods=true --grpc-gateway_out=$(GPRC_DIST_GO))
	$(eval OUT_SWAGGER := --openapiv2_opt=logtostderr=true --openapiv2_opt=openapi_configuration=./hello.swagger.yaml  --openapiv2_out=$(GPRC_DIST_SWAGGER))
	$(eval CMD := protoc $(INCLUDE) $(OUT_GO) $(OUT_GO_GRPC) $(OUT_GATEWAY_GO) $(OUT_SWAGGER) $(GRPC_SRC))
	@$(call GRPC_DOCKER, $(CMD))

build-grpc-web: ## build gRPC Web
	$(info build gRPC Web)
	@mkdir -p ./$(GPRC_DIST_WEB)
	$(eval INCLUDE := -I/usr/local/include -I=. -I=/go/src -I=/go/pkg/mod/github.com/grpc-ecosystem/grpc-gateway/v2@v2.10.0/)
	$(eval PLUGIN := --plugin=protoc-gen-ts=/workspace/node_modules/.bin/protoc-gen-ts)
	$(eval OUT_JS := --js_out=import_style=commonjs,binary:$(GPRC_DIST_WEB))
	$(eval OUT_TS := --ts_out=service=grpc-web:$(GPRC_DIST_WEB))
	$(eval rm_annotation_ts := sed -i -e '/import \* as google_api_annotations_pb from ".\/google\/api\/annotations_pb";/d' ./dist/web/hello_pb.d.ts)
	$(eval rm_annotation_js1 := sed -i -e '/var google_api_annotations_pb/d' ./dist/web/hello_pb.js)
	$(eval rm_annotation_js2 := sed -i -e '/proto, google_api_annotations_pb/d' ./dist/web/hello_pb.js)
	$(eval rm_annotaion := $(rm_annotation_ts) && $(rm_annotation_js1) && $(rm_annotation_js2))
	$(eval CMD := protoc $(INCLUDE) $(PLUGIN) $(OUT_JS) $(OUT_TS) $(GRPC_SRC) && $(rm_annotaion))
	@$(call GRPC_DOCKER, $(CMD))


run-gateway-api-doc-server: ## run gateway api server
	go run ./
