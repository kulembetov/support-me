"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  role: "isTeamLeader" | "isDeveloper" | "isTester";
  avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => {
      const avatar: string = row.getValue("avatar");
      const firstName: string = row.getValue("firstName");
      const lastName: string = row.getValue("lastName");

      return (
        <Avatar>
          {!!avatar && (
            <Image
              width={40}
              height={40}
              src={avatar}
              alt={`${firstName} ${lastName} avatar`}
            />
          )}
          <AvatarFallback className="uppercase">
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: "First name",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role: string = row.getValue("role");
      switch (role) {
        case "isTeamLeader":
          return <Badge variant="lead">Team leader</Badge>;
        case "isDeveloper":
          return <Badge variant="developer">Developer</Badge>;
        case "isTester":
          return <Badge variant="tester">Tester</Badge>;
        default:
          return <Badge variant="default">Employee</Badge>;
      }
    },
  },
];
