Ext.define('Ext.grid.Panel', {
        //renderTo: document.body,
        alias : 'widget.companyGrid',
        width: 400,
        height: 300,
        frame: true,
        title: 'Users',
        store: 'AM.store.CompanyStore',
        //iconCls: 'icon-user',
        
        columns: [{
            text: 'ID',
            width: 40,
            sortable: true,
            dataIndex: 'id'
        }, {
            text: 'Email',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            field: {
                xtype: 'textfield'
            }
        }],
        requires  : ['AM.store.CompanyStore']
});