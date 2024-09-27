import { motion } from "framer-motion"
import video from '../assets/images/poseidon-video.mp4'
import { Icon } from '@iconify/react'

function MobileAnimation() {
  return (
    <motion.div
      className="mobile-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mobile-frame">
      <div className="status-bar">
    <div className="time">12:12</div>
    <div className="status-icons">
      <Icon className="network" icon="game-icons:network-bars"/>
      <Icon className="wifi" icon="ic:baseline-wifi"/>
      <Icon className="battery" icon="gg:battery"/>
      <div className="safari-bar">
          <span className="url">poseidonuszasoktatas.com</span>
    </div>
      
    </div>
        
      <div className="notch"></div>
        <div className="screen">
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  </div>
        </div>
      </div>
    </motion.div>
    
  );
}

export default MobileAnimation