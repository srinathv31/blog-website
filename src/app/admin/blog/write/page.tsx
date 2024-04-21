import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BlogWritePage(): JSX.Element {
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="text-2xl">Blog write page</p>
      <form action="">
        <Input placeholder="Enter article title..." className="m-2" />
        <Textarea placeholder="Enter article body..." className="m-2" />
      </form>
    </main>
  );
}
