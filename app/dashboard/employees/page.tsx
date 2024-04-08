import { setTimeout } from "timers/promises";
import { columns, Employee } from "@/app/dashboard/employees/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

export default async function EmployeesPage() {
  await setTimeout(1000);
  const employees: Employee[] = [
    {
      id: 1,
      firstName: "Colin",
      lastName: "Murray",
      teamName: "alpha",
      role: "isTeamLeader",
      avatar: "/images/cm.jpg",
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Phillips",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 3,
      firstName: "Liam",
      lastName: "Fuentes",
      teamName: "alpha",
      role: "isDeveloper",
    },
    {
      id: 4,
      firstName: "Tina",
      lastName: "Fey",
      teamName: "canary",
      role: "isTeamLeader",
      avatar: "/images/tf.jpg",
    },
    {
      id: 5,
      firstName: "Katie",
      lastName: "Johnson",
      teamName: "canary",
      role: "isTester",
    },
    {
      id: 6,
      firstName: "Tina",
      lastName: "Jones",
      teamName: "canary",
      role: "isDeveloper",
    },
    {
      id: 7,
      firstName: "Amy",
      lastName: "Adams",
      teamName: "delta",
      role: "isTester",
    },
    {
      id: 8,
      firstName: "Ryan",
      lastName: "Lopez",
      teamName: "delta",
      role: "isDeveloper",
      avatar: "/images/rl.jpg",
    },
    {
      id: 9,
      firstName: "Jenny",
      lastName: "Jones",
      teamName: "delta",
      role: "isDeveloper",
    },
    {
      id: 10,
      firstName: "Arthur",
      lastName: "Bowman",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 11,
      firstName: "Kobe",
      lastName: "Dalton",
      teamName: "alpha",
      role: "isDeveloper",
    },
    {
      id: 12,
      firstName: "Eugene",
      lastName: "Weaver",
      teamName: "alpha",
      role: "isTeamLeader",
    },
    {
      id: 13,
      firstName: "Sarah",
      lastName: "Morris",
      teamName: "alpha",
      role: "isDeveloper",
    },
    {
      id: 14,
      firstName: "Hugo",
      lastName: "Smith",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 15,
      firstName: "Alice",
      lastName: "Johnson",
      teamName: "alpha",
      role: "isTester",
    },
    {
      id: 16,
      firstName: "Mark",
      lastName: "Hamill",
      teamName: "canary",
      role: "isTester",
    },
    {
      id: 17,
      firstName: "Lucas",
      lastName: "Grey",
      teamName: "canary",
      role: "isDeveloper",
    },
    {
      id: 18,
      firstName: "Mila",
      lastName: "Kunis",
      teamName: "canary",
      role: "isTester",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={employees} />
      </CardContent>
    </Card>
  );
}
