


module.exports = {
  default: {
    //paths: ["Features/**/*.feature"],
    requireModule: ["tsx/cjs"],
    require: ["StepDefinitions/**/*.ts"],
    format: ["progress", "html:cucumber-report.html"]
  }
};


