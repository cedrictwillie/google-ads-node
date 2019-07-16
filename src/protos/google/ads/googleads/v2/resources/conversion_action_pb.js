var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_common_tag_snippet_pb=require("../../../../../google/ads/googleads/v2/common/tag_snippet_pb.js"),google_ads_googleads_v2_enums_attribution_model_pb=require("../../../../../google/ads/googleads/v2/enums/attribution_model_pb.js"),google_ads_googleads_v2_enums_conversion_action_category_pb=require("../../../../../google/ads/googleads/v2/enums/conversion_action_category_pb.js"),google_ads_googleads_v2_enums_conversion_action_counting_type_pb=require("../../../../../google/ads/googleads/v2/enums/conversion_action_counting_type_pb.js"),google_ads_googleads_v2_enums_conversion_action_status_pb=require("../../../../../google/ads/googleads/v2/enums/conversion_action_status_pb.js"),google_ads_googleads_v2_enums_conversion_action_type_pb=require("../../../../../google/ads/googleads/v2/enums/conversion_action_type_pb.js"),google_ads_googleads_v2_enums_data_driven_model_status_pb=require("../../../../../google/ads/googleads/v2/enums/data_driven_model_status_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.ConversionAction",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings",null,global),proto.google.ads.googleads.v2.resources.ConversionAction=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v2.resources.ConversionAction.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v2.resources.ConversionAction,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.ConversionAction.displayName="proto.google.ads.googleads.v2.resources.ConversionAction"),proto.google.ads.googleads.v2.resources.ConversionAction.repeatedFields_=[14],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.ConversionAction.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.ConversionAction.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.ConversionAction.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,4,0),type:jspb.Message.getFieldWithDefault(msg,5,0),category:jspb.Message.getFieldWithDefault(msg,6,0),ownerCustomer:(f=msg.getOwnerCustomer())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),includeInConversionsMetric:(f=msg.getIncludeInConversionsMetric())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),clickThroughLookbackWindowDays:(f=msg.getClickThroughLookbackWindowDays())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),viewThroughLookbackWindowDays:(f=msg.getViewThroughLookbackWindowDays())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),valueSettings:(f=msg.getValueSettings())&&proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.toObject(includeInstance,f),countingType:jspb.Message.getFieldWithDefault(msg,12,0),attributionModelSettings:(f=msg.getAttributionModelSettings())&&proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.toObject(includeInstance,f),tagSnippetsList:jspb.Message.toObjectList(msg.getTagSnippetsList(),google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.toObject,includeInstance),phoneCallDurationSeconds:(f=msg.getPhoneCallDurationSeconds())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),appId:(f=msg.getAppId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.ConversionAction.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.ConversionAction;return proto.google.ads.googleads.v2.resources.ConversionAction.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.ConversionAction.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 4:value=reader.readEnum();msg.setStatus(value);break;case 5:value=reader.readEnum();msg.setType(value);break;case 6:value=reader.readEnum();msg.setCategory(value);break;case 7:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setOwnerCustomer(value);break;case 8:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setIncludeInConversionsMetric(value);break;case 9:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setClickThroughLookbackWindowDays(value);break;case 10:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setViewThroughLookbackWindowDays(value);break;case 11:value=new proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings;reader.readMessage(value,proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.deserializeBinaryFromReader),msg.setValueSettings(value);break;case 12:value=reader.readEnum();msg.setCountingType(value);break;case 13:value=new proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings;reader.readMessage(value,proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.deserializeBinaryFromReader),msg.setAttributionModelSettings(value);break;case 14:value=new google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet;reader.readMessage(value,google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.deserializeBinaryFromReader),msg.addTagSnippets(value);break;case 15:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setPhoneCallDurationSeconds(value);break;case 16:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAppId(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.ConversionAction.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.ConversionAction.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(4,f),0!==(f=message.getType())&&writer.writeEnum(5,f),0!==(f=message.getCategory())&&writer.writeEnum(6,f),null!=(f=message.getOwnerCustomer())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getIncludeInConversionsMetric())&&writer.writeMessage(8,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getClickThroughLookbackWindowDays())&&writer.writeMessage(9,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getViewThroughLookbackWindowDays())&&writer.writeMessage(10,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getValueSettings())&&writer.writeMessage(11,f,proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.serializeBinaryToWriter),0!==(f=message.getCountingType())&&writer.writeEnum(12,f),null!=(f=message.getAttributionModelSettings())&&writer.writeMessage(13,f,proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.serializeBinaryToWriter),0<(f=message.getTagSnippetsList()).length&&writer.writeRepeatedMessage(14,f,google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.serializeBinaryToWriter),null!=(f=message.getPhoneCallDurationSeconds())&&writer.writeMessage(15,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getAppId())&&writer.writeMessage(16,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.displayName="proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.toObject=function(includeInstance,msg){var obj={attributionModel:jspb.Message.getFieldWithDefault(msg,1,0),dataDrivenModelStatus:jspb.Message.getFieldWithDefault(msg,2,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings;return proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setAttributionModel(value);break;case 2:value=reader.readEnum();msg.setDataDrivenModelStatus(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getAttributionModel())&&writer.writeEnum(1,f),0!==(f=message.getDataDrivenModelStatus())&&writer.writeEnum(2,f)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.prototype.getAttributionModel=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.prototype.setAttributionModel=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.prototype.getDataDrivenModelStatus=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings.prototype.setDataDrivenModelStatus=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.displayName="proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.toObject=function(includeInstance,msg){var f,obj={defaultValue:(f=msg.getDefaultValue())&&google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance,f),defaultCurrencyCode:(f=msg.getDefaultCurrencyCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),alwaysUseDefaultValue:(f=msg.getAlwaysUseDefaultValue())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings;return proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.DoubleValue;reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),msg.setDefaultValue(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setDefaultCurrencyCode(value);break;case 3:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setAlwaysUseDefaultValue(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getDefaultValue())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),null!=(f=message.getDefaultCurrencyCode())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getAlwaysUseDefaultValue())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.getDefaultValue=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,1)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.setDefaultValue=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.clearDefaultValue=function(){this.setDefaultValue(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.hasDefaultValue=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.getDefaultCurrencyCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.setDefaultCurrencyCode=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.clearDefaultCurrencyCode=function(){this.setDefaultCurrencyCode(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.hasDefaultCurrencyCode=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.getAlwaysUseDefaultValue=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,3)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.setAlwaysUseDefaultValue=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.clearAlwaysUseDefaultValue=function(){this.setAlwaysUseDefaultValue(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings.prototype.hasAlwaysUseDefaultValue=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setName=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,4,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,5,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getCategory=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setCategory=function(value){jspb.Message.setProto3EnumField(this,6,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getOwnerCustomer=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,7)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setOwnerCustomer=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearOwnerCustomer=function(){this.setOwnerCustomer(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasOwnerCustomer=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getIncludeInConversionsMetric=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,8)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setIncludeInConversionsMetric=function(value){jspb.Message.setWrapperField(this,8,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearIncludeInConversionsMetric=function(){this.setIncludeInConversionsMetric(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasIncludeInConversionsMetric=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getClickThroughLookbackWindowDays=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,9)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setClickThroughLookbackWindowDays=function(value){jspb.Message.setWrapperField(this,9,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearClickThroughLookbackWindowDays=function(){this.setClickThroughLookbackWindowDays(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasClickThroughLookbackWindowDays=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getViewThroughLookbackWindowDays=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,10)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setViewThroughLookbackWindowDays=function(value){jspb.Message.setWrapperField(this,10,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearViewThroughLookbackWindowDays=function(){this.setViewThroughLookbackWindowDays(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasViewThroughLookbackWindowDays=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getValueSettings=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v2.resources.ConversionAction.ValueSettings,11)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setValueSettings=function(value){jspb.Message.setWrapperField(this,11,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearValueSettings=function(){this.setValueSettings(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasValueSettings=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getCountingType=function(){return jspb.Message.getFieldWithDefault(this,12,0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setCountingType=function(value){jspb.Message.setProto3EnumField(this,12,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getAttributionModelSettings=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v2.resources.ConversionAction.AttributionModelSettings,13)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setAttributionModelSettings=function(value){jspb.Message.setWrapperField(this,13,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearAttributionModelSettings=function(){this.setAttributionModelSettings(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasAttributionModelSettings=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getTagSnippetsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet,14)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setTagSnippetsList=function(value){jspb.Message.setRepeatedWrapperField(this,14,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.addTagSnippets=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,14,opt_value,proto.google.ads.googleads.v2.common.TagSnippet,opt_index)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearTagSnippetsList=function(){this.setTagSnippetsList([])},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getPhoneCallDurationSeconds=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,15)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setPhoneCallDurationSeconds=function(value){jspb.Message.setWrapperField(this,15,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearPhoneCallDurationSeconds=function(){this.setPhoneCallDurationSeconds(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasPhoneCallDurationSeconds=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.getAppId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,16)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.setAppId=function(value){jspb.Message.setWrapperField(this,16,value)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.clearAppId=function(){this.setAppId(void 0)},proto.google.ads.googleads.v2.resources.ConversionAction.prototype.hasAppId=function(){return null!=jspb.Message.getField(this,16)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);