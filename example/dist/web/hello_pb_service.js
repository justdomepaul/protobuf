// package: example
// file: hello.proto

var hello_pb = require("./hello_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HelloService = (function () {
  function HelloService() {}
  HelloService.serviceName = "example.HelloService";
  return HelloService;
}());

HelloService.SayHello = {
  methodName: "SayHello",
  service: HelloService,
  requestStream: false,
  responseStream: false,
  requestType: hello_pb.HelloRequest,
  responseType: hello_pb.HelloReply
};

HelloService.ListFeatures = {
  methodName: "ListFeatures",
  service: HelloService,
  requestStream: false,
  responseStream: true,
  requestType: hello_pb.Rectangle,
  responseType: hello_pb.Feature
};

HelloService.RecordRoute = {
  methodName: "RecordRoute",
  service: HelloService,
  requestStream: true,
  responseStream: false,
  requestType: hello_pb.Point,
  responseType: hello_pb.RouteSummary
};

HelloService.RouteChat = {
  methodName: "RouteChat",
  service: HelloService,
  requestStream: true,
  responseStream: true,
  requestType: hello_pb.RouteNote,
  responseType: hello_pb.RouteNote
};

exports.HelloService = HelloService;

function HelloServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HelloServiceClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HelloService.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

HelloServiceClient.prototype.listFeatures = function listFeatures(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(HelloService.ListFeatures, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

HelloServiceClient.prototype.recordRoute = function recordRoute(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(HelloService.RecordRoute, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

HelloServiceClient.prototype.routeChat = function routeChat(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(HelloService.RouteChat, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.HelloServiceClient = HelloServiceClient;

