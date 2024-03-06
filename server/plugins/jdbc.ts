import JdbcDriver, { ConnectionType } from 'node-jdbc-driver';

export default defineNitroPlugin((nitroApp) => {

// @ts-expect-error 
 const jdbc = new JdbcDriver.default(ConnectionType.custom, {
        jars: '../../../sqlite-jdbc-3.7.2.jar', // local path of your jar file
        driverClass: 'org.sqlite.JDBC', // Driver class of your jar file
        jdbcUrl: 'jdbc:sqlite:demo.db' // use jdbc url for connection
})

  Object.assign(nitroApp, { jdbc });
});
