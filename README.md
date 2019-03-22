# Variables
Having a trigger if a javascript variable changes

Reaosn of this class is to have a trigger once a variable changes, however the Variable.vars is available directly it is just makes easy to read it through the get.


var vars = new Variables();

vars.set(variable, value)
 - first argument is the name of the variable
 - value is the new value

vars.get(variable)
 - the name of the variable

vars.register(variable, callback) / vars.unregister(variable, callback)
 - variable is the name of the variable
 - callback is a function, which the called once the variable has been changed.

vars.trigger(variable)
 - name of the variable, using this function the set triggers this function to call the callbacks (stored in the triggers.

