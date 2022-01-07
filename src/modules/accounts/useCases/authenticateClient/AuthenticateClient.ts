import { prisma } from "../../../../database/prismaClient";
import { IUseCase } from "../../../common";
import { AuthenticateClientDTO } from "../../dtos";
import { ClientForbidden } from "../../errors";

import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import {
  DEFAULT_EXPIRE_TOKEN,
  DEFAULT_JWT_HASH,
} from "../../../../config/default";

class AuthenticateClient implements IUseCase {
  async execute({ username, password }: AuthenticateClientDTO) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new ClientForbidden();
    }

    const comparedPassword = await compare(password, client.password);

    if (!comparedPassword) {
      throw new ClientForbidden();
    }

    const token = sign({ username }, DEFAULT_JWT_HASH, {
      subject: client.id,
      expiresIn: DEFAULT_EXPIRE_TOKEN,
    });

    return {
      token,
    };
  }
}

export { AuthenticateClient };
