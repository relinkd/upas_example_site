import { CSSProperties, FC } from 'react';

import icons from './icons';

const Sizes = {
  small: 24,
  medium: 40,
  large: 96,
};

export type IconType = keyof typeof icons;

interface IIconProps {
  type: IconType;
  size?: keyof typeof Sizes | number;
  color?: CSSProperties['color'];
}

export const Icon: FC<IIconProps> = ({ type, size = 'small', color }) => {
  const IconComponent = icons[type];
  const width = typeof size === 'number' ? size : Sizes[size];
  const height = typeof size === 'number' ? size : Sizes[size];

  return <IconComponent width={width} height={height} style={{ color }} />;
};
