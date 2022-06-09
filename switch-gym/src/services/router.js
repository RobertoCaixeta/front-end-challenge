import react from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'

import Cadastro from "../pages/Cadastro"
import Edit from "../pages/Edit"
import Index from "../pages/Index"
import Login from "../pages/Login"
import Show from "../pages/Show"

const Stack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="cadastro" 
                component={Cadastro}
                options={{
                    title:'Cadastre-se',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    }   
                }}
                 />
                <Stack.Screen name="edit" component={Edit} />
                <Stack.Screen name="index" component={Index} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="show" component={Show} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;