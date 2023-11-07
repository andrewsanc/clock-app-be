import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Test endpoint
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users).status(200);
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
