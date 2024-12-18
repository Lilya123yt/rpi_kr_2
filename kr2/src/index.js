import { WorkoutModel } from './model/WorkoutModel.js';
import { WorkoutPresenter } from './presenter/WorkoutPresenter.js';

document.addEventListener('DOMContentLoaded', () => {
    const bodyContainer = document.querySelector('.board-app');

    if (!bodyContainer) {
        console.error('Основной контейнер приложения не найден.');
        return;
    }

    const model = new WorkoutModel();
    new WorkoutPresenter(model);
});
