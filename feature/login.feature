Feature: the internet website

Scenario: As a user, i can log into the secure area.

Given I am on the "login" page 
When I loguin with "<username>" and "<password>"
Then I should see message saying "<message>"

Examples:
| username | password             | message                        |
| tomsmith | SuperSecretPassword! | You logged into a secure area! |
| foobar   | barfoo               | Your username is invalid!      |