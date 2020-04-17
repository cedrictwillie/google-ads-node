var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_common_asset_types_pb=require("../../../../../google/ads/googleads/v3/common/asset_types_pb.js"),google_ads_googleads_v3_enums_asset_type_pb=require("../../../../../google/ads/googleads/v3/enums/asset_type_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.Asset",null,global),proto.google.ads.googleads.v3.resources.Asset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.resources.Asset.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.resources.Asset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.Asset.displayName="proto.google.ads.googleads.v3.resources.Asset"),proto.google.ads.googleads.v3.resources.Asset.oneofGroups_=[[5,6,7,8]],proto.google.ads.googleads.v3.resources.Asset.AssetDataCase={ASSET_DATA_NOT_SET:0,YOUTUBE_VIDEO_ASSET:5,MEDIA_BUNDLE_ASSET:6,IMAGE_ASSET:7,TEXT_ASSET:8},proto.google.ads.googleads.v3.resources.Asset.prototype.getAssetDataCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.resources.Asset.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.Asset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.Asset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.Asset.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),type:jspb.Message.getFieldWithDefault(msg,4,0),youtubeVideoAsset:(f=msg.getYoutubeVideoAsset())&&google_ads_googleads_v3_common_asset_types_pb.YoutubeVideoAsset.toObject(includeInstance,f),mediaBundleAsset:(f=msg.getMediaBundleAsset())&&google_ads_googleads_v3_common_asset_types_pb.MediaBundleAsset.toObject(includeInstance,f),imageAsset:(f=msg.getImageAsset())&&google_ads_googleads_v3_common_asset_types_pb.ImageAsset.toObject(includeInstance,f),textAsset:(f=msg.getTextAsset())&&google_ads_googleads_v3_common_asset_types_pb.TextAsset.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.Asset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.Asset;return proto.google.ads.googleads.v3.resources.Asset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.Asset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 4:value=reader.readEnum(),msg.setType(value);break;case 5:value=new google_ads_googleads_v3_common_asset_types_pb.YoutubeVideoAsset,reader.readMessage(value,google_ads_googleads_v3_common_asset_types_pb.YoutubeVideoAsset.deserializeBinaryFromReader),msg.setYoutubeVideoAsset(value);break;case 6:value=new google_ads_googleads_v3_common_asset_types_pb.MediaBundleAsset,reader.readMessage(value,google_ads_googleads_v3_common_asset_types_pb.MediaBundleAsset.deserializeBinaryFromReader),msg.setMediaBundleAsset(value);break;case 7:value=new google_ads_googleads_v3_common_asset_types_pb.ImageAsset,reader.readMessage(value,google_ads_googleads_v3_common_asset_types_pb.ImageAsset.deserializeBinaryFromReader),msg.setImageAsset(value);break;case 8:value=new google_ads_googleads_v3_common_asset_types_pb.TextAsset,reader.readMessage(value,google_ads_googleads_v3_common_asset_types_pb.TextAsset.deserializeBinaryFromReader),msg.setTextAsset(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.Asset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.Asset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.Asset.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getType())&&writer.writeEnum(4,f),null!=(f=message.getYoutubeVideoAsset())&&writer.writeMessage(5,f,google_ads_googleads_v3_common_asset_types_pb.YoutubeVideoAsset.serializeBinaryToWriter),null!=(f=message.getMediaBundleAsset())&&writer.writeMessage(6,f,google_ads_googleads_v3_common_asset_types_pb.MediaBundleAsset.serializeBinaryToWriter),null!=(f=message.getImageAsset())&&writer.writeMessage(7,f,google_ads_googleads_v3_common_asset_types_pb.ImageAsset.serializeBinaryToWriter),null!=(f=message.getTextAsset())&&writer.writeMessage(8,f,google_ads_googleads_v3_common_asset_types_pb.TextAsset.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.Asset.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.Asset.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.Asset.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v3.resources.Asset.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.Asset.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v3.resources.Asset.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.Asset.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v3.resources.Asset.prototype.setName=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.Asset.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v3.resources.Asset.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.Asset.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v3.resources.Asset.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,4,value)},proto.google.ads.googleads.v3.resources.Asset.prototype.getYoutubeVideoAsset=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_asset_types_pb.YoutubeVideoAsset,5)},proto.google.ads.googleads.v3.resources.Asset.prototype.setYoutubeVideoAsset=function(value){jspb.Message.setOneofWrapperField(this,5,proto.google.ads.googleads.v3.resources.Asset.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.Asset.prototype.clearYoutubeVideoAsset=function(){this.setYoutubeVideoAsset(void 0)},proto.google.ads.googleads.v3.resources.Asset.prototype.hasYoutubeVideoAsset=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.Asset.prototype.getMediaBundleAsset=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_asset_types_pb.MediaBundleAsset,6)},proto.google.ads.googleads.v3.resources.Asset.prototype.setMediaBundleAsset=function(value){jspb.Message.setOneofWrapperField(this,6,proto.google.ads.googleads.v3.resources.Asset.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.Asset.prototype.clearMediaBundleAsset=function(){this.setMediaBundleAsset(void 0)},proto.google.ads.googleads.v3.resources.Asset.prototype.hasMediaBundleAsset=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.Asset.prototype.getImageAsset=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_asset_types_pb.ImageAsset,7)},proto.google.ads.googleads.v3.resources.Asset.prototype.setImageAsset=function(value){jspb.Message.setOneofWrapperField(this,7,proto.google.ads.googleads.v3.resources.Asset.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.Asset.prototype.clearImageAsset=function(){this.setImageAsset(void 0)},proto.google.ads.googleads.v3.resources.Asset.prototype.hasImageAsset=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v3.resources.Asset.prototype.getTextAsset=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_asset_types_pb.TextAsset,8)},proto.google.ads.googleads.v3.resources.Asset.prototype.setTextAsset=function(value){jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v3.resources.Asset.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.Asset.prototype.clearTextAsset=function(){this.setTextAsset(void 0)},proto.google.ads.googleads.v3.resources.Asset.prototype.hasTextAsset=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);