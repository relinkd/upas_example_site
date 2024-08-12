export * from './with-router';
export * from './with-theme';
export * from './with-store';
export * from './with-ic-connect';
export * from './with-persistor';
export * from './with-achievement';

export const withProviders =
  (...providers: any[]) =>
  (WrappedComponent: any) =>
  (props: JSX.IntrinsicAttributes) =>
    providers.reduceRight((acc, prov) => {
      let Provider = prov;
      if (Array.isArray(prov)) {
        [Provider] = prov;
        return <Provider {...prov[1]}>{acc}</Provider>;
      }

      return <Provider>{acc}</Provider>;
    }, <WrappedComponent {...props} />);
