import { Modal, Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../atoms';
import { theme } from '../../../themes';
import type { TLocalModalProps } from './LocalModal.types';
import { styles } from './LocalModal.styled';

export const LocalModal = ({
  title,
  description,
  visible,
  onClose,
  positiveButtonText,
  onPositiveCallback,
  children,
}: TLocalModalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <LinearGradient
        colors={[
          theme.palette.PRIMARY,
          `${theme.palette.PRIMARY}25`,
          'transparent',
          `${theme.palette.SECONDARY}25`,
          theme.palette.SECONDARY,
        ]}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        style={styles.container}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Pressable onPress={onClose} style={styles.pressable}>
          <Pressable style={styles.content} onPress={e => e.stopPropagation()}>
            {title && <Text style={styles.title}>{title}</Text>}

            {description && (
              <Text style={styles.description}>{description}</Text>
            )}

            {children}

            {positiveButtonText && (
              <View>
                <Button
                  text={positiveButtonText}
                  style={styles.button}
                  onPress={() => onPositiveCallback?.()}
                />
              </View>
            )}
          </Pressable>
        </Pressable>
      </LinearGradient>
    </Modal>
  );
};
