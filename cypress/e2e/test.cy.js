// describe('Login Test',() => {
//     it('validate Login and followed functionalities',() => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/');
//         cy.get('input#username').clear().type('student');
//         cy.get('input#password').clear().type('Password1234')
//         cy.get('.btn').click()
//         cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
//         cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
//         cy.get('a[href*="practice-test-login/"]').should('be.visible')

//     })
// })

// describe('Login Test',() => {
//     it('validate Login and followed functionalities',() => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/');
//         cy.get('input#username').type('student11');
//         cy.get('input#password').type('Password1234')
//         cy.get('.btn').click()
//         cy.get('#error').should('have.text','Your username is invalid!')
//         cy.get('#error').should('have.text','Congratulations student. You success!')
//         cy.get('a[href*="practice-test-login/"]').should('be.visible')        
//     })
// })




//  it('amazon iphone',() => {
//     cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=6402236312271556203&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061895&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1')
//     cy.get('#twotabsearchtextbox').type('iphone')
//      cy.get('#nav-search-submit-button').click()
//      cy.visit('https://www.amazon.in/s?k=iphone&crid=2TAD5464HYME&sprefix=iphone%2Caps%2C266&ref=nb_sb_noss_2')
//  })


// it('flipkart shirt',() =>{
// cy.visit('https://www.flipkart.com/')
// cy.get('zDPmFV').type('shirt')
// cy.get('[data-id=SHTGPGNGEGNYQSWU]')
// })



// it('validate login and followed functionalities', () => {
// cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// cy.get('[value="radio1"]').check().should('have.value','radio1')
// cy.get('label [type="checkbox"]').check(["option2","option3"])
// cy.get('select').select('option3').should('have.value','option3')
// cy.get('input#autocomplete').type('ch')
// cy.get('.ui-menu-item div').each(($countries)=>{
//     if($countries.text()==='China'){
//         cy.wrap($countries).click({force: true})
//     }
// })
// })


// it('validate login and followed functionalities', () => {
//      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//      cy.get('#alertbtn').click()
//      cy.on('window:alert',(altTxt)=>{
//     expect(altTxt).to.eq('Hello , share this practice page and share your knowledge')
//     return true
//      })
//      cy.get('#confirmbtn').click()
//      cy.on('window:confirm',(altTxt)=>{
//         expect(altTxt).to.eq('Hello , Are ypu sure you want to confirm?')
//         return false
//      })
// })

describe('Ticketnew.com testing', () => {
    it('Ticket booking', () => {
      cy.visit('https://ticketnew.com/')
      cy.get('a[href="/movies/chennai"]').eq(0).click()
      cy.url().should('contain','chennai')
      cy.wait(2000);
      cy.get(':nth-child(1) > .H5RunningMovieV2_runningMovie_3_RWh > a > .H5RunningMovieV2_imgWrapper_inAMo > .bgImg').click()
      cy.title().should('include','Viduthalai Part - 2')
      cy.get(':nth-child(2) > .MovieSessionsListing_col2__2vcaY > :nth-child(2) > .greenCol').click()
      cy.contains('button', 'Proceed',{ timeout: 10000 }).click();
      cy.on('window:alert',(alerttext)=>{
        expect(alerttext).to.equal('This movie has been rated ‘A’ and is for audiences above the age of 18. Please carry a valid photo ID/ age proof to the theatre. Refund will not be issued if entry is denied due to age requirements not being met.');
      return true
      })
      cy.contains('div', 'EI',{ timeout: 50000 }).should('include.text','EI').then(()=>{
      cy.get(':nth-child(1) > .FixedSeating_rightRow_MQXfw > ul > :nth-child(10) > .FixedSeating_seatL__joUf > :nth-child(10) > .available')
         .click();
      cy.get('button', { timeout: 20000 }).click()
      })
})
  })
  
