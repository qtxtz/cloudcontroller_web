/*
 * Cntysoft Cloud Software Team
 *
 * @author SOFTBOY <cntysoft@163.com>
 * @copyright  Copyright (c) 2010-2011 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license    http://www.cntysoft.com/license/new-bsd     New BSD License
 */
Ext.define("App.Sys.KeleCloud.Main", {
   extend: "WebOs.Kernel.ProcessModel.App",
   requires : [
      "App.Sys.KeleCloud.Lang.zh_CN",
      "App.Sys.KeleCloud.Widget.Entry",
      "App.Sys.KeleCloud.Widget.ServerMgr"
   ],
   /**
    * @inheritdoc
    */
   id: "Sys.KeleCloud",
   /**
    * @inheritdoc
    */
   widgetMap: {
      Entry: "App.Sys.KeleCloud.Widget.Entry",
      ServerMgr : "App.Sys.KeleCloud.Widget.ServerMgr"
   },
   addServerInfo : function(data, callback, scope)
   {
      this.callApp('ServerInfo/addServer', data, callback, scope);
   },
   
   updateServerInfo : function(values, callback, scope)
   {
      this.callApp('ServerInfo/updateServerInfo', values, callback, scope);
   },
   
   deleteServerInfo : function(id, callback, scope)
   {
      this.callApp('ServerInfo/deleteServerInfo', {
         id : id
      }, callback, scope);
   }
 
});