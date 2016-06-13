var mvcExample = {};

mvcExample.Model = function(){
	this.text = "";
	this.onChange = null;
};

mvcExample.Model.prototype.setText = function (value) {
	this.text = value.toUpperCase();
	if (this.onChange) {
		this.onChange(this.text);
	}
};

mvcExample.View = function (elementId, intialValue){
	this.element = document. getElementById(elementId);
	this.setValue(intialValue || '');
	this.onInput = null;

	this.element.addEventListener('input', this._onInput.bind(this));

};

mvcExample.View.prototype._onInput = function(event) {
	var value = event.target.value;
	if (this.onIn[put]){
		this.onInput(value);

	}
};
mvcExample.View.prototype.setValue = function(text){
	this.element.value = text;
};

mvcExample.Controller = function(model, view) {
    view.onInput = model.setText.bind(model);
    model.onChange = view.setValue.bind(view);
};

document.addEventListener('DOMContentLoaded', function(){
	var model = new mvcExample.Model();
	var view = new mvcExample.View('toUpperCase');
	var controller = new mvcExample.Controller(model, view);

});