/*
 * 実行
 */

import Hoge from './module/Hoge';

(() => {
  const hoge = new Hoge('hoge');

  hoge.init();
})();

