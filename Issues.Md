#Found issues:

##Issue 1:
###Steps to reproduce:
1. Browse to given url: https://form.jotform.com/210137027408345
2. Click next 4 times so you can get to the step 4. 
3. Click calendar button and click on "Today". 

###Expected output:
The calendar popup should close.

###Actual output:
The calendar popup stays open. In order to close that you either need to click on a specific date, either need to click somehwere else on the page.

##Issue 2:
###Steps to reproduce:
1. Browse to given url: https://form.jotform.com/210137027408345
2. Click next 5 times so you can get to the step 5(last step).
3. Click on the dropdown and observe the first option.

###Expected output:
Each dropdown option should contain a text option.

###Actual output:
The first dropdown option is blank, and selecting that option results in an error.

###Note:
As a UX issue, the error message for missing a value, is not very explicit. It would be more helpful to have an error that would point to selecting a valid option.

