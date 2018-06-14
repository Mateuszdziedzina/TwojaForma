/* function to create an activity object */

function Activity(description, kcalPerHour) {
    this.id = Activity.UID++;				/* unique ID number */
    this.description = description;			/* description of the activity */
    this.isCompleted = false;				/* flag to indicate if activity is already done or not */
    this.kcalPerHour = kcalPerHour;			/* calories burn per hour */
}

Activity.UID = 1;							/* ID variable needed for create unique IDs for activities */