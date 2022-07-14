(() => {
  enum AudioLevel {
    min = 1,
    medium_min = 2.5,
    medium = 5,
    medium_max = 7.5,
    max = 10,
  }

  const currentAudio = AudioLevel.medium;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
