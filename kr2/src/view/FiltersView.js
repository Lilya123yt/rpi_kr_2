import { createElement } from '../framework/render.js';

export class FiltersView {
    constructor() {
        this.element = null;
    }

    getTemplate() {
        return `
            <div class="filters">
                <h2>Фильтры</h2>
                <select id="sport-filter">
                    <option value="">Все виды спорта</option>
                    <option value="running">Бег</option>
                    <option value="cycling">Велосипед</option>
                    <option value="swimming">Плавание</option>
                    <option value="gym">Тренажерный зал</option>
                </select>
                <input type="date" id="date-filter" placeholder="Фильтр по дате">
            </div>
        `;
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    bindFilterWorkouts(handler) {
        this.getElement().querySelector('#sport-filter').addEventListener('change', () => handler());
        this.getElement().querySelector('#date-filter').addEventListener('change', () => handler());
    }

    getFilters() {
        return {
            sport: this.getElement().querySelector('#sport-filter').value,
            date: this.getElement().querySelector('#date-filter').value
        };
    }
}
