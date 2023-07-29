import { hotspotMachine } from './hotspot.machine';

export const lobbyMachine = hotspotMachine
  .withContext({
    ...hotspotMachine.context,
    maxPersons: 3,
    name: 'lobby',
  })
  .withConfig({
    actions: {
      updatePersons: (context) => {
        return context;
      },
    },
  });