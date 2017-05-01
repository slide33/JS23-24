"use strict";
////////////////////////////////////////////////////////////////////////
export default function Model(data) {
    let self = this;
    self.data = data;

    self.addItem = function(item) {
        if (item.length === 0) {
            return;
        }

        self.data.push(item);

        return self.data;
    };

    self.removeItem = function(item) {
        // debugger
        let index = self.data.indexOf(item);
        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);
        return self.data;
    };
    self.editDone = function(item, label) {
        let index = self.data.indexOf(label);

        if (item.length === 0) {
            return;
        }

        self.data.splice(index, 1, item);

    }
}

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////

// $(function() {
//     let firstToDo = ['test1', 'test2', 'test3'];
//     let model = new Model(firstToDo);
//
//     let view = new View(model);
//     let controller = new Controller(model, view);
// })
