import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";
// import { fetchChats } from "@/fetch/chatsFetch";

import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import React from "react";

export default async function Chat({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id.length !== 36) {
    return notFound();
  }
  const chatGroup: GroupChatType | null = await fetchChatGroup(id);
  if (chatGroup === null) {
    return notFound();
  }
  const chatGroupUsers: Array<GroupChatUserType> | [] =
    await fetchChatGroupUsers(id);
  const chats: Array<MessageType> | [] = await fetchChats(id);

  return (
    <div>
      <ChatBase group={chatGroup} users={chatGroupUsers} oldMessages={chats} />
    </div>
  );
}