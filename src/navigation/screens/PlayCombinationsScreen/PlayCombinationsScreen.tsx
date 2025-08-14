import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Header,
  LocalModal,
  IconButton,
  Combination,
  SafeAreaLayout,
} from '../../../components';
import { Plus } from '../../../assets';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';
import { useCombinationsStore } from '../../../store';
import { EStackNavigationScreens } from '../../../enums';
import type { TStackNavigationParamList } from '../../../types';
import { styles } from './PlayCombinationsScreen.styled';

export const PlayCombinationsScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigationParamList>>();

  const { combinations, removeCombination } = useCombinationsStore();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalClose = () => setIsModalVisible(false);

  return (
    <>
      <SafeAreaLayout style={styles.safeAreaLayout}>
        <Header title="Your Combinations" />

        <View
          style={{
            ...styles.content,
            paddingBottom: insets.bottom,
          }}
        >
          {!!combinations.length && (
            <ScrollView contentContainerStyle={styles.scrollView}>
              {combinations.map((combination, index) => {
                return (
                  <Combination
                    key={index}
                    withRemoveButton
                    combination={combination}
                    onRemove={() => removeCombination(index)}
                  />
                );
              })}
            </ScrollView>
          )}

          {!combinations.length && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No combinations added yet</Text>

              <Text style={styles.emptyText}>
                Add new one and check your luck!
              </Text>
            </View>
          )}

          <View style={styles.buttonsContainer}>
            <IconButton
              style={styles.iconButton}
              icon={
                <Plus
                  fill={theme.palette.WHITE}
                  width={horizontalScale(theme.spacing.s40)}
                  height={horizontalScale(theme.spacing.s40)}
                />
              }
              onPress={() =>
                navigation.navigate(EStackNavigationScreens.NumberPicker)
              }
            />

            <Button
              text="Purchase"
              onPress={() => {
                setIsModalVisible(true);
              }}
            />
          </View>
        </View>
      </SafeAreaLayout>

      <LocalModal
        title={
          combinations.length ? 'Your combinations' : 'No combinations yet'
        }
        description={
          combinations.length ? '' : 'Please add some combinations to play.'
        }
        visible={isModalVisible}
        positiveButtonText="Ok"
        onPositiveCallback={onModalClose}
        onClose={onModalClose}
      >
        {combinations.length ? (
          <View style={styles.modalCombinationsContainer}>
            {combinations.map((combination, index) => (
              <Combination
                key={index}
                combination={combination}
                noBorder
                style={styles.modalCombination}
              />
            ))}
          </View>
        ) : null}
      </LocalModal>
    </>
  );
};
