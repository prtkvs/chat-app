import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GroupChatCardMenu from "./GroupChatCardMenu";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  return (
    <Card className="relative rounded-xl border shadow-sm hover:shadow-md transition-shadow ml-2 mr-2">
      {/* Menu - top right */}
      <div className="absolute top-3 right-3">
        <GroupChatCardMenu user={user} group={group} />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold tracking-tight">
          {group.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          Passcode:{" "}
          <span className="font-medium text-foreground">
            {group.passcode}
          </span>
        </p>
        <p>
          Created on{" "}
          {new Date(group.created_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </CardContent>
    </Card>
  );
}
