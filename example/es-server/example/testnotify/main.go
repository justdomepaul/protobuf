package main

import (
	example "es-server/go/gen"
	"google.golang.org/protobuf/encoding/protojson"
	"log"
)

/*
*
TypeScript code to generate notify content

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
*/
func main() {
	jsMarshal := []byte(`{"notificationType":["NOTIFICATION_TYPE_EMAIL","NOTIFICATION_TYPE_LINE"],"notificationMessageType":"NOTIFICATION_MESSAGE_TYPE_GROUPBUY","storeId":"00000000-0000-0000-0000-000000000000","recipientMeepshopUserId":"00000000-0000-0000-0000-000000000000","senderAddress":"example@tester.com","senderName":"example","groupBuy":{"storeLogo":"https://logo.com","storeName":"testerExample","storeUrl":"https://logo.com","productId":"00000000-0000-0000-0000-000000000000","groupBuyId":"00000000-0000-0000-0000-000000000000","groupBuyTitle":"tester","finalPrice":"270","id":"00000000-0000-0000-0000-000000000000","orderNo":"WN76SEZ","productTotal":"5","discount":"28","shipmentFee":"0","payingFee":"0","orderPrice":"298"}}`)
	input := example.NotifyContent{
		MessageContent: &example.NotifyContent_ProductQa{},
	}
	if err := protojson.Unmarshal(jsMarshal, &input); err != nil {
		panic(err)
	}
	log.Printf("%+v\n", &input)
	log.Printf("%+v\n", input.GetGroupBuy())

}
