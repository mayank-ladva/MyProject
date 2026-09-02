import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });
    res.send({
      message: "signup successfully",
      id: user.id,
    });
  } catch (e) {
    console.log(e);
  }
});
app.listen(3001, () => {
  console.log("server running successfully");
});
