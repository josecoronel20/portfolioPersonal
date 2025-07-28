import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const CardSection = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm flex flex-col gap-4">
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  );
};

export default CardSection;
