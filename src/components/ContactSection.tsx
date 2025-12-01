import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirements: ""
  });

  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/oVEzMNXJjXzX3p1E8", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+917875799111", "_self");
  };

  const handleWhatsApp = () => {
    const namePart = formData.name ? `My name is ${formData.name}. ` : '';
    const phonePart = formData.phone ? `Phone: ${formData.phone}. ` : '';
    const requirementsPart = formData.requirements ? `Requirements: ${formData.requirements}` : 'I want to know more about Ekatvam Cowork.';
    const message = `Hello! ${namePart}${phonePart}${requirementsPart}`;
    window.open(`https://wa.me/917875799111?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Find Us Here
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5267819344614!2d73.8451936!3d18.5095772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0804aef67a1%3A0x5c5f5e4e8e9e8e9e!2sEkatvam%20Cowork!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ekatvam Cowork Location"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Ekatvam Cowork, Office No. 303, 3rd Floor, Sanskruti Mantra Building,
                Tilak Rd, Vijayanagar Colony, Sadashiv Peth, Pune, Maharashtra 411030
              </p>
              <Button onClick={handleDirections} variant="outline" className="w-full">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Tell us about your workspace needs..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                  >
                    <img src={whatsappIcon} alt="" className="w-5 h-5 mr-2" />
                    WhatsApp Now
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCall}
                    variant="outline"
                    className="w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
