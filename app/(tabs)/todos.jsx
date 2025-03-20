import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from '../components/TodoItem';
import EditModal from '../components/EditModal';
import AddTodo from '../components/AddTodo';

import { DATA } from '../utils/data'


// todos component
const Todos = () => {
    // variables
    const [todosData, setTodosData] = useState(DATA)
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedTodo, setEditedTodo] = useState({});
    const [editedTodoTitle, setEditedTodoTitle] = useState("");

    // add new todos
    const handleTodoAdd = (newTodoTitle) => {
        if (newTodoTitle) {
            let newId = todosData.length + 1;
            let todoToAdd = { id: newId, title: newTodoTitle, completed: false };
            setTodosData([todoToAdd, ...todosData]);
        }
    }

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

    // delete todo
    const handleDeleteTodo = (id) => {
        let newTodos = todosData.filter(todo => todo.id != id);
        setTodosData([...newTodos]);
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
                        handleDeleteTodo={handleDeleteTodo}
                    />}
                keyExtractor={item => item.id}
                ListEmptyComponent={<View><Text>No Todo in the list</Text></View>}
                ListHeaderComponent={<AddTodo handleTodoAdd={handleTodoAdd} />}
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