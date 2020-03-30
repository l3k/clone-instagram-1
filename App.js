import React, { Component } from 'react';
import Header from './src/components/Header'
import { View, Text } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
    render() {
        const comments = [
            { nickname: 'João da Siva', comment: 'Legal' },
            { nickname: 'Maria Elena', comment: 'Excelente' }
        ]

        return (
            <View style={{ flex: 1 }}>
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
            </View>
        )
    }
}

