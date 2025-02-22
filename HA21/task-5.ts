abstract class Media {
  abstract play():void
}

class AudiO extends Media {
  play(): void {
      console.log("Playing audio");
      
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
    
}
}

const mediaCarriers: Media[] = [new AudiO(), new Video()]
mediaCarriers.forEach(carrier => {
  carrier.play()
})