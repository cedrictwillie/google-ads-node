var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus",null,global),proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.displayName="proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.toObject=function(o,e){var a={};return o&&(a.$jspbMessageInstance=e),a}),proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),a=new proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum;return proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.deserializeBinaryFromReader(a,e)},proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus={UNSPECIFIED:0,UNKNOWN:1,AVAILABLE:2,STALE:3,EXPIRED:4,NEVER_GENERATED:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);