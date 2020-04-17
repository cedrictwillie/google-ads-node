var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_campaign_feed_pb=require("../../../../../google/ads/googleads/v3/resources/campaign_feed_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.CampaignFeedOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetCampaignFeedRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCampaignFeedResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse",null,global),proto.google.ads.googleads.v3.services.GetCampaignFeedRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetCampaignFeedRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.displayName="proto.google.ads.googleads.v3.services.GetCampaignFeedRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetCampaignFeedRequest;return proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetCampaignFeedRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.displayName="proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest"),proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.CampaignFeedOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest;return proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.CampaignFeedOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.CampaignFeedOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.CampaignFeedOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.CampaignFeedOperation,2)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.CampaignFeedOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.CampaignFeedOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.CampaignFeedOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CampaignFeedOperation.displayName="proto.google.ads.googleads.v3.services.CampaignFeedOperation"),proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v3.services.CampaignFeedOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CampaignFeedOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CampaignFeedOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CampaignFeedOperation;return proto.google.ads.googleads.v3.services.CampaignFeedOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed;reader.readMessage(value,google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed;reader.readMessage(value,google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CampaignFeedOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CampaignFeedOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed,1)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_campaign_feed_pb.CampaignFeed,2)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.CampaignFeedOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.CampaignFeedOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.displayName="proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse"),proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse;return proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateCampaignFeedResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateCampaignFeedResult,2)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateCampaignFeedResult,opt_index)},proto.google.ads.googleads.v3.services.MutateCampaignFeedsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCampaignFeedResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.displayName="proto.google.ads.googleads.v3.services.MutateCampaignFeedResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCampaignFeedResult;return proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCampaignFeedResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);