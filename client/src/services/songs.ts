import {client} from '../lib/sanityClient'

export async function getSongs() {
  return client.fetch(`*[_type == "song"]{
    title,
    artist,
    releaseDate,
    audioFile{
      asset->{
        url
      }
    }
  }`)
}