## Gherkin feature file:

Feature: Surah page

Scenario: Changing the translation
  Given The User is on the surah page
   When the user presses Change button next to translators name
   Then The List of all translators should be displayed
   When the user checks the translators name
   Then the system should show that translation in addition to the previous translation

Scenario: Playing surah audio
  Given The user is on a surah page
   When the user presses Play audio button
   Then the system should start playing the audio verse by verse from start verse

Scenario: Checking a single word's translation
  Given the user is on a surah
   When the user hovers over a specific word of a verse in a surah
   Then the system should display its meaning in a popup

Scenario: Reading Tafsir
  Given the user is on a specific verse of a surah
   When the user presses tafsir button
   Then the system should land the user on a popup page that displays the default tafsir and options of other Tafasir available in that language
   When the user toggles the language of the tafsir page
   Then the system should display the tafasirs available in that language
