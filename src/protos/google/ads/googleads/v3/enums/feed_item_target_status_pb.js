var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus",null,global),proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.displayName="proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum;return proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,REMOVED:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);