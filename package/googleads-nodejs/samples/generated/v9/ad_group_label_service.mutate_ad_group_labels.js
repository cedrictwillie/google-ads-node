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

function main(customerId, operations) {
  // [START googleads_v9_generated_AdGroupLabelService_MutateAdGroupLabels_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. ID of the customer whose ad group labels are being modified.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The list of operations to perform on ad group labels.
   */
  // const operations = 1234
  /**
   *  If true, successful operations will be carried out and invalid
   *  operations will return errors. If false, all operations will be carried
   *  out in one transaction if and only if they are all valid.
   *  Default is false.
   */
  // const partialFailure = true
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {AdGroupLabelServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new AdGroupLabelServiceClient();

  async function callMutateAdGroupLabels() {
    // Construct request
    const request = {
      customerId,
      operations,
    };

    // Run request
    const response = await googleadsClient.mutateAdGroupLabels(request);
    console.log(response);
  }

  callMutateAdGroupLabels();
  // [END googleads_v9_generated_AdGroupLabelService_MutateAdGroupLabels_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
