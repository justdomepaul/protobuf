import {createGrpcTransport} from "@connectrpc/connect-node";
import {createClient} from "@connectrpc/connect";
// 從產生的程式碼中導入服務定義。注意 import 路徑中的 '.js' 副檔名。
import {
    HelloService,
    MessageGroupBuySchema, NotificationMessageType,
    NotificationType,
    NotifyContentSchema
} from "../es/grpc-client/gen/hello_pb.js";
import {timestampFromDate} from "@bufbuild/protobuf/wkt";
import {create, toJson, toJsonString} from "@bufbuild/protobuf";

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
    tags: ["tag1", "tag2"],
    notificationType:  [NotificationType.EMAIL, NotificationType.LINE],
    createdTime: timestampFromDate(new Date()),
    amount: amount
};

console.log("Sending request:", req);
console.log("Sending request JSON:", JSON.stringify(req, (key, value) => {
    return typeof value === 'bigint' ? value.toString() : value;
}));
// 呼叫 RPC 方法

const notify = create( NotifyContentSchema, {
    messageContent: {
        value: create(
            MessageGroupBuySchema,
            {
                discount: "28",
                finalPrice: "270",
                groupBuyId: "00000000-0000-0000-0000-000000000000",
                groupBuyTitle: "tester",
                id: "00000000-0000-0000-0000-000000000000",
                isPayment: false,
                orderNo: "WN76SEZ",
                orderPrice: "298",
                payingFee: "0",
                productId: "00000000-0000-0000-0000-000000000000",
                productItems: [],
                productTotal: "5",
                shipmentFee: "0",
                storeLogo: "https://logo.com",
                storeName: "testerExample",
                storeUrl: "https://logo.com",
            }
        ),
        case: "groupBuy",
    },
    notificationMessageType: NotificationMessageType.GROUPBUY,
    recipientMeepshopUserId: "00000000-0000-0000-0000-000000000000",
    senderAddress: "example@tester.com",
    senderName: "example",
    storeId: "00000000-0000-0000-0000-000000000000",
    notificationType: [NotificationType.EMAIL, NotificationType.LINE],
})
const normalNotifyJSON = toJson(NotifyContentSchema, notify)
const serializedNotifyJSON = toJsonString(NotifyContentSchema, notify)
console.log("NotifyContent:", notify);
console.log("NotifyContent JSON:", JSON.stringify(normalNotifyJSON));
console.log("NotifyContent serializedJSON:", serializedNotifyJSON);

try {
    const resp = await helloServiceClient.sayHello(req);
    console.log("Received response:", resp);
} catch (err) {
    console.error("RPC call failed:", err);
}