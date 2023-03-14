# Gherkin feature file:

Feature: Customize Home Page

Scenario: Changing Home Page Language
  Given The user is on the home page
   When The user presses language button
   Then The system should display the drop down menu of all available languages