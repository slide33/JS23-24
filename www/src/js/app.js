import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';
$(function() {
    let firstToDo = ['test1', 'test2', 'test3'];
    let model = new Model(firstToDo);

    let view = new View(model);
    let controller = new Controller(model, view);
})
