import { motion } from 'framer-motion';

function IconLink({ icon, link }) {
    return(
        <a href={link}
        style={{ color: 'black', textDecoration: 'none' }}>
            <motion.div
            whileHover={{ scale: 1.2, color: "var(--Yellow, #FFAC41)" }}
            whileTap={{ scale: 0.9 }}
            style={{ color: 'inherit' }}>
                {icon}
            </motion.div>
        </a>
    )
}

export default IconLink