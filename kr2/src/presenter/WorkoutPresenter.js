import { AreaWorkoutView } from '../view/AreaWorkoutView.js';
import { WorkoutModel } from '../model/WorkoutModel.js';
import { render, RenderPosition } from '../framework/render.js';

export class WorkoutPresenter {
    constructor(model) {
        this.model = model;
        this.areaWorkoutView = new AreaWorkoutView();

        render(this.areaWorkoutView, document.querySelector('.board-app'), RenderPosition.BEFOREEND);

        this.areaWorkoutView.bindEvents(
            this.handleAddWorkout.bind(this),
            this.handleRemoveWorkout.bind(this),
            this.handleFilterWorkouts.bind(this)
        );

        this.updateView();
    }

    handleAddWorkout(workout) {
        this.model.addWorkout(workout);
        this.updateView();
    }

    handleRemoveWorkout(index) {
        this.model.removeWorkout(index);
        this.updateView();
    }

    handleFilterWorkouts(sport, date) {
        this.updateView(sport, date);
    }

    updateView(sport = '', date = '') {
        const filteredWorkouts = this.model.filterWorkouts(sport, date);
        this.areaWorkoutView.renderWorkouts(filteredWorkouts);
        this.areaWorkoutView.updateWorkoutStats(filteredWorkouts.length);
    }
}
