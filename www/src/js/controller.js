"use strict";

export  default function Controller(model, view) {
    let self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('dblclick', 'label', editItem);
    view.elements.listContainer.on('blur', 'input', editDone);

    function addItem() {
        let newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        // debugger
        let item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);


    }

    function editItem() {

        let item = $(this).attr('data-id');
        view.editItem(item);
    }

    function editDone() {
        let newItem = document.querySelector('input.edit');

        // debugger
        let item = $(this).val();
        let label = $(this).prev().attr('data-id');
        model.editDone(item, label);
        view.editDone(item);

        // model.addItem(item);
    }
}
