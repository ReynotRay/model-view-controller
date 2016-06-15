

//Model
//create cronstructor for model
var Model = function() {
// create two attributes this.text and this.onChange    
    this.text = "";
//this can hold a CALLBACK, it will notify other parts of the app when the model has changed.    
    this.onChange = null;
};
// we create a method which can change the stored text and calls the change
Model.prototype.setText = function(value) {
    //string to uppercase method
    this.text = value.toUpperCase();
    //will change the text
    if (this.onChange) {
        this.onChange(this.text);
    }
  };
//view
 //this contructor valled view will take on two parameters elementSlector and initialValue
var View = function(elementSelector, initialValue) {
    //use jquery to select the input
    this.element = $(elementSelector);
   //set value method
    this.setValue(initialValue || '');

    this.onChange = null;
 //sets the <input> elemnts value using the setValue method.
    this.element.on('input', this.onInput.bind(this));
};
 //when user types something the method onInput will be callback to onChange
View.prototype.onInput = function() {
    var value = this.element.val();
    if (this.onChange) {
        this.onChange(value);
    }
};
//get the value in text formate
View.prototype.setValue = function(text) {
    this.element.val(text);
};
//controller
//user enters something in the view, the models text is then changed, and then whe the models text
//is changed the view has its value updated. 
var Controller = function(model, view) {
    view.onChange = model.setText.bind(model);
    model.onChange = view.setValue.bind(view);
};
//we construct three elements. 
document.addEventListener('DOMContentLoaded', function() {
    var model = new Model();
    var view = new View('uppercase');
    var controller = new Controller(model, view);
});