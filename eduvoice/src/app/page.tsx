import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <Card className="p-6 shadow-md">
        <h1 className="text-2xl font-bold">Welcome to EduVoice</h1>
        <p className="text-gray-600">Your AI-powered learning platform.</p>
      </Card>

      <Input placeholder="Type something..." className="w-80" />

      <Button>Click Me</Button>
    </div>
  );
}
