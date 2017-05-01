"use strict";

export default function View(model) {
    let self = this;

    function init() {
        let wrapper = _.template($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list'),
            listItem: $('label')
        };

        self.renderList(model.data);
    };

    self.editItem = function(item) {
        var listItem = document.querySelectorAll('[data-id="' + item + '"]');
        // debugger
        // console.log(listItem);
        listItem[0].classList.add('editing');
        var input = document.createElement('input');
        input.className = 'edit';
        // debugger
        listItem[0].after(input);
        input.focus();
        input.value = item;

    };
    self.editDone = function(item) {
        // debugger
        var listItem = document.querySelector('label.editing');
        var input = document.querySelector('input.edit');
        // debugger
        listItem.textContent = input.value;
        listItem.classList.remove('editing');
        input.classList.remove('edit');
        input.remove();
        return listItem;



    };


    self.renderList = function(data) {
        // debugger
        var list = _.template($('#item-template').html());
        var list = list({
            data: data
        });
        self.elements.listContainer.html(list);
    };
    init();
}
