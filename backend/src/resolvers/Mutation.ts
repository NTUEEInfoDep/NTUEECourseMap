import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";

import { GroupInput } from "../types/types.ts";

const Mutation = {
  CreateGroup: async (_parent: any, args: { groupInput: GroupInput }, _context: any) => {
    const { name, content } = args.groupInput;
    const newGroup = await prisma.group.create({
      data: {
        name,
        content,
      },
    });
    pubsub.publish("GROUP_CREATED", { groupCreated: newGroup });
    return newGroup;
  },

  DeleteGroup: async (_parent: any, args: { id: number }, _context: any) => {
    const deletedGroup = await prisma.group.delete({
      where: {
        id: args.id,
      },
    });
    pubsub.publish("GROUP_DELETED", { groupDeleted: deletedGroup });
    return deletedGroup;
  },

  UpdateGroup: async (_parent: any, args: { id: number; groupInput: GroupInput }, _context: any) => {
    const { name, content } = args.groupInput;
    const updatedGroup = await prisma.group.update({
      where: {
        id: args.id,
      },
      data: {
        name,
        content,
      },
    });
    pubsub.publish("GROUP_UPDATED", { groupUpdated: updatedGroup });
    return updatedGroup;
  },
};

export { Mutation };

