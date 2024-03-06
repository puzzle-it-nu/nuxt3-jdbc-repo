// @ts-expect-error fixes circular dep during build, https://github.com/nuxt/nuxt/pull/22785#issuecomment-1697171634
import { useNitroApp } from '#internal/nitro/app';
import type NitroApp from 'nuxt';
import type JdbcDriver from 'node-jdbc-driver';
import { ConnectionType } from 'node-jdbc-driver';

type jdbcNitroApp = typeof NitroApp & {
  jdbc: JdbcDriver<ConnectionType.custom>;
};

const nitroApp = useNitroApp();
const { jdbc } = <jdbcNitroApp>(<unknown>nitroApp);

export { jdbc };
