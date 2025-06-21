import { MessageCircle, PhoneCall } from 'lucide-react';

export const contactData = [
  { name: "Messenger", icon: MessageCircle, url: `${process.env.MY_MESSENGER}` },

  { name: "WhatsApp", icon: PhoneCall, url: `https://wa.me/+88${process.env.MY_MOBILE}` },
];
