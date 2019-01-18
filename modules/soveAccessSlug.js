// gets the root slug
const getMajorSlug = slug => slug.match(/\w+/gi)[0];

/**
 * Validade all user access patterns
 *
 * @param {array} userAccessPatterns Strings array of user access patterns
 * @param {*} slug Slug to validate in each access pattern
 * @returns {boolean}
 */
const solveAccessSlug = (userAccessPatterns, slug) => {
  const accesses = userAccessPatterns.map((access) => {
    console.log(this);
    if (access === getMajorSlug(slug)) return true;
    return !!access.match(slug);
  });

  return accesses.includes(true);
};

// exporting functions
export { getMajorSlug, solveAccessSlug };
