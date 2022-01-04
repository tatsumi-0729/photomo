import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

export default function MypageScreen(
  this: any,
  {picturePath}: {picturePath: any},
) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableHighlight onPress={toggleModal}>
        <Card>
          <Card.Cover source={picturePath} />
        </Card>
      </TouchableHighlight>

      <Modal
        isVisible={isModalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={250}
        animationOutTiming={250}
        backdropTransitionInTiming={250}
        backdropTransitionOutTiming={250}
        swipeDirection={['down']}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modal}>
            <Card>
              <Card.Cover source={picturePath} />
              <Card.Content>
                <Paragraph style={styles.paragraph}>
                  この間、京都旅行に行った時に撮影した写真です。
                  水面に反射する山や雲がとても神秘的でした。
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    marginTop: 15,
  },
});
