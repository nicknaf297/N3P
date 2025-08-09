import React, { useState } from 'react';
import Modal from './modal';
import { motion } from 'framer-motion';

function PopOutCard({ titleName, subtitle, popupContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="pop-out-card"
        style={{ height: '120px', cursor: 'pointer' }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-content">
          <div className="header_text" style={{ fontSize: '24px'}}>{titleName}</div>
          <div className="body_text_italic" style={{ fontSize: '18px' }}>{subtitle}</div>
        </div>
      </motion.div>

    
      <Modal title={titleName} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {popupContent}
      </Modal>
    </>
  );
}

export default PopOutCard;
