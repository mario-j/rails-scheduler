# Rails Scheduler

A simple form to allow users to book appointment times.

## Setup

Make sure your local environment is set up to run Rails 6.1.4.1 and Ruby 3.0.1 (it will most likely run with other versions, but these are the ones I used)

 - Open a terminal and clone the repo locally using ```git clone https://github.com/mario-j/rails-scheduler.git```
 - Navigate to the project using ```cd rails-scheduler```
 - Install dependencies using ```bundle install```
 - Run the server using ```rails s```

## Layout

The data used to populate the form is currently hardcoded in a JSON-like object. The form_builder.js file uses that data to build the form for the user to book a time with a coach.

## Challenges/Thoughts

- I tried setting up a postgresql db to store the records instead of a hardcoded object, but ran into issues regarding hardware incompatibilities on my local machine.
- I think it might've been a better to take a more 'ruby-centric' approach to the logic of the form rather then building the form using JavaScript. 
