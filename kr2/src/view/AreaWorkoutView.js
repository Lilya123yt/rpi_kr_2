
import { createElement } from '../framework/render.js';
import { AddWorkoutView } from './AddWorkoutView.js';
import { FiltersView } from './FiltersView.js';
import { WorkoutsListView } from './WorkoutsListView.js';

export class AreaWorkoutView {
    constructor() {
        this.element = null;
        this.addWorkoutView = new AddWorkoutView();
        this.filtersView = new FiltersView();
        this.workoutsListView = new WorkoutsListView();
    }

    getTemplate() {
        return `
            <div class="container">
                <h1>Мой Фитнес Трекер</h1>

                <div class="statistics">
                    <h2>Статистика</h2>
                    <div class="stats-block">
                        <p>Всего тренировок: <span id="total-workouts">0</span></p>
                    </div>
                </div>

                <div class="workout-form">
                    ${this.addWorkoutView.getTemplate()}
                </div>

                <div class="filters">
                    ${this.filtersView.getTemplate()}
                </div>

                <div class="workouts-list">
                    ${this.workoutsListView.getTemplate([])}
                </div>
            </div>
        `;
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    bindEvents(handlerAddWorkout, handlerRemoveWorkout, handlerFilterWorkouts) {
      
        this.addWorkoutView.bindAddWorkout(handlerAddWorkout);
        this.workoutsListView.bindRemoveWorkout(handlerRemoveWorkout);
        this.filtersView.bindFilterWorkouts(handlerFilterWorkouts);
    }

    updateWorkoutStats(totalWorkouts) {
     
        const statsElement = this.element.querySelector('#total-workouts');
        if (statsElement) {
            statsElement.textContent = totalWorkouts;
        }
    }

    renderWorkouts(workouts) {
     
        this.workoutsListView.renderWorkouts(workouts);
    }
}
