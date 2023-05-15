Feature('search');
//Search surah
Scenario(' Searching a specific Surah by name or number that exists',({I})=>{
    I.amOnPage('http://www.quran.com')
    I.wait(2)
    I.click('//*[@id="command-bar"]/div[1]/span')
    // I.wait(2)
    I.fillField('//*[@id="command-bar"]/div[1]/span','Al-Fatihah')
    // I.pressKey('Enter');
    I.wait(3)
    I.click('Surah Al-Fatihah','//*[@id="radix-1"]/div/div[2]/ul/li/div[1]/ul/li/div[1]/p')

    // I.wait(2)
    // I.pressKeyDown('Enter')
    I.wait(3)
    I.see('1:1')
});

Scenario('Searching a random text that is not the name of any surah/reciter/translator/anything',({I})=>{
    I.amOnPage('http://www.quran.com')
    I.wait(2)
    I.click('//*[@id="command-bar"]/div[1]/span')
    I.wait(1)
    I.fillField('//*[@id="command-bar"]/div[1]/span','xyz')
    I.wait(1)
    I.dontSee('Navigations')
    I.wait(1)

});