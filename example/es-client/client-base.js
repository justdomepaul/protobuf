import {createGrpcTransport} from "@connectrpc/connect-node";
import {createClient} from "@connectrpc/connect";
// 從產生的程式碼中導入服務定義。注意 import 路徑中的 '.js' 副檔名。
import {HelloService} from "../es/grpc-client/gen/hello_pb.js";
import {timestampNow} from "@bufbuild/protobuf/wkt";

// 1. 配置傳輸層 (Transport)
// createGrpcTransport 用於與標準的 gRPC 伺服器通訊。
const transport = createGrpcTransport({
    // 內部 gRPC 伺服器的位址
    baseUrl:"http://localhost:50051",
});
// 2. 建立一個類型安全的、基於 Promise 的客戶端
// createPromiseClient 會返回一個所有 RPC 方法都返回 Promise 的客戶端，
// 非常適合與 async/await 語法結合使用。
const helloServiceClient = createClient(HelloService, transport);
const amount= {$typeName: "google.type.Decimal", value: "250"};
const req = {
    $typeName: "example.HelloRequest",
    name: "Maxfocker",
    age: 122,
    createdTime: timestampNow(),
    amount: amount
};
console.log("Sending request:", req);
// 呼叫 RPC 方法
try {
    const resp = await helloServiceClient.sayHello(req);
    console.log("Received response:", resp);
} catch (err) {
    console.error("RPC call failed:", err);
}