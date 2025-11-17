import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
// Common shadcn/ui imports that need extensions:
import { Button } from "@/components/ui/Button";
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
// etc.
import { Textarea } from '@/components/ui/Textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';


export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_oudkwz4',
        'template_xki6ogq',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'ImNT90J-k7xC156cy'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Please try again or reach me via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mugambi-lewis-64051332b/', color: 'text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/mugambilewis', color: 'text-gray-800 dark:text-gray-200' },
    { icon: Mail, label: 'Email', href: 'mailto:mugambilewis001@gmail.com', color: 'text-red-500' },
    { icon: Phone, label: 'Phone', href: 'tel:+254794644395', color: 'text-green-500' },
  ];

  return (
    <section id="contact" className="py-20 px-8 md:px-16 " style={{backgroundColor: 'hsl(var(--muted)/0.3)'}}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-background/60 backdrop-blur-sm border-border/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background/60 backdrop-blur-sm border-border/40 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/60 backdrop-blur-sm border-border/40 focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background/60 backdrop-blur-sm border-border/40 focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:from-blue-700 text-white font-medium py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-foreground/70">mugambilewis001@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40">
                  <Phone className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-foreground/70">+254 794 644-395</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-space font-semibold mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
