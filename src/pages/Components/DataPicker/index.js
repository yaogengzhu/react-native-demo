import React, {useState, useImperativeHandle} from 'react';
import {View, Text, DatePickerIOSBase} from 'react-native';
import Modal from 'react-native-modal';
import styles from './index.styles';

const DataPicker = React.forwardRef((_, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  return (
    <Modal
      onBackdropPress={toggleModal}
      style={styles.modal}
      backdropOpacity={0.4}
      isVisible={isModalVisible}>
      <View style={styles.content}></View>
    </Modal>
  );
});

export default DataPicker;