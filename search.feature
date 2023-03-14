## Gherkin feature file:
Feature: Search Bar

Scenario: Searching a specific Surah by name or number that exists
  Given The user is on the search bar
   When The user types surah name OR number
   Then The system should display that surah  


Scenario: Searching a number(surah/juz/page)
  Given the user is on the search bar
   When the user types the number 
   Then The system should display that surah/juz/page number


Scenario: Searching a random text that is not the name of any surah/reciter/translator/anything
  Given the user is on the search bar
   When The user types text
   Then The system should not display anything with that name


Scenario: Searching a random text that is not the name of any surah or translator or reciter or translation
  Given the user is on the search bar
   When The user types text and presses enter key
   Then The system should display error message of no results found