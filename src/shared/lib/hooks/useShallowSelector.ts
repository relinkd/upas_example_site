import { Selector, shallowEqual, useSelector } from 'react-redux';

export const useShallowSelector = <State, Type = State>(selector: Selector<State, Type>): Type => {
  return useSelector<State, Type>(selector, shallowEqual);
};
