    angular
        .module("NASAPhotoPicker")
        .service('ModalService', function() {
            let modals = []; // array of modals on the page

            this.add = function(modal) {
                // add modal to array of active modals
                modals.push(modal);
            }
            
            this.remove = function(id) {
                // remove modal from array of active modals
                let modalToRemove = modals.filter(id);
                modals = _.without(modals, modalToRemove);
            }
    
            this.open = function(id) {
                // open modal specified by id
                let modal = modals.filter(findId(id));
                modal.open();
            }
    
            this.close = function(id) {
                // close modal specified by id
                let modal = modals.filter(id);
                modal.close();
            }

            findId = function(value, id) {
                return value === id;
            }
        });
