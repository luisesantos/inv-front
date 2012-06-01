/**
 * @author luis santos
 * Left Panel. Made to be the container of all possible options or tools for the user to use
 */
Ext.define('AM.view.main.MainInventoryOptionsPanel', {
    title: 'Tools',
    extend: 'Ext.Panel',
    alias : 'widget.mainOptionPanel',
    height:100,
    layout: {
        type: 'vbox'
    },
    bodyStyle:{"background-color":"red"}
});