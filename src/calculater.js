import React, { Component } from "react";

import { View, Text, StyleSheet, KeyboardInput, TextInput, TouchableNativeFeedback } from "react-native";


export default class Calculater extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            temp: '',
            command: null,
            answer: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
    }
    handlerInput(value) {
        let oprator = {
            "*": "*",
            "+": "+",
            "-": "-",
            "/": "/"
        }
        if (value === oprator[value] && (this.state.value || this.state.answer)) {
            this.setState({
                temp: this.state.value,
                value: "",
                command: value
            })
        }
        else if (value === "=" && (this.state.temp || this.state.answer) && (this.state.value || this.state.answer)) {
            let value = this.state.value ? this.state.value : this.state.answer;
            let temp = this.state.temp ? this.state.temp : this.state.answer;
            switch (this.state.command) {
                case "+":
                    this.setState({
                        answer: parseInt(temp) + parseInt(value),
                        temp: "",
                        command: null,
                        value: ""
                    })
                    break;
                case "*":
                    this.setState({
                        answer: parseInt(temp) * parseInt(value),
                        temp: "",
                        command: null,
                        value: ""
                    })
                    break;
                case "-":
                    this.setState({
                        answer: parseInt(temp) - parseInt(value),
                        temp: "",
                        command: null,
                        value: ""
                    })
                    break;
                case "/":
                    this.setState({
                        answer: parseInt(temp) / parseInt(value),
                        temp: "",
                        command: null,
                        value: ""
                    })
                    break;

            }

        } else {

            if (isNaN(value)) {

            } else if (typeof (value) === 'number') {
                this.setState({
                    value: this.state.value + value
                })
            } else {
                this.setState({
                    value: value
                })
            }

        }

    }

    render() {
        return (
            <View >
                <View></View>
                <View></View>
                <View></View>
                <TextInput
                    style={{ height: 80, fontSize: 25 }}
                    value={this.state.value.toString()}
                    onChangeText={this.handlerInput}
                    />
                <Text>{this.state.answer ? this.state.answer : this.state.temp} {this.state.command}</Text>
                <Text>Answer is: {this.state.answer}</Text>
                <TouchableNativeFeedback>
                    <View style={styles.container}>
                        <Text style={styles.Box} onPress={() => this.handlerInput(1)}>1</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(2)}>2</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(3)}>3</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(4)}>4</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(5)}>5</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(6)}>6</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(7)}>7</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(8)}>8</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(9)}>9</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput("=")}>=</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput(0)}>0</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput("+")}>+</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput("-")} >-</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput("*")}>*</Text>
                        <Text style={styles.Box} onPress={() => this.handlerInput("/")}>/</Text>

                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 70
    },
    Box: {
        fontSize: 25,
        backgroundColor: "gray",
        borderColor: "white",
        borderWidth: 1,
        color: "white",
        width: 120,
        paddingTop: 21,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 21,

    }
})


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });