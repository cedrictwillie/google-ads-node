var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.common.RealTimeBiddingSetting",null,global),proto.google.ads.googleads.v2.common.RealTimeBiddingSetting=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.common.RealTimeBiddingSetting,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.displayName="proto.google.ads.googleads.v2.common.RealTimeBiddingSetting"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.toObject=function(includeInstance,msg){var f,obj={optIn:(f=msg.getOptIn())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.common.RealTimeBiddingSetting;return proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setOptIn(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getOptIn())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.prototype.getOptIn=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,1)},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.prototype.setOptIn=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.prototype.clearOptIn=function(){this.setOptIn(void 0)},proto.google.ads.googleads.v2.common.RealTimeBiddingSetting.prototype.hasOptIn=function(){return null!=jspb.Message.getField(this,1)},goog.object.extend(exports,proto.google.ads.googleads.v2.common);