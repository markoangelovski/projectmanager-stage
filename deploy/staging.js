const ghpages = require("gh-pages");

ghpages.publish(
  "stage",
  {
    // repo: 'https://example.com/other/repo.git',
    remote: "staging",
    user: {
      name: "Angelovski",
      email: "marko.angelovsk@gmail.com"
    }
  },
  function(err) {
    console.warn(err);
  }
);
