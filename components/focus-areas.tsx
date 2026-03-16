import { Card, CardContent } from "@/components/ui/card";

interface FocusAreasProps {
  items: string[];
}

export function FocusAreas({ items }: FocusAreasProps) {
  return (
    <div className="mt-10">
      <h3 className="font-heading text-lg font-semibold text-primary">Focus Areas</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((label) => (
          <Card key={label} className="border-brand-light">
            <CardContent className="flex items-center p-4">
              <span className="font-medium text-primary">{label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
