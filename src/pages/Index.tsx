import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("list");

  const farms = [
    {
      name: "Green Valley Farm",
      description: "Organic vegetables and fruits",
      distance: "2.5 miles",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Sunrise Ranch",
      description: "Free-range eggs and poultry",
      distance: "3.8 miles",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Meadow Brook Farm",
      description: "Dairy products and cheese",
      distance: "5.2 miles",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Local Farms</h1>
          <div className="flex items-center space-x-2">
            <Label htmlFor="view-mode" className="sr-only">View mode</Label>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${viewMode === 'list' ? 'text-gray-900' : 'text-gray-500'}`}>List</span>
              <Switch
                id="view-mode"
                checked={viewMode === "map"}
                onCheckedChange={(checked) => setViewMode(checked ? "map" : "list")}
                className="data-[state=checked]:bg-gray-900"
              />
              <span className={`text-sm ${viewMode === 'map' ? 'text-gray-900' : 'text-gray-500'}`}>Map</span>
            </div>
          </div>
        </div>

        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farms.map((farm, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{farm.name}</h3>
                  <p className="text-gray-600 mt-1">{farm.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">{farm.distance}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{farm.rating}</span>
                      <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center">
            <p className="text-gray-600">Map view coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;