import {ChannelCredentials} from "@grpc/grpc-js";
import {GrpcTransport} from "@protobuf-ts/grpc-transport";
import {HelloRequest} from "../es/gen/hello_pb";
import {HelloServiceClient} from "../es/gen/hello_pb.client";
import {Timestamp} from "../es/gen/google/protobuf/timestamp_pb";

async function main() {
    const req: HelloRequest = {
        name: "Maxfocker",
        age: 122,
        createdTime: Timestamp.fromDate(new Date()),
        amount: {
            value: "250",
        }
    };

    console.log(`Sending gRPC request: ${JSON.stringify(req, null, 2)}`);
    // 為 Node.js 環境建立一個 gRPC transport
    const transport = new GrpcTransport({
        host: "localhost:50051",
        channelCredentials: ChannelCredentials.createInsecure(),
    });

    const client = new HelloServiceClient(transport);

    // 呼叫 RPC 方法
    try {
        const response = await client.sayHello(req);
        console.log('Hello from server:', response.response.message);
    } catch (err) {
        console.error('gRPC call error:', err);
    }
}

main().catch((err) => {
    console.error("Unhandled error in main:", err);
    process.exit(1);
});