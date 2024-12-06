const players = document.querySelectorAll('.podcast-player')

for (const player of players) {
  player.addEventListener('click', (event) => {
    const podcasts = document.querySelectorAll('audio')
    
    for (const podcast of podcasts) {
      podcast.pause()
      podcast.duration = 0
    }
  
    const id = event.currentTarget.dataset.audio
    const podcast = document.querySelector('#' + id)
  
    podcast.play()
  })
}
