import { jdbc } from '~~/server/utils/jdbc';

export default defineEventHandler(async (event) => {
  const version = await jdbc.get_version();
  return `Hello JDBC: ${version}`;
});
