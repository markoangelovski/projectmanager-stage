const fs = require("fs");
const path = require("path");
const ghpages = require("gh-pages");

fs.writeFileSync(
  path.join(__dirname, "../", "prod", "CNAME"),
  "projectmanager.angelovski.ga"
);

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
    if (err) throw err;
    console.log(
      "Deploy to https://markoangelovski.github.io/projectmanager completed."
    );
  }
);
