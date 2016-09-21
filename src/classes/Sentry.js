import Raven from 'raven-js';

export default function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });

  console.error(ex);
}
