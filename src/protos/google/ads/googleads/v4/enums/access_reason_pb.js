var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AccessReasonEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AccessReasonEnum.AccessReason",null,global),proto.google.ads.googleads.v4.enums.AccessReasonEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AccessReasonEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AccessReasonEnum.displayName="proto.google.ads.googleads.v4.enums.AccessReasonEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AccessReasonEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.AccessReasonEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.AccessReasonEnum.toObject=function(o,e){var s={};return o&&(s.$jspbMessageInstance=e),s}),proto.google.ads.googleads.v4.enums.AccessReasonEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),s=new proto.google.ads.googleads.v4.enums.AccessReasonEnum;return proto.google.ads.googleads.v4.enums.AccessReasonEnum.deserializeBinaryFromReader(s,e)},proto.google.ads.googleads.v4.enums.AccessReasonEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.AccessReasonEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AccessReasonEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.AccessReasonEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.AccessReasonEnum.AccessReason={UNSPECIFIED:0,UNKNOWN:1,OWNED:2,SHARED:3,LICENSED:4,SUBSCRIBED:5,AFFILIATED:6},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);