import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const handleStartTrial = () => {
    alert("Start Free Trial clicked! This would typically navigate to a sign-up page.");
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-16 lg:px-16 lg:py-24">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of teams already using FlowSpace. Start your free 14-day trial today—no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg group"
                onClick={handleStartTrial}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => alert("Contact Sales clicked!")}
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
