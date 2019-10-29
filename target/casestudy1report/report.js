$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/Desktop/New Folder/cucumbercasestudy/Features/register.feature");
formatter.feature({
  "name": "register on demo wb shop",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "demo web shop register with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "John is on demo web shop",
  "keyword": "Given "
});
formatter.step({
  "name": "clicks on the register button",
  "keyword": "And "
});
formatter.step({
  "name": "he chooses \"\u003cgender\u003e\" and  enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "he clicks on submit register button",
  "keyword": "Then "
});
formatter.step({
  "name": "he sees registration complete page and he clicks on continue button to continue",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "gender",
        "firstname",
        "lastname",
        "Email",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "male",
        "mayank",
        "patil",
        "k8979123patil@gmail.com",
        "nitika123",
        "nitika123"
      ]
    },
    {
      "cells": [
        "female",
        "janak",
        "patel",
        "h8979123patil@gmail.com",
        "nitika123",
        "nitika123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "demo web shop register with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "John is on demo web shop",
  "keyword": "Given "
});
formatter.match({
  "location": "multipleusercasestudy.john_is_on_demo_web_shop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the register button",
  "keyword": "And "
});
formatter.match({
  "location": "multipleusercasestudy.clicks_on_the_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he chooses \"male\" and  enters \"mayank\" and \"patil\" and \"k8979123patil@gmail.com\" and \"nitika123\" and \"nitika123\"",
  "keyword": "When "
});
formatter.match({
  "location": "multipleusercasestudy.he_chooses_and_enters_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks on submit register button",
  "keyword": "Then "
});
formatter.match({
  "location": "multipleusercasestudy.he_clicks_on_submit_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he sees registration complete page and he clicks on continue button to continue",
  "keyword": "And "
});
formatter.match({
  "location": "multipleusercasestudy.he_sees_registration_complete_page_and_he_clicks_on_continue_button_to_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "demo web shop register with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "John is on demo web shop",
  "keyword": "Given "
});
formatter.match({
  "location": "multipleusercasestudy.john_is_on_demo_web_shop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the register button",
  "keyword": "And "
});
formatter.match({
  "location": "multipleusercasestudy.clicks_on_the_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he chooses \"female\" and  enters \"janak\" and \"patel\" and \"h8979123patil@gmail.com\" and \"nitika123\" and \"nitika123\"",
  "keyword": "When "
});
formatter.match({
  "location": "multipleusercasestudy.he_chooses_and_enters_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks on submit register button",
  "keyword": "Then "
});
formatter.match({
  "location": "multipleusercasestudy.he_clicks_on_submit_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he sees registration complete page and he clicks on continue button to continue",
  "keyword": "And "
});
formatter.match({
  "location": "multipleusercasestudy.he_sees_registration_complete_page_and_he_clicks_on_continue_button_to_continue()"
});
formatter.result({
  "status": "passed"
});
});