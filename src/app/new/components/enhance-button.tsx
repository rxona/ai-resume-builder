import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export function EnhanceButton() {
  const { getValues } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("/api/enhance", {
        method: "post",
        body: JSON.stringify(getValues()),
      }).then((r) => r.json());

      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
      Enhance
    </Button>
  );
}
