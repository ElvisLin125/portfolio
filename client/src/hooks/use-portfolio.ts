import { useQuery } from "@tanstack/react-query";
import { portfolioConfig } from "@/config";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return portfolioConfig.projects;
    },
  });
}

export function useExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      return portfolioConfig.experiences;
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      return portfolioConfig.skills;
    },
  });
}
