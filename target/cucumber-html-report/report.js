$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/Desktop/New Folder/cucumbercasestudy/Features/addtocart.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "invalid add to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addtocart"
    }
  ]
});
formatter.step({
  "name": "Alex has registered into demowebshop website",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "he searched for computer",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "he clicks on shopping cart",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "sees Your Shopping Cart is empty!",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});