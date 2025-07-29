"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

const TechnicalChallenge = ({
  challenges,
}: {
  challenges: string[];
}): JSX.Element => {
  const { textLanguage } = useLanguageStore();
  return (
    <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-cyan-300 flex items-center text-base">
          <Lightbulb className="w-4 h-4 mr-2" />
          {textLanguage.projectsPage.reutilizableText.cta.technicalChallenges}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Shield className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-cyan-100/90 text-xs leading-relaxed">
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalChallenge;
