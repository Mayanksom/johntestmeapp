
Feature: login to testme app
  I want to use this template for my feature file


@login
  Scenario Outline: login on testmeApp
    Given Alex has registered with testme App
    And click on the sign in button
    When he gives the correct "<username>" and "<password>"
    And click on login button
    Then he see the homepage
    Examples: 
      | username  | password | 
      | lalitha |     Password123 | 
       
