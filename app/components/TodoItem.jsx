import { View, Text, StyleSheet, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Feather from '@expo/vector-icons/Feather'

const TodoItem = ({ item, handleTodoEdit, handleDeleteTodo }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.itemBtns}>
                <Pressable
                    style={styles.itemEditBtn}
                    onPress={() => handleTodoEdit(item.id)}
                >
                    <Feather name="edit" size={24} color="#D8FFDB" />
                </Pressable>
                <Pressable
                    onPress={() => handleDeleteTodo(item.id)}
                >
                    <MaterialIcons name="delete" size={24} color="#D96941" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#015958',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: "16",
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        color: "white",
    },
    itemBtns: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    itemEditBtn: {
        marginHorizontal: 4,
    },
});

export default TodoItem