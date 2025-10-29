import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const handleGetStarted = () => {
    alert("Get Started clicked! This would typically navigate to a sign-up page.");
  };

  const handleLearnMore = () => {
    alert("Learn More clicked! This would typically scroll to features or open a demo.");
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>New: AI-Powered Workspace</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900">
              Your Work,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Supercharged
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-xl">
              FlowSpace brings all your tasks, projects, and team collaboration into one beautiful workspace. 
              Boost productivity by 10x with AI-powered insights and seamless integrations.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
                onClick={handleGetStarted}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-gray-300"
                onClick={handleLearnMore}
              >
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-900">10,000+ users</p>
                  <p className="text-xs text-gray-500">Join today</p>
                </div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <p className="text-sm text-gray-900">⭐⭐⭐⭐⭐</p>
                <p className="text-xs text-gray-500">4.9 average rating</p>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative lg:h-[600px]">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBwcm9kdWN0aXZpdHl8ZW58MXx8fHwxNzYxNjYwMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace showing FlowSpace in action"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
            </div>

            {/* Floating card decoration */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900">Task Completed</p>
                  <p className="text-xs text-gray-500">Great job!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
