///
//  Generated code. Do not modify.
//  source: hello.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use helloRequestDescriptor instead')
const HelloRequest$json = const {
  '1': 'HelloRequest',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'age', '3': 2, '4': 1, '5': 5, '10': 'age'},
    const {'1': 'created_time', '3': 3, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdTime'},
  ],
};

/// Descriptor for `HelloRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List helloRequestDescriptor = $convert.base64Decode('CgxIZWxsb1JlcXVlc3QSEgoEbmFtZRgBIAEoCVIEbmFtZRIQCgNhZ2UYAiABKAVSA2FnZRI9CgxjcmVhdGVkX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgtjcmVhdGVkVGltZQ==');
@$core.Deprecated('Use helloReplyDescriptor instead')
const HelloReply$json = const {
  '1': 'HelloReply',
  '2': const [
    const {'1': 'message', '3': 1, '4': 1, '5': 9, '10': 'message'},
  ],
};

/// Descriptor for `HelloReply`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List helloReplyDescriptor = $convert.base64Decode('CgpIZWxsb1JlcGx5EhgKB21lc3NhZ2UYASABKAlSB21lc3NhZ2U=');
@$core.Deprecated('Use pointDescriptor instead')
const Point$json = const {
  '1': 'Point',
  '2': const [
    const {'1': 'latitude', '3': 1, '4': 1, '5': 5, '10': 'latitude'},
    const {'1': 'longitude', '3': 2, '4': 1, '5': 5, '10': 'longitude'},
  ],
};

/// Descriptor for `Point`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List pointDescriptor = $convert.base64Decode('CgVQb2ludBIaCghsYXRpdHVkZRgBIAEoBVIIbGF0aXR1ZGUSHAoJbG9uZ2l0dWRlGAIgASgFUglsb25naXR1ZGU=');
@$core.Deprecated('Use rectangleDescriptor instead')
const Rectangle$json = const {
  '1': 'Rectangle',
  '2': const [
    const {'1': 'lo', '3': 1, '4': 1, '5': 11, '6': '.example.Point', '10': 'lo'},
    const {'1': 'hi', '3': 2, '4': 1, '5': 11, '6': '.example.Point', '10': 'hi'},
  ],
};

/// Descriptor for `Rectangle`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List rectangleDescriptor = $convert.base64Decode('CglSZWN0YW5nbGUSHgoCbG8YASABKAsyDi5leGFtcGxlLlBvaW50UgJsbxIeCgJoaRgCIAEoCzIOLmV4YW1wbGUuUG9pbnRSAmhp');
@$core.Deprecated('Use featureDescriptor instead')
const Feature$json = const {
  '1': 'Feature',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'location', '3': 2, '4': 1, '5': 11, '6': '.example.Point', '10': 'location'},
  ],
};

/// Descriptor for `Feature`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List featureDescriptor = $convert.base64Decode('CgdGZWF0dXJlEhIKBG5hbWUYASABKAlSBG5hbWUSKgoIbG9jYXRpb24YAiABKAsyDi5leGFtcGxlLlBvaW50Ughsb2NhdGlvbg==');
@$core.Deprecated('Use routeNoteDescriptor instead')
const RouteNote$json = const {
  '1': 'RouteNote',
  '2': const [
    const {'1': 'location', '3': 1, '4': 1, '5': 11, '6': '.example.Point', '10': 'location'},
    const {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
  ],
};

/// Descriptor for `RouteNote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List routeNoteDescriptor = $convert.base64Decode('CglSb3V0ZU5vdGUSKgoIbG9jYXRpb24YASABKAsyDi5leGFtcGxlLlBvaW50Ughsb2NhdGlvbhIYCgdtZXNzYWdlGAIgASgJUgdtZXNzYWdl');
@$core.Deprecated('Use routeSummaryDescriptor instead')
const RouteSummary$json = const {
  '1': 'RouteSummary',
  '2': const [
    const {'1': 'point_count', '3': 1, '4': 1, '5': 5, '10': 'pointCount'},
    const {'1': 'feature_count', '3': 2, '4': 1, '5': 5, '10': 'featureCount'},
    const {'1': 'distance', '3': 3, '4': 1, '5': 5, '10': 'distance'},
    const {'1': 'elapsed_time', '3': 4, '4': 1, '5': 5, '10': 'elapsedTime'},
  ],
};

/// Descriptor for `RouteSummary`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List routeSummaryDescriptor = $convert.base64Decode('CgxSb3V0ZVN1bW1hcnkSHwoLcG9pbnRfY291bnQYASABKAVSCnBvaW50Q291bnQSIwoNZmVhdHVyZV9jb3VudBgCIAEoBVIMZmVhdHVyZUNvdW50EhoKCGRpc3RhbmNlGAMgASgFUghkaXN0YW5jZRIhCgxlbGFwc2VkX3RpbWUYBCABKAVSC2VsYXBzZWRUaW1l');
