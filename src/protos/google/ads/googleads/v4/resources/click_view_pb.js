var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_click_location_pb=require("../../../../../google/ads/googleads/v4/common/click_location_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_click_location_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.ClickView",null,global),proto.google.ads.googleads.v4.resources.ClickView=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.ClickView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.ClickView.displayName="proto.google.ads.googleads.v4.resources.ClickView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.ClickView.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.ClickView.toObject(e,this)},proto.google.ads.googleads.v4.resources.ClickView.toObject=function(e,o){var r,s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),gclid:(r=o.getGclid())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),areaOfInterest:(r=o.getAreaOfInterest())&&google_ads_googleads_v4_common_click_location_pb.ClickLocation.toObject(e,r),locationOfPresence:(r=o.getLocationOfPresence())&&google_ads_googleads_v4_common_click_location_pb.ClickLocation.toObject(e,r),pageNumber:(r=o.getPageNumber())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),adGroupAd:(r=o.getAdGroupAd())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.resources.ClickView.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.ClickView;return proto.google.ads.googleads.v4.resources.ClickView.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.ClickView.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setGclid(r);break;case 3:r=new google_ads_googleads_v4_common_click_location_pb.ClickLocation;o.readMessage(r,google_ads_googleads_v4_common_click_location_pb.ClickLocation.deserializeBinaryFromReader),e.setAreaOfInterest(r);break;case 4:r=new google_ads_googleads_v4_common_click_location_pb.ClickLocation;o.readMessage(r,google_ads_googleads_v4_common_click_location_pb.ClickLocation.deserializeBinaryFromReader),e.setLocationOfPresence(r);break;case 5:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setPageNumber(r);break;case 7:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setAdGroupAd(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.ClickView.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.ClickView.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.ClickView.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getGclid())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getAreaOfInterest())&&o.writeMessage(3,r,google_ads_googleads_v4_common_click_location_pb.ClickLocation.serializeBinaryToWriter),null!=(r=e.getLocationOfPresence())&&o.writeMessage(4,r,google_ads_googleads_v4_common_click_location_pb.ClickLocation.serializeBinaryToWriter),null!=(r=e.getPageNumber())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getAdGroupAd())&&o.writeMessage(7,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.ClickView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.ClickView.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.ClickView.prototype.getGclid=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.ClickView.prototype.setGclid=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.ClickView.prototype.clearGclid=function(){return this.setGclid(void 0)},proto.google.ads.googleads.v4.resources.ClickView.prototype.hasGclid=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.ClickView.prototype.getAreaOfInterest=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_click_location_pb.ClickLocation,3)},proto.google.ads.googleads.v4.resources.ClickView.prototype.setAreaOfInterest=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.ClickView.prototype.clearAreaOfInterest=function(){return this.setAreaOfInterest(void 0)},proto.google.ads.googleads.v4.resources.ClickView.prototype.hasAreaOfInterest=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.ClickView.prototype.getLocationOfPresence=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_click_location_pb.ClickLocation,4)},proto.google.ads.googleads.v4.resources.ClickView.prototype.setLocationOfPresence=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.ClickView.prototype.clearLocationOfPresence=function(){return this.setLocationOfPresence(void 0)},proto.google.ads.googleads.v4.resources.ClickView.prototype.hasLocationOfPresence=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.ClickView.prototype.getPageNumber=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,5)},proto.google.ads.googleads.v4.resources.ClickView.prototype.setPageNumber=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.ClickView.prototype.clearPageNumber=function(){return this.setPageNumber(void 0)},proto.google.ads.googleads.v4.resources.ClickView.prototype.hasPageNumber=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.ClickView.prototype.getAdGroupAd=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,7)},proto.google.ads.googleads.v4.resources.ClickView.prototype.setAdGroupAd=function(e){return jspb.Message.setWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.ClickView.prototype.clearAdGroupAd=function(){return this.setAdGroupAd(void 0)},proto.google.ads.googleads.v4.resources.ClickView.prototype.hasAdGroupAd=function(){return null!=jspb.Message.getField(this,7)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);