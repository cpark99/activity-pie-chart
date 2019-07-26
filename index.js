"use strict";

var rowCount = 1;
var data = [];
var showChart = false;

function setDefaultOptions() {
  $('#start-hour-1').val(6);
  $('#end-hour-1').val(7);
}

function addMinuteOptions() {
  var minutes = [];

  $(".js-start-minute-" + rowCount).append(
    "<option value=" + 5 + " >0" + 5 + "</option>"
  );
  $(".js-end-minute-" + rowCount).append(
    "<option value=" + 5 + " >0" + 5 + "</option>"
  );
  for (var i = 0; i < 12; i++) {
    minutes.push(i);
  }
  for (var i = 2; i < minutes.length; i++) {
    $(".js-start-minute-" + rowCount).append(
      "<option value=" + i * 5 + " >" + i * 5 + "</option>"
    );
    $(".js-end-minute-" + rowCount).append(
      "<option value=" + i * 5 + " >" + i * 5 + "</option>"
    );
  }
  setDefaultOptions();
}

// prettier-ignore
function addInputRow() {
  $('.js-start-times').append(
    '<div id="input-item-' + rowCount + '">' +
      '<div id="start-time-' + rowCount + '" class="input-row">' +
        '<select id="start-hour-' + rowCount + '" name="start-hour-' + rowCount + '" class="js-start-hour-' + rowCount + ' input-select" required>' +
        ' <option value="">--</option>' +
        "</select>" +
        '<select  id="start-minute-' + rowCount + '" name="start-minute-' + rowCount + '" class="js-start-minute-' + rowCount + ' input-select">' +
          '<option value="0">00</option>' +
        "</select>" +
        '<select  id="start-meridiem-' + rowCount + '" name="start-meridiem-' + rowCount + '">' +
          '<option value="1">AM</option>' +
          '<option value="2">PM</option>' +
        "</select>" +
      "</div>" +
      '<p id="start-validation-message-' + rowCount + '" class="validation-message-' + rowCount + ' validation-message hidden">*Enter valid time</p>' +
    "</div>"
  )
  $('.js-end-times').append(
    '<div id="end-input-item-' + rowCount + '">' +
      '<div id="end-time-' + rowCount + '" class="input-row">' +
        '<select id="end-hour-' + rowCount + '" name="end-hour-' + rowCount + '" class="js-end-hour-' + rowCount + ' input-select" required>' +
        ' <option value="">--</option>' +
        "</select>" +
        '<select id="end-minute-' + rowCount + '" name="end-minute-' + rowCount + '" class="js-end-minute-' + rowCount + ' input-select">' +
          '<option value="0">00</option>' +
        "</select>" +
        '<select id="end-meridiem-' + rowCount + '" name="end-meridiem-' + rowCount + '">' +
          '<option value="1">AM</option>' +
          '<option value="2">PM</option>' +
        "</select>" +
      "</div>" +
      '<p id="end-validation-message-' + rowCount + '" class="validation-message-' + rowCount + ' validation-message hidden">*Enter valid time</p>' +
    "</div>"
  )
  $('.js-activity-name').append(
    '<input type="text" id="activity-input-' + rowCount + '" name="activity-input-' + rowCount + '" class="form-input input-row" placeholder="Activity #' + rowCount + '"/>' +
    '<p id="activity-validation-message-' + rowCount + '" class="validation-message-' + rowCount + ' validation-message hidden">*Enter valid Activity</p>'
  )
  addSelectOptions();
}

function handleAddRow() {
  $("#add-row-button").click(e => {
    e.preventDefault();
    rowCount++;
    addInputRow();
  });
}

function addSelectOptions() {
  var hours = [];

  for (var i = 0; i < 12; i++) {
    hours.push(i);
  }
  for (var i = 0; i < hours.length; i++) {
    $(".js-start-hour-" + rowCount).append(
      "<option value=" + (i + 1) + " >" + (i + 1) + "</option>"
    );
    $(".js-end-hour-" + rowCount).append(
      "<option value=" + (i + 1) + " >" + (i + 1) + "</option>"
    );
  }
  addMinuteOptions();
}

