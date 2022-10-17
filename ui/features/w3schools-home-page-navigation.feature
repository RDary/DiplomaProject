@navigation
Feature: Get w3schools tests

   @changeTheme
   Scenario: The user visits the Home page
       Given the User opens web page https://www.w3schools.com
       # When the User clicks on the 'Accept all & visit the site' button
       When the User clicks on the 'Change Theme' button
       Then the User sees that the dark mode and dark code checkboxes are enabled

    

   @textVerify
   Scenario Outline: The button <Index> contains <Text> in the Footer
       When the User scrolls to the Footer
       Then the User sees that the button <Index> contains <Text>

   Examples:
       | Text         | Index | 
       | Quizzes      |   1   |
       | Exercises    |   2   |
       | Certificates |   3   |
       | Pro          |   4   |
       | Spaces       |   5   |
       | Support      |   6   |

   @button
   Scenario: The Footer
       When the User clicks on the 'Quizzes' button
       Then the User sees the page title 'W3Schools Quizzes'

   @back
       Scenario: Back to the Home page
       When the User clicks the 'Click to go back' arrow in the browser window
       Then the User sees the Home page is displayed
        

   @clickLogin
   Scenario: Redirect to the login page
       When the User clicks the login button
       Then the User is redirected to the login page
   




   

