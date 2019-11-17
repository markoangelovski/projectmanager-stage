const ghpages = require("gh-pages");

ghpages.publish(
  "stage",
  {
    remote: "remote-staging",
    user: {
      name: "Angelovski",
      email: "marko.angelovsk@gmail.com"
    }
  },
  function(err) {
    if (err) throw err;
    console.log(
      "Deploy to https://markoangelovski.github.io/projectmanager-stage completed."
    );
  }
);
