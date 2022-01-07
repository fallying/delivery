import { Request, Response } from "express";
import { AuthenticateClient } from ".";
import { IController } from "../../../common";

class AuthenticateClientController implements IController {
  async handler(request: Request, response: Response) {
    const authenticateClient = new AuthenticateClient();

    const result = await authenticateClient.execute(request.body);

    return response.json(result);
  }
}

export { AuthenticateClientController };
