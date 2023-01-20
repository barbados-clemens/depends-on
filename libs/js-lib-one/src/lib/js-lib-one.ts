import { jsLibTwo } from '@depends-on-test/js-lib-two';
export function jsLibOne(): string {
  return 'js-lib-one' + jsLibTwo();
}
