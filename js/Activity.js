function Activity(description, kcalPerHour) {
    this.id = Activity.UID++;
    this.description = description;
    this.isCompleted = false;
    this.kcalPerHour = kcalPerHour;
}

Activity.UID = 1;