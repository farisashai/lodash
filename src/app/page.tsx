/* eslint-disable no-console */

'use client';

import * as _ from '@/lib/lodash';
import '@/styles/globals.scss';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  // console.log(_.chunk([1, 2, 3, 4], 3));
  // console.log(_.chunk([1, 2, 3, 4], 1));
  // console.log(_.chunk([1, 2, 3, 4], 5));
  // console.log(_.chunk([1, 'a', 3, 4], 5));
  // console.log(_.chunk([], 1));
  // console.log(_.chunk([], 5));

  // console.log(_.compat([1, 2, '3', false, 4, '', '5', null, 6.2]));

  // console.log(_.concat([1], 2, [3], [[4]]));
  // console.log(_.concat([1]));

  // console.log(_.difference([1, 2, 3, 5], 2, [3, 4, 1]));
  // console.log(_.concat([1], 2, [3], [[4]]));

  // console.log(
  //   _.differenceWith(
  //     [
  //       { x: 2, y: 3 },
  //       { x: 1, y: 2 },
  //       { x: 4, y: 1 },
  //     ],
  //     [{ x: 1, y: 2 }],
  //     (a, b) => a.x === b.x && a.y === b.y
  //   )
  // );

  // console.log(_.dropRight([21, 45, 6453, 345, 241], 2));
  // console.log(_.dropWhile([21, 45, 6453, 345, 241], a => a < 100));
  // console.log(_.dropWhileRight([21, 45, 6453, 345, 241], a => a < 100));

  // console.log(_.fill([21, 45, 6453, 345, 241], 2, 1, -2));
  // console.log(_.findIndex([21, 45, 6453, 345, 241], a => a > 500));

  // console.log(_.flatten([1, [2], [[3, [4, 5], 6]]]));
  // console.log(_.flattenDeep([1, [2], [[3, [4, 5], 6]]]));
  // console.log(_.flattenDepth([1, [2], [[3, [4, 5], 6]]], 2));
  // console.log(
  //   _.fromPairs([
  //     [1, 2],
  //     [3, 4],
  //     ['x', false],
  //     ['y', 6],
  //     [null, 6],
  //   ])
  // );
  // console.log(_.initial([1, 2, 3]));
  // console.log(_.initial([]));
  // console.log(_.intersection([3, 2, 6, 1, 5], [2, 5, 3]));
  console.log(_.join([3, 2, 6, 1, 5], ', '));

  return <div className={styles.page} />;
}
