var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_distance_bucket_pb=require("../../../../../google/ads/googleads/v3/enums/distance_bucket_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.DistanceView",null,global),proto.google.ads.googleads.v3.resources.DistanceView=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.DistanceView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.DistanceView.displayName="proto.google.ads.googleads.v3.resources.DistanceView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.DistanceView.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.DistanceView.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.DistanceView.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),distanceBucket:jspb.Message.getFieldWithDefault(msg,2,0),metricSystem:(f=msg.getMetricSystem())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.DistanceView.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.DistanceView;return proto.google.ads.googleads.v3.resources.DistanceView.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.DistanceView.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=reader.readEnum();msg.setDistanceBucket(value);break;case 3:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setMetricSystem(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.DistanceView.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.DistanceView.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.DistanceView.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0!==(f=message.getDistanceBucket())&&writer.writeEnum(2,f),null!=(f=message.getMetricSystem())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.DistanceView.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.getDistanceBucket=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.setDistanceBucket=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.getMetricSystem=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,3)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.setMetricSystem=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.clearMetricSystem=function(){this.setMetricSystem(void 0)},proto.google.ads.googleads.v3.resources.DistanceView.prototype.hasMetricSystem=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);