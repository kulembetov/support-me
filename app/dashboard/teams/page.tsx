import { setTimeout } from "timers/promises";
import { alpha, canary, Team } from "@/app/dashboard/teams/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

export default async function EmployeesPage() {
  await setTimeout(1000);

  const alphaTeam: Team[] = [
    {
      id: 0,
      firstName: "Colin",
      lastName: "Murray",
      teamName: "alpha",
      role: "isTeamLeader",
    },
    {
      id: 1,
      firstName: "Tom",
      lastName: "Phillips",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 2,
      firstName: "Liam",
      lastName: "Fuentes",
      teamName: "alpha",
      role: "isDeveloper",
    },
    {
      id: 3,
      firstName: "Arthur",
      lastName: "Bowman",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 4,
      firstName: "Kobe",
      lastName: "Dalton",
      teamName: "alpha",
      role: "isDeveloper",
    },
    {
      id: 5,
      firstName: "Eugene",
      lastName: "Weaver",
      teamName: "alpha",
      role: "isTeamLeader",
    },
    {
      id: 6,
      firstName: "Sarah",
      lastName: "Morris",
      teamName: "alpha",
      role: "isDeveloper",
    },
    {
      id: 7,
      firstName: "Hugo",
      lastName: "Smith",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 8,
      firstName: "Alice",
      lastName: "Johnson",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 9,
      firstName: "Aron",
      lastName: "Ortiz",
      teamName: "alpha",
      role: "isDeveloper",
    },
  ];

  const canaryTeam: Team[] = [
    {
      id: 0,
      firstName: "Tina",
      lastName: "Fey",
      teamName: "canary",
      role: "isTeamLeader",
    },
    {
      id: 1,
      firstName: "Katie",
      lastName: "Johnson",
      teamName: "canary",
      role: "isTester",
    },
    {
      id: 2,
      firstName: "Tina",
      lastName: "Jones",
      teamName: "canary",
      role: "isDeveloper",
    },
    {
      id: 3,
      firstName: "Amy",
      lastName: "Adams",
      teamName: "delta",
      role: "isTester",
    },
    {
      id: 4,
      firstName: "Ryan",
      lastName: "Lopez",
      teamName: "delta",
      role: "isDeveloper",
    },
    {
      id: 5,
      firstName: "Jenny",
      lastName: "Jones",
      teamName: "delta",
      role: "isDeveloper",
    },
    {
      id: 6,
      firstName: "Mark",
      lastName: "Hamill",
      teamName: "canary",
      role: "isTester",
    },
    {
      id: 7,
      firstName: "Lucas",
      lastName: "Grey",
      teamName: "canary",
      role: "isDeveloper",
    },
    {
      id: 8,
      firstName: "Mila",
      lastName: "Kunis",
      teamName: "canary",
      role: "isTester",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alpha</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={alpha} data={alphaTeam} />
      </CardContent>
      <CardHeader>
        <CardTitle>Canary</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={canary} data={canaryTeam} />
      </CardContent>
    </Card>
  );
}
