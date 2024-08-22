import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '@/app/constants/Colors';
import NotificationDTO from '@/app/dto/NotificationDTO';
interface NotificationProps {
    notification: NotificationDTO;
    onDelete?: () => void;
}

const NotificationItem: React.FC<NotificationProps> = ({ notification, onDelete }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const settingButtonRef = useRef<View>(null);

    const hideModal = () => setModalVisible(false);
    const showModal = () => {
        if (settingButtonRef.current) {
            settingButtonRef.current.measure((x, y, width, height, pageX, pageY) => {
                setModalPosition({
                    top: pageY + height - 100,
                    left: pageX - 100,
                });
            });
        }
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{notification.type}</Text>
                <Pressable onPress={showModal} style={styles.settingButton} ref={settingButtonRef}>
                    <Entypo name="cog" size={14} color="#888" />
                </Pressable>
            </View>
            <View>
                <Text style={styles.date}>{notification.createdAt}</Text>
            </View>
            <Text style={styles.info}>{notification.message}</Text>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <View style={styles.modalBackground}>
                    <View style={[styles.modalContent, { top: modalPosition.top, left: modalPosition.left }]}>
                        <Text style={styles.modalText}>Xóa thông báo?</Text>
                        <View style={styles.modalButtons}>
                            <Pressable
                                style={{ paddingLeft: 20 }}
                                onPress={() => {
                                    onDelete && onDelete();
                                    hideModal();
                                }}>
                                <AntDesign name="delete" size={20} color={Colors.danger} />
                            </Pressable>
                            <Pressable style={{ paddingRight: 20 }} onPress={hideModal}>
                                <FontAwesome name="remove" size={20} color={Colors.black} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
        position: 'relative',
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginVertical: 2,
    },
    info: {
        fontSize: 14,
        color: '#333',
    },
    settingButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 10,
    },
    modalBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        position: 'absolute',
        width: 150,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 14,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default NotificationItem;
