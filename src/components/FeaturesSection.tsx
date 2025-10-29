import { Zap, Users, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant load times and seamless performance across all your devices."
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Smart suggestions and automation that learns from your workflow patterns."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together in real-time with your team, no matter where they are."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption for your data."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you and your team work smarter, not harder.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
