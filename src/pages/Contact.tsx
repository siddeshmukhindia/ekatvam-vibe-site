import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const handleDirections = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                  href="tel:+917447726161"
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 74477 26161</p>
                  </div>
                </a>

                <a
                  href="mailto:info@ekatvamcowork.com"
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@ekatvamcowork.com</p>
                  </div>
                </a>

                <div className="flex items-start space-x-3 p-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Address</p>
                    <p className="text-muted-foreground mb-3">
                      [Your Address Here]<br />
                      City, State - Pincode
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

            {/* Directions with Map */}
            <Card>
              <CardHeader>
                <CardTitle>Directions</CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Button onClick={handleDirections} variant="outline" size="lg">
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Click to get directions to our coworking space
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
