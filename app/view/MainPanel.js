/**
 * @author luis santos
 */
Ext.define('AM.view.MainPanel', {
    title: 'Main',
    extend: 'Ext.Container',
    alias : 'widget.mainPanel',
    layout: {
        type: 'border'
    },
    defaults: {
        collapsible: true,
        split: true,
        bodyStyle: 'padding:15px'
    },
    items: [{
        xtype: 'mainOptionPanel',
        title: 'Navigation',
        split: false,
        region:'west',
        margins: '5 0 0 0',
        cmargins: '5 5 0 0',
        width: 175,
        minSize: 100,
        maxSize: 250
    },{
        xtype: 'mainCompanyFlowPanel',
        title: 'Main Content',
        collapsible: false,
        region:'center',
        margins: '5 0 0 0'
    },{
        xtype: 'mainFooterPanel',
        title: 'Footer',
        region: 'south',
        collapsible: false,
        split: false,
        height: 50,
        minSize: 50,
        maxSize: 50,
        cmargins: '5 0 0 0'
    }],
    requires  : ['AM.view.main.MainInventoryOptionsPanel',
                 'AM.view.main.MainCompanyFlowPanel',
                 'AM.view.main.MainFooterPanel']
});
