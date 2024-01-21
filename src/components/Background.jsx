import { useState, useRef, useEffect } from 'react'
// import BIRDS from 'vanta/dist/vanta.birds.min'
import NET from 'vanta/dist/vanta.net.min'

export default function Background() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                forceAnimate: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                points: 5.00,
                maxDistance: 19.00,
                spacing: 12.00,
                color: 0x61DBFB,
                backgroundColor: 0x2D2A32
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div className="fixed top-12 z-1 h-[90vh] w-screen opacity-20" ref={myRef}>
        </div>
    )
}
