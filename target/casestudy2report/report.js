$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/Desktop/New Folder/cucumbercasestudy/Features/login.feature");
formatter.feature({
  "name": "login to testme app",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login on testmeApp",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Alex has registered with testme App",
  "keyword": "Given "
});
formatter.step({
  "name": "click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "he gives the correct \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "he see the homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "lalitha",
        "Password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login on testmeApp",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Alex has registered with testme App",
  "keyword": "Given "
});
formatter.match({
  "location": "login.alex_has_registered_with_testme_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "login.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he gives the correct \"lalitha\" and \"Password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.he_gives_the_correct_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he see the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.he_see_the_homepage()"
});
formatter.result({
  "status": "passed"
});
});