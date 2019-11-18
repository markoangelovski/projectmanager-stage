const fs = require("fs");
const path = require("path");
const ghpages = require("gh-pages");

const { CNAME } = require("../config/prod.json");

fs.writeFileSync(path.join(__dirname, "../", "prod", "CNAME"), CNAME);

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
      "Deploy to https://markoangelovski.github.io/projectmanager-prod completed."
    );
  }
);
