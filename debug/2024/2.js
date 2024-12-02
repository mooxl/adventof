/*
A fork in the road presents two paths - one leads home and the other leads to
a cliff. The light post is switched on, but no light is being emitted. A
sneaky bug in the code must be keeping the light from turning on properly. The
Yeti needs help solving the puzzle to avoid tumbling down the mountain.
*/

function turnOnLights(lights) {
    const results = [];
  
    // Process each light in sequence
    for (let i = 0; i < lights.length; i++) {
      const currentLight = lights[i];
  
      // Skip if light is already on
      if (currentLight.isOn === true) continue;
  
      // Check if this light depends on other lights
      if (currentLight.dependsOn) {
        const dependencies = lights.filter((l) =>
          currentLight.dependsOn.includes(l.id),
        );
  
        // Verify all dependent lights are on
        const canTurnOn = dependencies.every((d) => d.isOn === true);
  
        if (!canTurnOn) continue;
      }
  
      // Turn on the light
      currentLight.isOn = true;
  
      // Add to results
      results.push("Light " + currentLight.id + " turned on");
    }
  
    return results;
  }

  console.log(turnOnLights([
    {
        "id": 1,
        "isOn": false
    },
    {
        "id": 2,
        "isOn": false,
        "dependsOn": [
            1
        ]
    },
    {
        "id": 3,
        "isOn": false,
        "dependsOn": [
            2
        ]
    }
]))