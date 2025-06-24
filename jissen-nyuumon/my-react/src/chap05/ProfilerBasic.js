import { Profiler } from 'react';
import HeavyUI from './HeavyUI';

export default function ProfilerBasic() {
  const handleMeasure = (id, phase, actualDuration,
    baseDuration, startTime, endTime) => {
    console.log('id: ', id);
    console.log('phase: ', phase);
    console.log('actualDuration: ', actualDuration);
    console.log('baseDuration: ', baseDuration);
    console.log('startTime: ', startTime);
    console.log('endTime', endTime);
  };

  return (
  <Profiler id="heavy" onRender={handleMeasure}>
    <HeavyUI delay={1500} />
    <HeavyUI delay={500} />
    <HeavyUI delay={2000} />
  </Profiler>
  );
}