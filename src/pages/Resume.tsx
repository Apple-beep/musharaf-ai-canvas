import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="font-heading text-5xl font-bold">Resume</h1>
              <p className="text-muted-foreground">
                {profile.name} • Creative technologist & CS major @ Illinois Tech
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="magnetic-btn">
                <FileDown className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="magnetic-btn">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Full Size
              </Button>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="aspect-[8.5/11] bg-background/50 rounded-lg border border-border/50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <FileDown className="h-16 w-16 mx-auto text-neon-cyan" />
                <div>
                  <p className="text-lg font-medium">Resume PDF</p>
                  <p className="text-sm text-muted-foreground">
                    Click "Download PDF" above to view the full resume
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-4">
              <h2 className="font-heading text-xl font-bold">Quick Info</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">mpathan2@hawk.illinoistech.edu</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">(480) 996-7675</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">Chicago, IL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPA:</span>
                  <span className="font-medium">3.8/4.0</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h2 className="font-heading text-xl font-bold">Education</h2>
              <div className="text-sm space-y-1">
                <p className="font-semibold">Illinois Institute of Technology</p>
                <p className="text-muted-foreground">B.S. Computer Science</p>
                <p className="text-muted-foreground">Minor in Architecture</p>
                <p className="text-neon-cyan font-medium mt-2">Expected May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
