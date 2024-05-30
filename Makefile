.DEFAULT_GOAL := help
.PHONY: help clean build

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

TAG ?= :latest

docker-buildx-initial: ## initial docker buildx
	export DOCKER_CLI_EXPERIMENTAL=enabled
	docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d
	docker buildx create --use --name multi-arch-builder

grpc-go-build-push: ## build grpc golang protoc image & push
	docker build -t justdomepaul/protobuf$(TAG) .
	docker push justdomepaul/protobuf$(TAG)

grpc-dart-build-push: ## build grpc dart protoc image & push
	docker build -f ./language/Dockerfile.dart -t justdomepaul/protobuf-dart$(TAG) .
	docker push justdomepaul/protobuf-dart$(TAG)

grpc-node-build-push: ## build grpc dart protoc image & push
	export DOCKER_CLI_EXPERIMENTAL=enabled
	docker buildx build --platform=linux/amd64,linux/arm64/v8 -f ./language/Dockerfile.node -t justdomepaul/protobuf-node$(TAG) . --load
	docker push justdomepaul/protobuf-node$(TAG)
