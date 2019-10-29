Feature: register on demo wb shop
  I want to use this template for my feature file

  @register
  Scenario Outline: demo web shop register with multiple users
    Given John is on demo web shop
    And clicks on the register button
    When he chooses "<gender>" and  enters "<firstname>" and "<lastname>" and "<Email>" and "<Password>" and "<ConfirmPassword>"
    Then he clicks on submit register button
    And he sees registration complete page and he clicks on continue button to continue

    Examples: 
      | gender | firstname | lastname | Email                | Password  | ConfirmPassword |
      | male   | mayank    | patil    | k8979123patil@gmail.com | nitika123 | nitika123       |
      | female | janak     | patel    | h8979123patil@gmail.com | nitika123 | nitika123       |
