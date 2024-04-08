"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export type Team = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  avatar?: string;
  role: "isTeamLeader" | "isDeveloper" | "isTester";
};

export const alpha: ColumnDef<Team>[] = [
  {
    accessorKey: "firstName",
    header: "First name",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
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

export const canary: ColumnDef<Team>[] = [
  {
    accessorKey: "firstName",
    header: "First name",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
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
