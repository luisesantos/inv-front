/**
 * @author luis santos
 * Right Panel. Made to be the container of all processes of the company.
 */
Ext.define('AM.view.main.MainCompanyFlowPanel', {
    title: 'Flow',
    extend: 'Ext.Panel',
    alias: 'widget.mainCompanyFlowPanel',
    items:[{
          xtype: 'companyGrid'
        }],
    requires  : ['AM.view.company.CompanyGrid']    
});