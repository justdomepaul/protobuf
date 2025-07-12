package main

import (
	"context"
	example "es-server/go/gen"
	"fmt"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/keepalive"
	"google.golang.org/grpc/reflection"
	"net"
	"time"
)

var logger, _ = zap.NewDevelopment()

func main() {
	healthSrv := health.NewServer()
	options := []grpc.ServerOption{
		grpc.MaxRecvMsgSize(10485760),
		grpc.MaxSendMsgSize(10485760),
		grpc.KeepaliveParams(keepalive.ServerParameters{
			Timeout: 20 * time.Second,
		}),
		grpc.KeepaliveEnforcementPolicy(keepalive.EnforcementPolicy{
			MinTime:             1 * time.Second,
			PermitWithoutStream: true,
		}),
	}
	srv := grpc.NewServer(
		options...,
	)
	reflection.Register(srv)
	grpc_health_v1.RegisterHealthServer(srv, healthSrv)
	healthSrv.SetServingStatus("system", grpc_health_v1.HealthCheckResponse_SERVING)

	example.RegisterHelloServiceServer(srv, &HelloServiceServerImpl{})

	lis, _ := net.Listen("tcp", fmt.Sprintf(":%s", "50051"))

	if err := srv.Serve(lis); err != nil {
		logger.Error("grpc server stop", zap.Error(err))
	}
}

type HelloServiceServerImpl struct {
	example.HelloServiceServer
}

func (srv *HelloServiceServerImpl) SayHello(ctx context.Context, req *example.HelloRequest) (resp *example.HelloReply, err error) {
	logger.Info("request", zap.Any("input", req))
	return &example.HelloReply{
		Message: "Hello",
	}, nil
}
