import { createElement } from '../framework/render.js';

export class AddWorkoutView {
    constructor() {
        this.element = null;
    }

    getTemplate() {
        return `
            <div class="workout-form">
                <h2>Добавить тренировку</h2>
                <form id="workout-form">
                    <select id="sport">
                        <option value="">Выберите вид спорта</option>
                        <option value="running">Бег</option>
                        <option value="cycling">Велосипед</option>
                        <option value="swimming">Плавание</option>
                        <option value="gym">Тренажерный зал</option>
                    </select>
                    <input type="number" id="duration" placeholder="Длительность (мин)" required min="1" max="240">
                    <select id="intensity">
                        <option value="">Интенсивность</option>
                        <option value="low">Низкая</option>
                        <option value="medium">Средняя</option>
                        <option value="high">Высокая</option>
                    </select>
                    <input type="date" id="date">
                    <button type="submit">Добавить тренировку</button>
                </form>
            </div>
        `;
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    bindAddWorkout(handler) {
        this.getElement().querySelector('#workout-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const workout = {
                sport: this.getElement().querySelector('#sport').value,
                duration: parseInt(this.getElement().querySelector('#duration').value),
                intensity: this.getElement().querySelector('#intensity').value,
                date: this.getElement().querySelector('#date').value
            };
            handler(workout);
            this.getElement().querySelector('#workout-form').reset();
        });
    }
}
