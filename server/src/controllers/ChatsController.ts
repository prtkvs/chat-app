import { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatsController {
  static async index(req: Request, res: Response) {
    const { groupId } = req.params;
    const normalizedGroupId = Array.isArray(groupId) ? groupId[0] : groupId;
    if (!normalizedGroupId) {
      return res.status(400).json({ message: "groupId is required" });
    }

    const chats = await prisma.chats.findMany({
      where: {
        group_id: normalizedGroupId,
      },
    });
    return res.json({ data: chats });
  }
}

export default ChatsController;
