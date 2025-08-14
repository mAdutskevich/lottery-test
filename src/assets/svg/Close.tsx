import Svg, { Path } from 'react-native-svg';
import type { TIcon } from 'src/types';
import { EIconRotation } from 'src/enums';
import { horizontalScale } from 'src/utils';

export const Close = ({
  stroke,
  fill = 'black',
  width = horizontalScale(40),
  height = horizontalScale(40),
  rotation = EIconRotation.Deg0,
}: TIcon) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      transform: [{ rotate: rotation }],
    }}
  >
    <Path
      d="M4.39511 3.03003L3.03011 4.39503L10.6351 12L2.98511 19.665L4.33511 21.015L12.0001 13.365L19.6501 21.015L21.0151 19.65L13.3651 12L20.9701 4.39503L19.6051 3.03003L12.0001 10.635L4.39511 3.03003Z"
      fill={fill}
      stroke={stroke}
    />
  </Svg>
);
