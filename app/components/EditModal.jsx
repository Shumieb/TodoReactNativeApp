import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Pressable, Modal, Alert, TextInput } from 'react-native'
import React from 'react'

const EditModal = ({ editModalVisible, setEditModalVisible, editedTodoTitle, setEditedTodoTitle, saveEditedTodo }) => {
    return (
        <SafeAreaView style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setEditModalVisible(!editModalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalHeading}>Edit Todo</Text>

                        <View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEditedTodoTitle}
                                value={editedTodoTitle}
                                placeholder='Edited Todo'
                            />
                        </View>

                        <View style={styles.editModalBtns}>
                            <Pressable
                                style={[styles.editModalBtn, styles.btnSaveEdit]}
                                onPress={() => saveEditedTodo()}>
                                <Text style={styles.textStyle}>Save</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.editModalBtn, styles.btnCancelEdit]}
                                onPress={() => setEditModalVisible(!editModalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        borderRadius: 8,
        fontSize: 18,
    },
    editModalBtns: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginTop: 10,

    },
    editModalBtn: {
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        marginHorizontal: 8,
        width: 80,
    },
    btnSaveEdit: {
        backgroundColor: '#015958',
    },
    btnCancelEdit: {
        backgroundColor: '#D96941',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalHeading: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default EditModal