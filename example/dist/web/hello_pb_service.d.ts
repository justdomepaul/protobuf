// package: example
// file: hello.proto

import * as hello_pb from "./hello_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HelloServiceSayHello = {
  readonly methodName: string;
  readonly service: typeof HelloService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hello_pb.HelloRequest;
  readonly responseType: typeof hello_pb.HelloReply;
};

type HelloServiceListFeatures = {
  readonly methodName: string;
  readonly service: typeof HelloService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof hello_pb.Rectangle;
  readonly responseType: typeof hello_pb.Feature;
};

type HelloServiceRecordRoute = {
  readonly methodName: string;
  readonly service: typeof HelloService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof hello_pb.Point;
  readonly responseType: typeof hello_pb.RouteSummary;
};

type HelloServiceRouteChat = {
  readonly methodName: string;
  readonly service: typeof HelloService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof hello_pb.RouteNote;
  readonly responseType: typeof hello_pb.RouteNote;
};

export class HelloService {
  static readonly serviceName: string;
  static readonly SayHello: HelloServiceSayHello;
  static readonly ListFeatures: HelloServiceListFeatures;
  static readonly RecordRoute: HelloServiceRecordRoute;
  static readonly RouteChat: HelloServiceRouteChat;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class HelloServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: hello_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hello_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: hello_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: hello_pb.HelloReply|null) => void
  ): UnaryResponse;
  listFeatures(requestMessage: hello_pb.Rectangle, metadata?: grpc.Metadata): ResponseStream<hello_pb.Feature>;
  recordRoute(metadata?: grpc.Metadata): RequestStream<hello_pb.Point>;
  routeChat(metadata?: grpc.Metadata): BidirectionalStream<hello_pb.RouteNote, hello_pb.RouteNote>;
}

