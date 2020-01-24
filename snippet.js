/* Copyright 2020, VMware, Inc. All Rights 
   VMware vRealize Orchestrator 7.x Workflow sample

   Creates a User in Cloud Foundry UAA
*/


// Create user in UAA
var uaaApi = System.getModule("com.vmware.pso.util").getConfigElementAttributeValue("PSO/PaaS", "REST", "uaaApi");
var user = "testUser@yourOrg.com";
var userName = "Coke";
var userFirstName = "Fritz";
var body = {
	 "emails": [
    {
      "primary": true,
      "value": user
    }
  ],
  "name": {
    "familyName": userName,
    "givenName": userFirstName
  },
  "origin": "",
  "password": "",
  "userName": user
}

var requestType = "POST";
var operationUrl = "/Users";
var request = uaaApi.createRequest(requestType, operationUrl, JSON.stringify(body));
request.contentType = "application\/json";
request.setHeader("Accept", "Application/json");
request.setHeader("Authorization","bearer " + token);
System.warn(request.fullUrl)
var response = request.execute();
if(response.statusCode != 201) throw "REST request failed with staus code "+response.statusCode+"\r\nResponse is: "+response.contentAsString;

