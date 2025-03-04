import { View, Text, StyleSheet, FlatList, Pressable, Modal, Alert, TextInput } from 'react-native'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from '../components/TodoItem';

// dummy data
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

// edit modal
const EditModal = ({ editModalVisible, setEditModalVisible, editedTodo, setEditedTodo, saveEditedTodo }) => {

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
                                onChangeText={setEditedTodo}
                                value={editedTodo.title}
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

// todos component
const Todos = () => {
    // variables
    const [todosData, setTodosData] = useState(DATA)
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedTodo, setEditedTodo] = useState({});

    // set todo to edit
    const handleTodoEdit = (id) => {

        let todoToEdit = todosData.find(todo => todo.id === id);
        if (todoToEdit) setEditedTodo(todoToEdit);

        // show Modal
        setEditModalVisible(true)
    }

    // save edited todo
    const saveEditedTodo = () => {

        console.log(editedTodo);
        if (editedTodo) {
            let newTodos = todosData.filter(todo => todo.id != editedTodo.id);
            setTodosData(...newTodos, editedTodo);
        }

        // hide modal
        setEditModalVisible(!editModalVisible)
    }


    // return
    return (
        <SafeAreaView style={styles.container}>
            {/* FlatList */}
            <FlatList
                data={todosData}
                renderItem={({ item }) =>
                    <TodoItem
                        item={item}
                        handleTodoEdit={handleTodoEdit}
                    />}
                keyExtractor={item => item.id}
            />

            {/* Edit Modal */}
            <EditModal
                editModalVisible={editModalVisible}
                setEditModalVisible={setEditModalVisible}
                editedTodo={editedTodo}
                setEditedTodo={setEditedTodo}
                saveEditedTodo={saveEditedTodo}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
    pageHeadingContainer: {
        padding: 4,
        marginHorizontal: "auto",
        marginVertical: 6,
    },
    pageHeading: {
        fontSize: 18,
        padding: 4,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 'auto',
        fontWeight: "bold",
        textDecorationStyle: "solid",
        textDecorationLine: "underline"
    },
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

export default Todos