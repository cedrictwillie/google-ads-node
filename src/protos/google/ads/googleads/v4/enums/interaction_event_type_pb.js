var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.InteractionEventType",null,global),proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.displayName="proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum;return proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.InteractionEventTypeEnum.InteractionEventType={UNSPECIFIED:0,UNKNOWN:1,CLICK:2,ENGAGEMENT:3,VIDEO_VIEW:4,NONE:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);