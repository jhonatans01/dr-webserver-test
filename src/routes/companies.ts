import { Router } from "express";
import { getCompanies } from "../services/companies";

const router = Router();

router.get("/companies", async (req, res) => {
  res.send(await getCompanies());
});

export default router;
