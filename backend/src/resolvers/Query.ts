import { prisma } from "../../prisma/client.ts";

const Query = {
  AllGroups: async () => {
    const groups = await prisma.group.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return groups;
  },
};

export { Query };