// prettier-ignore
function addFirstInputRow() {
  $('.js-start-times').append(
    '<div id="input-item-1">' +
      '<div id="start-time-1" class="input-row">' +
        '<select id="start-hour-1" name="start-hour-1" class="js-start-hour-1 input-select" required>' +
        ' <option value="">--</option>' +
        "</select>" +
        '<select id="start-minute-1" name="start-minute-1" class="js-start-minute-1 input-select">' +
          '<option value="0">00</option>' +
        "</select>" +
        '<select id="start-meridiem-1" name="start-meridiem-1">' +
          '<option value="1">AM</option>' +
          '<option value="2">PM</option>' +
        "</select>" +
      "</div>" +
      '<p id="start-validation-message-1" class="validation-message-1 validation-message hidden">*Enter valid time</p>' +
    "</div>"
  )
  $('.js-end-times').append(
    '<div id="end-input-item-1">' +
      '<div id="end-time-1" class="input-row">' +
        '<select id="end-hour-1" name="end-hour-1" class="js-end-hour-1 input-select" required>' +
        ' <option value="">--</option>' +
        "</select>" +
        '<select id="end-minute-1" name="end-minute-1" class="js-end-minute-1 input-select">' +
          '<option value="0">00</option>' +
        "</select>" +
        '<select id="end-meridiem-1" name="end-meridiem-1">' +
          '<option value="1">AM</option>' +
          '<option value="2">PM</option>' +
        "</select>" +
      "</div>" +
      '<p id="end-validation-message-1" class="validation-message-1 validation-message hidden">*Enter valid time</p>' +
    "</div>"
  )
  $('.js-activity-name').append(
    '<input type="text" id="activity-input-1" name="activity-input-1" class="form-input input-row" placeholder="Get ready for school"/>' +
    '<p id="activity-validation-message-1" class="validation-message-1 validation-message hidden">*Enter valid Activity</p>'
  )
  addSelectOptions();
}

// prettier-ignore
function loadForm() {
  // need to create array for "hours" and "minutes"
  // loop through arrays for option values (below)
  $(".js-form-inputs").append(
    '<div class="start-times input-column js-start-times">' +
      '<label for="start-time-1" class="form-label">Start time:</label>' +
    "</div>" +
    '<div class="end-times  input-column js-end-times">' +
      '<label for="end-time-1" class="form-label">End time:</label>' +
    "</div>" +
    '<div class="activity-name js-activity-name">' +
      '<label for="activity-input-1" class="form-label">Activity:</label>' +
    "</div>"
    // add a button to show more input selects (add to html page?) ***
  );
}

function hideValidationMessage(number) {
  $(".validation-message-" + number).addClass("hidden");
  $(".validation-message-" + number).removeClass("visible-message");
}

function showValidationMessage(number) {
  $(".validation-message-" + number).removeClass("hidden");
  $(".validation-message-" + number).addClass("visible-message");
  $("#pie-chart").remove();
}

function loadPieChart() {
  var labels = [];
  for (var i = 0; i < rowCount; i++) {
    if (
      $("#activity-input-" + (i + 1))
        .val()
        .trim() != ""
    ) {
      labels.push(
        $("#activity-input-" + (i + 1))
          .val()
          .trim()
      );
    } else {
      labels.push("Activity #" + (i + 1));
    }
  }
  $("#pie-chart").remove();
  $(".chartjs-size-monitor").remove();
  $(".pie-chart-area").append('<canvas id="pie-chart"></canvas>');
  var ctx = document.getElementById("pie-chart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "pie",
    data: {
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#FF6384",
            "#63ffde",
            "#318d8d",
            "#FFCE56",
            "#d484d4",
            "#E7E9ED",
            "#c6b0ff",
            "#36A2EB",
            "#ff5a17",
            "#ff63d2",
            "#63d2ff",
            "#63ff90",
            "#c04b4b",
            "#ffeeb0",
            "#c04b86",
            "#ffc6b0",
            "#84d4d4",
            "#9063ff",
            "#ffb0e9",
            "#001d7f"
          ],
          label: "My dataset" // for legend
        }
      ],
      labels: labels
    },
    options: {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 50,
          bottom: 50
        }
      },
      legend: {
        display: false
      }
    }
  });
  data = [];
  if ($(".visible-message").length != 0) {
    $("#pie-chart").remove();
  }
  // $('#pie-chart').css({'width': '430px','height': '210px'});
}

