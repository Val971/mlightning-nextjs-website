import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Whatsapp() {
  return (
    <div>
      <FloatingWhatsApp
        className={'text-black'}
        phoneNumber='+33756946684'
        accountName='Mlightning'
        chatMessage='« Bonjour ! 🤝 Comment puis-je vous aider ? »'
        statusMessage={`Répond généralement dans un délai d'une heure`}
        avatar={`/images/avatar.png`}
      />
    </div>
  );
}
