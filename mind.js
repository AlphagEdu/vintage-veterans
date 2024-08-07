function showActivity(activityId) {
    // Hide all activities
    const activities = document.querySelectorAll('.activity');
    activities.forEach(activity => {
        activity.classList.add('hidden');
    });

    // Show the selected activity
    const selectedActivity = document.getElementById(activityId);
    selectedActivity.classList.remove('hidden');
}
