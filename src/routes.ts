import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubsController  from "./controllers/clubs-controller";
import { validate } from "./middlewares/validate";
import { createPlayerSchema, statisticsSchema } from "./schemas/player-schema";


const router = Router();

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
router.post("/players", validate(createPlayerSchema), PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer );
router.patch("/players/:id", validate(statisticsSchema), PlayerController.updatePlayer);

router.get("/clubs", ClubsController.getClubs);

export default router;