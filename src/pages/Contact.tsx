import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Contact = () => {
  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/oVEzMNXJjXzX3p1E8", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingWhatsApp />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            We'd love to hear from you. Reach out to us anytime!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:+917875799111"
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 78757 99111</p>
                  </div>
                </a>

                <a
                  href="mailto:ekatvamcowork@gmail.com"
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">ekatvamcowork@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start space-x-3 p-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Address</p>
                    <p className="text-muted-foreground mb-3">
                      Ekatvam Cowork, Office No. 303, 3rd Floor, Sanskruti Mantra Building,<br />
                      Tilak Rd, Vijayanagar Colony, Sadashiv Peth,<br />
                      Pune, Maharashtra 411030
                    </p>
                    <Button
                      onClick={handleDirections}
                      variant="outline"
                      size="sm"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us Here</CardTitle>
                <CardDescription>Visit our coworking space</CardDescription>
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
                <Button onClick={handleDirections} variant="outline" className="w-full">
                  Open in Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
