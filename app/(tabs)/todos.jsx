import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from '../components/TodoItem';
import { DATA } from '../utils/data'


// todos component
const Todos = () => {
    // variables
    const [todosData, setTodosData] = useState(DATA)
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedTodo, setEditedTodo] = useState({});
    const [editedTodoTitle, setEditedTodoTitle] = useState("");

    // set todo to edit
    const handleTodoEdit = (id) => {

        let todoToEdit = todosData.find(todo => todo.id === id);
        if (todoToEdit) setEditedTodo(todoToEdit);
        if (todoToEdit) setEditedTodoTitle(todoToEdit.title);

        // show Modal
        setEditModalVisible(true)
    }

    // save edited todo
    const saveEditedTodo = () => {

        if (editedTodo && editedTodoTitle) {
            let newTodos = todosData.filter(todo => todo.id != editedTodo.id);
            editedTodo.title = editedTodoTitle;
            setTodosData([editedTodo, ...newTodos]);
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
                ListHeaderComponent={<View><Text>Add New Todo Component</Text></View>}
                ListFooterComponent={<View><Text>End of List</Text></View>}
            />

            {/* Edit Modal */}
            <EditModal
                editModalVisible={editModalVisible}
                setEditModalVisible={setEditModalVisible}
                saveEditedTodo={saveEditedTodo}
                setEditedTodoTitle={setEditedTodoTitle}
                editedTodoTitle={editedTodoTitle}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
});

export default Todos