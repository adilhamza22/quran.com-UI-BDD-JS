Feature('surah');
//Toggle b/w Translations 
Scenario('Changing the translation',({I})=>{
  I.amOnPage('http://www.quran.com/1')
  I.wait(1)
  I.click('(Change)','.ChapterHeader_changeTranslation__UlDJ5')
  I.wait(3)
  //check Abdul Haleem
  I.checkOption('//*[@id="85"]')  
  I.wait(2)
  //press x button to go back
  I.click('//*[@id="__next"]/div/nav/div/div[2]/div/div[1]/div[1]/div/div/span/button')
  I.wait(3)
  I.see(' Abdul Haleem')
  I.wait(1)
    
});

//Play Audio
Scenario('Playing surah audio',({I})=>{
 I.amOnPage('http://www.quran.com/1')
 I.wait(3)
 I.click('Play Audio')
 I.wait(5)
 I.seeElement('//*[@id="__next"]/div/div[6]/div[2]/div[3]/span/button')


});

