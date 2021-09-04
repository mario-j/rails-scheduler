# Rails Scheduler

A simple form to allow users to book appointment times.

## Setup

Make sure your local environment is set up to run Rails 6.1.4.1 and Ruby 3.0.1 (it will most likely run with other versions, but these are the ones I used)

 - Open a terminal and clone the repo locally using ```git clone```
 - Navigate to the project using ```cd rails-scheduler```
 - Install dependencies using ```bundle install```
 - Run the server using ```rails s```

## Layout

The data used to populate the form is currently hardcoded in a JSON-like object. The form_builder.js file uses that data to build the form for the user to book a time with a coach.
