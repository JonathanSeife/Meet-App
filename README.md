Objective:

A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Key features:

1. Filter events by city.
•	User Story: As a user, I should be able to filter events by city so that I can see the list of events upcoming for that city.

•	Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.
o	Given user hasn’t searched for any city
o	When the user opens the app
o	Then the user should see a list of all upcoming events

•	Scenario 2: User should see a list of suggestions when they search for a city.
o	Given the main page is open
o	When user starts typing in the city textbox
o	Then the user should see a list of cities (suggestions) that match what they’ve typed

•	Scenario 3: User can select a city from the suggested list.
o	Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
o	When the user selects a city (e.g., “Berlin, Germany”) from the list
o	Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

2. Show/hide event details.
•	User Story: As a user, I should be able to show and hide event details so that I can view more or less information about an event.

•	Scenario 1: An event element is collapsed by default.
o	Given the list of events is open
o	When the user scrolls through the list of events
o	Then all event details should be hidden

•	Scenario 2: User can expand an event to see its details.
o	Given the list of events is open
o	When the user clicks on an event
o	Then the event details of that event should be open and show

•	Scenario 3: User can collapse an event to hide its details.
o	Given the user has previously opened an event to view its details
o	When the user clicks on the hide button
o	Then the event details of that event should now be hidden

3. Specify number of events.
•	User Story: As a user, I should be able to specify the number of events I want to view in the App.

•	Scenario 1: When user hasn’t specified a number, 32 is the default number
o	Given the user has not specified a number of events to be displayed
o	When the user opens the app
o	Then the user should see a maximum of 32 events by default

•	Scenario 2: User can change the number of events they want to see
o	Given A list of events is open
o	When the user changes the number of events that they want to be displayed 
o	Then the list should update to the specified number of events by the user

4. Use the app when offline.
•	User Story: As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

•	Scenario 1: Show cached data when there’s no internet connection
o	Given The user's device has no internet connection
o	When the user opens the app
o	Then previously cached data should be displayed

•	Scenario 2: Show error when user changes the settings (city, time range)
o	Given The user's device has no internet connection
o	When the user changes settings like city or time range
o	Then an error message should be displayed, informing the user that internet access is required in order to change settings

5. View a chart showing the number of upcoming events by city.
•	User Story: As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

•	Scenario 1: Show a chart with the number of upcoming events in each city
o	Given the user hasn’t searched for any city yet
o	When the user opens the app
o	Then a chart with upcoming events by city should by displayed
