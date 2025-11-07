import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code2, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sakthirajan157@gmail.com",
      link: "mailto:sakthirajan157@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6374266881",
      link: "tel:+916374266881"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/sakthirajan135",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "www.linkedin.com/in/sakthi-rajan-26945a258",
      color: "hover:text-secondary"
    },
    {
      icon: Code2,
      label: "LeetCode",
      link: "https://leetcode.com/u/SakthiD",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
          
          <Card className="shadow-elegant border-border/50 bg-gradient-card mb-8">
            <CardContent className="p-8">
              <p className="text-center text-lg text-foreground/80 mb-8">
                I'm currently looking for new opportunities and collaborations. Whether you have a question 
                or just want to say hi, feel free to reach out!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-primary text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-6 pt-6 border-t border-border">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 text-muted-foreground ${social.color} transition-all hover:scale-110 group`}
                  >
                    <social.icon className="w-8 h-8" />
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all hover:scale-105"
              onClick={() => window.location.href = 'mailto:sakthirajan157@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
