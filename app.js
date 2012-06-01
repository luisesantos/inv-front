/**
 * @author luis santos
 */
Ext.application({

    name: 'AM',
    appFolder: 'app',
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                	xtype: 'mainPanel'
                }
            ]
        });
    },
    requires  : ['Ext.container.Viewport','AM.view.MainPanel']
});