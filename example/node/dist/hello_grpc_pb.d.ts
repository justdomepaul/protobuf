// package: example
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_decimal_pb from "./google/type/decimal_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IHelloServiceService_ISayHello;
    listFeatures: IHelloServiceService_IListFeatures;
    recordRoute: IHelloServiceService_IRecordRoute;
    routeChat: IHelloServiceService_IRouteChat;
}

interface IHelloServiceService_ISayHello extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloReply> {
    path: "/example.HelloService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloReply>;
}
interface IHelloServiceService_IListFeatures extends grpc.MethodDefinition<hello_pb.Rectangle, hello_pb.Feature> {
    path: "/example.HelloService/ListFeatures";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<hello_pb.Rectangle>;
    requestDeserialize: grpc.deserialize<hello_pb.Rectangle>;
    responseSerialize: grpc.serialize<hello_pb.Feature>;
    responseDeserialize: grpc.deserialize<hello_pb.Feature>;
}
interface IHelloServiceService_IRecordRoute extends grpc.MethodDefinition<hello_pb.Point, hello_pb.RouteSummary> {
    path: "/example.HelloService/RecordRoute";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.Point>;
    requestDeserialize: grpc.deserialize<hello_pb.Point>;
    responseSerialize: grpc.serialize<hello_pb.RouteSummary>;
    responseDeserialize: grpc.deserialize<hello_pb.RouteSummary>;
}
interface IHelloServiceService_IRouteChat extends grpc.MethodDefinition<hello_pb.RouteNote, hello_pb.RouteNote> {
    path: "/example.HelloService/RouteChat";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<hello_pb.RouteNote>;
    requestDeserialize: grpc.deserialize<hello_pb.RouteNote>;
    responseSerialize: grpc.serialize<hello_pb.RouteNote>;
    responseDeserialize: grpc.deserialize<hello_pb.RouteNote>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer {
    sayHello: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloReply>;
    listFeatures: grpc.handleServerStreamingCall<hello_pb.Rectangle, hello_pb.Feature>;
    recordRoute: grpc.handleClientStreamingCall<hello_pb.Point, hello_pb.RouteSummary>;
    routeChat: grpc.handleBidiStreamingCall<hello_pb.RouteNote, hello_pb.RouteNote>;
}

export interface IHelloServiceClient {
    sayHello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    listFeatures(request: hello_pb.Rectangle, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.Feature>;
    listFeatures(request: hello_pb.Rectangle, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.Feature>;
    recordRoute(callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    recordRoute(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    recordRoute(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    recordRoute(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    routeChat(): grpc.ClientDuplexStream<hello_pb.RouteNote, hello_pb.RouteNote>;
    routeChat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.RouteNote, hello_pb.RouteNote>;
    routeChat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.RouteNote, hello_pb.RouteNote>;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public listFeatures(request: hello_pb.Rectangle, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.Feature>;
    public listFeatures(request: hello_pb.Rectangle, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.Feature>;
    public recordRoute(callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    public recordRoute(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    public recordRoute(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    public recordRoute(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.RouteSummary) => void): grpc.ClientWritableStream<hello_pb.Point>;
    public routeChat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.RouteNote, hello_pb.RouteNote>;
    public routeChat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.RouteNote, hello_pb.RouteNote>;
}
