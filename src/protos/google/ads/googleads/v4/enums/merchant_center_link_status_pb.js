var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus",null,global),proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.displayName="proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.toObject=function(e,o){var t={};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum;return proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,PENDING:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);