function getInputValues() {
  var startTimes = [];
  var endTimes = [];
  var totalTimes = [];
  for (var i = 0; i < rowCount; i++) {
    var startHour = parseInt($("#start-hour-" + (i + 1)).val(), 10);
    var startMinute = parseInt($("#start-minute-" + (i + 1)).val(), 10);
    var endHour = parseInt($("#end-hour-" + (i + 1)).val(), 10);
    var endMinute = parseInt($("#end-minute-" + (i + 1)).val(), 10);
    if ($("#start-meridiem-" + (i + 1)).val() === "2") {
      startHour = (startHour + 12) * 60;
      if (startHour === 1440) {
        startHour = 720;
      }
    } else {
      if (startHour === 12) {
        startHour -= 12;
      }
      startHour *= 60;
    }
    startTimes.push(startHour + startMinute);
    startHour = 0;
    startMinute = 0;
    if ($("#end-meridiem-" + (i + 1)).val() === "2") {
      endHour = (endHour + 12) * 60;
    } else {
      if (endHour === 12) {
        endHour = 24;
        if (parseInt($("#start-hour-" + (i + 1)).val(), 10) === 12 && $("#start-meridiem-" + (i + 1)).val() === "1") {
          endHour = 0;
          if (parseInt($("#start-minute-" + (i + 1)).val()) != 0) {
            endHour = 24;
          }
        }
      }
      endHour *= 60;
    }
    endTimes.push(endHour + endMinute);
    endHour = 0;
    endMinute = 0;
  }
  for (var i = 0; i < startTimes.length; i++) {
    var totalTime = endTimes[i] - startTimes[i];
    if (totalTime <= 0) {
      showValidationMessage(i + 1);
      $("#start-validation-message-" + (i + 1)).css({ opacity: 0 });
      $("#end-validation-message-" + (i + 1)).css({ opacity: 1 });
      $("#activity-validation-message-" + (i + 1)).css({ opacity: 0 });
      showChart = false;
    } else {
      totalTimes.push(totalTime);
      data = totalTimes;
      loadPieChart();
    }
  }
}

function validateInput() {
  for (var i = 0; i < rowCount; i++) {
    if ($("#start-hour-" + (i + 1)).val() === "") {
      showValidationMessage(i + 1);
      $("#start-validation-message-" + (i + 1)).css({ opacity: 1 });
      $("#end-validation-message-" + (i + 1)).css({ opacity: 0 });
      $("#activity-validation-message-" + (i + 1)).css({ opacity: 0 });
    } else if ($("#end-hour-" + (i + 1)).val() === "") {
      showValidationMessage(i + 1);
      $("#start-validation-message-" + (i + 1)).css({ opacity: 0 });
      $("#end-validation-message-" + (i + 1)).css({ opacity: 1 });
      $("#activity-validation-message-" + (i + 1)).css({ opacity: 0 });
    } else {
      hideValidationMessage(i + 1);
      getInputValues();
    }
  }
}

function handleFormSubmit() {
  $("#form-submit-button").click(e => {
    e.preventDefault();
    hideValidationMessage();
    validateInput();
  });
}

function handleCloseButton() {
  $(".close-button-box").click(e => {
    $("#pie-chart-modal").addClass("hidden");
    $("#chart-button-frame").removeClass("hidden");
  });
}

function handleWidgetStart() {
  loadForm();
  handleAddRow();
  addFirstInputRow();
  handleFormSubmit();
  handleCloseButton();
}

function hideWidgetButton() {
  $("#chart-button-frame").addClass("hidden");
}

function handleWidgetOpen() {
  $("#chart-open-button").click(e => {
    $("#pie-chart-modal").removeClass("hidden");
    hideWidgetButton();
  });
  handleWidgetStart();
}

$(handleWidgetOpen);
