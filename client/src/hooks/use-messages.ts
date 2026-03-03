import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function useCreateMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: any) => {
      // Mocking contact form submission for pure frontend mode
      console.log("Contact form submitted (Mock):", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Transmission successful.",
        description: "Your message has been received (Mocked).",
        className: "bg-background border border-white/20 rounded-none text-foreground font-sans",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
        className: "rounded-none font-sans",
      });
    }
  });
}
