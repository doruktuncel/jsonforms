'use strict';

angular.module('makeithappen').controller('CustomController',
['custom.schema','custom.uischema','custom.data', function(Schema,UISchema,Data) {
    var vm = this;
    vm.schema = Schema;
    vm.uiSchema = UISchema;

    vm.data = Data;

    vm.formattedData = function() {
        return JSON.stringify(vm.data, null, 4);
    };
}]);
