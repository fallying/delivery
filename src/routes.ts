import { Router } from "express";
import { AuthenticateClientController } from "./modules/accounts/useCases/authenticateClient";
import { CreateClientController } from "./modules/clients/useCases/createClient";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/auth/", authenticateClientController.handler);

routes.post("/clients/", createClientController.handler);

export { routes };
