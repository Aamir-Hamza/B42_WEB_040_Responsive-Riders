/* eslint-disable react/prop-types */
import { Particles } from "@tsparticles/react";

const ParticlesComponent = ({ id, init, loaded, options }) => {
  return (
    <Particles id={id} init={init} loaded={loaded} options={options} />
  );
};

export default ParticlesComponent;