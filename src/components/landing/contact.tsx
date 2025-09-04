import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: 'fa-map-marker-alt', title: 'Location', value: 'Boudha Nagar Colony, Plot no 91, Suchitra X Rd, Quthbullapur, Jeedimetla, Hyderabad, Telangana 500067' },
  { icon: 'fa-phone', title: 'Phone', value: '+91 93986 24736' },
  { icon: 'fa-envelope', title: 'Email', value: 'isotechinteriors@gmail.com' },
  { icon: 'fa-clock', title: 'Hours', value: 'Mon-Fri: 9am-5pm | Sat: 10am-2pm' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="lg:w-1/2 space-y-6">
            {contactInfo.map(item => (
              <div key={item.title} className="flex items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 text-xl">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
            <form action="https://formspree.io/f/mvojdewb" method="post" className="space-y-4">
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
              <Input type="tel" name="phone" placeholder="Your Phone" />
              <Textarea name="message" placeholder="Your Message" rows={6} required />
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
        <div>
          <iframe width="100%" height="450" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bouda%20Nagar%20Colony,%20Plot%20no%2091,%20Suchitra%20X%20Rd,%20Quthbullapur,%20Jeedimetla,%20Hyderabad,%20Telangana%20500067+(ISOTECH%20INTERIORS)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}></iframe>
        </div>
      </div>
    </section>
  );
}
