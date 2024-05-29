.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

TAG ?= :latest

grpc-go-build-push: ## build grpc golang protoc image & push
	docker build -t justdomepaul/protobuf$(TAG) .
	docker push justdomepaul/protobuf$(TAG)

grpc-dart-build-push: ## build grpc dart protoc image & push
	docker build -f ./language/Dockerfile.dart -t justdomepaul/protobuf-dart$(TAG) .
	docker push justdomepaul/protobuf-dart$(TAG)

grpc-node-build-push: ## build grpc dart protoc image & push
	docker build -f ./language/Dockerfile.node -t justdomepaul/protobuf-node$(TAG) .
	docker push justdomepaul/protobuf-node$(TAG)
