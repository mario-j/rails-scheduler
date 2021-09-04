var data = [
  {
    Name: "Christy Schumm",
    Timezone: "(GMT-06:00) America/North_Dakota/New_Salem",
    "Day of Week": "Monday",
    "Available at": "9:00 AM",
    "Available until": "5:30 PM"
  },
  {
    Name: "Christy Schumm",
    Timezone: "(GMT-06:00) America/North_Dakota/New_Salem",
    "Day of Week": "Tuesday",
    "Available at": "8:00 AM",
    "Available until": "4:00 PM"
  },
  {
    Name: "Christy Schumm",
    Timezone: "(GMT-06:00) America/North_Dakota/New_Salem",
    "Day of Week": "Thursday",
    "Available at": "9:00 AM",
    "Available until": "4:00 PM"
  },
  {
    Name: "Christy Schumm",
    Timezone: "(GMT-06:00) America/North_Dakota/New_Salem",
    "Day of Week": "Friday",
    "Available at": "7:00 AM",
    "Available until": "2:00 PM"
  },
  {
    Name: "Natalia Stanton Jr.",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Tuesday",
    "Available at": "8:00 AM",
    "Available until": "10:00 AM"
  },
  {
    Name: "Natalia Stanton Jr.",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Wednesday",
    "Available at": "11:00 AM",
    "Available until": "6:00 PM"
  },
  {
    Name: "Natalia Stanton Jr.",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Saturday",
    "Available at": "9:00 AM",
    "Available until": "3:00 PM"
  },
  {
    Name: "Natalia Stanton Jr.",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Sunday",
    "Available at": "8:00 AM",
    "Available until": "3:00 PM"
  },
  {
    Name: "Nola Murazik V",
    Timezone: "(GMT-09:00) America/Yakutat",
    "Day of Week": "Monday",
    "Available at": "8:00 AM",
    "Available until": "10:00 AM"
  },
  {
    Name: "Nola Murazik V",
    Timezone: "(GMT-09:00) America/Yakutat",
    "Day of Week": "Tuesday",
    "Available at": "11:00 AM",
    "Available until": "1:00 PM"
  },
  {
    Name: "Nola Murazik V",
    Timezone: "(GMT-09:00) America/Yakutat",
    "Day of Week": "Wednesday",
    "Available at": "8:00 AM",
    "Available until": "10:00 AM"
  },
  {
    Name: "Nola Murazik V",
    Timezone: "(GMT-09:00) America/Yakutat",
    "Day of Week": "Saturday",
    "Available at": "8:00 AM",
    "Available until": "11:00 AM"
  },
  {
    Name: "Nola Murazik V",
    Timezone: "(GMT-09:00) America/Yakutat",
    "Day of Week": "Sunday",
    "Available at": "7:00 AM",
    "Available until": "9:00 AM"
  },
  {
    Name: "Elyssa O'Kon",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Monday",
    "Available at": "9:00 AM",
    "Available until": "3:00 PM"
  },
  {
    Name: "Elyssa O'Kon",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Tuesday",
    "Available at": "6:00 AM",
    "Available until": "1:00 PM"
  },
  {
    Name: "Elyssa O'Kon",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Wednesday",
    "Available at": "6:00 AM",
    "Available until": "11:00 AM"
  },
  {
    Name: "Elyssa O'Kon",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Friday",
    "Available at": "8:00 AM",
    "Available until": "12:00 PM"
  },
  {
    Name: "Elyssa O'Kon",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Saturday",
    "Available at": "9:00 AM",
    "Available until": "4:00 PM"
  },
  {
    Name: "Elyssa O'Kon",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Sunday",
    "Available at": "8:00 AM",
    "Available until": "10:00 AM"
  },
  {
    Name: "Dr. Geovany Keebler",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Thursday",
    "Available at": "7:00 AM",
    "Available until": "2:00 PM"
  },
  {
    Name: "Dr. Geovany Keebler",
    Timezone: "(GMT-06:00) Central Time (US & Canada)",
    "Day of Week": "Thursday",
    "Available at": "3:00 PM",
    "Available until": "5:00 PM"
  }
];

const JSONdata = JSON.parse(JSON.stringify(data));

var selectedCoach;
var selectedDate = new Date().toISOString().split('T')[0];
var selectedTime;
document.addEventListener("turbolinks:load", function() {
  renderCoachesDropDown();
  renderDatePicker(selectedDate);
  renderTimeDropDown(selectedDate);
  setupBookButton();
});

