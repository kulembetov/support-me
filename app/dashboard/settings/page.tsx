import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <Card className="flex justify-between gap-2 p-4">
          <LightDarkToggle className="relative" />
        </Card>
        <p>Switch mode</p>
      </CardContent>
    </Card>
  );
}
