@loginProcess
Feature: w3schools login process

   @login
   Scenario: Login with credantials
       Given the User opens web page https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com
       When the User logs in with credantials
       Then the User is redirected to the My learning page

   @myAccount
   Scenario: My learning page
       When the User clicks on the 'Continue Learn SQL' button
       Then the User sees that the page with the title 'Learn SQL' is displayed 