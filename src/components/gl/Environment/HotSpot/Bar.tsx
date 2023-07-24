import { useInterpret } from '@xstate/react';
import { useContext } from 'react';
import { barMachine } from '../../../../machines/bar.machine';
import { DraggingContext } from '../../World/World';
import { Hotspot } from './Hotspot';

export const Bar = () => {
  const service = useInterpret(barMachine);
  const { draggingActorRef } = useContext(DraggingContext);
  return (
    <Hotspot
      type="battery"
      dropSpotQuality={5}
      position={[-6, 0, -7]}
      onDropHotspot={() =>
        draggingActorRef &&
        service.send({ type: 'onAddPerson', person: draggingActorRef })
      }
    />
  );
};
