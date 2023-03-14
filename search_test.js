Feature('search');
Scenario(' Searching a specific Surah by name or number that exists',({I})=>{
  Given('The user is on the search bar', () => {
    I.amOnPage('/')
    search = I.locate('div').withText('What do you want to read?')
  
  });
  
  When('The user types surah name OR number',()=>{
    I.fillField('What do you want to read?','Al-Fatihah')
  
    
  })
  Then('The system should display the drop down menu of all available languages',()=>{
    I.seeElement('Surah Al-Fatihah')
  })
  
});
Feature('search');

Scenario('Searching a random text that is not the name of any surah/reciter/translator/anything',({I})=>{

Given('the user is on the search bar',()=>{
  I.amOnPage('/')
  search = I.locate('div').withText('What do you want to read?')  
})

When('The user types text',()=>{
  I.fillField('What do you want to read?','xyz')
})
Then('The system should not display anything with that name',()=>{
  I.dontSeeElement('Navigations')
})

});