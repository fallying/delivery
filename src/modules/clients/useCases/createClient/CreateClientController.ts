import { Request, Response } from "express";
import { CreateClient } from ".";
import { IController } from "../../../common";

class CreateClientController implements IController {
  async handler(request: Request, response: Response) {
    const createClient = new CreateClient();

    const result = await createClient.execute(request.body);

    return response.json(result);
  }
}

export { CreateClientController };
