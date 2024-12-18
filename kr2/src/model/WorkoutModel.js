export class WorkoutModel {
    constructor() {
        this.workouts = [];
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener());
    }

    addWorkout(workout) {
        this.workouts.push(workout);
        this.notifyListeners();
    }

    removeWorkout(index) {
        this.workouts.splice(index, 1);
        this.notifyListeners();
    }

    filterWorkouts(sport = '', date = '') {
        return this.workouts.filter(workout => {
            const matchesSport = sport ? workout.sport === sport : true;
            const matchesDate = date ? workout.date === date : true;
            return matchesSport && matchesDate;
        });
    }

    getWorkouts() {
        return this.workouts;
    }
}
