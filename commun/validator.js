var Validator = require('validator').Validator,
    sanitize = require('validator').sanitize;

Validator.prototype.error = function (msg) {
   this._errors.push(msg);
   return this;
};

Validator.prototype.getErrors = function (index) {
   if (index !== undefined) return this._errors[index];

   return this._errors;
};

Validator.prototype.checkParams = function (params, validators) {
   for(var validator in validators) {
      if (validators.hasOwnProperty(validator)) {
         var value = validators[validator],
             param = params[validator];

         if (value.checking) {
            value.checking(validator, param, this);
         }

         if (this.getErrors() && this.getErrors().length) {
            params[validator] = sanitize(param).escape();
         }
      }
   }
};

exports.Validator = Validator;
