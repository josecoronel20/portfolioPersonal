import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

const ArchAndDevops = ({
  architectureDevOps,
}: {
  architectureDevOps: string[];
}): JSX.Element => {
  return (
    <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-cyan-300 flex items-center text-base">
          <Settings className="w-4 h-4 mr-2" />
          Arquitectura y DevOps
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {architectureDevOps.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Settings className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-cyan-100/90 text-xs leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArchAndDevops;
