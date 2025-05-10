const tts = (text) => {
  if (!text) return;

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.volume = 0.6;
  utter.rate = 0.95;
  utter.pitch = 1.1;
  const voices = synth.getVoices();
  const femaleVoice =
    voices.find(
      (v) => v.lang === "en-US" && v.name.toLowerCase().includes("female")
    ) || voices.find((v) => v.lang === "en-US");
  if (femaleVoice) utter.voice = femaleVoice;
  synth.speak(utter);
};

export default tts;
