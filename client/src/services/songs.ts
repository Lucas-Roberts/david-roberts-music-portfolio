import {client} from '../lib/sanityClient'

export async function getSongs() {
  return client.fetch(`*[_type == "song"]{
    title,
    description,
    releaseDate,
    audioFile{
      asset->{
        url
      }
    }
  }`)
}