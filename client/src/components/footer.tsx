import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const quickLinks = [
    "About Us",
    "Course Catalog",
    "Free Assessment",
    "Success Stories",
    "Blog"
  ];

  const courses = [
    "General Training",
    "Academic Module",
    "Speaking Intensive",
    "Writing Mastery",
    "One-on-One Coaching"
  ];

  const socialLinks = [
    { icon: <Facebook className="text-background" />, href: "#" },
    { icon: <Twitter className="text-background" />, href: "#" },
    { icon: <Linkedin className="text-background" />, href: "#" },
    { icon: <Youtube className="text-background" />, href: "#" }
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy"
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Excellence IELTS</h3>
                <p className="text-sm text-background/70">Institute</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering students worldwide to achieve their IELTS goals through innovative teaching methods and personalized support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                  data-testid={`link-social-${index}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-background/80 hover:text-background transition-colors"
                  data-testid={`link-quick-${index}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Courses</h4>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-background/80 hover:text-background transition-colors"
                  data-testid={`link-course-${index}`}
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-background/80 mt-1 h-5 w-5" />
                <div className="text-background/80">
                  123 Education Street<br />
                  Learning District<br />
                  City, State 12345
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-background/80 h-5 w-5" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-background/80 h-5 w-5" />
                <span className="text-background/80">info@excellenceielts.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-background/80 h-5 w-5" />
                <span className="text-background/80">Mon-Sat: 9AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Excellence IELTS Institute. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-background/60 hover:text-background text-sm transition-colors"
                data-testid={`link-legal-${index}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
