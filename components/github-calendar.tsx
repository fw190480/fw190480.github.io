"use client";

import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export function GitHubContributionCalendar({username}: {username: string}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card  className="bg-background overflow-auto lg:w-max shadow-none border-none outline-none max-w-7xl mx-auto py-12 ">

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">My GitHub Contributions</CardTitle>
          <Badge variant="outline" className="flex items-center">
            <Github className="w-4 h-4 mr-1" />
            {username}
          </Badge>
        </div>
        <CardDescription>
          Last 12 months of GitHub activity
        </CardDescription>
      </CardHeader>
      <CardContent  >
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-[120px] w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <GitHubCalendar
              username={username}
              hideColorLegend
              renderBlock={(block, activity) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>{block}</TooltipTrigger>
                    <TooltipContent>
                      <p>{`${activity.count} contribution${
                        activity.count === 1 ? "" : "s"
                      } on ${new Date(activity.date).toLocaleDateString()}`}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              theme={{
                light: ['#f0f0f0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

