"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_ad_group_simulation_service_pb=require("../../../../../google/ads/googleads/v4/services/ad_group_simulation_service_pb.js"),google_ads_googleads_v4_resources_ad_group_simulation_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_simulation_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_AdGroupSimulation(e){if(!(e instanceof google_ads_googleads_v4_resources_ad_group_simulation_pb.AdGroupSimulation))throw new Error("Expected argument of type google.ads.googleads.v4.resources.AdGroupSimulation");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_AdGroupSimulation(e){return google_ads_googleads_v4_resources_ad_group_simulation_pb.AdGroupSimulation.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetAdGroupSimulationRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetAdGroupSimulationRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetAdGroupSimulationRequest(e){return google_ads_googleads_v4_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest.deserializeBinary(new Uint8Array(e))}var AdGroupSimulationServiceService=exports.AdGroupSimulationServiceService={getAdGroupSimulation:{path:"/google.ads.googleads.v4.services.AdGroupSimulationService/GetAdGroupSimulation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest,responseType:google_ads_googleads_v4_resources_ad_group_simulation_pb.AdGroupSimulation,requestSerialize:serialize_google_ads_googleads_v4_services_GetAdGroupSimulationRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetAdGroupSimulationRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_AdGroupSimulation,responseDeserialize:deserialize_google_ads_googleads_v4_resources_AdGroupSimulation}};exports.AdGroupSimulationServiceClient=grpc.makeGenericClientConstructor(AdGroupSimulationServiceService);