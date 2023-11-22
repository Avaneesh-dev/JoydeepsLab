import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import "./Main.css"
function TextLine() {
    const [line, setLine] = useState(["NOTICE: All PG students are hereby informed that their project presentation & report submission will be on 28th of November."])
    
    return (
        <motion.div 
        className="text-line-container"        
        >
            {line.length > 0 && (
                <marquee className="text-line-marquee" >{line[0]}</marquee>
            )}
        </motion.div>
    )
}

export default TextLine