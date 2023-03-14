Feature(' Customize Home Page');

Scenario(' Changing Home Page Language',  ({ I }) => {
    I.amOnPage('http://www.quran.com')
    I.wait(3)
    I.click('Select Language')
    I.see('English')
    I.wait(3)
});
