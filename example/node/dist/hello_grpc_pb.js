// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_decimal_pb = require('./google/type/decimal_pb.js');

function serialize_example_Feature(arg) {
  if (!(arg instanceof hello_pb.Feature)) {
    throw new Error('Expected argument of type example.Feature');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Feature(buffer_arg) {
  return hello_pb.Feature.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_HelloReply(arg) {
  if (!(arg instanceof hello_pb.HelloReply)) {
    throw new Error('Expected argument of type example.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_HelloReply(buffer_arg) {
  return hello_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_HelloRequest(arg) {
  if (!(arg instanceof hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type example.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_HelloRequest(buffer_arg) {
  return hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_Point(arg) {
  if (!(arg instanceof hello_pb.Point)) {
    throw new Error('Expected argument of type example.Point');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Point(buffer_arg) {
  return hello_pb.Point.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_Rectangle(arg) {
  if (!(arg instanceof hello_pb.Rectangle)) {
    throw new Error('Expected argument of type example.Rectangle');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Rectangle(buffer_arg) {
  return hello_pb.Rectangle.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_RouteNote(arg) {
  if (!(arg instanceof hello_pb.RouteNote)) {
    throw new Error('Expected argument of type example.RouteNote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_RouteNote(buffer_arg) {
  return hello_pb.RouteNote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_RouteSummary(arg) {
  if (!(arg instanceof hello_pb.RouteSummary)) {
    throw new Error('Expected argument of type example.RouteSummary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_RouteSummary(buffer_arg) {
  return hello_pb.RouteSummary.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  sayHello: {
    path: '/example.HelloService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloRequest,
    responseType: hello_pb.HelloReply,
    requestSerialize: serialize_example_HelloRequest,
    requestDeserialize: deserialize_example_HelloRequest,
    responseSerialize: serialize_example_HelloReply,
    responseDeserialize: deserialize_example_HelloReply,
  },
  // A server-to-client streaming RPC.
//
// Obtains the Features available within the given Rectangle.  Results are
// streamed rather than returned at once (e.g. in a response message with a
// repeated field), as the rectangle may cover a large area and contain a
// huge number of features.
listFeatures: {
    path: '/example.HelloService/ListFeatures',
    requestStream: false,
    responseStream: true,
    requestType: hello_pb.Rectangle,
    responseType: hello_pb.Feature,
    requestSerialize: serialize_example_Rectangle,
    requestDeserialize: deserialize_example_Rectangle,
    responseSerialize: serialize_example_Feature,
    responseDeserialize: deserialize_example_Feature,
  },
  // A client-to-server streaming RPC.
//
// Accepts a stream of Points on a route being traversed, returning a
// RouteSummary when traversal is completed.
recordRoute: {
    path: '/example.HelloService/RecordRoute',
    requestStream: true,
    responseStream: false,
    requestType: hello_pb.Point,
    responseType: hello_pb.RouteSummary,
    requestSerialize: serialize_example_Point,
    requestDeserialize: deserialize_example_Point,
    responseSerialize: serialize_example_RouteSummary,
    responseDeserialize: deserialize_example_RouteSummary,
  },
  // A Bidirectional streaming RPC.
//
// Accepts a stream of RouteNotes sent while a route is being traversed,
// while receiving other RouteNotes (e.g. from other users).
routeChat: {
    path: '/example.HelloService/RouteChat',
    requestStream: true,
    responseStream: true,
    requestType: hello_pb.RouteNote,
    responseType: hello_pb.RouteNote,
    requestSerialize: serialize_example_RouteNote,
    requestDeserialize: deserialize_example_RouteNote,
    responseSerialize: serialize_example_RouteNote,
    responseDeserialize: deserialize_example_RouteNote,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
