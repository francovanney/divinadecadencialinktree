import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from 'react-particles'
import particlesConfig from "../config/particles-confing";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine)
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, [])

    return (
    <div id="particles-backgorund">
        <Particles
        id="tsparticles"
        particlesLoader='particlesLoaded'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        height="100vh"
        width="100vh"
        >
        </Particles>

    </div>
    );
};

export default ParticleBackground;