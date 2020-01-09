import { Injectable }     from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map }     from 'rxjs/operators';
import { USER }           from '../interfaces';

const RESPONSE_TIMER = 1200;
const ERROR_MESSAGE = `
Error, described in user.service. Here can be full description of the stream error. 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Ab architecto consequatur doloremque laborum modi mollitia nemo porro qui quod ullam.
`;
const NAMES_LIST = [
  'Hattie Radcliffe', 'Hester Wareham', 'Larae Fetzer', 'Nannie Caprio', 'Jayne Sines', 'Leon Slaughter',
  'Janette Corrie', 'Vella Shute', 'Ethelene Deharo', 'Chelsey Ankrom', 'Vanita Denver', 'Earleen Gladney',
  'Vernia Purnell', 'Yelena Yetter', 'Luisa Holeman', 'Hildegard Krajewski', 'Ellena Masiello', 'Shaquita Elders',
  'Claribel Finck', 'Teresia Bufkin'
];
const randomFrom = list => list[Math.floor(Math.random() * list.length)];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

function getRandomUsers() {
  let list = [];
  for (let i = 0; i < randomNumber(4, 10); ++i) {
    list = [...list, {name: randomFrom(NAMES_LIST), age: randomNumber(20, 50)}];
  }
  return list;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers = (): Observable<USER[]> => of(getRandomUsers()).pipe(delay(RESPONSE_TIMER));
  getError = (): Observable<USER[]> => of(1).pipe(delay(RESPONSE_TIMER), map((x: any) => x()));
  getCustomError = (): Observable<USER[]> => new Observable(subscriber => {
    setTimeout(() => subscriber.error({message: ERROR_MESSAGE}), RESPONSE_TIMER);
  });
  getEmpty = (): Observable<USER[]> => of([]).pipe(delay(RESPONSE_TIMER));
  getNull = (): Observable<null> => of(null).pipe(delay(RESPONSE_TIMER));
}
