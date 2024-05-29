const grpc = require('@grpc/grpc-js');
const services = require('./dist/hello_grpc_pb');
const messages = require('./dist/hello_pb');
const timestamp_pb  = require ('google-protobuf/google/protobuf/timestamp_pb');
const wrappers_pb  = require ('google-protobuf/google/protobuf/wrappers_pb');

const client = new services.HelloServiceClient('localhost:50051', grpc.credentials.createInsecure());

let request = new messages.HelloRequest();
request.setName("Alice");
request.setAge(50);
request.setCreatedTime(new timestamp_pb.Timestamp().setSeconds(1716988678));
request.setAmount(new wrappers_pb.StringValue().setValue("12123901823012128301280938129038903123.811312038"));

client.sayHello(request, function(err, response) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Greeting:', response.getMessage());
    }
});