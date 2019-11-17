const ghpages = require("gh-pages");

ghpages.publish(
  "prod",
  {
    remote: "remote-production",
    user: {
      name: "Angelovski",
      email: "marko.angelovsk@gmail.com"
    }
  },
  function(err) {
    console.warn(err);
  }
);
