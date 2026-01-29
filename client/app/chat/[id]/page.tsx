// import { fetchChats } from "@/fetch/chatsFetch";

// import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
// import { notFound } from "next/navigation";
import ChatBase from "@/components/chat/ChatBase";

export default async function Chat({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>Hello I'm Chat!</h1>
      <ChatBase groupId={id} />
    </div>
  );
}

  // console.log("The group is", params.id);
  // if (params.id.length !== 36) {
  //   return notFound();
  // }
  // const chatGroup: GroupChatType | null = await fetchChatGroup(params.id);
  // if (chatGroup === null) {
  //   return notFound();
  // }
  // const chatGroupUsers: Array<GroupChatUserType> | [] =
  //   await fetchChatGroupUsers(params?.id);
  // const chats: Array<MessageType> | [] = await fetchChats(params.id);