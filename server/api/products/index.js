export default defineEventHandler((event) => {

  const { mario } = getQuery(event)

  return {
    message: `coucou ${ mario }`,
  };
});