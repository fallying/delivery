import { prisma } from "../../../../database/prismaClient";
import { IUseCase } from "../../../common";
import { CreateClientDTO } from "../../dtos";
import { UserNameAlreadyExists } from "../../errors";

import { hash } from "bcrypt";
import { DEFAULT_HASH_SALT } from "../../../../config/default";

class CreateClient implements IUseCase {
  async execute({ username, password }: CreateClientDTO) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new UserNameAlreadyExists();
    }

    const hashPassword = await hash(password, DEFAULT_HASH_SALT);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}

export { CreateClient };
