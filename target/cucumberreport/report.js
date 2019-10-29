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
        "m8979123patil@gmail.com",
        "nitika123",
        "nitika123"
      ]
    },
    {
      "cells": [
        "female",
        "janak",
        "patel",
        "j8979123patil@gmail.com",
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
  "name": "he chooses \"male\" and  enters \"mayank\" and \"patil\" and \"m8979123patil@gmail.com\" and \"nitika123\" and \"nitika123\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\u0027button-1 register-continue-button\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HDC2-D-CBTPXJ2\u0027, ip: \u002710.211.154.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.17\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:56896}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 49456c710affc04c0c706aa71e8eae90\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027button-1 register-continue-button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat multipleuser.multipleusercasestudy.he_sees_registration_complete_page_and_he_clicks_on_continue_button_to_continue(multipleusercasestudy.java:64)\r\n\tat ✽.he sees registration complete page and he clicks on continue button to continue(C:/Users/Training_h2a.06.17/Desktop/New Folder/cucumbercasestudy/Features/register.feature:10)\r\n",
  "status": "failed"
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
  "name": "he chooses \"female\" and  enters \"janak\" and \"patel\" and \"j8979123patil@gmail.com\" and \"nitika123\" and \"nitika123\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\u0027button-1 register-continue-button\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HDC2-D-CBTPXJ2\u0027, ip: \u002710.211.154.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.17\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:56920}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 109f7ff838ccd8e2d8f159f337b443d8\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027button-1 register-continue-button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat multipleuser.multipleusercasestudy.he_sees_registration_complete_page_and_he_clicks_on_continue_button_to_continue(multipleusercasestudy.java:64)\r\n\tat ✽.he sees registration complete page and he clicks on continue button to continue(C:/Users/Training_h2a.06.17/Desktop/New Folder/cucumbercasestudy/Features/register.feature:10)\r\n",
  "status": "failed"
});
});