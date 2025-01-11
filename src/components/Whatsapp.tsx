import React from 'react'

function Whatsapp() {
  return (
    <a
    href="https://wa.me/919875591326"
    className="fixed bottom-5 right-5 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl z-[1000]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
  </a>


  )
}

export default Whatsapp
