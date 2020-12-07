const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public"
    }
  };
};