function renderCoachesDropDown() {
  //store coaches
  var coaches = new Map();
  JSONdata.forEach(function (schedule) {
    coaches.set(schedule.Name, schedule['Day of Week']);
  });
  var coachArr = Array.from( coaches.keys() )
  selectedCoach =  coachArr[0];

  var select = document.createElement("select");
  select.name = "coaches";
  select.id = "coaches";
  select.onchange = function(event) {
    selectedName = event.target.value;
    selectedDate = document.getElementById('date').value;
    renderTimeDropDown(selectedDate);
  }

  for (const coach of coachArr)
  {
    var option = document.createElement("option");
    option.value = coach;
    option.text = coach.charAt(0).toUpperCase() + coach.slice(1);
    select.appendChild(option);
  }
  console.log("est", document.getElementById('coachContainer'));
  document.getElementById("coachContainer").appendChild(select);
}

function renderDatePicker(selectedDate) {
  var date = new Date();
  var input = document.createElement("input");
  input.value = selectedDate;
  input.name = "date";
  input.id = "date";
  input.type="date";
  input.min = selectedDate;
  input.onchange = function(event) {
    selectedDate = event.target.value;
    renderTimeDropDown(selectedDate);
  }

  document.getElementById("dateContainer").appendChild(input);
}

function renderTimeDropDown(selectedDate) {
  removeAllChildNodes(document.getElementById("timeContainer"));
  selectedCoach = document.getElementById('coaches').value;
  var dayOfWeek = getDayOfWeek(selectedDate);
  var filteredData = JSONdata.filter(function (i,n){
    return i.Name===selectedCoach && i["Day of Week"] == dayOfWeek;
  });
  var ranges = [];
  filteredData.forEach(function(record) {
    ranges = ranges.concat(generateRanges(record['Available at'], record['Available until'], record.Timezone.substring(1, 10)));
  })

  var values = ranges.length == 0 ? ["No times available"] : ranges;
  selectedTime = values[0];
  var select = document.createElement("select");
  select.name = "time";
  select.id = "time"

  for (const val of values)
  {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }

  document.getElementById("timeContainer").appendChild(select);
}


function generateRanges(start, end, timezone) {
  var ranges = [];

  var values = selectedDate.split("-");
  var mm = values[1] - 1;
  var dd = values[2];
  var yyyy = values[0];
  var startString = mm + "/" + dd + "/" + yyyy + " " + convertTo24HourTime(start) + " " + 'GMT-06:00';
  var endString = mm + "/" + dd + "/" + yyyy + " " + convertTo24HourTime(end)  + " " + timezone;

  var date = new Date();
  var startDatetime = new Date(startString);
  var endDatetime = new Date(endString);
  console.log("dates", startString + "\n", startDatetime, startDatetime.toLocaleString())
  while (startDatetime < endDatetime) {
    var time = formatTime(startDatetime);
    startDatetime.setTime(startDatetime.getTime() + 30 * 60000);
    var timePlus30Min = formatTime(startDatetime);
    ranges.push(time + " - " + timePlus30Min);
  }
  return ranges;
}

function setupBookButton() {
  document.getElementById('bookButton').addEventListener('click', function(event) {
    if (document.getElementById('time').value != 'No times available') {
      console.log("do stuff with form values");
      console.log("Coach: ", document.getElementById('coaches').value);
      console.log("Date: ", document.getElementById('date').value);
      console.log("Time: ", document.getElementById('time').value);
      Alert("test");
    }
  })
}

//Helper Functions
function getDayOfWeek(selectedDate) {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var values = selectedDate.split("-");
  var mm = values[1] - 1;
  var dd = values[2];
  var yyyy = values[0];
  var date = new Date(yyyy, mm, dd, 0);
  return daysOfWeek[date.getDay()];
}

function convertTo24HourTime(time) {
  var res = '';
  var hhmm = time.split(" ")[0]
  if (time.toLowerCase().includes('am')) {
    res = hhmm + ":00";
  } else if (time.toLowerCase().includes('pm')) {
    var hh = hhmm.split(":")[0];
    var mm = hhmm.split(":")[1];
    res = (parseInt(hh) + 12).toString() + ":" + mm + ":00";
  }
  return res;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function formatTime(date) {
  var hr = date.getHours();
  var min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = " am";
  if (hr >= 12) {
    hr -= 12;
    ampm = " pm";
  }
  if (hr == 0) {
    hr = 12;
  }
  return hr + ":" + min + ampm;
}
