import { createElement } from '../framework/render.js';

export class WorkoutsListView {
    constructor() {
        this.element = null;
    }

    getTemplate(workouts = []) { 
        return `
            <div class="workouts-list">
                <h2>Мои тренировки</h2>
                <div id="workouts-container">
                    ${workouts.length === 0 ? `<p>Нет тренировок для отображения.</p>` : workouts.map((workout, index) => `
                        <div class="workout">
                            <p>Спорт: ${workout.sport}</p>
                            <p>Длительность: ${workout.duration} мин</p>
                            <p>Интенсивность: ${workout.intensity}</p>
                            <p>Дата: ${workout.date}</p>
                            <button class="delete-workout" data-index="${index}">Удалить</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getElement(workouts) {
        if (!this.element) {
            this.element = createElement(this.getTemplate(workouts));
        }
        return this.element;
    }

    bindRemoveWorkout(handler) {
        this.getElement().querySelector('#workouts-container').addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-workout')) {
                const index = event.target.dataset.index;
                handler(index);
            }
        });
    }

    renderWorkouts(workouts) {
        this.element.innerHTML = '';  
        this.getElement(workouts);  
    }
}
