// package: example
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_decimal_pb from "./google/type/decimal_pb";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;
    getAge(): number;
    setAge(value: number): HelloRequest;

    hasCreatedTime(): boolean;
    clearCreatedTime(): void;
    getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): HelloRequest;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_type_decimal_pb.Decimal | undefined;
    setAmount(value?: google_type_decimal_pb.Decimal): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
        age: number,
        createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        amount?: google_type_decimal_pb.Decimal.AsObject,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}

export class Point extends jspb.Message { 
    getLatitude(): number;
    setLatitude(value: number): Point;
    getLongitude(): number;
    setLongitude(value: number): Point;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Point.AsObject;
    static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Point;
    static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
    export type AsObject = {
        latitude: number,
        longitude: number,
    }
}

export class Rectangle extends jspb.Message { 

    hasLo(): boolean;
    clearLo(): void;
    getLo(): Point | undefined;
    setLo(value?: Point): Rectangle;

    hasHi(): boolean;
    clearHi(): void;
    getHi(): Point | undefined;
    setHi(value?: Point): Rectangle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rectangle.AsObject;
    static toObject(includeInstance: boolean, msg: Rectangle): Rectangle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rectangle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rectangle;
    static deserializeBinaryFromReader(message: Rectangle, reader: jspb.BinaryReader): Rectangle;
}

export namespace Rectangle {
    export type AsObject = {
        lo?: Point.AsObject,
        hi?: Point.AsObject,
    }
}

export class Feature extends jspb.Message { 
    getName(): string;
    setName(value: string): Feature;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Point | undefined;
    setLocation(value?: Point): Feature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        name: string,
        location?: Point.AsObject,
    }
}

export class RouteNote extends jspb.Message { 

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Point | undefined;
    setLocation(value?: Point): RouteNote;
    getMessage(): string;
    setMessage(value: string): RouteNote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteNote.AsObject;
    static toObject(includeInstance: boolean, msg: RouteNote): RouteNote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteNote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteNote;
    static deserializeBinaryFromReader(message: RouteNote, reader: jspb.BinaryReader): RouteNote;
}

export namespace RouteNote {
    export type AsObject = {
        location?: Point.AsObject,
        message: string,
    }
}

export class RouteSummary extends jspb.Message { 
    getPointCount(): number;
    setPointCount(value: number): RouteSummary;
    getFeatureCount(): number;
    setFeatureCount(value: number): RouteSummary;
    getDistance(): number;
    setDistance(value: number): RouteSummary;
    getElapsedTime(): number;
    setElapsedTime(value: number): RouteSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteSummary.AsObject;
    static toObject(includeInstance: boolean, msg: RouteSummary): RouteSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteSummary;
    static deserializeBinaryFromReader(message: RouteSummary, reader: jspb.BinaryReader): RouteSummary;
}

export namespace RouteSummary {
    export type AsObject = {
        pointCount: number,
        featureCount: number,
        distance: number,
        elapsedTime: number,
    }
}
