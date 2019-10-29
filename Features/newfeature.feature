
Feature: Title of your feature
  I want to use this template for my feature file
Background:
given record of any faulty item as per the guidelines

@newfeature
  Scenario Outline: jeff returns faulty microwave
    Given jeff has brought microwave for "<p1>" 
    And jeff has the report
    When when jeff returns the faulty items
    Then jeff got return of "<p2>"

    Examples: 
      | p1  |   p2 |
      | 100 | 90   | 
      | 120 |  110 | 
