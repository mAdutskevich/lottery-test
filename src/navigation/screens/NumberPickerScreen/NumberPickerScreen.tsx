import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Header,
  LocalModal,
  NumberItem,
  Combination,
  SafeAreaLayout,
  EButtonVariant,
} from '../../../components';
import type { TStackNavigationParamList } from '../../../types';
import { styles } from './NumberPickerScreen.styled';
import { useControlModal, useGetNumbers, useManageCombination } from './hooks';

export const NumberPickerScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigationParamList>>();

  const { modalStatus, setModalStatus, onModalClose } = useControlModal();

  const {
    selectedCombination,
    handlePlay,
    handleSelectNumber,
    handleSelectedNumberPress,
  } = useManageCombination(setModalStatus);

  const { numbers } = useGetNumbers();

  return (
    <>
      <SafeAreaLayout style={styles.safeAreaLayout}>
        <Header title="Pick 5 numbers" />

        <View
          style={{
            ...styles.content,
            flex: 1,
            flexDirection: 'column',
            paddingBottom: insets.bottom,
          }}
        >
          <Combination
            combination={selectedCombination}
            noBorder
            onNumberPress={handleSelectedNumberPress}
          />

          <View style={styles.scrollViewContainer}>
            <View style={styles.scrollViewBorder}>
              <ScrollView
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
              >
                {numbers.map(number => {
                  const isSelected = selectedCombination.includes(number);

                  return (
                    <NumberItem
                      key={number}
                      text={number}
                      noBorder={!isSelected}
                      onPress={() => handleSelectNumber(number)}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              variant={EButtonVariant.OUTLINED}
              style={styles.cancelButton}
              text="Cancel"
              onPress={() => navigation.goBack()}
            />

            <Button text="Play" style={styles.button} onPress={handlePlay} />
          </View>
        </View>
      </SafeAreaLayout>

      <LocalModal
        title={modalStatus.title}
        description={modalStatus.description}
        visible={modalStatus.isModalVisible}
        positiveButtonText="Ok"
        onPositiveCallback={onModalClose}
        onClose={onModalClose}
      />
    </>
  );
};
