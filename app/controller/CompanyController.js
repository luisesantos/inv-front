/**
 * @author luis santos
 */

Ext.define('AM.controller.CompanyController', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        this.control({
           /* 'companyGrid': {
                itemdblclick: this.editUser
            }*/
        });
    },
    
    /**
     * Handles the double click event on the grid
     * */    
    editUser: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));
    },
    
    /**
     * Register the views to this controller 
     **/
    views: [
            'company.CompanyGrid'
            ],
     
     /**
      * Register the stores to this controller 
      **/
     stores: [
              'CompanyStore'
             ],
     /**
     * Register the models to this controller 
     **/
     models: [
              'CompanyModel'
              ]
});
