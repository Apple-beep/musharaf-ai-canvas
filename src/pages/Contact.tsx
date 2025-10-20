import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl font-bold">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Based in Chicago, IL — open to internships and research roles in SWE/AI/Data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass-card p-6 space-y-4">
                <h2 className="font-heading text-2xl font-bold">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="link-hover font-medium"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4">
                <h2 className="font-heading text-xl font-bold">Connect</h2>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline" className="w-full justify-start magnetic-btn">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start magnetic-btn">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start magnetic-btn">
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="mr-2 h-5 w-5" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="text-sm text-muted-foreground">
                  💼 <span className="text-neon-cyan font-medium">Currently seeking:</span> Internship and research opportunities in Software Engineering, AI/ML, Cloud, and Data roles.
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
