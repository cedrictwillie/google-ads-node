// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(campaignDraft) {
  // [START googleads_v10_generated_CampaignDraftService_PromoteCampaignDraft_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the campaign draft to promote.
   */
  // const campaignDraft = 'abc123'
  /**
   *  If true, the request is validated but no Long Running Operation is created.
   *  Only errors are returned.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {CampaignDraftServiceClient} = require('google-ads').v10;

  // Instantiates a client
  const googleadsClient = new CampaignDraftServiceClient();

  async function callPromoteCampaignDraft() {
    // Construct request
    const request = {
      campaignDraft,
    };

    // Run request
    const [operation] = await googleadsClient.promoteCampaignDraft(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callPromoteCampaignDraft();
  // [END googleads_v10_generated_CampaignDraftService_PromoteCampaignDraft_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));