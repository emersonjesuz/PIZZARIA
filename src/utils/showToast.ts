import { toast } from "@/components/ui/use-toast";

export default function showToast(
  title: string,
  type: "success" | "error" | "info"
) {
  switch (type) {
    case "success":
      toast({
        title,
        style: { backgroundColor: "green", color: "white" },
      });
      break;
    case "info":
      toast({
        title,
        style: { backgroundColor: "blue", color: "white" },
      });
      break;
    case "error":
      toast({
        title,
        style: { backgroundColor: "red", color: "white" },
      });
      break;

    default:
      break;
  }
}
