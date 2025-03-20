import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const AddTodo = ({ handleTodoAdd }) => {

    const [newTodoTitle, setNewTodoTitle] = useState("");

    const handleAddTodoPress = () => {
        handleTodoAdd(newTodoTitle);
        setNewTodoTitle("");
    }

    return (
        <View>
            <View style={styles.centeredView}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNewTodoTitle}
                    value={newTodoTitle}
                    placeholder='Add New Todo'
                />
                <Pressable
                    style={styles.btnAddTodo}
                    onPress={handleAddTodoPress}>
                    <Text style={styles.textStyle}>Add</Text>
                </Pressable>
            </View>
            <View style={styles.horizontalLine} />
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'start',
        alignItems: 'center',
        paddingHorizontal: "6",
        marginVertical: "10",
        marginTop: "20"
    },
    input: {
        minheight: 40,
        marginLeft: 12,
        borderWidth: 1,
        borderColor: "#015958",
        padding: 10,
        minWidth: 218,
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        fontSize: 18,
        borderRightWidth: 0,
    },
    btnAddTodo: {
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#015958",
        width: 60,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderColor: "#015958",
        borderWidth: 2.5,
    },
    textStyle: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#015958",
        borderWidth: 2,
        borderRadius: 8,
        width: 200,
        marginHorizontal: "auto",
        marginVertical: 10,
    }
});

export default AddTodo