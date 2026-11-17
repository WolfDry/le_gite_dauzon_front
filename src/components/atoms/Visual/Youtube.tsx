/** Vidéo de présentation, en mode « confidentialité renforcée » de YouTube (youtube-nocookie.com). */
const Youtube = () => {
  return (
    <iframe
      style={{ display: "block", width: "100%", height: "44.375rem", maxHeight: "56.25vw", border: "none" }}
      src="https://www.youtube-nocookie.com/embed/vqsuQPP8LW0"
      title="Vidéo de présentation du Gîte d'Auzon"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default Youtube
