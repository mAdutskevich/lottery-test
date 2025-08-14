import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Plus } from 'src/assets';
import { horizontalScale } from 'src/utils';
import { Button, Header, NumberItem, Combination } from 'src/components';
import { Content, IconButton, SafeAreaLayout } from './PlayCombinations.styled';

export const PlayCombinations = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaLayout>
      <Header title="Your Combinations" />

      <Content insets={insets}>
        <Button
          text="Purchase"
          onPress={() => {
            console.log('Button Pressed');
          }}
        />

        <NumberItem text="66" onPress={() => console.log('Number 1 Pressed')} />

        <Combination
          combination={['1', '66', '73', '45', '28']}
          onRemove={() => console.log('Remove Combination')}
        />

        <IconButton
          icon={
            <Plus
              fill={theme.palette.WHITE}
              width={horizontalScale(theme.spacing.s40)}
              height={horizontalScale(theme.spacing.s40)}
            />
          }
          onPress={() => console.log('Icon Button Pressed')}
        />
      </Content>
    </SafeAreaLayout>
  );
};
