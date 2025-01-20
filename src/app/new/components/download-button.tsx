import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";
import { useState } from "react";

export function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button variant="outline" onClick={handleClick} disabled={isLoading}>
      {isLoading ? <Loader2 className="animate-spin" /> : <Download />}
      Download
    </Button>
  );
}
