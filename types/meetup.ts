export type Meetup = {
  title: string,
    dateTime: string,
  place: string,
    description: string,
    speaker: Array<Speaker>,
    labels: Array<string>,
    url: string,
  imageUrl: string,
}

type Speaker = {
    name: string,
}