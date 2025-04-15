import express from "express";
import { join } from "path";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine({ defaultLayout: "main", extname: "handlebars" }));
app.set("view engine", "handlebars");
app.set("views", join(process.cwd(), "src", "views"));
app.use(express.static(join(process.cwd(), "src", "public")));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/chat", (req, res) => {
  const { username, room } = req.query;
  if (!username || !room) return res.redirect("/");
  res.render("chat", { username, room });
});

export default app;
